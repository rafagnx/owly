/**
 * Facebook Messenger Channel — Meta Graph API Integration
 */

const MESSENGER_API_BASE = "https://graph.facebook.com/v21.0";

export interface MessengerConfig {
  accessToken: string;
  pageId: string;
  webhookVerifyToken: string;
}

/**
 * Send a text message via Messenger
 */
export async function sendMessengerMessage(
  config: MessengerConfig,
  recipientId: string,
  text: string
): Promise<{ messageId: string; success: boolean }> {
  const url = `${MESSENGER_API_BASE}/${config.pageId}/messages`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${config.accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      recipient: { id: recipientId },
      message: { text },
      messaging_type: "RESPONSE",
    }),
  });

  const data = await response.json();
  return { messageId: data.message_id || "", success: response.ok };
}

/**
 * Send buttons via Messenger
 */
export async function sendMessengerButtons(
  config: MessengerConfig,
  recipientId: string,
  text: string,
  buttons: Array<{ type: string; title: string; payload?: string; url?: string }>
) {
  const url = `${MESSENGER_API_BASE}/${config.pageId}/messages`;

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
          type: "template",
          payload: {
            template_type: "button",
            text,
            buttons: buttons.map((b) => ({
              type: b.type || "postback",
              title: b.title,
              payload: b.payload,
              url: b.url,
            })),
          },
        },
      },
    }),
  });

  const data = await response.json();
  return { messageId: data.message_id || "", success: response.ok };
}

/**
 * Send image via Messenger
 */
export async function sendMessengerImage(
  config: MessengerConfig,
  recipientId: string,
  imageUrl: string
) {
  const url = `${MESSENGER_API_BASE}/${config.pageId}/messages`;

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
          payload: { url: imageUrl, is_reusable: true },
        },
      },
    }),
  });

  const data = await response.json();
  return { messageId: data.message_id || "", success: response.ok };
}

/**
 * Parse Messenger webhook events
 */
export function parseMessengerWebhook(body: unknown): MessengerWebhookEvent[] {
  const events: MessengerWebhookEvent[] = [];
  const data = body as Record<string, unknown>;

  if (!data.entry) return events;

  for (const entry of data.entry as Array<Record<string, unknown>>) {
    const messaging = entry.messaging as Array<Record<string, unknown>> || [];

    for (const event of messaging) {
      const sender = event.sender as Record<string, string>;
      const recipient = event.recipient as Record<string, string>;
      const message = event.message as Record<string, unknown> | undefined;
      const postback = event.postback as Record<string, string> | undefined;

      if (message && !message.is_echo) {
        events.push({
          type: "message",
          senderId: sender?.id || "",
          recipientId: recipient?.id || "",
          timestamp: event.timestamp as number,
          messageId: message.mid as string || "",
          text: message.text as string || "",
          attachments: (message.attachments as Array<Record<string, unknown>>) || [],
          postbackPayload: "",
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
          postbackPayload: postback.payload || "",
        });
      }
    }
  }

  return events;
}

export interface MessengerWebhookEvent {
  type: "message" | "postback";
  senderId: string;
  recipientId: string;
  timestamp: number;
  messageId: string;
  text: string;
  attachments: Array<Record<string, unknown>>;
  postbackPayload: string;
}
