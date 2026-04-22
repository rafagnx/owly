export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logger";
import { requireAuth, isAuthenticated } from "@/lib/route-auth";

export async function POST(request: NextRequest) {
  const auth = await requireAuth(request, "conversations:assign");
  if (!isAuthenticated(auth)) return auth;

  const { tenantPrisma } = auth;

  try {
    const { strategy = "balanced" } = await request.json().catch(() => ({}));

    const offlineMembers = await tenantPrisma.teamMember.findMany({
      where: {
        isAvailable: true,
      },
      include: {
        _count: { select: { tickets: true } },
      },
    });

    const offlineWithTickets = offlineMembers.map((m) => ({
      ...m,
      ticketCount: m._count.tickets,
    }));

    const membersWithOpenTickets = offlineWithTickets.filter((m) => m.ticketCount > 0);

    if (membersWithOpenTickets.length === 0) {
      return NextResponse.json({ message: "No tickets to redistribute" });
    }

    const onlineMembers = await tenantPrisma.teamMember.findMany({
      where: { isAvailable: true, isOnPause: false },
    });

    if (onlineMembers.length === 0) {
      return NextResponse.json(
        { error: "No online agents available" },
        { status: 400 }
      );
    }

    let selectedTarget: typeof onlineMembers[number] | null = null;

    if (strategy === "balanced") {
      const sorted = [...onlineMembers].sort((a, b) => {
        const countA = offlineWithTickets.find((m) => m.id === a.id)?.ticketCount || 0;
        const countB = offlineWithTickets.find((m) => m.id === b.id)?.ticketCount || 0;
        return countA - countB;
      });
      selectedTarget = sorted[0];
    } else if (strategy === "round-robin") {
      selectedTarget = onlineMembers[Math.floor(Math.random() * onlineMembers.length)];
    }

    if (!selectedTarget) {
      return NextResponse.json({ error: "Could not select target agent" }, { status: 500 });
    }

    const results = [];
    for (const member of membersWithOpenTickets) {
      const tickets = await tenantPrisma.ticket.findMany({
        where: { assignedToId: member.id, status: { notIn: ["closed", "resolved"] } },
        take: 5,
      });

      if (tickets.length === 0) continue;

      for (const ticket of tickets) {
        await tenantPrisma.ticket.update({
          where: { id: ticket.id },
          data: { assignedToId: selectedTarget!.id },
        });
        results.push({ ticketId: ticket.id, from: member.id, to: selectedTarget!.id });
      }
    }

    return NextResponse.json({ redistributed: results.length, transfers: results });
  } catch (error) {
    logger.error("Redistribution failed:", error);
    return NextResponse.json({ error: "Redistribution failed" }, { status: 500 });
  }
}