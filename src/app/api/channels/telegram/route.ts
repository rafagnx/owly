export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";
import { parseTelegramUpdate } from "@/lib/channels/telegram";
import { logger } from "@/lib/logger";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const update = parseTelegramUpdate(body);

    if (update) {
      logger.info("[Telegram] Received update:", { type: update.type, chatId: update.chatId });
      // TODO: Process telegram update through conversation pipeline
    }

    // Telegram expects 200 OK quickly
    return NextResponse.json({ ok: true });
  } catch (error) {
    logger.error("[Telegram] Webhook error:", error);
    return NextResponse.json({ ok: true }); // Always 200 for Telegram
  }
}
