"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { 
  Bot, 
  Plus, 
  Settings2, 
  BrainCircuit, 
  MessageSquare, 
  Activity, 
  Cpu, 
  Zap,
  MoreHorizontal,
  Trash2,
  Play,
  Pause,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { StatCard } from "@/components/ui/stat-card";
import { Badge } from "@/components/ui/badge";

interface AIAgent {
  id: string;
  name: string;
  provider: string;
  model: string;
  status: "idle" | "running" | "stopped";
  usage: number;
  accuracy: number;
}

export default function AIAgentsPage() {
  const [agents, setAgents] = useState<AIAgent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAgents([
        {
          id: "1",
          name: "Vendedor Alta Conversão",
          provider: "OpenAI",
          model: "gpt-4o",
          status: "running",
          usage: 1250,
          accuracy: 94
        },
        {
          id: "2",
          name: "Suporte Técnico N1",
          provider: "Gemini",
          model: "gemini-1.5-pro",
          status: "running",
          usage: 840,
          accuracy: 88
        },
        {
          id: "3",
          name: "Agente de Qualificação",
          provider: "Claude",
          model: "claude-3-opus",
          status: "stopped",
          usage: 0,
          accuracy: 92
        }
      ]);
      setLoading(false);
    }, 700);
  }, []);

  return (
    <div className="flex flex-col h-full bg-background/50">
      <Header
        title="Agentes IA"
        description="Configure seus especialistas inteligentes treinados com seus dados"
      >
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all active:scale-[0.98]">
          <Plus className="h-4 w-4" />
          Novo Agente
        </button>
      </Header>

      <main className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-10 space-y-8">
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total de Interações" value="2.3k" icon={MessageSquare} change="No mês" />
          <StatCard title="Tempo Médio" value="1.2s" icon={Zap} changeType="positive" />
          <StatCard title="Tokens Consumidos" value="1.5M" icon={Cpu} />
          <StatCard title="Saúde dos Agentes" value="Ótima" icon={Activity} />
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {loading ? (
            Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="h-64 rounded-[2rem] bg-secondary/50 animate-pulse border border-border" />
            ))
          ) : (
            agents.map((agent) => (
              <div key={agent.id} className="bento-card group relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl shadow-primary/5">
                      <Bot className="h-8 w-8" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-black italic tracking-tighter text-foreground">{agent.name}</h3>
                        <div className={cn(
                          "w-2 h-2 rounded-full animate-pulse",
                          agent.status === "running" ? "bg-green-500" : "bg-zinc-500"
                        )} />
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-secondary text-muted-foreground border-transparent px-2 py-0">{agent.provider}</Badge>
                        <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">{agent.model}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-1">
                     <button className="p-2.5 rounded-xl bg-background border border-border hover:border-primary transition-all group/btn">
                       <Settings2 className="h-4 w-4 text-muted-foreground group-hover/btn:text-primary" />
                     </button>
                     <button className="p-2.5 rounded-xl bg-background border border-border hover:border-primary transition-all">
                       <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                     </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="p-4 rounded-2xl bg-background/50 border border-border/50">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase mb-1">Uso</p>
                    <p className="text-lg font-black font-mono tracking-tighter">{agent.usage}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-background/50 border border-border/50">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase mb-1">Precisão</p>
                    <p className="text-lg font-black font-mono tracking-tighter text-emerald-500">{agent.accuracy}%</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-background/50 border border-border/50 flex flex-col justify-center items-center">
                    <button className={cn(
                      "w-full h-full rounded-xl flex items-center justify-center gap-2 text-xs font-bold transition-all",
                      agent.status === "running" ? "bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white" : "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white"
                    )}>
                      {agent.status === "running" ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                      {agent.status === "running" ? "Parar" : "Iniciar"}
                    </button>
                  </div>
                </div>

                {/* Footer section */}
                <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
                   <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                      <BrainCircuit className="h-4 w-4 text-primary/60" />
                      Treinado com <span className="font-bold text-foreground">14 arquivos</span> de conhecimento
                   </div>
                   <button className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Configurar Treino <ArrowRight className="h-3.5 w-3.5" />
                   </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
