"use client";

import { Header } from "@/components/layout/header";
import {
  MessageCircle,
  Mail,
  Phone,
  MessageSquare,
  Search,
  Send,
  Inbox,
  ArrowLeft,
  Tag,
  Clock,
  Sparkles,
  MoreHorizontal,
  Paperclip,
  Smile,
  Zap
} from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  cn,
  formatRelativeTime,
  getChannelLabel,
  getStatusColor,
} from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface MessageData {
  id: string;
  conversationId: string;
  role: string;
  content: string;
  mediaType?: string | null;
  mediaUrl?: string | null;
  createdAt: string;
}

interface TagData {
  id: string;
  tag: {
    id: string;
    name: string;
    color: string;
  };
}

interface ConversationData {
  id: string;
  channel: string;
  customerName: string;
  customerContact: string;
  status: string;
  summary: string;
  messages: MessageData[];
  _count: { messages: number };
  tags: TagData[];
  createdAt: string;
  updatedAt: string;
}

const channelIcons: Record<string, React.ElementType> = {
  whatsapp: MessageCircle,
  email: Mail,
  phone: Phone,
};

const channelColors: Record<string, string> = {
  whatsapp: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
  email: "text-blue-500 bg-blue-500/10 border-blue-500/20",
  phone: "text-amber-500 bg-amber-500/10 border-amber-500/20",
};

export default function ConversationsPage() {
  const [conversations, setConversations] = useState<ConversationData[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedConversation, setSelectedConversation] =
    useState<ConversationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [channelFilter, setChannelFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [replyText, setReplyText] = useState("");
  const [sending, setSending] = useState(false);
  const [mobileShowDetail, setMobileShowDetail] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const fetchConversations = useCallback(async () => {
    try {
      setFetchError(null);
      const params = new URLSearchParams();
      if (channelFilter !== "all") params.set("channel", channelFilter);
      if (statusFilter !== "all") params.set("status", statusFilter);
      if (searchQuery.trim()) params.set("search", searchQuery.trim());

      const res = await fetch(`/api/conversations?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to load conversations");
      const { data } = await res.json();
      setConversations(data || []);
    } catch (error) {
      console.error("Failed to fetch conversations:", error);
      setFetchError("Ops! Não conseguimos carregar as conversas agora.");
    } finally {
      setLoading(false);
    }
  }, [channelFilter, statusFilter, searchQuery]);

  const fetchConversationDetail = useCallback(async (id: string) => {
    setDetailLoading(true);
    try {
      const res = await fetch(`/api/conversations/${id}`);
      if (res.ok) {
        const data = await res.json();
        setSelectedConversation(data);
      }
    } catch (error) {
      console.error("Failed to fetch conversation detail:", error);
    } finally {
      setDetailLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchConversations();
  }, [fetchConversations]);

  useEffect(() => {
    if (selectedId) {
      fetchConversationDetail(selectedId);
    }
  }, [selectedId, fetchConversationDetail]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedConversation?.messages]);

  const handleSelectConversation = (id: string) => {
    setSelectedId(id);
    setMobileShowDetail(true);
  };

  const handleSendReply = async () => {
    if (!replyText.trim() || !selectedId || sending) return;
    setSending(true);
    try {
      const res = await fetch(`/api/conversations/${selectedId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: replyText.trim(), role: "admin" }),
      });
      if (res.ok) {
        setReplyText("");
        fetchConversationDetail(selectedId);
        fetchConversations();
      }
    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setSending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendReply();
    }
  };

  return (
    <div className="flex flex-col h-full bg-background overflow-hidden relative">
      <Header
        title="Atendimento"
        description="Central unificada de mensagens"
      />

      <div className="flex-1 flex overflow-hidden p-4 lg:p-6 gap-6 relative z-10">
        
        {/* Left Panel - Conversation List */}
        <div
          className={cn(
            "w-full md:w-80 lg:w-[380px] flex flex-col bg-card rounded-[2.5rem] border border-border shadow-2xl overflow-hidden transition-all",
            mobileShowDetail && "hidden md:flex"
          )}
        >
          {/* List Header */}
          <div className="p-6 border-b border-border/50">
             <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-black italic tracking-widest uppercase text-foreground">Inbox</h3>
                <Badge className="bg-primary/20 text-primary border-none text-[10px] py-0 px-2 tracking-tighter">
                   {conversations.length} Ativas
                </Badge>
             </div>
             <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  placeholder="Buscar conversa..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs font-medium border border-border/50 rounded-xl bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
             </div>
          </div>

          {/* List Content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {loading ? (
              <div className="p-6 space-y-4">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="flex gap-3 animate-pulse">
                      <div className="w-12 h-12 rounded-xl bg-secondary" />
                      <div className="flex-1 space-y-2">
                         <div className="h-3 w-24 bg-secondary rounded" />
                         <div className="h-2 w-full bg-secondary rounded" />
                      </div>
                   </div>
                 ))}
              </div>
            ) : conversations.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                 <div className="p-4 rounded-full bg-secondary mb-4">
                    <Inbox className="h-6 w-6 text-muted-foreground/40" />
                 </div>
                 <p className="text-xs font-black uppercase text-muted-foreground tracking-widest italic leading-tight">Nenhuma conversa</p>
              </div>
            ) : (
              <div className="">
                {conversations.map((conv) => {
                  const Icon = channelIcons[conv.channel] || MessageSquare;
                  const isSelected = selectedId === conv.id;
                  const lastMessage = conv.messages[0];

                  return (
                    <button
                      key={conv.id}
                      onClick={() => handleSelectConversation(conv.id)}
                      className={cn(
                        "w-full px-6 py-4 text-left hover:bg-secondary/50 transition-all border-l-4 border-transparent active:scale-[0.99]",
                        isSelected && "bg-primary/10 border-l-primary"
                      )}
                    >
                      <div className="flex items-start gap-4">
                        <div className={cn(
                          "w-12 h-12 rounded-2xl flex items-center justify-center border font-black text-xs shadow-inner shrink-0",
                          channelColors[conv.channel] || "bg-card border-border"
                        )}>
                           <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                             <p className="text-sm font-black italic tracking-tighter text-foreground truncate">
                               {conv.customerName}
                             </p>
                             <span className="text-[9px] font-bold text-muted-foreground whitespace-nowrap">
                               {formatRelativeTime(conv.updatedAt)}
                             </span>
                          </div>
                          <p className="text-xs text-muted-foreground truncate font-medium mt-0.5 opacity-70">
                             {lastMessage?.content || "Sem mensagens"}
                          </p>
                          <div className="flex items-center gap-1.5 mt-2">
                             <div className={cn(
                               "w-1.5 h-1.5 rounded-full",
                               conv.status === 'active' ? "bg-emerald-500 animate-pulse" : "bg-zinc-500"
                             )} />
                             <span className="text-[8px] font-black uppercase tracking-widest opacity-50 italic">
                               {conv.status}
                             </span>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Chat Detail */}
        <div
          className={cn(
            "flex-1 flex flex-col bg-card rounded-[2.5rem] border border-border shadow-2xl overflow-hidden relative",
            !mobileShowDetail && "hidden md:flex"
          )}
        >
          {!selectedId ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
               <div className="relative mb-6">
                 <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full scale-150" />
                 <div className="relative w-24 h-24 rounded-[2rem] bg-secondary border border-border flex items-center justify-center text-muted-foreground/30">
                    <MessageSquare className="h-10 w-10" />
                 </div>
               </div>
               <h3 className="text-xl font-black italic tracking-tighter text-foreground mb-1 shadow-primary/20">Selecione um Atendimento</h3>
               <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-relaxed max-w-[240px]">
                 Escolha uma conversa para visualizar o histórico e responder
               </p>
            </div>
          ) : detailLoading && !selectedConversation ? (
            <div className="flex-1 flex items-center justify-center">
               <Zap className="h-6 w-6 text-primary animate-bounce shadow-primary/20" />
            </div>
          ) : (
            <>
              {/* Chat Header */}
              <div className="p-6 border-b border-border/50 flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <button onClick={() => setMobileShowDetail(false)} className="md:hidden p-2 hover:bg-secondary rounded-xl">
                       <ArrowLeft className="h-5 w-5" />
                    </button>
                    <div className="w-12 h-12 rounded-[1.25rem] bg-secondary border border-border flex items-center justify-center font-black italic text-sm text-primary">
                       {selectedConversation?.customerName[0]}
                    </div>
                    <div>
                       <h4 className="text-base font-black italic tracking-tighter leading-none">{selectedConversation?.customerName}</h4>
                       <p className="text-xs font-bold text-muted-foreground mt-1 flex items-center gap-1.5 leading-none">
                          <Clock className="h-3 w-3" />
                          Último registro em {selectedConversation && new Date(selectedConversation.updatedAt).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                       </p>
                    </div>
                 </div>
                 <div className="flex items-center gap-2">
                    <button className="p-2.5 rounded-xl bg-secondary border border-border hover:bg-background transition-all">
                       <Tag className="h-4 w-4 text-muted-foreground" />
                    </button>
                    <button className="p-2.5 rounded-xl bg-secondary border border-border hover:bg-background transition-all">
                       <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                    </button>
                 </div>
              </div>

              {/* Chat Body */}
              <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
                 {selectedConversation?.messages.map((msg, idx) => {
                    const isAdmin = msg.role === 'admin' || msg.role === 'assistant';
                    return (
                      <div key={msg.id} className={cn(
                        "flex items-end gap-3 max-w-[85%] group transform transition-all duration-300 translate-y-0 opacity-100",
                        isAdmin ? "ml-auto flex-row-reverse" : "mr-auto"
                      )}>
                         <div className={cn(
                           "px-5 py-3 rounded-[1.5rem] shadow-sm relative overflow-hidden",
                           isAdmin 
                            ? "bg-primary text-primary-foreground rounded-br-none" 
                            : "bg-secondary border border-border/50 text-foreground rounded-bl-none"
                         )}>
                            {msg.role === 'assistant' && (
                               <div className="flex items-center gap-1 mb-1 opacity-50 uppercase text-[8px] font-black tracking-widest">
                                 <Sparkles className="h-2 w-2" />
                                 IA ClinicOS
                               </div>
                            )}
                            <p className="text-sm font-medium leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                            <span className={cn(
                               "text-[9px] font-bold mt-2 block opacity-50 uppercase tracking-tighter",
                               isAdmin ? "text-right" : "text-left"
                            )}>
                               {new Date(msg.createdAt).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                            </span>
                         </div>
                      </div>
                    );
                 })}
                 <div ref={messagesEndRef} />
              </div>

              {/* Chat Footer / Input */}
              <div className="p-6 border-t border-border/50">
                 <div className="flex items-end gap-3 bg-secondary/30 p-2 rounded-[2rem] border border-border/50 focus-within:border-primary/30 focus-within:ring-4 focus-within:ring-primary/5 transition-all">
                    <button className="p-2.5 rounded-full hover:bg-background text-muted-foreground hover:text-foreground transition-all">
                       <Smile className="h-5 w-5" />
                    </button>
                    <button className="p-2.5 rounded-full hover:bg-background text-muted-foreground hover:text-foreground transition-all">
                       <Paperclip className="h-5 w-5" />
                    </button>
                    <textarea
                      placeholder="Diga algo inteligente..."
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      onKeyDown={handleKeyDown}
                      rows={1}
                      className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-medium resize-none min-h-[44px] py-3 px-2 custom-scrollbar"
                      onInput={(e) => {
                         const target = e.target as HTMLTextAreaElement;
                         target.style.height = "auto";
                         target.style.height = Math.min(target.scrollHeight, 120) + "px";
                      }}
                    />
                    <button
                      onClick={handleSendReply}
                      disabled={!replyText.trim() || sending}
                      className={cn(
                        "w-11 h-11 rounded-full flex items-center justify-center transition-all bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:scale-105 active:scale-[0.95] disabled:opacity-50 disabled:scale-100",
                        sending && "animate-pulse"
                      )}
                    >
                       <Send className="h-5 w-5 ml-0.5" />
                    </button>
                 </div>
                 <div className="flex items-center justify-center gap-4 mt-3">
                    <p className="text-[10px] font-black italic tracking-widest text-muted-foreground/30 uppercase flex items-center gap-1.5">
                       <Zap className="h-2.5 w-2.5 fill-current" />
                       Pressione Enter para enviar
                    </p>
                 </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Decorative BG Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </div>
  );
}
