export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { masterPrisma } from "@/lib/tenant/resolver";

// GET /api/superadmin/stats — Global platform stats
export async function GET() {
  const [
    totalTenants,
    activeTenants,
    suspendedTenants,
    trialTenants,
    totalPlans,
    recentTenants,
    payments,
  ] = await Promise.all([
    masterPrisma.tenant.count(),
    masterPrisma.tenant.count({ where: { status: "active" } }),
    masterPrisma.tenant.count({ where: { status: "suspended" } }),
    masterPrisma.tenant.count({ where: { status: "trial" } }),
    masterPrisma.plan.count({ where: { isActive: true } }),
    masterPrisma.tenant.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      select: { id: true, slug: true, name: true, status: true, createdAt: true },
    }),
    masterPrisma.payment.aggregate({
      where: { status: "paid" },
      _sum: { amount: true },
      _count: true,
    }),
  ]);

  return NextResponse.json({
    data: {
      tenants: {
        total: totalTenants,
        active: activeTenants,
        suspended: suspendedTenants,
        trial: trialTenants,
      },
      plans: totalPlans,
      revenue: {
        total: payments._sum.amount || 0,
        payments: payments._count,
      },
      recentTenants,
    },
  });
}
