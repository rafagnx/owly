/**
 * Telegram Channel — Bot API Integration (Complete)
 */

const TELEGRAM_API_BASE = "https://api.telegram.org/bot";

export interface TelegramConfig {
  botToken: string;
  webhookUrl?: string;
}

interface TelegramResponse {
  ok: boolean;
  result?: unknown;
  description?: string;
}

async function telegramApi(config: TelegramConfig, method: string, body?: unknown): Promise<TelegramResponse> {
  const url = `${TELEGRAM_API_BASE}${config.botToken}/${method}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  return response.json();
}

export async function sendTelegramMessage(
  config: TelegramConfig, chatId: string | number, text: string,
  options?: { parseMode?: "HTML" | "Markdown" | "MarkdownV2"; replyMarkup?: unknown; disableWebPagePreview?: boolean }
) {
  return telegramApi(config, "sendMessage", {
    chat_id: chatId, text, parse_mode: options?.parseMode || "HTML",
    reply_markup: options?.replyMarkup, disable_web_page_preview: options?.disableWebPagePreview,
  });
}

export async function sendTelegramPhoto(config: TelegramConfig, chatId: string | number, photoUrl: string, caption?: string) {
  return telegramApi(config, "sendPhoto", { chat_id: chatId, photo: photoUrl, caption, parse_mode: "HTML" });
}

export async function sendTelegramDocument(config: TelegramConfig, chatId: string | number, documentUrl: string, caption?: string) {
  return telegramApi(config, "sendDocument", { chat_id: chatId, document: documentUrl, caption });
}

export async function sendTelegramInlineKeyboard(
  config: TelegramConfig, chatId: string | number, text: string,
  buttons: Array<Array<{ text: string; callbackData?: string; url?: string }>>
) {
  const inlineKeyboard = buttons.map((row) => row.map((btn) => ({ text: btn.text, callback_data: btn.callbackData, url: btn.url })));
  return sendTelegramMessage(config, chatId, text, { replyMarkup: { inline_keyboard: inlineKeyboard } });
}

export async function answerCallbackQuery(config: TelegramConfig, callbackQueryId: string, text?: string) {
  return telegramApi(config, "answerCallbackQuery", { callback_query_id: callbackQueryId, text });
}

export async function setTelegramWebhook(config: TelegramConfig, url: string) {
  return telegramApi(config, "setWebhook", { url, allowed_updates: ["message", "callback_query", "edited_message"] });
}

export async function deleteTelegramWebhook(config: TelegramConfig) { return telegramApi(config, "deleteWebhook"); }
export async function getTelegramBotInfo(config: TelegramConfig) { return telegramApi(config, "getMe"); }

export function parseTelegramUpdate(body: unknown): TelegramUpdate | null {
  const update = body as Record<string, unknown>;
  if (!update) return null;
  const message = update.message as Record<string, unknown> | undefined;
  const callbackQuery = update.callback_query as Record<string, unknown> | undefined;

  if (message) {
    const chat = message.chat as Record<string, unknown>;
    const from = message.from as Record<string, unknown>;
    return {
      updateId: update.update_id as number, type: "message",
      chatId: String(chat.id), chatType: chat.type as string,
      fromId: String(from?.id || ""), fromName: [from?.first_name, from?.last_name].filter(Boolean).join(" ") || "",
      fromUsername: (from?.username as string) || "", text: (message.text as string) || "",
      messageId: message.message_id as number,
      photo: !!message.photo, document: !!message.document,
      audio: !!(message.audio || message.voice), video: !!message.video,
      contact: message.contact as Record<string, unknown> | undefined,
      location: message.location as Record<string, unknown> | undefined,
    };
  }

  if (callbackQuery) {
    const msg = callbackQuery.message as Record<string, unknown>;
    const chat = msg?.chat as Record<string, unknown>;
    const from = callbackQuery.from as Record<string, unknown>;
    return {
      updateId: update.update_id as number, type: "callback_query",
      chatId: String(chat?.id || ""), chatType: (chat?.type as string) || "private",
      fromId: String(from?.id || ""), fromName: [from?.first_name, from?.last_name].filter(Boolean).join(" ") || "",
      fromUsername: (from?.username as string) || "", text: (callbackQuery.data as string) || "",
      messageId: (msg?.message_id as number) || 0, callbackQueryId: callbackQuery.id as string,
    };
  }
  return null;
}

export interface TelegramUpdate {
  updateId: number; type: "message" | "callback_query";
  chatId: string; chatType: string; fromId: string; fromName: string; fromUsername: string;
  text: string; messageId: number; callbackQueryId?: string;
  photo?: boolean; document?: boolean; audio?: boolean; video?: boolean;
  contact?: Record<string, unknown>; location?: Record<string, unknown>;
}
