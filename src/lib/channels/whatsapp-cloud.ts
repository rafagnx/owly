/**
 * WhatsApp Cloud API (WABA) — Meta Cloud API Integration
 * Official WhatsApp Business API via Meta's Graph API
 */

const WHATSAPP_API_BASE = "https://graph.facebook.com/v21.0";

export interface WABAConfig {
  accessToken: string;
  phoneNumberId: string;
  businessAccountId: string;
  webhookVerifyToken: string;
}

export interface WABAMessage {
  to: string;
  type: "text" | "image" | "document" | "audio" | "video" | "template" | "interactive";
  text?: { body: string };
  image?: { link: string; caption?: string };
  document?: { link: string; filename: string; caption?: string };
  template?: { name: string; language: { code: string }; components?: unknown[] };
  interactive?: unknown;
}

/**
 * Send a message via WhatsApp Cloud API
 */
export async function sendWABAMessage(config: WABAConfig, message: WABAMessage): Promise<{ messageId: string; success: boolean }> {
  const url = `${WHATSAPP_API_BASE}/${config.phoneNumberId}/messages`;

  const payload: Record<string, unknown> = {
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: message.to,
    type: message.type,
  };

  if (message.type === "text" && message.text) {
    payload.text = message.text;
  } else if (message.type === "image" && message.image) {
    payload.image = message.image;
  } else if (message.type === "document" && message.document) {
    payload.document = message.document;
  } else if (message.type === "template" && message.template) {
    payload.template = message.template;
  } else if (message.type === "interactive" && message.interactive) {
    payload.interactive = message.interactive;
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${config.accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("[WABA] Send failed:", data);
    return { messageId: "", success: false };
  }

  return {
    messageId: data.messages?.[0]?.id || "",
    success: true,
  };
}

/**
 * Send a text message
 */
export async function sendWABAText(config: WABAConfig, to: string, text: string) {
  return sendWABAMessage(config, { to, type: "text", text: { body: text } });
}

/**
 * Send a template message (for first contact / notifications)
 */
export async function sendWABATemplate(
  config: WABAConfig,
  to: string,
  templateName: string,
  languageCode = "pt_BR",
  components?: unknown[]
) {
  return sendWABAMessage(config, {
    to,
    type: "template",
    template: {
      name: templateName,
      language: { code: languageCode },
      components,
    },
  });
}

/**
 * Mark message as read
 */
export async function markWABAMessageRead(config: WABAConfig, messageId: string) {
  const url = `${WHATSAPP_API_BASE}/${config.phoneNumberId}/messages`;

  await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${config.accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      status: "read",
      message_id: messageId,
    }),
  });
}

/**
 * Download media from WhatsApp Cloud API
 */
export async function downloadWABAMedia(config: WABAConfig, mediaId: string): Promise<Buffer | null> {
  // First get the media URL
  const metaResponse = await fetch(`${WHATSAPP_API_BASE}/${mediaId}`, {
    headers: { "Authorization": `Bearer ${config.accessToken}` },
  });

  const metaData = await metaResponse.json();
  if (!metaData.url) return null;

  // Then download the actual media
  const mediaResponse = await fetch(metaData.url, {
    headers: { "Authorization": `Bearer ${config.accessToken}` },
  });

  const arrayBuffer = await mediaResponse.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

/**
 * Verify webhook callback (GET request from Meta)
 */
export function verifyWABAWebhook(
  mode: string,
  token: string,
  challenge: string,
  verifyToken: string
): string | null {
  if (mode === "subscribe" && token === verifyToken) {
    return challenge;
  }
  return null;
}

/**
 * Parse incoming webhook payload from Meta
 */
export function parseWABAWebhook(body: unknown): WABAWebhookEvent[] {
  const events: WABAWebhookEvent[] = [];
  const data = body as Record<string, unknown>;

  if (!data.entry) return events;

  for (const entry of data.entry as Array<Record<string, unknown>>) {
    const changes = entry.changes as Array<Record<string, unknown>> || [];
    
    for (const change of changes) {
      if (change.field !== "messages") continue;
      
      const value = change.value as Record<string, unknown>;
      const messages = (value.messages as Array<Record<string, unknown>>) || [];
      const contacts = (value.contacts as Array<Record<string, unknown>>) || [];
      const metadata = value.metadata as Record<string, string>;
      const statuses = (value.statuses as Array<Record<string, unknown>>) || [];

      for (const msg of messages) {
        const contact = contacts.find(
          (c: Record<string, unknown>) => (c.wa_id as string) === (msg.from as string)
        );

        events.push({
          type: "message",
          from: msg.from as string,
          messageId: msg.id as string,
          timestamp: parseInt(msg.timestamp as string),
          phoneNumberId: metadata?.phone_number_id || "",
          contactName: (contact?.profile as Record<string, string>)?.name || "",
          messageType: msg.type as string,
          text: (msg.text as Record<string, string>)?.body || "",
          mediaId: (msg.image as Record<string, string>)?.id ||
                   (msg.audio as Record<string, string>)?.id ||
                   (msg.video as Record<string, string>)?.id ||
                   (msg.document as Record<string, string>)?.id || "",
          caption: (msg.image as Record<string, string>)?.caption ||
                   (msg.document as Record<string, string>)?.caption || "",
        });
      }

      for (const status of statuses) {
        events.push({
          type: "status",
          from: status.recipient_id as string,
          messageId: status.id as string,
          timestamp: parseInt(status.timestamp as string),
          phoneNumberId: metadata?.phone_number_id || "",
          contactName: "",
          messageType: "status",
          text: "",
          mediaId: "",
          caption: "",
          status: status.status as string,
        });
      }
    }
  }

  return events;
}

export interface WABAWebhookEvent {
  type: "message" | "status";
  from: string;
  messageId: string;
  timestamp: number;
  phoneNumberId: string;
  contactName: string;
  messageType: string;
  text: string;
  mediaId: string;
  caption: string;
  status?: string;
}
