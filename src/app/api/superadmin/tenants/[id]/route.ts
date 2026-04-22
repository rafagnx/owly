import { NextRequest, NextResponse } from "next/server";
import { masterPrisma } from "@/lib/tenant/resolver";
import { suspendTenant, reactivateTenant, deleteTenant } from "@/lib/tenant/provision";

// GET /api/superadmin/tenants/[id] — Get tenant details
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const tenant = await masterPrisma.tenant.findUnique({
    where: { id },
    include: { plan: true, subscription: true },
  });

  if (!tenant) {
    return NextResponse.json(
      { error: { code: "NOT_FOUND", message: "Tenant not found" } },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: tenant });
}

// PUT /api/superadmin/tenants/[id] — Update tenant
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  const allowedFields = [
    "name", "status", "logo", "favicon", "primaryColor", "secondaryColor", 
    "accentColor", "ownerName", "ownerEmail", "ownerPhone", "customDomain", "planId",
  ];

  const updateData: Record<string, unknown> = {};
  for (const field of allowedFields) {
    if (body[field] !== undefined) {
      updateData[field] = body[field];
    }
  }

  // Handle status changes
  if (body.status === "suspended") {
    await suspendTenant(id);
    return NextResponse.json({ data: { message: "Tenant suspended" } });
  }

  if (body.status === "active") {
    await reactivateTenant(id);
    return NextResponse.json({ data: { message: "Tenant reactivated" } });
  }

  const tenant = await masterPrisma.tenant.update({
    where: { id },
    data: updateData,
  });

  return NextResponse.json({ data: tenant });
}

// DELETE /api/superadmin/tenants/[id] — Delete tenant
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  await deleteTenant(id);

  return NextResponse.json({ data: { message: "Tenant deleted successfully" } });
}
