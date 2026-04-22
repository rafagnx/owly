export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";
import { masterPrisma } from "@/lib/tenant/resolver";

// GET /api/superadmin/plans — List all plans
export async function GET() {
  const plans = await masterPrisma.plan.findMany({
    orderBy: { sortOrder: "asc" },
    include: { _count: { select: { tenants: true } } },
  });

  return NextResponse.json({
    data: plans.map((p: typeof plans[number]) => ({
      ...p,
      tenantCount: p._count.tenants,
    })),
  });
}

// POST /api/superadmin/plans — Create plan
export async function POST(request: NextRequest) {
  const body = await request.json();

  const { name, slug, description, priceMonthly, priceYearly, ...limits } = body;

  if (!name || !slug) {
    return NextResponse.json(
      { error: { code: "VALIDATION_ERROR", message: "name and slug are required" } },
      { status: 400 }
    );
  }

  const plan = await masterPrisma.plan.create({
    data: {
      name,
      slug,
      description: description || "",
      priceMonthly: priceMonthly || 0,
      priceYearly: priceYearly || 0,
      ...limits,
    },
  });

  return NextResponse.json({ data: plan }, { status: 201 });
}
