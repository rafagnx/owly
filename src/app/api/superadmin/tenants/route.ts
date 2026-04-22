export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";
import { listTenants, provisionTenant, type ProvisionTenantInput } from "@/lib/tenant/provision";
import { masterPrisma } from "@/lib/tenant/resolver";

// GET /api/superadmin/tenants — List all tenants
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status") || undefined;
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "20");

  const result = await listTenants({ status, page, limit });

  return NextResponse.json({
    data: result.tenants.map((t) => ({
      id: t.id,
      slug: t.slug,
      name: t.name,
      status: t.status,
      ownerName: t.ownerName,
      ownerEmail: t.ownerEmail,
      plan: t.plan ? { id: t.plan.id, name: t.plan.name } : null,
      subscription: t.subscription
        ? { status: t.subscription.status, billingCycle: t.subscription.billingCycle }
        : null,
      createdAt: t.createdAt,
    })),
    pagination: {
      page: result.page,
      limit: result.limit,
      total: result.total,
      pages: result.pages,
    },
  });
}

// POST /api/superadmin/tenants — Create new tenant
export async function POST(request: NextRequest) {
  const body = await request.json();

  const { slug, name, ownerName, ownerEmail, ownerPhone, adminPassword, planId, logo, primaryColor, trialDays } = body;

  if (!slug || !name || !ownerName || !ownerEmail || !adminPassword) {
    return NextResponse.json(
      { error: { code: "VALIDATION_ERROR", message: "slug, name, ownerName, ownerEmail, and adminPassword are required" } },
      { status: 400 }
    );
  }

  // Validate slug format
  if (!/^[a-z0-9]([a-z0-9-]{0,28}[a-z0-9])?$/.test(slug)) {
    return NextResponse.json(
      { error: { code: "INVALID_SLUG", message: "Slug must be lowercase alphanumeric with hyphens, 2-30 chars" } },
      { status: 400 }
    );
  }

  // Reserved slugs
  const reserved = ["admin", "app", "api", "www", "mail", "ftp", "ns1", "ns2", "staging", "dev", "test"];
  if (reserved.includes(slug)) {
    return NextResponse.json(
      { error: { code: "RESERVED_SLUG", message: "This slug is reserved" } },
      { status: 400 }
    );
  }

  const input: ProvisionTenantInput = {
    slug,
    name,
    ownerName,
    ownerEmail,
    ownerPhone,
    adminPassword,
    planId,
    logo,
    primaryColor,
    trialDays: trialDays ? parseInt(trialDays) : undefined,
  };

  const result = await provisionTenant(input);

  if (!result.success) {
    return NextResponse.json(
      { error: { code: "PROVISION_FAILED", message: result.error } },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { data: { tenantId: result.tenantId, slug: result.slug, message: "Tenant provisioned successfully" } },
    { status: 201 }
  );
}
