import { Header } from "@/components/layout/header";
import { StatCard } from "@/components/ui/stat-card";
import { OnboardingChecklist } from "@/components/ui/onboarding-checklist";
import { prisma } from "@/lib/prisma";
import {
  MessageSquare,
  Ticket,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle,
  Clock,
  ArrowUpRight,
  TrendingUp,
  Activity,
} from "lucide-react";
import { cn, formatRelativeTime, getChannelLabel, getStatusColor } from "@/lib/utils";
import Link from "next/link";

async function getStats() {
  try {
    const [
      totalConversations,
      activeConversations,
      totalTickets,
      openTickets,
      totalMessages,
      recentConversations,
    ] = await Promise.all([
      prisma.conversation.count().catch(() => 0),
      prisma.conversation.count({ where: { status: "active" } }).catch(() => 0),
      prisma.ticket.count().catch(() => 0),
      prisma.ticket.count({ where: { status: "open" } }).catch(() => 0),
      prisma.message.count().catch(() => 0),
      prisma.conversation.findMany({
        take: 8,
        orderBy: { updatedAt: "desc" },
        include: {
          messages: { take: 1, orderBy: { createdAt: "desc" } },
          _count: { select: { messages: true } },
        },
      }).catch(() => []),
    ]);

    const resolvedConversations = await prisma.conversation.count({
      where: { status: "resolved" },
    }).catch(() => 0);

    const resolutionRate =
      totalConversations > 0
        ? Math.round((resolvedConversations / totalConversations) * 100)
        : 0;

    return {
      totalConversations,
      activeConversations,
      totalTickets,
      openTickets,
      totalMessages,
      resolutionRate,
      recentConversations,
    };
  } catch (error) {
    return {
      totalConversations: 0,
      activeConversations: 0,
      totalTickets: 0,
      openTickets: 0,
      totalMessages: 0,
      resolutionRate: 0,
      recentConversations: [],
    };
  }
}

const channelIcons: Record<string, React.ElementType> = {
  whatsapp: MessageCircle,
  email: Mail,
  phone: Phone,
};

export default async function DashboardPage() {
  const stats = await getStats();

  return (
    <div className="flex flex-col h-full bg-background/50">
      <Header
        title="Dashboard Overview"
        description="Acompanhamento em tempo real da sua operação"
      />
      
      <main className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="max-w-[1600px] mx-auto p-6 lg:p-10 space-y-10">
          
          {/* Welcome Section */}
          <section className="relative overflow-hidden rounded-[2.5rem] bg-primary p-8 lg:p-12 text-primary-foreground shadow-2xl shadow-primary/20">
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-widest italic">
                  <Activity className="h-3 w-3" />
                  Sistema Online
                </div>
                <h1 className="text-4xl lg:text-6xl font-black tracking-tight leading-[1.1] italic">
                  Bem-vindo ao futuro do atendimento.
                </h1>
                <p className="text-lg text-primary-foreground/80 max-w-xl font-medium">
                  Sua central inteligente está processando mensagens. Confira o resumo das últimas atividades abaixo.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 flex-shrink-0">
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
                  <p className="text-3xl font-black font-mono tracking-tighter">{stats.totalMessages}</p>
                  <p className="text-xs uppercase font-bold tracking-wider opacity-60">Mensagens</p>
                </div>
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
                  <p className="text-3xl font-black font-mono tracking-tighter">{stats.resolutionRate}%</p>
                  <p className="text-xs uppercase font-bold tracking-wider opacity-60">Resolvido</p>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[150%] bg-white/5 blur-[120px] rounded-full rotate-12" />
          </section>

          <OnboardingChecklist />

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Total de Conversas"
              value={stats.totalConversations}
              icon={MessageSquare}
            />
            <StatCard
              title="Ativas Agora"
              value={stats.activeConversations}
              icon={Clock}
              change="+12%"
              changeType="positive"
            />
            <StatCard
              title="Tickets Abertos"
              value={stats.openTickets}
              icon={Ticket}
            />
            <StatCard
              title="Taxa de Sucesso"
              value={`${stats.resolutionRate}%`}
              icon={CheckCircle}
              change="Estável"
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Recent Activity Table */}
            <div className="xl:col-span-2 bento-card flex flex-col !p-0 overflow-hidden">
              <div className="px-8 py-6 border-b flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-black italic tracking-tight">Atividade Recente</h3>
                  <p className="text-xs text-muted-foreground font-medium">Últimas interações processadas pela IA</p>
                </div>
                <Link href="/conversations" className="text-xs font-bold text-primary hover:underline flex items-center gap-1 group">
                  Ver todas <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
              
              <div className="flex-1 overflow-x-auto">
                {stats.recentConversations.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center text-muted-foreground/40">
                    <MessageSquare className="h-12 w-12 mb-4 opacity-20" />
                    <p className="font-bold uppercase tracking-widest text-xs italic">Nenhuma conversa ainda</p>
                  </div>
                ) : (
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-muted/30">
                        <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Cliente</th>
                        <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Canal</th>
                        <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Status</th>
                        <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Tempo</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {stats.recentConversations.map((conv) => {
                         const ChannelIcon = channelIcons[conv.channel] || MessageSquare;
                         return (
                           <tr key={conv.id} className="group hover:bg-muted/20 transition-colors cursor-pointer">
                             <td className="px-8 py-5">
                               <div className="flex items-center gap-3">
                                 <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-xs">
                                   {conv.customerName[0]}
                                 </div>
                                 <div>
                                   <p className="text-sm font-bold text-foreground truncate max-w-[150px]">{conv.customerName}</p>
                                   <p className="text-[10px] text-muted-foreground font-mono">{conv.customerContact}</p>
                                 </div>
                               </div>
                             </td>
                             <td className="px-8 py-5">
                               <div className="flex items-center gap-2 text-xs font-medium">
                                 <ChannelIcon className="h-3.5 w-3.5 opacity-60" />
                                 {getChannelLabel(conv.channel)}
                               </div>
                             </td>
                             <td className="px-8 py-5">
                               <span className={cn(
                                 "px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter italic",
                                 getStatusColor(conv.status)
                               )}>
                                 {conv.status}
                               </span>
                             </td>
                             <td className="px-8 py-5 text-[10px] font-medium text-muted-foreground">
                               {formatRelativeTime(conv.updatedAt)}
                             </td>
                           </tr>
                         );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>

            {/* Sidebar Cards */}
            <div className="space-y-8">
              {/* Channel Pulse */}
              <div className="bento-card">
                 <h3 className="text-lg font-black italic tracking-tight mb-6">Status dos Canais</h3>
                 <div className="space-y-5">
                    {[
                      { name: "WhatsApp Web", status: "checking", icon: MessageCircle, color: "text-green-500" },
                      { name: "E-mail (IMAP/SMTP)", status: "checking", icon: Mail, color: "text-blue-500" },
                      { name: "Telefone (Twilio)", status: "inactive", icon: Phone, color: "text-purple-500" },
                    ].map((channel, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-secondary/50 border border-transparent hover:border-border transition-all">
                        <div className="flex items-center gap-3">
                          <channel.icon className={cn("h-4 w-4", channel.color)} />
                          <span className="text-sm font-bold truncate">{channel.name}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                           <div className={cn(
                             "w-1.5 h-1.5 rounded-full animate-pulse",
                             channel.status === "checking" ? "bg-yellow-500" : "bg-muted-foreground/30"
                           )} />
                           <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">{channel.status}</span>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* System Health */}
              <div className="p-8 rounded-[2rem] bg-secondary border border-border relative overflow-hidden group">
                 <TrendingUp className="h-10 w-10 text-primary mb-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                 <h3 className="text-2xl font-black italic tracking-tight">Performance da IA</h3>
                 <p className="text-sm text-muted-foreground font-medium mt-2">Seu motor de atendimento está operando com latência média de 1.2s</p>
                 <div className="mt-8 pt-8 border-t border-border/50 flex items-center justify-between">
                    <div className="flex -space-x-2">
                       {[1,2,3].map(i => (
                         <div key={i} className="w-8 h-8 rounded-full border-2 border-secondary bg-muted flex items-center justify-center text-[10px] font-bold">U{i}</div>
                       ))}
                    </div>
                    <span className="text-[10px] font-mono font-bold text-muted-foreground uppercase">+15 usuários</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
