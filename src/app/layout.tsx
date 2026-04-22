import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import { ThemeInit } from "@/components/theme-init";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ClinicOS | O Sistema Inteligente para sua Clínica",
  description: "A plataforma definitiva de atendimento e inteligência artificial para clínicas e negócios modernos.",
  keywords: ["CRM", "Clínica", "Atendimento", "WhatsApp", "IA", "ClinicOS"],
  authors: [{ name: "ClinicOS Team" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="pt-BR" 
      className={`${inter.variable} min-h-[100dvh] antialiased selection:bg-primary/30`}
      suppressHydrationWarning
    >
      <body className="min-h-[100dvh] bg-background text-foreground font-sans overflow-x-hidden">
        <Providers>
          <ThemeInit />
          <div className="relative flex min-h-[100dvh] flex-col">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
