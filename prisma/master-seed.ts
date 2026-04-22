import { PrismaClient as MasterPrismaClient } from "../src/generated/master";
import bcrypt from "bcryptjs";

const masterPrisma = new MasterPrismaClient();

async function main() {
  console.log("🚀 Seeding Master Database...");

  // 1. Create Super Admin (password: admin123)
  const hashedPassword = await bcrypt.hash("admin123", 12);
  await masterPrisma.superAdmin.upsert({
    where: { username: "admin" },
    update: {},
    create: {
      username: "admin",
      password: hashedPassword,
      name: "Administrator",
      email: "admin@owly.com",
    },
  });

  // 2. Create Default Plans
  const plans = [
    {
      id: "plan_starter",
      slug: "starter",
      name: "Starter",
      description: "Ideal para pequenos negócios",
      priceMonthly: 197.00,
      maxMessagesMonth: 2000,
      maxChannels: 1,
      maxUsers: 2,
    },
    {
      id: "plan_business",
      slug: "business",
      name: "Business",
      description: "O plano mais popular",
      priceMonthly: 497.00,
      maxMessagesMonth: 10000,
      maxChannels: 5,
      maxUsers: 10,
    },
    {
      id: "plan_enterprise",
      slug: "enterprise",
      name: "Enterprise",
      description: "Escala total para grandes operações",
      priceMonthly: 997.00,
      maxMessagesMonth: 50000,
      maxChannels: 20,
      maxUsers: 50,
    }
  ];

  for (const plan of plans) {
    await masterPrisma.plan.upsert({
      where: { id: plan.id },
      update: plan,
      create: plan,
    });
  }

  // 3. Create Global Settings
  await masterPrisma.globalSettings.upsert({
    where: { id: "default" },
    update: {},
    create: {
      id: "default",
      platformName: "ClinicOS",
      platformDomain: "clinicos.com.br",
      maintenanceMode: false,
    }
  });

  // 4. Create Default Tenant for IP access
  await masterPrisma.tenant.upsert({
    where: { slug: "default" },
    update: {
      customDomain: "161.97.144.107"
    },
    create: {
      id: "default-tenant-id",
      name: "ClinicOS Demo",
      slug: "default",
      dbSchema: "public",
      status: "active",
      customDomain: "161.97.144.107",
      logo: "",
      favicon: "",
      primaryColor: "#000000",
      secondaryColor: "#ffffff",
      accentColor: "#333333",
    }
  });

  console.log("✅ Master Database Seeded!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await masterPrisma.$disconnect();
  });
