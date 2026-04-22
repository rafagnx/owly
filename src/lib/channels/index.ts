export { sendWABAMessage, sendWABAText, sendWABATemplate, markWABAMessageRead, downloadWABAMedia, verifyWABAWebhook, parseWABAWebhook } from "./whatsapp-cloud";
export type { WABAConfig, WABAMessage, WABAWebhookEvent } from "./whatsapp-cloud";

export { sendInstagramMessage, sendInstagramImage, sendInstagramQuickReplies, parseInstagramWebhook } from "./instagram";
export type { InstagramConfig, InstagramWebhookEvent } from "./instagram";

export { sendMessengerMessage, sendMessengerButtons, sendMessengerImage, parseMessengerWebhook } from "./messenger";
export type { MessengerConfig, MessengerWebhookEvent } from "./messenger";

export { sendTelegramMessage, sendTelegramPhoto, sendTelegramDocument, sendTelegramInlineKeyboard, answerCallbackQuery, setTelegramWebhook, deleteTelegramWebhook, getTelegramBotInfo, parseTelegramUpdate } from "./telegram";
export type { TelegramConfig, TelegramUpdate } from "./telegram";

/**
 * Channel registry — all supported channel types
 */
export const CHANNEL_TYPES = {
  WHATSAPP_QR: "whatsapp",
  WHATSAPP_CLOUD: "whatsapp-cloud",
  INSTAGRAM: "instagram",
  MESSENGER: "messenger",
  TELEGRAM: "telegram",
  EMAIL: "email",
  PHONE: "phone",
  SMS: "sms",
  WEB_CHAT: "web_chat",
} as const;

export type ChannelType = typeof CHANNEL_TYPES[keyof typeof CHANNEL_TYPES];

export function getChannelDisplayName(type: string): string {
  const names: Record<string, string> = {
    whatsapp: "WhatsApp",
    "whatsapp-cloud": "WhatsApp (API)",
    instagram: "Instagram DM",
    messenger: "Messenger",
    telegram: "Telegram",
    email: "E-mail",
    phone: "Telefone",
    sms: "SMS",
    web_chat: "Chat Web",
  };
  return names[type] || type;
}

export function getChannelIcon(type: string): string {
  const icons: Record<string, string> = {
    whatsapp: "💬",
    "whatsapp-cloud": "📱",
    instagram: "📸",
    messenger: "💬",
    telegram: "✈️",
    email: "📧",
    phone: "📞",
    sms: "📱",
    web_chat: "🌐",
  };
  return icons[type] || "💬";
}
