"use client";

import { useEffect, useState } from "react";

interface Plan {
  id: string;
  name: string;
  slug: string;
  description: string;
  priceMonthly: number;
  priceYearly: number;
  maxUsers: number;
  maxChannels: number;
  maxContacts: number;
  maxMessagesMonth: number;
  maxFlows: number;
  maxAiAgents: number;
  hasWhatsappQr: boolean;
  hasWhatsappApi: boolean;
  hasInstagram: boolean;
  hasMessenger: boolean;
  hasTelegram: boolean;
  hasChatbot: boolean;
  hasAiAgents: boolean;
  hasCampaigns: boolean;
  hasApi: boolean;
  hasWhiteLabel: boolean;
  isActive: boolean;
  tenantCount: number;
}

export default function PlansPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);

  const loadPlans = async () => {
    setLoading(true);
    const res = await fetch("/api/superadmin/plans");
    const data = await res.json();
    setPlans(data.data);
    setLoading(false);
  };

  useEffect(() => { loadPlans(); }, []);

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Planos</h1>
          <p className="text-zinc-400 mt-1">Configurar planos e limites para tenants</p>
        </div>
        <button
          onClick={() => setShowCreate(true)}
          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-500/20"
        >
          + Novo Plano
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full flex justify-center p-8">
            <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : plans.length === 0 ? (
          <div className="col-span-full text-center p-8 text-zinc-500">
            Nenhum plano criado. Crie o primeiro plano para poder provisionar tenants.
          </div>
        ) : (
          plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-[#0d0d14] border border-white/5 rounded-2xl overflow-hidden hover:border-indigo-500/20 transition-all group"
            >
              <div className="p-6 border-b border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                  <span className="text-xs bg-indigo-500/10 text-indigo-400 px-2 py-1 rounded-lg border border-indigo-500/20">
                    {plan.tenantCount} tenants
                  </span>
                </div>
                <p className="text-sm text-zinc-500">{plan.description || "Sem descrição"}</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-white">
                    R$ {plan.priceMonthly.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </span>
                  <span className="text-zinc-500">/mês</span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <LimitRow label="Usuários" value={plan.maxUsers} />
                <LimitRow label="Canais" value={plan.maxChannels} />
                <LimitRow label="Contatos" value={plan.maxContacts} />
                <LimitRow label="Msgs/mês" value={plan.maxMessagesMonth} />
                <LimitRow label="Flows" value={plan.maxFlows} />
                <LimitRow label="Agentes IA" value={plan.maxAiAgents} />
                
                <div className="pt-3 border-t border-white/5 space-y-2">
                  <FeatureRow label="WhatsApp QR" enabled={plan.hasWhatsappQr} />
                  <FeatureRow label="WhatsApp API" enabled={plan.hasWhatsappApi} />
                  <FeatureRow label="Instagram" enabled={plan.hasInstagram} />
                  <FeatureRow label="Messenger" enabled={plan.hasMessenger} />
                  <FeatureRow label="Telegram" enabled={plan.hasTelegram} />
                  <FeatureRow label="Chatbot" enabled={plan.hasChatbot} />
                  <FeatureRow label="Agentes IA" enabled={plan.hasAiAgents} />
                  <FeatureRow label="Campanhas" enabled={plan.hasCampaigns} />
                  <FeatureRow label="API REST" enabled={plan.hasApi} />
                  <FeatureRow label="White Label" enabled={plan.hasWhiteLabel} />
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {showCreate && (
        <CreatePlanModal
          onClose={() => setShowCreate(false)}
          onCreated={() => { setShowCreate(false); loadPlans(); }}
        />
      )}
    </div>
  );
}

function LimitRow({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-zinc-400">{label}</span>
      <span className="text-white font-medium">{value === -1 ? "Ilimitado" : value.toLocaleString()}</span>
    </div>
  );
}

function FeatureRow({ label, enabled }: { label: string; enabled: boolean }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className={enabled ? "text-emerald-400" : "text-zinc-600"}>{enabled ? "✓" : "✗"}</span>
      <span className={enabled ? "text-zinc-300" : "text-zinc-600"}>{label}</span>
    </div>
  );
}

function CreatePlanModal({ onClose, onCreated }: { onClose: () => void; onCreated: () => void }) {
  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: "",
    priceMonthly: "97",
    priceYearly: "970",
    maxUsers: "5",
    maxChannels: "3",
    maxContacts: "1000",
    maxMessagesMonth: "10000",
    maxFlows: "10",
    maxAiAgents: "1",
    hasWhatsappQr: true,
    hasWhatsappApi: false,
    hasInstagram: false,
    hasMessenger: false,
    hasTelegram: false,
    hasChatbot: true,
    hasAiAgents: false,
    hasCampaigns: false,
    hasApi: false,
    hasWhiteLabel: false,
  });
  const [creating, setCreating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreating(true);

    await fetch("/api/superadmin/plans", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        priceMonthly: parseFloat(form.priceMonthly),
        priceYearly: parseFloat(form.priceYearly),
        maxUsers: parseInt(form.maxUsers),
        maxChannels: parseInt(form.maxChannels),
        maxContacts: parseInt(form.maxContacts),
        maxMessagesMonth: parseInt(form.maxMessagesMonth),
        maxFlows: parseInt(form.maxFlows),
        maxAiAgents: parseInt(form.maxAiAgents),
      }),
    });

    setCreating(false);
    onCreated();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm overflow-y-auto py-8">
      <div className="bg-[#0d0d14] border border-white/10 rounded-2xl w-full max-w-2xl mx-4 shadow-2xl">
        <div className="p-6 border-b border-white/5">
          <h2 className="text-xl font-bold text-white">Criar Plano</h2>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-4">
            <InputField label="Nome" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
            <InputField label="Slug" value={form.slug} onChange={(v) => setForm({ ...form, slug: v.toLowerCase().replace(/[^a-z0-9-]/g, "") })} required />
          </div>
          <InputField label="Descrição" value={form.description} onChange={(v) => setForm({ ...form, description: v })} />
          <div className="grid grid-cols-2 gap-4">
            <InputField label="Preço Mensal (R$)" value={form.priceMonthly} onChange={(v) => setForm({ ...form, priceMonthly: v })} type="number" />
            <InputField label="Preço Anual (R$)" value={form.priceYearly} onChange={(v) => setForm({ ...form, priceYearly: v })} type="number" />
          </div>
          
          <h3 className="text-sm font-semibold text-zinc-400 pt-2">Limites</h3>
          <div className="grid grid-cols-3 gap-4">
            <InputField label="Usuários" value={form.maxUsers} onChange={(v) => setForm({ ...form, maxUsers: v })} type="number" />
            <InputField label="Canais" value={form.maxChannels} onChange={(v) => setForm({ ...form, maxChannels: v })} type="number" />
            <InputField label="Contatos" value={form.maxContacts} onChange={(v) => setForm({ ...form, maxContacts: v })} type="number" />
            <InputField label="Msgs/mês" value={form.maxMessagesMonth} onChange={(v) => setForm({ ...form, maxMessagesMonth: v })} type="number" />
            <InputField label="Flows" value={form.maxFlows} onChange={(v) => setForm({ ...form, maxFlows: v })} type="number" />
            <InputField label="Agentes IA" value={form.maxAiAgents} onChange={(v) => setForm({ ...form, maxAiAgents: v })} type="number" />
          </div>

          <h3 className="text-sm font-semibold text-zinc-400 pt-2">Features</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              ["hasWhatsappQr", "WhatsApp QR"],
              ["hasWhatsappApi", "WhatsApp API (WABA)"],
              ["hasInstagram", "Instagram DM"],
              ["hasMessenger", "Facebook Messenger"],
              ["hasTelegram", "Telegram"],
              ["hasChatbot", "Chatbot Builder"],
              ["hasAiAgents", "Agentes de IA"],
              ["hasCampaigns", "Campanhas/Disparo"],
              ["hasApi", "API REST"],
              ["hasWhiteLabel", "White Label"],
            ].map(([key, label]) => (
              <label key={key} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={(form as Record<string, unknown>)[key] as boolean}
                  onChange={(e) => setForm({ ...form, [key]: e.target.checked })}
                  className="w-4 h-4 rounded border-white/20 bg-white/5 text-indigo-500 focus:ring-indigo-500"
                />
                <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">{label}</span>
              </label>
            ))}
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2.5 rounded-xl text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-all">
              Cancelar
            </button>
            <button type="submit" disabled={creating} className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all disabled:opacity-50">
              {creating ? "Criando..." : "Criar Plano"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function InputField({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-medium text-zinc-400 mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-zinc-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
        required={required}
      />
    </div>
  );
}
