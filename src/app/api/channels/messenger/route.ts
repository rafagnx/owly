import { NextRequest, NextResponse } from "next/server";
import { parseMessengerWebhook } from "@/lib/channels/messenger";

// GET — Webhook verification
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("hub.mode") || "";
  const token = searchParams.get("hub.verify_token") || "";
  const challenge = searchParams.get("hub.challenge") || "";

  const verifyToken = process.env.MESSENGER_WEBHOOK_VERIFY_TOKEN || "owly-verify";
  if (mode === "subscribe" && token === verifyToken) {
    return new NextResponse(challenge, { status: 200 });
  }
  return NextResponse.json({ error: "Verification failed" }, { status: 403 });
}

// POST — Incoming messages from Facebook Messenger
export async function POST(request: NextRequest) {
  const body = await request.json();
  const events = parseMessengerWebhook(body);

  for (const event of events) {
    if (event.type === "message") {
      console.log(`[Messenger] Message from ${event.senderId}: ${event.text}`);
    }
  }

  return NextResponse.json({ status: "ok" });
}
