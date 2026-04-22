import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon?: LucideIcon;
  iconColor?: string;
}

export function StatCard({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="bento-card group relative overflow-hidden flex flex-col justify-between min-h-[160px]">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest italic opacity-60">
            {title}
          </p>
          <h4 className="text-4xl font-black text-foreground tracking-tighter font-mono italic">
            {value}
          </h4>
        </div>
        {Icon && (
          <div className="p-3 rounded-2xl bg-secondary text-muted-foreground group-hover:text-primary transition-all group-hover:scale-110 shadow-sm border">
            <Icon className="h-5 w-5" />
          </div>
        )}
      </div>
      
      <div className="flex items-center justify-between mt-4">
        {change && (
          <div className={cn(
            "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase italic",
            changeType === "positive" ? "bg-green-500/10 text-green-500" : 
            changeType === "negative" ? "bg-red-500/10 text-red-500" : "bg-muted text-muted-foreground"
          )}>
            {changeType === "positive" ? "↑" : changeType === "negative" ? "↓" : ""} {change}
          </div>
        )}
        <div className="text-[10px] text-muted-foreground/40 font-bold uppercase tracking-tighter italic">
          Métrica Real-time
        </div>
      </div>

      {/* Decorative Blob */}
      <div className="absolute top-[-20%] right-[-10%] w-20 h-20 bg-primary/5 blur-2xl rounded-full group-hover:bg-primary/10 transition-colors" />
    </div>
  );
}
