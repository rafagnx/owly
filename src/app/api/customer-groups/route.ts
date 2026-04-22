export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logger";
import { requireAuth, isAuthenticated } from "@/lib/route-auth";

export async function GET(request: NextRequest) {
  const auth = await requireAuth(request, "customers:read");
  if (!isAuthenticated(auth)) return auth;

  const { tenantPrisma } = auth;

  try {
    const groups = await tenantPrisma.customerGroup.findMany({
      include: {
        _count: { select: { customers: true } },
      },
      orderBy: { name: "asc" },
    });

    return NextResponse.json(groups);
  } catch (error) {
    logger.error("Failed to fetch customer groups:", error);
    return NextResponse.json({ error: "Failed to fetch groups" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const auth = await requireAuth(request, "settings:update");
  if (!isAuthenticated(auth)) return auth;

  const { tenantPrisma } = auth;

  try {
    const body = await request.json();
    const { name, description, color, customerIds } = body;

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const group = await tenantPrisma.customerGroup.create({
      data: {
        name: name.trim(),
        description: description || "",
        color: color || "#4A7C9B",
        ...(customerIds && customerIds.length > 0 && {
          customers: {
            create: customerIds.map((cid: string) => ({ customerId: cid })),
          },
        }),
      },
      include: {
        _count: { select: { customers: true } },
      },
    });

    return NextResponse.json(group, { status: 201 });
  } catch (error) {
    logger.error("Failed to create customer group:", error);
    return NextResponse.json({ error: "Failed to create group" }, { status: 500 });
  }
}