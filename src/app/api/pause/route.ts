export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logger";
import { requireAuth } from "@/lib/route-auth";
import { isAuthenticated } from "@/lib/route-auth";

export async function GET(request: NextRequest) {
  const auth = await requireAuth(request, "team:read");
  if (!isAuthenticated(auth)) return auth;

  const { tenantPrisma } = auth;

  try {
    const members = await tenantPrisma.teamMember.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        isAvailable: true,
        isOnPause: true,
        pauseReason: true,
        department: { select: { id: true, name: true } },
      },
    });

    return NextResponse.json(members, { status: 200 });
  } catch (error) {
    logger.error("Failed to fetch pause status:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const auth = await requireAuth(request, "team:manage");
  if (!isAuthenticated(auth)) return auth;

  const { tenantPrisma } = auth;

  try {
    const { memberId, action, reason, scheduledAt } = await request.json();

    if (!memberId || !["pause", "resume"].includes(action)) {
      return NextResponse.json(
        { error: "Member ID and valid action (pause/resume) are required" },
        { status: 400 }
      );
    }

    if (scheduledAt && action === "pause") {
      const scheduledDate = new Date(scheduledAt);
      if (isNaN(scheduledDate.getTime())) {
        return NextResponse.json(
          { error: "Invalid scheduledAt date" },
          { status: 400 }
        );
      }
      if (scheduledDate > new Date()) {
        return NextResponse.json(
          { message: "Pause scheduled", scheduledAt: scheduledDate },
          { status: 202 }
        );
      }
    }

    const updatedMember = await tenantPrisma.teamMember.update({
      where: { id: memberId },
      data: {
        isOnPause: action === "pause",
        pauseReason: action === "pause" ? (reason || "manual_pause") : null,
      },
    });

    return NextResponse.json(updatedMember, { status: 200 });
  } catch (error) {
    logger.error("Pause operation failed:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}