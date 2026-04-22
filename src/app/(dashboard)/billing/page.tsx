"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { 
  CreditCard, 
  Check, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  History, 
  Download,
  ExternalLink,
  Target
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export default function BillingPage() {
  const [currentPlan, setCurrentPlan] = useState({
    name: "Plano Business",
    status: "active",
    price: "R$ 497,00/mês",
    nextBilling: "15 de Mai, 2026",
    usage: {
      messages: 4500,
      messagesLimit: 10000,
      channels: 3,
      channelsLimit: 5,
    }
  });

  const [invoices, setInvoices] = useState([
    { id: "INV-001", date: "15 Abr, 2026", amount: "R$ 497,00", status: "paid" },
    { id: "INV-002", date: "15 Mar, 2026", amount: "R$ 497,00", status: "paid" },
    { id: "INV-003", date: "15 Fev, 2026", amount: "R$ 197,00", status: "paid" },
  ]);

  return (
    <div className="flex flex-col h-full bg-background/50">
      <Header
        title="Financeiro"
        description="Gerencie sua assinatura, faturas e métodos de pagamento"
      />

      <main className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-10 space-y-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Plan Card */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bento-card relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Target className="h-40 w-40 text-primary rotate-12" />
               </div>

               <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                  <div>
                    <Badge className="bg-primary/20 text-primary border-primary/20 mb-3 px-3 py-1 text-xs font-black italic tracking-tighter uppercase">
                      PLANO ATUAL
                    </Badge>
                    <h2 className="text-4xl font-black italic tracking-tighter text-foreground mb-1">{currentPlan.name}</h2>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                       Próxima cobrança em <span className="font-bold text-foreground">{currentPlan.nextBilling}</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-black italic tracking-tighter text-foreground">{currentPlan.price}</p>
                    <button className="mt-4 flex items-center gap-2 px-6 py-2 rounded-xl bg-background border border-border text-xs font-bold hover:bg-muted transition-all active:scale-[0.98]">
                      Upgrade de Plano
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
               </div>

               {/* Usage Progress */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <p className="text-xs font-black uppercase tracking-widest text-muted-foreground/60 italic">Mensagens / Mês</p>
                      <p className="text-xs font-bold">{currentPlan.usage.messages.toLocaleString()} / {currentPlan.usage.messagesLimit.toLocaleString()}</p>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-1000" 
                        style={{ width: `${(currentPlan.usage.messages / currentPlan.usage.messagesLimit) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <p className="text-xs font-black uppercase tracking-widest text-muted-foreground/60 italic">Canais Conectados</p>
                      <p className="text-xs font-bold">{currentPlan.usage.channels} / {currentPlan.usage.channelsLimit}</p>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-1000" 
                        style={{ width: `${(currentPlan.usage.channels / currentPlan.usage.channelsLimit) * 100}%` }}
                      />
                    </div>
                  </div>
               </div>
            </div>

            {/* Payment Method */}
            <div className="bento-card">
              <div className="flex items-center justify-between mb-6">
                 <h3 className="text-lg font-black italic tracking-tighter flex items-center gap-2">
                   <CreditCard className="h-5 w-5 text-primary" />
                   Método de Pagamento
                 </h3>
                 <button className="text-xs font-bold text-primary hover:underline">Alterar</button>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary border border-border">
                 <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center border border-border">
                   <span className="font-black italic tracking-tighter text-indigo-500">VISA</span>
                 </div>
                 <div>
                   <p className="text-sm font-bold">•••• •••• •••• 8842</p>
                   <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">Expira em 12/28</p>
                 </div>
                 <div className="ml-auto">
                    <Badge className="bg-emerald-500/10 text-emerald-500 border-none px-2 py-0">Principal</Badge>
                 </div>
              </div>
            </div>
          </div>

          {/* Invoices List */}
          <div className="space-y-6">
             <div className="bento-card h-full flex flex-col">
                <h3 className="text-lg font-black italic tracking-tighter mb-6 flex items-center gap-2">
                   <History className="h-5 w-5 text-primary" />
                   Histórico
                </h3>
                <div className="space-y-4 flex-1">
                   {invoices.map((inv) => (
                     <div key={inv.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-secondary transition-colors group">
                        <div className="flex items-center gap-3">
                           <div className="p-2 rounded-lg bg-background border border-border">
                              <Download className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground" />
                           </div>
                           <div>
                              <p className="text-xs font-bold tracking-tight">{inv.date}</p>
                              <p className="text-[10px] text-muted-foreground uppercase">{inv.id}</p>
                           </div>
                        </div>
                        <div className="text-right">
                           <p className="text-xs font-black italic tracking-tighter">{inv.amount}</p>
                           <p className="text-[8px] font-black uppercase text-emerald-500 italic leading-none">Pago</p>
                        </div>
                     </div>
                   ))}
                </div>
                
                <button className="mt-8 w-full py-3 rounded-xl bg-secondary border border-border text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-muted transition-all">
                  Ver Todas Faturas
                  <ExternalLink className="h-3 w-3" />
                </button>
             </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="p-8 rounded-[2.5rem] bg-indigo-500 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-indigo-500/20">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                 <ShieldCheck className="h-8 w-8" />
              </div>
              <div>
                 <h4 className="text-xl font-black italic tracking-tight">Pagamento 100% Seguro</h4>
                 <p className="text-sm text-white/70 max-w-sm">
                   Suas informações de pagamento são processadas de forma segura e criptografada.
                 </p>
              </div>
           </div>
           <button className="px-8 py-3 rounded-2xl bg-white text-indigo-500 font-black italic tracking-tighter hover:scale-105 transition-all shadow-xl active:scale-[0.98]">
              Falar com Suporte
           </button>
        </div>
      </main>
    </div>
  );
}
