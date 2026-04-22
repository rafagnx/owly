"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/layout/header";
import { 
  Plus, 
  Search, 
  Building2, 
  BadgeCheck, 
  Mail, 
  Calendar,
  MoreVertical,
  ArrowUpRight,
  Filter
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface Tenant {
  id: string;
  slug: string;
  name: string;
  status: string;
  ownerName: string;
  ownerEmail: string;
  plan?: { name: string };
  createdAt: string;
}

export default function SuperAdminTenants() {
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/superadmin/tenants")
      .then(r => r.json())
      .then(d => setTenants(d.data || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filteredTenants = tenants.filter(t => 
    t.name.toLowerCase().includes(search.toLowerCase()) || 
    t.slug.toLowerCase().includes(search.toLowerCase()) ||
    t.ownerEmail.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-background/50">
      <Header
        title="Tenants / Clientes"
        description="Gerenciamento global de instâncias e clientes"
      />

      <main className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-10 space-y-8">
        
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                   type="text" 
                   placeholder="Buscar por nome, slug ou email..."
                   className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/20 text-sm font-medium transition-all"
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-background border border-border text-xs font-bold hover:bg-muted transition-all">
                  <Filter className="h-4 w-4" />
                  Filtros
                </button>
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-black italic tracking-tighter uppercase shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  <Plus className="h-4 w-4" />
                  Novo Cliente
                </button>
            </div>
        </div>

        {/* Big Stats for SuperAdmin */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
           <div className="bento-card bg-primary text-primary-foreground shadow-2xl shadow-primary/20">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-1">Total de Clientes</p>
              <h3 className="text-4xl font-black italic tracking-tighter leading-none">{tenants.length}</h3>
           </div>
           <div className="bento-card">
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Clientes Ativos</p>
              <h3 className="text-4xl font-black italic tracking-tighter leading-none">{tenants.filter(t => t.status === 'active').length}</h3>
           </div>
           <div className="bento-card">
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Trial / Pendentes</p>
              <h3 className="text-4xl font-black italic tracking-tighter leading-none">{tenants.filter(t => t.status !== 'active').length}</h3>
           </div>
        </div>

        {/* Table View */}
        <div className="bento-card p-0 overflow-hidden">
           <div className="overflow-x-auto">
              <table className="w-full text-left">
                 <thead>
                    <tr className="border-b border-border bg-secondary/30">
                       <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground italic">Cliente</th>
                       <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground italic">Status</th>
                       <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground italic">Plano</th>
                       <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground italic">Proprietário</th>
                       <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground italic text-right">Ações</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-border">
                    {loading ? (
                      [1,2,3].map(i => (
                        <tr key={i} className="animate-pulse">
                           <td colSpan={5} className="px-6 py-6 h-12 bg-secondary/10" />
                        </tr>
                      ))
                    ) : filteredTenants.map(tenant => (
                    <tr key={tenant.id} className="hover:bg-secondary/50 transition-colors group">
                       <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-xs">
                                {tenant.name[0]}
                             </div>
                             <div>
                                <p className="text-sm font-black italic tracking-tighter text-foreground leading-tight">{tenant.name}</p>
                                <p className="text-[10px] text-muted-foreground font-medium flex items-center gap-1">
                                   {tenant.slug}.{process.env.BASE_DOMAIN || 'localhost'}
                                   <ArrowUpRight className="h-2 w-2" />
                                </p>
                             </div>
                          </div>
                       </td>
                       <td className="px-6 py-4">
                          <Badge className={cn(
                             "px-2 py-0 border-none text-[10px] font-black italic tracking-tighter uppercase",
                             tenant.status === 'active' ? "bg-emerald-500/20 text-emerald-500" : "bg-amber-500/20 text-amber-500"
                          )}>
                             {tenant.status}
                          </Badge>
                       </td>
                       <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                             <BadgeCheck className="h-3.5 w-3.5 text-primary" />
                             <span className="text-xs font-bold">{tenant.plan?.name || 'Sem Plano'}</span>
                          </div>
                       </td>
                       <td className="px-6 py-4">
                          <div>
                             <p className="text-xs font-bold text-foreground leading-tight">{tenant.ownerName}</p>
                             <p className="text-[10px] text-muted-foreground">{tenant.ownerEmail}</p>
                          </div>
                       </td>
                       <td className="px-6 py-4 text-right">
                          <button className="p-2 rounded-lg hover:bg-background border border-transparent hover:border-border transition-all">
                             <MoreVertical className="h-4 w-4 text-muted-foreground" />
                          </button>
                       </td>
                    </tr>
                    ))}
                    {!loading && filteredTenants.length === 0 && (
                      <tr>
                        <td colSpan={5} className="px-6 py-20 text-center">
                           <Building2 className="h-12 w-12 text-muted-foreground/20 mx-auto mb-4" />
                           <p className="text-sm text-muted-foreground font-bold">Nenhum cliente encontrado</p>
                        </td>
                      </tr>
                    )}
                 </tbody>
              </table>
           </div>
        </div>
      </main>
    </div>
  );
}
