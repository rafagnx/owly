"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LogIn, ShieldCheck, Sparkles } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/auth");
        const data = await res.json();
        if (data.setupRequired) {
          router.replace("/setup");
          return;
        }
        if (data.authenticated) {
          router.replace("/");
          return;
        }
      } catch (err) {
        console.error(err);
      }
      setChecking(false);
    }
    checkAuth();
  }, [router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "login", username: username.trim(), password }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error || "Acesso negado. Credenciais inválidas (401).");
        setLoading(false);
        return;
      }

      router.replace("/");
    } catch {
      setError("Erro de rede. Verifique sua conexão e tente novamente.");
      setLoading(false);
    }
  }

  if (checking) {
    return (
      <div className="flex items-center justify-center min-h-[100dvh] bg-background">
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col items-center justify-center p-4 relative selection:bg-foreground selection:text-background z-0 overflow-hidden">
      {/* Premium Ambient Background Elements */}
      <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-zinc-400/5 dark:bg-zinc-800/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-slate-300/10 dark:bg-zinc-900/40 blur-[80px] pointer-events-none" />

      {/* Main Glass Panel */}
      <div className="relative z-10 w-full max-w-md bg-white/70 dark:bg-zinc-950/70 backdrop-blur-3xl rounded-[2.5rem] border border-zinc-200/50 dark:border-zinc-800/50 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] dark:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] p-10 lg:p-12">
        <div className="absolute inset-0 rounded-[2.5rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] pointer-events-none" />
        
        <div className="flex flex-col items-center mb-10 text-center relative z-20">
          <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-900 rounded-3xl mb-6 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500 border border-zinc-200/50 dark:border-zinc-800/50">
            <Image
              src="/owly.png"
              alt="Owly"
              width={32}
              height={32}
              className="dark:invert grayscale opacity-90 transition-opacity duration-300"
            />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-4 border border-zinc-200/50 dark:border-white/5">
            <ShieldCheck className="h-3 w-3" /> Secure Gateway
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-zinc-900 dark:text-white tracking-tight">
            Authorize Access
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-3 font-medium max-w-[250px] leading-relaxed">
            Please authenticate to enter the administration plane.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-20">
          <div className="space-y-2">
            <label
              htmlFor="username"
              className="block text-[11px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest ml-1"
            >
              Identifier
            </label>
            <input
              id="username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 px-5 py-4 text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-zinc-900/10 dark:focus:ring-white/10 focus:border-zinc-900 dark:focus:border-white/30 transition-all font-medium placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
              placeholder="Username"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-[11px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest ml-1"
            >
              Passkey
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 px-5 py-4 text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-zinc-900/10 dark:focus:ring-white/10 focus:border-zinc-900 dark:focus:border-white/30 transition-all font-medium placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="rounded-2xl bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/30 p-4 text-xs text-red-600 dark:text-red-400 font-semibold text-center mt-2 animate-in fade-in slide-in-from-top-1 duration-300">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 rounded-2xl bg-zinc-900 dark:bg-white px-6 py-4 flex items-center justify-center gap-2 text-sm font-semibold text-white dark:text-black shadow-lg shadow-zinc-900/20 dark:shadow-white/10 hover:shadow-zinc-900/30 dark:hover:shadow-white/20 hover:-translate-y-[1px] active:translate-y-[1px] active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-3">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 dark:border-black/30 border-t-white dark:border-t-black" />
                Authenticating...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <LogIn className="h-4 w-4" />
                Access Console
              </span>
            )}
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-zinc-200/50 dark:border-zinc-800/50 text-center relative z-20">
           <p className="text-[10px] text-zinc-400 dark:text-zinc-600 font-bold uppercase tracking-widest mt-2">
              Owly • Identity Layer
           </p>
        </div>
      </div>
    </div>
  );
}
