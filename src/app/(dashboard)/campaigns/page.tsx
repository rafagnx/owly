"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { 
  Zap, 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Send, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  BarChart2,
  Calendar,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/ui/stat-card";

interface Campaign {
  id: string;
  name: string;
  status: "draft" | "scheduled" | "sending" | "completed" | "failed";
  channel: "whatsapp" | "email" | "sms";
  sent: number;
  total: number;
  scheduledAt: string | null;
  createdAt: string;
}

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data for initial UI
  useEffect(() => {
    setTimeout(() => {
      setCampaigns([
        {
          id: "1",
          name: "Promoção de Verão - VIP",
          status: "completed",
          channel: "whatsapp",
          sent: 450,
          total: 450,
          scheduledAt: null,
          createdAt: new Date().toISOString(),
        },
        {
          id: "2",
          name: "Recuperação de Carrinho",
          status: "scheduled",
          channel: "whatsapp",
          sent: 0,
          total: 120,
          scheduledAt: new Date(Date.now() + 86400000).toISOString(),
          createdAt: new Date().toISOString(),
        },
        {
          id: "3",
          name: "Newsletter Mensal - Abril",
          status: "draft",
          channel: "email",
          sent: 0,
          total: 0,
          scheduledAt: null,
          createdAt: new Date().toISOString(),
        }
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const getStatusBadge = (status: Campaign["status"]) => {
    switch (status) {
      case "completed": return <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">Concluída</Badge>;
      case "scheduled": return <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">Agendada</Badge>;
      case "sending": return <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20 animate-pulse">Enviando</Badge>;
      case "draft": return <Badge className="bg-zinc-500/10 text-zinc-500 border-zinc-500/20">Rascunho</Badge>;
      case "failed": return <Badge className="bg-red-500/10 text-red-500 border-red-500/20">Falhou</Badge>;
    }
  };

  return (
    <div className="flex flex-col h-full bg-background/50">
      <Header
        title="Campanhas"
        description="Disparos em massa e automações de marketing"
      >
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all active:scale-[0.98]">
          <Plus className="h-4 w-4" />
          Nova Campanha
        </button>
      </Header>

      <main className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-10 space-y-8">
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Mensagens Enviadas" value="12.4k" icon={Send} change="+14%" changeType="positive" />
          <StatCard title="Taxa de Entrega" value="98.2%" icon={CheckCircle2} />
          <StatCard title="Alcance Total" value="8.5k" icon={Users} />
          <StatCard title="Campanhas Ativas" value="3" icon={Zap} />
        </div>

        {/* List Section */}
        <div className="bento-card !p-0 overflow-hidden">
          <div className="p-6 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar campanhas..."
                className="w-full bg-secondary/50 border border-border rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary/50"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-2 rounded-xl bg-secondary border border-border text-xs font-bold hover:bg-muted transition-colors">
                <Filter className="h-3.5 w-3.5" />
                Filtros
              </button>
              <button className="flex items-center gap-2 px-3 py-2 rounded-xl bg-secondary border border-border text-xs font-bold hover:bg-muted transition-colors">
                <Calendar className="h-3.5 w-3.5" />
                Agendamentos
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-muted/30">
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Nome da Campanha</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Status</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Progresso</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Canal</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Agendamento</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y border-border/50">
                {loading ? (
                  Array.from({ length: 3 }).map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td colSpan={6} className="px-6 py-8 h-16 bg-muted/10"></td>
                    </tr>
                  ))
                ) : (
                  campaigns.map((c) => (
                    <tr key={c.id} className="group hover:bg-muted/10 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-bold text-foreground">{c.name}</p>
                          <p className="text-[10px] text-muted-foreground font-medium">ID: {c.id}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {getStatusBadge(c.status)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col gap-1.5 w-32">
                          <div className="flex items-center justify-between text-[10px] font-bold">
                            <span>{Math.round((c.sent / (c.total || 1)) * 100)}%</span>
                            <span className="text-muted-foreground">{c.sent}/{c.total}</span>
                          </div>
                          <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                            <div 
                              className={cn(
                                "h-full transition-all duration-500",
                                c.status === "failed" ? "bg-red-500" : "bg-primary"
                              )} 
                              style={{ width: `${(c.sent / (c.total || 1)) * 100}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-secondary flex items-center justify-center">
                            <Zap className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-xs font-bold capitalize">{c.channel}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                          <Clock className="h-3.5 w-3.5 opacity-60" />
                          {c.scheduledAt ? new Date(c.scheduledAt).toLocaleDateString() : "Imediato"}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-all">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
