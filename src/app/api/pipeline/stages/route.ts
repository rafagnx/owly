export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logger";
import { requireAuth, isAuthenticated } from "@/lib/route-auth";

export async function GET(request: NextRequest) {
  const auth = await requireAuth(request, "customers:read");
  if (!isAuthenticated(auth)) return auth;

  const { tenantPrisma } = auth;

  try {
    const stages = await tenantPrisma.pipelineStage.findMany({
      orderBy: { order: "asc" },
    });

    return NextResponse.json(stages);
  } catch (error) {
    logger.error("Failed to fetch pipeline stages:", error);
    return NextResponse.json({ error: "Failed to fetch stages" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const auth = await requireAuth(request, "settings:update");
  if (!isAuthenticated(auth)) return auth;

  const { tenantPrisma } = auth;

  try {
    const body = await request.json();
    const { name, description, color, order, isAutomated, conditions, actions, delayHours } = body;

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const stage = await tenantPrisma.pipelineStage.create({
      data: {
        name: name.trim(),
        description: description || "",
        color: color || "#4A7C9B",
        order: order || 0,
        isAutomated: isAutomated || false,
        conditions: conditions || [],
        actions: actions || [],
        delayHours: delayHours || 0,
      },
    });

    return NextResponse.json(stage, { status: 201 });
  } catch (error) {
    logger.error("Failed to create pipeline stage:", error);
    return NextResponse.json({ error: "Failed to create stage" }, { status: 500 });
  }
}