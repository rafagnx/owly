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
  AlertTriangle,
  QrCode,
  Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ChannelConnection {
  id: string;
  name: string;
  type: "whatsapp" | "whatsapp_business" | "instagram" | "facebook" | "telegram" | "email" | "twilio";
  status: "connected" | "disconnected" | "error" | "expired" | "connecting";
  lastActive: string;
  config: Record<string, string>;
}

interface WhatsAppStatus {
  status: string;
  qr?: string;
  message?: string;
}

export default function ChannelsPage() {
  const [connections, setConnections] = useState<ChannelConnection[]>([]);
  const [loading, setLoading] = useState(true);
  const [waStatus, setWaStatus] = useState<WhatsAppStatus | null>(null);
  const [waLoading, setWaLoading] = useState(false);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    fetchChannels();
    fetchWhatsAppStatus();
  }, []);

  async function fetchChannels() {
    try {
      const res = await fetch("/api/channels");
      const data = await res.json();
      // API returns array directly
      const channels = Array.isArray(data) ? data : [];
      setConnections(channels.map((ch: any) => ({
        id: ch.id || ch.type,
        name: ch.type === "whatsapp" ? "WhatsApp" : ch.type,
        type: ch.type,
        status: ch.status || "disconnected",
        lastActive: ch.updatedAt || ch.createdAt || "",
        config: ch.config || {}
      })));
    } catch (error) {
      console.error("Failed to fetch channels:", error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchWhatsAppStatus() {
    try {
      setLoading(true);
      const res = await fetch("/api/channels/whatsapp");
      const data = await res.json();
      setWaStatus(data);
      if (data.status === "qr_ready") {
        setShowQR(true);
      }
      // Also update connecting status
      if (data.status === "connecting") {
        // Poll for status update
        setTimeout(fetchWhatsAppStatus, 3000);
      }
    } catch (error) {
      console.error("Failed to fetch WhatsApp status:", error);
    } finally {
      setLoading(false);
    }
  }

  async function connectWhatsApp() {
    setWaLoading(true);
    try {
      const res = await fetch("/api/channels/whatsapp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "connect" })
      });
      const data = await res.json();
      setWaStatus(data);
      if (data.status === "qr_ready") {
        setShowQR(true);
      }
    } catch (error) {
      console.error("Failed to connect WhatsApp:", error);
    } finally {
      setWaLoading(false);
    }
  }

  async function disconnectWhatsApp() {
    setWaLoading(true);
    try {
      await fetch("/api/channels/whatsapp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "disconnect" })
      });
      setWaStatus({ status: "disconnected", message: "Disconnected" });
      setShowQR(false);
    } catch (error) {
      console.error("Failed to disconnect WhatsApp:", error);
    } finally {
      setWaLoading(false);
    }
  }

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

  const getStatusDisplay = (status: string) => {
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
      case "qr_ready":
        return (
          <div className="flex items-center gap-1.5 text-amber-500">
            <RefreshCw className="h-3.5 w-3.5 animate-spin" />
            <span className="text-[10px] font-black uppercase tracking-tighter italic">Conectando...</span>
          </div>
        );
      default:
        return null;
    }
  };

  const waIsConnected = waStatus?.status === "connected";
  const waIsConnecting = waStatus?.status === "connecting" || waStatus?.status === "qr_ready";

  return (
    <div className="flex flex-col h-full bg-background/50">
      <Header
        title="Conexões"
        description="Gerencie os canais de atendimento conectados à nossa IA"
      />

      <main className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-10">
        {/* WhatsApp Card */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">WhatsApp</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group p-6 rounded-[2rem] bg-secondary border border-border relative overflow-hidden">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[1.25rem] bg-background border border-border flex items-center justify-center shadow-inner">
                    <MessageCircle className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-black italic tracking-tighter text-foreground">WhatsApp Web</h3>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase opacity-60 tracking-wider">
                      Conexão direta
                    </p>
                  </div>
                </div>
                {getStatusDisplay(waStatus?.status || "disconnected")}
              </div>

              {showQR && waStatus?.qr && (
                <div className="mb-4 p-4 bg-white rounded-xl flex items-center justify-center">
                  <img src={waStatus.qr} alt="WhatsApp QR Code" className="w-48 h-48" />
                </div>
              )}

              {waStatus?.message && (
                <p className="text-xs text-muted-foreground mb-4">{waStatus.message}</p>
              )}

              <div className="flex gap-2 mt-auto pt-4 border-t border-border/50">
                {waIsConnected ? (
                  <button
                    onClick={disconnectWhatsApp}
                    disabled={waLoading}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500 text-white font-bold text-sm hover:bg-red-600 transition-colors disabled:opacity-50"
                  >
                    {waLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Power className="h-4 w-4" />}
                    Desconectar
                  </button>
                ) : (
                  <button
                    onClick={connectWhatsApp}
                    disabled={waLoading}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-white font-bold text-sm hover:bg-emerald-600 transition-colors disabled:opacity-50"
                  >
                    {waLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <QrCode className="h-4 w-4" />}
                    Conectar WhatsApp
                  </button>
                )}
                {!waIsConnected && !waIsConnecting && (
                  <button
                    onClick={() => setShowQR(!showQR)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary border border-border font-bold text-sm hover:bg-secondary/80 transition-colors"
                  >
                    <QrCode className="h-4 w-4" />
                    Ver QR Code
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Other Channels */}
        <div>
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">Outros Canais</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {loading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-48 rounded-[2rem] bg-secondary/50 animate-pulse border border-border" />
              ))
            ) : connections.length === 0 ? (
              <div className="col-span-full p-8 rounded-[2rem] bg-secondary/50 border border-border text-center">
                <p className="text-muted-foreground">Nenhum canal conectado ainda.</p>
                <p className="text-sm text-muted-foreground mt-2">Conecte o WhatsApp acima para começar.</p>
              </div>
            ) : (
              connections.map((c) => (
                <div 
                  key={c.id} 
                  className="group p-6 rounded-[2rem] bg-secondary border border-border relative overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all"
                >
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

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                    {getStatusDisplay(c.status)}
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
                <p className="text-[10px] text-muted-foreground uppercase">Configure Telegram, Email ou outro</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
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
        </div>
      </main>
    </div>
  );
}