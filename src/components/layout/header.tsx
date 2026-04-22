"use client";

import { Bell, Search, Sun, Moon, LogOut, User, Activity } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "@/lib/hooks/use-theme";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}

export function Header({ title, description, actions, children }: HeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "logout" }),
    });
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-40 w-full flex items-center justify-between px-8 py-6 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="flex items-center gap-10">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-black text-foreground tracking-tighter uppercase italic leading-none">{title}</h2>
            <Badge className="bg-primary/10 text-primary border-none text-[8px] font-black uppercase py-0 px-1.5 h-4 italic tracking-widest hidden sm:flex">
              v2.0
            </Badge>
          </div>
          {description && (
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1.5 flex items-center gap-2">
              <Activity className="h-3 w-3 text-primary animate-pulse" />
              {description}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className={cn(
          "flex items-center bg-secondary/50 border border-transparent hover:border-border transition-all px-3 py-2 rounded-2xl group",
          searchOpen ? "w-64 border-border ring-2 ring-primary/10" : "w-10 overflow-hidden"
        )}>
          <button onClick={() => setSearchOpen(!searchOpen)} className="p-1 text-muted-foreground group-hover:text-foreground transition-colors">
            <Search className="h-4 w-4" />
          </button>
          <input
            type="text"
            placeholder="Comando rápido..."
            className="bg-transparent border-none focus:ring-0 text-xs font-medium w-full ml-2 placeholder:text-muted-foreground/50"
            onBlur={() => setSearchOpen(false)}
          />
        </div>

        <div className="h-6 w-px bg-border/50 mx-2" />

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl transition-all"
            title={theme === "light" ? "Modo Escuro" : "Modo Claro"}
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>

          <button className="relative p-2.5 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl transition-all">
            <Bell className="h-4 w-4" />
            <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
          </button>
        </div>

        {actions}
        {children}

        <div className="relative ml-2" ref={menuRef}>
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center gap-3 p-1.5 pl-3 rounded-2xl bg-secondary/50 hover:bg-secondary transition-all border border-transparent hover:border-border"
          >
            <span className="text-[10px] font-black uppercase tracking-widest italic hidden md:block">Admin</span>
            <div className="w-8 h-8 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-black text-xs shadow-lg shadow-primary/20">
              A
            </div>
          </button>

          {userMenuOpen && (
            <div className="absolute right-0 mt-4 w-56 bg-card border border-border rounded-[1.5rem] shadow-2xl py-3 z-50 animate-in fade-in zoom-in-95 duration-200">
              <div className="px-4 py-3 border-b border-border/50 mb-3">
                 <p className="text-xs font-black uppercase tracking-widest text-foreground">Administrador</p>
                 <p className="text-[10px] font-bold text-muted-foreground">Logado como admin</p>
              </div>
              <button
                onClick={() => {
                  setUserMenuOpen(false);
                  router.push("/settings");
                }}
                className="flex items-center gap-3 w-full px-4 py-3 text-xs font-bold text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              >
                <User className="h-4 w-4" />
                Configurações
              </button>
              <div className="mx-4 border-t border-border/50 my-2" />
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 w-full px-4 py-3 text-xs font-black text-destructive hover:bg-destructive/10 transition-all uppercase italic"
              >
                <LogOut className="h-4 w-4" />
                Desconectar
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
