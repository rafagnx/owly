"use client";

import { cn } from "@/lib/utils";
import {
  CheckCircle,
  Circle,
  UserCheck,
  Building2,
  Bot,
  BookOpen,
  Radio,
  Users,
  ChevronRight,
  X,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  href: string;
  completed: boolean;
  icon: React.ElementType;
}

export function OnboardingChecklist() {
  const [items, setItems] = useState<ChecklistItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  const fetchStatus = useCallback(async () => {
    setLoading(true);
    try {
      const [authRes, settingsRes, entriesRes, channelsRes, teamRes] =
        await Promise.all([
          fetch("/api/auth").catch(() => ({ ok: false })),
          fetch("/api/settings").catch(() => ({ ok: false })),
          fetch("/api/knowledge/entries").catch(() => ({ ok: false })),
          fetch("/api/channels").catch(() => ({ ok: false })),
          fetch("/api/team/members").catch(() => ({ ok: false })),
        ]);

      const auth = authRes.ok ? await (authRes as any).json() : {};
      const settings = settingsRes.ok ? await (settingsRes as any).json() : {};
      const entries = entriesRes.ok ? await (entriesRes as any).json() : [];
      const channels = channelsRes.ok ? await (channelsRes as any).json() : [];
      const team = teamRes.ok ? await (teamRes as any).json() : [];

      const connectedChannels = Array.isArray(channels)
        ? channels.filter((c: { isActive: boolean }) => c.isActive)
        : [];

      const checklist: ChecklistItem[] = [
        {
          id: "admin",
          title: "Setup de Admin",
          description: "Conta autenticada e segura",
          href: "/admin",
          completed: auth.authenticated === true,
          icon: UserCheck,
        },
        {
          id: "business",
          title: "Identidade Visual",
          description: "Nome e perfil do seu negócio",
          href: "/settings",
          completed: !!settings.businessName && settings.businessName !== "My Business",
          icon: Building2,
        },
        {
          id: "ai",
          title: "Motor de IA",
          description: "Conexão com LLM (OpenAI/Gemini)",
          href: "/settings",
          completed: !!settings.aiApiKey && settings.aiApiKey.length > 0,
          icon: Bot,
        },
        {
          id: "knowledge",
          title: "Cérebro IA",
          description: "Alimentar base de conhecimento",
          href: "/knowledge",
          completed: Array.isArray(entries) && entries.length > 0,
          icon: BookOpen,
        },
        {
          id: "channels",
          title: "Omnichannel",
          description: "Conectar WhatsApp/Email",
          href: "/channels",
          completed: connectedChannels.length > 0,
          icon: Radio,
        },
      ];

      setItems(checklist);
    } catch (err) {
      console.error("Failed to fetch onboarding status:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const wasDismissed = localStorage.getItem("owly-onboarding-dismissed");
    if (wasDismissed === "true") setDismissed(true);
    fetchStatus();
  }, [fetchStatus]);

  function handleDismiss() {
    setDismissed(true);
    localStorage.setItem("owly-onboarding-dismissed", "true");
  }

  const completedCount = items.filter((i) => i.completed).length;
  const totalCount = items.length;
  const allComplete = completedCount === totalCount && totalCount > 0;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  if (dismissed || allComplete || loading) return null;

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-secondary border border-border p-8 lg:p-10">
      <div className="absolute top-0 right-0 p-6">
        <button onClick={handleDismiss} className="p-2 text-muted-foreground hover:text-foreground transition-colors hover:bg-muted rounded-full">
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/3 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest italic">
            <Sparkles className="h-3 w-3" /> Onboarding
          </div>
          <h2 className="text-3xl font-black tracking-tight leading-none italic">Complete o Setup</h2>
          <p className="text-sm text-muted-foreground font-medium leading-relaxed">
            Estamos quase lá. Falta pouco para sua IA começar a trabalhar por você com 100% de eficiência.
          </p>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-black uppercase tracking-tighter italic">
              <span>Progresso</span>
              <span>{progressPercent}%</span>
            </div>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
               <div className="h-full bg-primary transition-all duration-700 ease-out" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item) => {
             const Icon = item.icon;
             return (
               <Link 
                 key={item.id} 
                 href={item.href}
                 className={cn(
                   "group flex items-center gap-4 p-5 rounded-2xl border transition-all cursor-pointer",
                   item.completed 
                    ? "bg-muted/30 border-transparent opacity-60" 
                    : "bg-background border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-0.5"
                 )}
               >
                 <div className={cn(
                   "w-10 h-10 rounded-xl flex items-center justify-center transition-colors shadow-sm border",
                   item.completed ? "bg-green-500/10 text-green-500 border-green-500/20" : "bg-secondary text-muted-foreground group-hover:text-primary group-hover:border-primary/20"
                 )}>
                    {item.completed ? <CheckCircle className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                 </div>
                 <div className="flex-1 min-w-0 pr-4">
                    <p className={cn("text-xs font-black uppercase tracking-tighter italic", item.completed ? "text-muted-foreground" : "text-foreground")}>
                      {item.title}
                    </p>
                    <p className="text-[10px] text-muted-foreground font-medium truncate">{item.description}</p>
                 </div>
                 {!item.completed && <ChevronRight className="h-3 w-3 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />}
               </Link>
             );
          })}
        </div>
      </div>
    </div>
  );
}
