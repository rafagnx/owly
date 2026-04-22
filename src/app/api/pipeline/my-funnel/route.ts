export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logger";
import { requireAuth, isAuthenticated } from "@/lib/route-auth";
import { hasPermission } from "@/lib/rbac";

export async function GET(request: NextRequest) {
  const auth = await requireAuth(request, "conversations:read");
  if (!isAuthenticated(auth)) return auth;

  const { tenantPrisma, userId, role } = auth;

  try {
    const stages = await tenantPrisma.pipelineStage.findMany({
      orderBy: { order: "asc" },
    });

    const isManager = hasPermission(role, "analytics:export");
    const userIdFilter = isManager ? {} : { assignedToId: userId };

    const results = await Promise.all(
      stages.map(async (stage) => {
        const conversations = await tenantPrisma.conversation.findMany({
          where: {
            pipelineStage: stage.name,
            ...userIdFilter,
          },
          select: {
            id: true,
            customerName: true,
            pipelineValue: true,
            assignedToId: true,
          },
        });

        const count = conversations.length;
        const totalValue = conversations.reduce((sum, c) => sum + c.pipelineValue, 0);

        return {
          stageId: stage.id,
          stageName: stage.name,
          count,
          totalValue,
        };
      })
    );

    return NextResponse.json({
      results,
      isManager,
      canViewAll: isManager,
    });
  } catch (error) {
    logger.error("Funnel fetch failed:", error);
    return NextResponse.json({ error: "Failed to fetch funnel" }, { status: 500 });
  }
}