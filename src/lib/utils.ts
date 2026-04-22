import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatRelativeTime(date: Date | string): string {
  const now = new Date();
  const d = new Date(date);
  const diffMs = now.getTime() - d.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "Agora mesmo";
  if (diffMins < 60) return `Há ${diffMins}m`;
  if (diffHours < 24) return `Há ${diffHours}h`;
  if (diffDays < 7) return `Há ${diffDays}d`;
  return formatDate(date);
}

export function getChannelLabel(channel: string): string {
  const labels: Record<string, string> = {
    whatsapp: "WhatsApp",
    email: "E-mail",
    phone: "Telefone",
  };
  return labels[channel] || channel;
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    active: "bg-green-500/10 text-green-500",
    resolved: "bg-blue-500/10 text-blue-500",
    escalated: "bg-owly-primary/10 text-owly-primary",
    closed: "bg-white/10 text-white/60",
    open: "bg-yellow-500/10 text-yellow-500",
    in_progress: "bg-blue-500/10 text-blue-500",
    connected: "bg-green-500/10 text-green-500",
    disconnected: "bg-red-500/10 text-red-500",
    error: "bg-red-500/10 text-red-500",
  };
  return colors[status] || "bg-white/5 text-white/40";
}

export function getPriorityColor(priority: string): string {
  const colors: Record<string, string> = {
    low: "bg-white/10 text-white/50",
    medium: "bg-yellow-500/10 text-yellow-500",
    high: "bg-owly-primary/10 text-owly-primary",
    urgent: "bg-red-500/10 text-red-500",
  };
  return colors[priority] || "bg-white/5 text-white/40";
}
