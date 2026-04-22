import { Sidebar } from "@/components/layout/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 relative h-full">
         {/* Subtle background pattern */}
         <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:40px_40px] opacity-20 pointer-events-none" />
         
         <main className="flex-1 relative overflow-y-auto custom-scrollbar">
           {children}
         </main>
      </div>
    </div>
  );
}
