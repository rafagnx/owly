"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { 
  Webhook, 
  MessageCircle, 
  Camera,
  Globe2,
  Send as Telegram, 
  Mail, 
  Phone, 
  Plus,
  RefreshCw,
  Power,
  Settings2,
  Trash2,
  CheckCircle2,
  XCircle,
  AlertTriangle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ChannelConnection {
  id: string;
  name: string;
  type: "whatsapp" | "whatsapp_business" | "instagram" | "facebook" | "telegram" | "email" | "twilio";
  status: "connected" | "disconnected" | "error" | "expired" | "connecting";
  lastActive: string;
  config: Record<string, string>;
}

export default function ChannelsPage() {
  const [connections, setConnections] = useState<ChannelConnection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mocking real data
    setTimeout(() => {
      setConnections([
        {
          id: "1",
          name: "Vendas Matriz (WhatsApp)",
          type: "whatsapp",
          status: "connected",
          lastActive: new Date().toISOString(),
          config: { phoneNumber: "+5511999999999" }
        },
        {
          id: "2",
          name: "@owly_ai (Instagram)",
          type: "instagram",
          status: "disconnected",
          lastActive: new Date(Date.now() - 3600000).toISOString(),
          config: { username: "owly_ai" }
        },
        {
          id: "3",
          name: "Suporte VIP (Telegram)",
          type: "telegram",
          status: "error",
          lastActive: new Date(Date.now() - 86400000).toISOString(),
          config: { botToken: "****************" }
        }
      ]);
      setLoading(false);
    }, 600);
  }, []);

  const getChannelIcon = (type: ChannelConnection["type"]) => {
    switch (type) {
      case "whatsapp":
      case "whatsapp_business": return <MessageCircle className="h-5 w-5 text-emerald-500" />;
      case "instagram": return <Camera className="h-5 w-5 text-pink-500" />;
      case "facebook": return <Globe2 className="h-5 w-5 text-blue-600" />;
      case "telegram": return <Telegram className="h-5 w-5 text-cyan-500" />;
      case "email": return <Mail className="h-5 w-5 text-amber-500" />;
      case "twilio": return <Phone className="h-5 w-5 text-red-500" />;
    }
  };

  const getStatusDisplay = (status: ChannelConnection["status"]) => {
    switch (status) {
      case "connected":
        return (
          <div className="flex items-center gap-1.5 text-emerald-500">
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span className="text-[10px] font-black uppercase tracking-tighter italic">Online</span>
          </div>
        );
      case "disconnected":
        return (
          <div className="flex items-center gap-1.5 text-zinc-500">
            <Power className="h-3.5 w-3.5" />
            <span className="text-[10px] font-black uppercase tracking-tighter italic">Offline</span>
          </div>
        );
      case "error":
      case "expired":
        return (
          <div className="flex items-center gap-1.5 text-red-500">
            <AlertTriangle className="h-3.5 w-3.5" />
            <span className="text-[10px] font-black uppercase tracking-tighter italic">Erro de Conexão</span>
          </div>
        );
      case "connecting":
        return (
          <div className="flex items-center gap-1.5 text-amber-500">
            <RefreshCw className="h-3.5 w-3.5 animate-spin" />
            <span className="text-[10px] font-black uppercase tracking-tighter italic">Conectando...</span>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col h-full bg-background/50">
      <Header
        title="Conexões"
        description="Gerencie os canais de atendimento conectados à nossa IA"
      >
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all active:scale-[0.98]">
          <Plus className="h-4 w-4" />
          Adicionar Canal
        </button>
      </Header>

      <main className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-48 rounded-[2rem] bg-secondary/50 animate-pulse border border-border" />
            ))
          ) : (
            connections.map((c) => (
              <div 
                key={c.id} 
                className="group p-6 rounded-[2rem] bg-secondary border border-border relative overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all"
              >
                {/* Header info */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-[1.25rem] bg-background border border-border flex items-center justify-center shadow-inner">
                      {getChannelIcon(c.type)}
                    </div>
                    <div>
                      <h3 className="font-black italic tracking-tighter text-foreground">{c.name}</h3>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase opacity-60 tracking-wider">
                        {c.type.replace("_", " ")}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 rounded-lg bg-background border border-border hover:text-primary transition-colors">
                      <Settings2 className="h-3.5 w-3.5" />
                    </button>
                    <button className="p-2 rounded-lg bg-background border border-border hover:text-red-500 transition-colors">
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                {/* Status and details */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                  {getStatusDisplay(c.status)}
                  <p className="text-[10px] font-medium text-muted-foreground italic">
                    Uso: 1.2k msg/mês
                  </p>
                </div>

                {/* Interaction indicator for hover */}
                <div className="absolute top-0 right-0 p-4 translate-x-full group-hover:translate-x-0 transition-transform">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                </div>
              </div>
            ))
          )}

          {/* New Connection Card */}
          <div className="group p-6 rounded-[2rem] bg-background border-2 border-dashed border-border flex flex-col items-center justify-center gap-4 hover:border-primary/40 hover:bg-secondary/20 transition-all cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Plus className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
            </div>
            <div className="text-center">
              <p className="text-sm font-black italic tracking-tight">Novo Canal</p>
              <p className="text-[10px] text-muted-foreground uppercase">Configure WhatsApp, Insta ou E-mail</p>
            </div>
          </div>
        </div>

        {/* Informational Section */}
        <div className="mt-12 p-8 rounded-[2.5rem] bg-primary/5 border border-primary/10 flex flex-col lg:flex-row items-center gap-8">
           <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
             <Webhook className="h-8 w-8 text-primary" />
           </div>
           <div className="flex-1">
             <h4 className="text-xl font-black italic tracking-tight text-foreground">Conecte tudo em um só lugar.</h4>
             <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
               Cada canal adicionado permite que nossa IA atenda automaticamente seus clientes, mantendo o histórico unificado e as métricas precisas.
             </p>
           </div>
           <button className="px-6 py-3 rounded-2xl bg-white border border-border text-xs font-bold hover:shadow-lg transition-all active:scale-[0.98]">
             Ver Tutorial Completo
           </button>
        </div>
      </main>
    </div>
  );
}
