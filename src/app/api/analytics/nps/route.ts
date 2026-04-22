export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logger";
import { requireAuth, isAuthenticated } from "@/lib/route-auth";

export async function GET(request: NextRequest) {
  const auth = await requireAuth(request, "analytics:read");
  if (!isAuthenticated(auth)) return auth;

  const { tenantPrisma } = auth;

  try {
    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");
    const groupBy = searchParams.get("groupBy") || "all"; // all, agent, channel, queue

    const where: Record<string, unknown> = {};

    if (startDate || endDate) {
      where.createdAt = {};
      if (startDate) {
        (where.createdAt as Record<string, Date>).gte = new Date(startDate);
      }
      if (endDate) {
        (where.createdAt as Record<string, Date>).lte = new Date(endDate);
      }
    }

    const evaluations = await tenantPrisma.evaluation.findMany({
      where,
      include: {
        conversation: {
          select: { channel: true },
        },
      },
    });

    const total = evaluations.length;
    if (total === 0) {
      return NextResponse.json({ nps: 0, promoters: 0, detractors: 0, passives: 0, total: 0 });
    }

    const promoters = evaluations.filter((e) => e.rating >= 9).length;
    const detractors = evaluations.filter((e) => e.rating <= 6).length;
    const passives = total - promoters - detractors;

    const nps = Math.round(((promoters - detractors) / total) * 100);

    let byAgent: Record<string, number> = {};
    let byChannel: Record<string, number> = {};

    if (groupBy === "agent" || groupBy === "all") {
      const agentEvals = await tenantPrisma.evaluation.findMany({
        where,
        include: {
          conversation: {
            include: {
              tickets: {
                where: { assignedToId: { not: "" } },
                select: { assignedToId: true },
              },
            },
          },
        },
      });

      for (const ev of agentEvals) {
        const agentId = ev.conversation.tickets[0]?.assignedToId;
        if (agentId) {
          byAgent[agentId] = (byAgent[agentId] || 0) + ev.rating;
        }
      }
    }

    if (groupBy === "channel" || groupBy === "all") {
      for (const ev of evaluations) {
        const channel = ev.conversation.channel;
        byChannel[channel] = (byChannel[channel] || 0) + ev.rating;
      }
    }

    return NextResponse.json({
      nps,
      promoters,
      detractors,
      passives,
      total,
      byAgent: Object.entries(byAgent).map(([agent, sum]) => ({ agent, nps: sum })),
      byChannel: Object.entries(byChannel).map(([channel, sum]) => ({ channel, nps: sum })),
    });
  } catch (error) {
    logger.error("NPS calculation failed:", error);
    return NextResponse.json({ error: "NPS calculation failed" }, { status: 500 });
  }
}