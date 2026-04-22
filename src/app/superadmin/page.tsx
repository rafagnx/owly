"use client";

import { useEffect, useState } from "react";

interface Stats {
  tenants: { total: number; active: number; suspended: number; trial: number };
  plans: number;
  revenue: { total: number; payments: number };
  recentTenants: Array<{ id: string; slug: string; name: string; status: string; createdAt: string }>;
}

export default function SuperAdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/superadmin/stats")
      .then((r) => r.json())
      .then((d) => setStats(d.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Dashboard</h1>
        <p className="text-zinc-400 mt-1">Visão geral da plataforma</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Total de Tenants"
          value={stats?.tenants.total || 0}
          icon="🏢"
          gradient="from-indigo-500/20 to-purple-500/20"
          border="border-indigo-500/20"
        />
        <StatCard
          label="Tenants Ativos"
          value={stats?.tenants.active || 0}
          icon="✅"
          gradient="from-emerald-500/20 to-green-500/20"
          border="border-emerald-500/20"
        />
        <StatCard
          label="Em Trial"
          value={stats?.tenants.trial || 0}
          icon="⏳"
          gradient="from-amber-500/20 to-orange-500/20"
          border="border-amber-500/20"
        />
        <StatCard
          label="Receita Total"
          value={`R$ ${(stats?.revenue.total || 0).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
          icon="💰"
          gradient="from-cyan-500/20 to-blue-500/20"
          border="border-cyan-500/20"
        />
        <StatCard
          label="Saúde do Sistema"
          value="100%"
          icon="⚡"
          gradient="from-pink-500/20 to-rose-500/20"
          border="border-pink-500/20"
        />
      </div>

      {/* Recent Tenants */}
      <div className="bg-[#0d0d14] border border-white/5 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-white/5">
          <h2 className="text-lg font-semibold text-white">Tenants Recentes</h2>
        </div>
        <div className="divide-y divide-white/5">
          {stats?.recentTenants.map((tenant) => (
            <div key={tenant.id} className="flex items-center justify-between p-5 hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold uppercase">
                  {tenant.name[0]}
                </div>
                <div>
                  <p className="text-white font-medium">{tenant.name}</p>
                  <p className="text-sm text-zinc-500">{tenant.slug}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <StatusBadge status={tenant.status} />
                <span className="text-sm text-zinc-500">
                  {new Date(tenant.createdAt).toLocaleDateString("pt-BR")}
                </span>
              </div>
            </div>
          ))}
          {(!stats?.recentTenants || stats.recentTenants.length === 0) && (
            <div className="p-8 text-center text-zinc-500">
              Nenhum tenant criado ainda
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon,
  gradient,
  border,
}: {
  label: string;
  value: number | string;
  icon: string;
  gradient: string;
  border: string;
}) {
  return (
    <div className={`bg-gradient-to-br ${gradient} border ${border} rounded-2xl p-6 backdrop-blur-xl`}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="text-3xl font-bold text-white tracking-tight">{value}</p>
      <p className="text-sm text-zinc-400 mt-1">{label}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    active: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    trial: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    suspended: "bg-red-500/10 text-red-400 border-red-500/20",
    cancelled: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
  };

  return (
    <span className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${styles[status] || styles.cancelled}`}>
      {status}
    </span>
  );
}
