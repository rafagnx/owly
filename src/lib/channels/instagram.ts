/**
 * Instagram DM Channel — Meta Graph API Integration
 * Uses Instagram Messaging API for business accounts
 */

const INSTAGRAM_API_BASE = "https://graph.facebook.com/v21.0";

export interface InstagramConfig {
  accessToken: string;
  igAccountId: string; // Instagram Business Account ID
  pageId: string;      // Connected Facebook Page ID
  webhookVerifyToken: string;
}

/**
 * Send a text message via Instagram DM
 */
export async function sendInstagramMessage(
  config: InstagramConfig,
  recipientId: string,
  text: string
): Promise<{ messageId: string; success: boolean }> {
  const url = `${INSTAGRAM_API_BASE}/${config.igAccountId}/messages`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${config.accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      recipient: { id: recipientId },
      message: { text },
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("[Instagram] Send failed:", data);
    return { messageId: "", success: false };
  }

  return { messageId: data.message_id || "", success: true };
}

/**
 * Send an image via Instagram DM
 */
export async function sendInstagramImage(
  config: InstagramConfig,
  recipientId: string,
  imageUrl: string
): Promise<{ messageId: string; success: boolean }> {
  const url = `${INSTAGRAM_API_BASE}/${config.igAccountId}/messages`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${config.accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      recipient: { id: recipientId },
      message: {
        attachment: {
          type: "image",
          payload: { url: imageUrl },
        },
      },
    }),
  });

  const data = await response.json();
  return { messageId: data.message_id || "", success: response.ok };
}

/**
 * Send quick reply buttons
 */
export async function sendInstagramQuickReplies(
  config: InstagramConfig,
  recipientId: string,
  text: string,
  quickReplies: Array<{ title: string; payload: string }>
) {
  const url = `${INSTAGRAM_API_BASE}/${config.igAccountId}/messages`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${config.accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      recipient: { id: recipientId },
      message: {
        text,
        quick_replies: quickReplies.map((qr) => ({
          content_type: "text",
          title: qr.title,
          payload: qr.payload,
        })),
      },
    }),
  });

  const data = await response.json();
  return { messageId: data.message_id || "", success: response.ok };
}

/**
 * Parse Instagram webhook events
 */
export function parseInstagramWebhook(body: unknown): InstagramWebhookEvent[] {
  const events: InstagramWebhookEvent[] = [];
  const data = body as Record<string, unknown>;

  if (!data.entry) return events;

  for (const entry of data.entry as Array<Record<string, unknown>>) {
    const messaging = entry.messaging as Array<Record<string, unknown>> || [];

    for (const event of messaging) {
      const sender = event.sender as Record<string, string>;
      const recipient = event.recipient as Record<string, string>;
      const message = event.message as Record<string, unknown> | undefined;
      const postback = event.postback as Record<string, string> | undefined;

      if (message) {
        events.push({
          type: "message",
          senderId: sender?.id || "",
          recipientId: recipient?.id || "",
          timestamp: event.timestamp as number,
          messageId: message.mid as string || "",
          text: message.text as string || "",
          attachments: (message.attachments as Array<Record<string, unknown>>) || [],
          isEcho: !!message.is_echo,
          quickReplyPayload: (message.quick_reply as Record<string, string>)?.payload || "",
        });
      }

      if (postback) {
        events.push({
          type: "postback",
          senderId: sender?.id || "",
          recipientId: recipient?.id || "",
          timestamp: event.timestamp as number,
          messageId: "",
          text: postback.title || "",
          attachments: [],
          isEcho: false,
          quickReplyPayload: postback.payload || "",
        });
      }
    }
  }

  return events;
}

export interface InstagramWebhookEvent {
  type: "message" | "postback";
  senderId: string;
  recipientId: string;
  timestamp: number;
  messageId: string;
  text: string;
  attachments: Array<Record<string, unknown>>;
  isEcho: boolean;
  quickReplyPayload: string;
}
