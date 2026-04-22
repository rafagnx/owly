export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logger";
import { requireAuth, isAuthenticated } from "@/lib/route-auth";

export async function PATCH(request: NextRequest) {
  const auth = await requireAuth(request, "conversations:update");
  if (!isAuthenticated(auth)) return auth;

  const { tenantPrisma } = auth;

  try {
    const { conversationId, action } = await request.json();

    if (!conversationId || !["pin", "unpin"].includes(action)) {
      return NextResponse.json(
        { error: "conversationId and action (pin/unpin) required" },
        { status: 400 }
      );
    }

    const updated = await tenantPrisma.conversation.update({
      where: { id: conversationId },
      data: {
        isPinned: action === "pin",
        pinnedAt: action === "pin" ? new Date() : null,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    logger.error("Pin operation failed:", error);
    return NextResponse.json({ error: "Operation failed" }, { status: 500 });
  }
}