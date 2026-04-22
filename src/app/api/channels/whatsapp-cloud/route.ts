import { NextRequest, NextResponse } from "next/server";
import { parseWABAWebhook, verifyWABAWebhook } from "@/lib/channels/whatsapp-cloud";

// GET — Webhook verification from Meta
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("hub.mode") || "";
  const token = searchParams.get("hub.verify_token") || "";
  const challenge = searchParams.get("hub.challenge") || "";

  const verifyToken = process.env.WABA_WEBHOOK_VERIFY_TOKEN || "owly-verify";
  const result = verifyWABAWebhook(mode, token, challenge, verifyToken);

  if (result) {
    return new NextResponse(result, { status: 200 });
  }
  return NextResponse.json({ error: "Verification failed" }, { status: 403 });
}

// POST — Incoming messages from WhatsApp Cloud API
export async function POST(request: NextRequest) {
  const body = await request.json();
  const events = parseWABAWebhook(body);

  for (const event of events) {
    if (event.type === "message") {
      // TODO: Route to conversation engine based on tenant
      // For now, log the event
      console.log(`[WABA] Message from ${event.from}: ${event.text}`);
    }
  }

  // Always respond 200 to Meta
  return NextResponse.json({ status: "ok" });
}
