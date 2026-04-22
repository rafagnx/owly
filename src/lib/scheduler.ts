/**
 * Message Scheduler — Handles scheduled campaigns and message dispatching
 * Uses a simple polling approach compatible with Next.js serverless
 */

export interface ScheduledMessage {
  id: string;
  campaignId: string;
  channel: string;
  to: string;
  content: string;
  mediaUrl?: string;
  scheduledAt: Date;
  status: "pending" | "sent" | "failed";
  attempts: number;
  lastError?: string;
}

export interface CampaignSchedule {
  campaignId: string;
  totalMessages: number;
  sentCount: number;
  failedCount: number;
  ratePerMinute: number; // Messages per minute (to avoid throttling)
  startedAt: Date;
  status: "running" | "paused" | "completed" | "failed";
}

/**
 * Rate limiter for outgoing messages per channel
 */
const channelRateLimits: Record<string, { count: number; resetAt: number }> = {};

const RATE_LIMITS_PER_MINUTE: Record<string, number> = {
  whatsapp: 80,
  "whatsapp-cloud": 80,
  email: 60,
  telegram: 30,
  instagram: 20,
  messenger: 20,
  sms: 30,
};

export function checkChannelRate(channel: string): boolean {
  const now = Date.now();
  const key = channel.toLowerCase();
  const limit = RATE_LIMITS_PER_MINUTE[key] || 30;

  if (!channelRateLimits[key] || channelRateLimits[key].resetAt < now) {
    channelRateLimits[key] = { count: 0, resetAt: now + 60000 };
  }

  if (channelRateLimits[key].count >= limit) {
    return false;
  }

  channelRateLimits[key].count++;
  return true;
}

/**
 * Process a batch of scheduled messages
 * Called periodically (e.g., every 30 seconds via cron or API route)
 */
export async function processScheduledMessages(
  getMessages: () => Promise<ScheduledMessage[]>,
  sendMessage: (msg: ScheduledMessage) => Promise<boolean>,
  updateMessage: (id: string, data: Partial<ScheduledMessage>) => Promise<void>,
  batchSize = 50
): Promise<{ sent: number; failed: number; remaining: number }> {
  const messages = await getMessages();
  const batch = messages.slice(0, batchSize);
  
  let sent = 0;
  let failed = 0;

  for (const msg of batch) {
    if (!checkChannelRate(msg.channel)) {
      // Rate limited — skip this message for now
      continue;
    }

    try {
      const success = await sendMessage(msg);
      
      if (success) {
        await updateMessage(msg.id, { status: "sent", attempts: msg.attempts + 1 });
        sent++;
      } else {
        const attempts = msg.attempts + 1;
        await updateMessage(msg.id, {
          status: attempts >= 3 ? "failed" : "pending",
          attempts,
          lastError: "Send returned false",
        });
        if (attempts >= 3) failed++;
      }
    } catch (error) {
      const attempts = msg.attempts + 1;
      await updateMessage(msg.id, {
        status: attempts >= 3 ? "failed" : "pending",
        attempts,
        lastError: error instanceof Error ? error.message : "Unknown error",
      });
      if (attempts >= 3) failed++;
    }
  }

  return { sent, failed, remaining: messages.length - batch.length };
}

/**
 * Parse CSV contact list for campaign import
 */
export function parseContactsCsv(csvContent: string): Array<{
  name: string;
  phone: string;
  email: string;
  tags: string[];
}> {
  const lines = csvContent.split("\n").filter(Boolean);
  if (lines.length < 2) return [];

  const headers = lines[0].toLowerCase().split(",").map((h) => h.trim().replace(/"/g, ""));
  const nameIdx = headers.findIndex((h) => h === "name" || h === "nome");
  const phoneIdx = headers.findIndex((h) => h === "phone" || h === "telefone" || h === "whatsapp");
  const emailIdx = headers.findIndex((h) => h === "email" || h === "e-mail");
  const tagsIdx = headers.findIndex((h) => h === "tags" || h === "etiquetas");

  return lines.slice(1).map((line) => {
    const cols = line.split(",").map((c) => c.trim().replace(/"/g, ""));
    return {
      name: nameIdx >= 0 ? cols[nameIdx] || "" : "",
      phone: phoneIdx >= 0 ? cols[phoneIdx] || "" : "",
      email: emailIdx >= 0 ? cols[emailIdx] || "" : "",
      tags: tagsIdx >= 0 ? (cols[tagsIdx] || "").split(";").filter(Boolean) : [],
    };
  }).filter((c) => c.phone || c.email);
}
