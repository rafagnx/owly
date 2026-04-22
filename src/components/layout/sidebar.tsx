"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Contact,
  MessageSquare,
  Settings,
  Radio,
  Ticket,
  BarChart3,
  ScrollText,
  Timer,
  Zap,
  Workflow,
  Clock,
  Shield,
  FileCode,
  Webhook,
  ChevronRight,
  Search,
  CreditCard,
} from "lucide-react";
import { useState } from "react";

interface NavSection {
  title?: string;
  items: { name: string; href: string; icon: React.ElementType }[];
}

const sections: NavSection[] = [
  {
    title: "Atendimento",
    items: [
      { name: "Painel", href: "/", icon: LayoutDashboard },
      { name: "Conversas", href: "/conversations", icon: MessageSquare },
      { name: "Contatos", href: "/customers", icon: Contact },
      { name: "Meus Chamados", href: "/tickets", icon: Ticket },
    ],
  },
  {
    title: "Inteligência",
    items: [
      { name: "Fluxos (Builder)", href: "/flows", icon: Workflow },
      { name: "Agentes IA", href: "/ai-agents", icon: Radio },
      { name: "Base de Conhecimento", href: "/knowledge", icon: BookOpen },
    ],
  },
  {
    title: "Marketing & Prod.",
    items: [
      { name: "Campanhas", href: "/campaigns", icon: Zap },
      { name: "Respostas Rápidas", href: "/canned-responses", icon: ScrollText },
      { name: "Horários", href: "/business-hours", icon: Clock },
    ],
  },
  {
    title: "Configurações",
    items: [
      { name: "Conexões", href: "/channels", icon: Webhook },
      { name: "Financeiro", href: "/billing", icon: CreditCard },
      { name: "Equipe", href: "/team", icon: Users },
      { name: "SLA & Regras", href: "/sla", icon: Timer },
      { name: "Ajustes", href: "/settings", icon: Settings },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-background flex flex-col h-screen border-r border-border">
      {/* Brand Header */}
      <div className="p-6 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-black text-primary-foreground italic">
             C
          </div>
          <span className="font-black text-foreground text-xl tracking-tighter italic uppercase">Clinic<span className="text-primary NOT-italic">OS</span></span>
        </div>
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/></svg>
        </button>
      </div>

      {/* Modern Search Bar */}
      <div className="px-6 py-4">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground group-focus-within:text-foreground transition-colors" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-secondary border border-border rounded-lg py-2 pl-9 pr-8 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 px-1.5 py-0.5 bg-muted rounded text-[9px] text-muted-foreground font-mono">
            ⌘ K
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-6 custom-scrollbar">
        {sections.map((section, si) => (
          <div key={si}>
            {section.title && (
              <p className="px-3 mb-3 text-[10px] font-bold text-muted-foreground/60 uppercase tracking-[0.2em] font-mono">
                {section.title}
              </p>
            )}
            <nav className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all group",
                      isActive
                        ? "bg-secondary text-foreground font-medium shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={cn("h-4 w-4", isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} />
                      <span>{item.name}</span>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}

        {/* Favorites Mock based on image */}
        <div>
          <p className="px-3 mb-3 text-[10px] font-bold text-muted-foreground/60 uppercase tracking-[0.2em] font-mono">
            Favoritos
          </p>
          <div className="space-y-1">
            <div className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 cursor-pointer group transition-all">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-sm bg-secondary border border-border overflow-hidden flex items-center justify-center text-[8px] font-bold">W</div>
                <span>WhatsApp</span>
              </div>
              <span className="text-[10px] text-muted-foreground/40 font-bold tracking-tighter italic">CANAL</span>
            </div>
            <div className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 cursor-pointer group transition-all">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-sm bg-secondary border border-border overflow-hidden flex items-center justify-center text-[8px] font-bold">S</div>
                <span>Suporte VIP</span>
              </div>
              <span className="text-[10px] text-muted-foreground/40 font-bold tracking-tighter italic">ADMIN</span>
            </div>
          </div>
        </div>
      </div>

      {/* User Footer refined */}
      <div className="p-4 mt-auto border-t border-border">
        <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-secondary transition-colors cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">
            R
          </div>
          <div className="flex-1 min-w-0 pr-1">
            <p className="text-sm font-bold text-foreground truncate uppercase tracking-tighter italic">Rafael Admin</p>
            <p className="text-[10px] text-muted-foreground truncate">rafael@owly.ai</p>
          </div>
        </div>
      </div>
    </aside>

  );
}
