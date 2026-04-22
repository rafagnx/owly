import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { masterPrisma } from "@/lib/tenant/resolver";

// POST /api/superadmin/setup — Create first SuperAdmin (only works if none exists)
export async function POST(request: Request) {
  const count = await masterPrisma.superAdmin.count();
  
  if (count > 0) {
    return NextResponse.json(
      { error: { code: "ALREADY_SETUP", message: "SuperAdmin already exists" } },
      { status: 400 }
    );
  }

  const { username, password, name, email } = await request.json();

  if (!username || !password) {
    return NextResponse.json(
      { error: { code: "VALIDATION_ERROR", message: "username and password are required" } },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const admin = await masterPrisma.superAdmin.create({
    data: {
      username,
      password: hashedPassword,
      name: name || "Super Admin",
      email: email || "",
    },
  });

  // Also create default plans
  const defaultPlans = [
    {
      name: "Starter",
      slug: "starter",
      description: "Para pequenos negócios",
      priceMonthly: 97,
      priceYearly: 970,
      maxUsers: 3,
      maxChannels: 2,
      maxContacts: 500,
      maxMessagesMonth: 5000,
      maxFlows: 5,
      maxAiAgents: 1,
      hasWhatsappQr: true,
      hasChatbot: true,
      sortOrder: 1,
    },
    {
      name: "Business",
      slug: "business",
      description: "Para empresas em crescimento",
      priceMonthly: 197,
      priceYearly: 1970,
      maxUsers: 10,
      maxChannels: 5,
      maxContacts: 5000,
      maxMessagesMonth: 50000,
      maxFlows: 20,
      maxAiAgents: 3,
      hasWhatsappQr: true,
      hasWhatsappApi: true,
      hasInstagram: true,
      hasTelegram: true,
      hasChatbot: true,
      hasAiAgents: true,
      hasCampaigns: true,
      hasApi: true,
      sortOrder: 2,
    },
    {
      name: "Enterprise",
      slug: "enterprise",
      description: "Para grandes operações — ilimitado",
      priceMonthly: 497,
      priceYearly: 4970,
      maxUsers: -1, // unlimited
      maxChannels: -1,
      maxContacts: -1,
      maxMessagesMonth: -1,
      maxFlows: -1,
      maxAiAgents: -1,
      hasWhatsappQr: true,
      hasWhatsappApi: true,
      hasInstagram: true,
      hasMessenger: true,
      hasTelegram: true,
      hasEmail: true,
      hasPhone: true,
      hasChatbot: true,
      hasAiAgents: true,
      hasCampaigns: true,
      hasApi: true,
      hasWebhooks: true,
      hasWhiteLabel: true,
      sortOrder: 3,
    },
  ];

  for (const plan of defaultPlans) {
    await masterPrisma.plan.create({ data: plan });
  }

  // Create default global settings
  await masterPrisma.globalSettings.create({ data: { id: "default" } });

  return NextResponse.json({
    data: {
      id: admin.id,
      message: "SuperAdmin created. Default plans created. You can now log in.",
    },
  }, { status: 201 });
}

// GET /api/superadmin/setup — Check if setup is needed
export async function GET() {
  const count = await masterPrisma.superAdmin.count();
  return NextResponse.json({ data: { needsSetup: count === 0 } });
}
