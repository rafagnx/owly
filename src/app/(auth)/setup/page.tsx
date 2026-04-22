"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { 
  UserPlus, 
  Building, 
  Cpu, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Eye,
  EyeOff
} from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  { title: "Administrador", icon: UserPlus, desc: "Crie sua conta de acesso" },
  { title: "Empresa", icon: Building, desc: "Identidade do seu negócio" },
  { title: "Inteligência", icon: Cpu, desc: "Configure o motor de IA" },
  { title: "Finalizado", icon: CheckCircle2, desc: "Tudo pronto para começar" },
];

const TONE_OPTIONS = [
  { value: "friendly", label: "Amigável", desc: "Próximo e acolhedor" },
  { value: "professional", label: "Profissional", desc: "Sério e direto" },
  { value: "formal", label: "Formal", desc: "Cortês e respeitoso" },
  { value: "technical", label: "Técnico", desc: "Preciso e detalhado" },
];

const PROVIDER_OPTIONS = [
  { value: "openai", label: "OpenAI", models: ["gpt-4o", "gpt-4o-mini", "gpt-4-turbo"] },
  { value: "claude", label: "Claude", models: ["claude-3-5-sonnet-latest", "claude-3-5-haiku-latest"] },
  { value: "gemini", label: "Gemini", models: ["gemini-1.5-flash", "gemini-1.5-pro"] },
  { value: "openrouter", label: "OpenRouter", models: ["google/gemini-2.0-flash-001", "deepseek/deepseek-chat"] },
];

export default function SetupPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const [error, setError] = useState("");

  // Step 1 - Admin Account
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Step 2 - Business Profile
  const [businessName, setBusinessName] = useState("");
  const [businessDesc, setBusinessDesc] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("Olá! Como posso ajudar você hoje?");
  const [tone, setTone] = useState("friendly");

  // Step 3 - AI Configuration
  const [aiProvider, setAiProvider] = useState("openai");
  const [aiModel, setAiModel] = useState("gpt-4o-mini");
  const [aiApiKey, setAiApiKey] = useState("");
  const [showApiKey, setShowApiKey] = useState(false);

  useEffect(() => {
    async function checkSetup() {
      try {
        const res = await fetch("/api/auth");
        const data = await res.json();
        if (!data.setupRequired) {
          router.replace("/login");
          return;
        }
      } catch { /* ignore */ }
      setChecking(false);
    }
    checkSetup();
  }, [router]);

  async function handleNext() {
    setError("");
    setLoading(true);

    try {
      if (step === 0) {
        if (!name.trim() || !username.trim() || !password) {
          setError("Preencha todos os campos.");
          setLoading(false);
          return;
        }
        if (password !== confirmPassword) {
          setError("As senhas não coincidem.");
          setLoading(false);
          return;
        }

        const res = await fetch("/api/auth", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "setup", name, username, password }),
        });
        if (!res.ok) {
          const data = await res.json();
          setError(data.error || "Erro no setup.");
          setLoading(false);
          return;
        }
        setStep(1);
      } else if (step === 1) {
        const res = await fetch("/api/settings", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ businessName, businessDesc, welcomeMessage, tone }),
        });
        if (!res.ok) {
          setError("Erro ao salvar perfil.");
          setLoading(false);
          return;
        }
        setStep(2);
      } else if (step === 2) {
        const res = await fetch("/api/settings", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ aiProvider, aiModel, aiApiKey }),
        });
        if (!res.ok) {
          setError("Erro ao salvar IA.");
          setLoading(false);
          return;
        }
        setStep(3);
      }
    } catch {
      setError("Erro inesperado. Tente novamente.");
    }

    setLoading(false);
  }

  if (checking) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="bg-card/50 backdrop-blur-3xl rounded-[2.5rem] border border-border shadow-2xl overflow-hidden relative group">
      {/* Header */}
      <div className="bg-primary/5 border-b border-border p-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
             <div className="p-3 bg-primary rounded-2xl shadow-lg shadow-primary/20">
               <Image src="/owly.png" alt="Owly" width={32} height={32} className="invert" />
             </div>
             <div>
               <h1 className="text-2xl font-black text-foreground tracking-tighter uppercase italic">Configurar Owly</h1>
               <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Passo {step + 1} de {STEPS.length}</p>
             </div>
          </div>
          
          {/* Stepper Dots */}
          <div className="flex items-center gap-2">
            {STEPS.map((_, i) => (
              <div 
                key={i} 
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  i === step ? "w-8 bg-primary" : "w-1.5 bg-muted"
                )} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-10 lg:p-12 min-h-[500px] flex flex-col">
        <div className="mb-10">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest italic mb-4">
             {(() => {
                const Icon = STEPS[step].icon;
                return <Icon className="h-3 w-3" />;
             })()}
             {STEPS[step].title}
           </div>
           <h2 className="text-4xl font-black text-foreground tracking-tighter italic uppercase">{STEPS[step].title}</h2>
           <p className="text-sm text-muted-foreground font-medium mt-1">{STEPS[step].desc}</p>
        </div>

        <div className="flex-1">
          {/* STEP 0: ADMIN */}
          {step === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4 md:col-span-2">
                 <Field label="Nome Completo" value={name} onChange={setName} placeholder="Seu nome" />
              </div>
              <div className="space-y-4">
                 <Field label="Usuário" value={username} onChange={setUsername} placeholder="admin" />
              </div>
              <div className="space-y-4">
                 <Field label="Senha" type="password" value={password} onChange={setPassword} placeholder="••••••••" />
              </div>
              <div className="space-y-4 md:col-span-2">
                 <Field label="Confirmar Senha" type="password" value={confirmPassword} onChange={setConfirmPassword} placeholder="••••••••" />
              </div>
            </div>
          )}

          {/* STEP 1: BUSINESS */}
          {step === 1 && (
            <div className="space-y-6">
              <Field label="Nome da Empresa" value={businessName} onChange={setBusinessName} placeholder="Minha Empresa AI" />
              <div className="space-y-2">
                 <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest ml-1">O que sua empresa faz?</label>
                 <textarea 
                   value={businessDesc} 
                   onChange={(e) => setBusinessDesc(e.target.value)} 
                   className="w-full rounded-2xl border border-border bg-secondary/30 px-5 py-4 text-sm min-h-[120px] focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                   placeholder="Ex: Somos uma clínica odontológica especializada em implantes..."
                 />
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                 {TONE_OPTIONS.map(t => (
                   <button 
                     key={t.value} 
                     onClick={() => setTone(t.value)}
                     className={cn(
                       "p-4 rounded-2xl border text-left transition-all",
                       tone === t.value ? "bg-primary/5 border-primary shadow-lg shadow-primary/5" : "bg-secondary/30 border-transparent hover:border-border"
                     )}
                   >
                     <p className={cn("text-xs font-black uppercase italic tracking-tighter", tone === t.value ? "text-primary" : "text-foreground")}>{t.label}</p>
                     <p className="text-[10px] text-muted-foreground mt-1 font-medium">{t.desc}</p>
                   </button>
                 ))}
              </div>
            </div>
          )}

          {/* STEP 2: AI */}
          {step === 2 && (
            <div className="space-y-8">
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                 {PROVIDER_OPTIONS.map(p => (
                   <button 
                     key={p.value} 
                     onClick={() => { setAiProvider(p.value); setAiModel(p.models[0]); }}
                     className={cn(
                       "p-5 rounded-[2rem] border transition-all text-center group/btn",
                       aiProvider === p.value ? "bg-primary border-primary text-primary-foreground shadow-xl shadow-primary/20" : "bg-secondary/50 border-border hover:border-primary/50"
                     )}
                   >
                     <p className="text-sm font-black uppercase tracking-tighter italic">{p.label}</p>
                   </button>
                 ))}
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest ml-1">Modelo</label>
                    <select 
                      value={aiModel} 
                      onChange={(e) => setAiModel(e.target.value)}
                      className="w-full rounded-2xl border border-border bg-secondary/50 px-5 py-4 text-sm font-bold italic appearance-none"
                    >
                      {PROVIDER_OPTIONS.find(p => p.value === aiProvider)?.models.map(m => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest ml-1">API Key</label>
                    <div className="relative">
                      <input 
                        type={showApiKey ? "text" : "password"} 
                        value={aiApiKey} 
                        onChange={(e) => setAiApiKey(e.target.value)}
                        className="w-full rounded-2xl border border-border bg-secondary/50 px-5 py-4 text-sm font-mono pr-12"
                        placeholder="sk-..."
                      />
                      <button onClick={() => setShowApiKey(!showApiKey)} className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-primary transition-colors">
                        {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                 </div>
               </div>
            </div>
          )}

          {/* STEP 3: FINISH */}
          {step === 3 && (
            <div className="flex flex-col items-center justify-center text-center py-10">
               <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-8 relative">
                  <CheckCircle2 className="h-12 w-12 text-primary" />
                  <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin opacity-20" />
               </div>
               <h3 className="text-3xl font-black italic tracking-tighter uppercase mb-4">Estamos Prontos!</h3>
               <p className="text-muted-foreground max-w-md font-medium">
                 Tudo foi configurado com sucesso. Agora você pode acessar o dashboard e começar a treinar sua IA.
               </p>
            </div>
          )}
        </div>

        {/* Error Display */}
        {error && (
          <div className="mt-8 p-4 rounded-2xl bg-destructive/10 border border-destructive/20 text-destructive text-xs font-bold uppercase tracking-tight text-center">
            {error}
          </div>
        )}

        {/* Actions */}
        <div className="mt-12 pt-10 border-t border-border/50 flex items-center justify-between">
            {step > 0 && step < 3 ? (
              <button 
                onClick={() => setStep(step - 1)} 
                className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-foreground transition-all"
              >
                <ChevronLeft className="h-4 w-4" /> Voltar
              </button>
            ) : <div />}

            <button 
              onClick={step === 3 ? () => router.push("/") : handleNext} 
              disabled={loading}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl flex items-center gap-3 font-black text-xs uppercase tracking-[0.2em] italic shadow-xl shadow-primary/20 hover:scale-[1.05] active:scale-[0.95] transition-all disabled:opacity-50"
            >
              {loading ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
              ) : step === 3 ? (
                <span className="flex items-center gap-2">Explorar Dashboard <Sparkles className="h-4 w-4" /></span>
              ) : (
                <span className="flex items-center gap-2">Próximo <ArrowRight className="h-4 w-4" /></span>
              )}
            </button>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = "text" }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest ml-1">{label}</label>
      <input 
        type={type} 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
        className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-5 py-4 text-sm text-zinc-900 dark:text-white focus:ring-2 focus:ring-primary/20 transition-all font-medium placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
        placeholder={placeholder}
      />
    </div>
  );
}
