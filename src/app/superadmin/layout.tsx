"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarLinks = [
  { href: "/", label: "Dashboard", icon: "📊" },
  { href: "/tenants", label: "Tenants", icon: "🏢" },
  { href: "/plans", label: "Planos", icon: "💳" },
  { href: "/subscriptions", label: "Assinaturas", icon: "📋" },
  { href: "/settings", label: "Configurações", icon: "⚙️" },
];

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen overflow-hidden bg-[#0a0a0f]">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 border-r border-white/5 bg-[#0d0d14] flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-black italic text-lg shadow-lg shadow-primary/20">
              C
            </div>
            <div>
              <h1 className="text-white font-black text-lg tracking-tighter italic uppercase">Clinic<span className="text-primary NOT-italic">OS</span></h1>
              <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-black italic leading-none">
                Super Admin
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href || 
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-500/10 text-indigo-400 shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="text-lg">{link.icon}</span>
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/5">
          <button
            onClick={async () => {
              await fetch("/api/superadmin/auth", { method: "DELETE" });
              window.location.href = "/login";
            }}
            className="flex items-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm text-zinc-400 hover:text-red-400 hover:bg-red-500/5 transition-all"
          >
            <span>🚪</span>
            Sair
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 relative h-full">
        <div className="absolute inset-0 bg-[radial-gradient(#1a1a2e_1px,transparent_1px)] [background-size:40px_40px] opacity-20 pointer-events-none" />
        <main className="flex-1 relative overflow-y-auto custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}
