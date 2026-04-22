export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logger";
import { requireAuth, isAuthenticated } from "@/lib/route-auth";

export async function GET(request: NextRequest) {
  const auth = await requireAuth(request, "analytics:read");
  if (!isAuthenticated(auth)) return auth;

  const { tenantPrisma } = auth;

  try {
    const stages = await tenantPrisma.pipelineStage.findMany({
      orderBy: { order: "asc" },
    });

    const results = await Promise.all(
      stages.map(async (stage) => {
        const conversations = await tenantPrisma.conversation.findMany({
          where: { pipelineStage: stage.name },
          select: {
            id: true,
            pipelineValue: true,
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

    return NextResponse.json(results);
  } catch (error) {
    logger.error("Kanban sum failed:", error);
    return NextResponse.json({ error: "Failed to calculate kanban sums" }, { status: 500 });
  }
}