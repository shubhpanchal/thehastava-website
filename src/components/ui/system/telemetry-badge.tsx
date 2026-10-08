import React from "react";
import { LucideIcon } from "lucide-react";

export interface TelemetryBadgeProps {
  label: string;
  value: string | number;
  unit?: string;
  delta?: string;
  deltaPositive?: boolean;
  icon?: LucideIcon;
  variant?: "dark" | "light" | "cyan" | "emerald";
  className?: string;
}

export function TelemetryBadge({
  label,
  value,
  unit,
  delta,
  deltaPositive = true,
  icon: Icon,
  variant = "dark",
  className = "",
}: TelemetryBadgeProps) {
  const variantStyles = {
    dark: "bg-[#061326] border-white/10 text-white",
    light: "bg-white border-slate-200 text-slate-900 shadow-xs",
    cyan: "bg-cyan-950/40 border-cyan-500/30 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]",
    emerald: "bg-emerald-950/40 border-emerald-500/30 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]",
  }[variant];

  return (
    <div
      className={`inline-flex items-center gap-3 rounded-xl border px-3.5 py-2 select-all ${variantStyles} ${className}`}
    >
      {Icon && (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-cyan-400">
          <Icon size={14} />
        </div>
      )}

      <div className="flex flex-col">
        <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 dark:text-slate-500 leading-none">
          {label}
        </span>
        <div className="flex items-baseline gap-1 mt-1 leading-none">
          <span className="font-mono text-sm font-bold tracking-tight text-white dark:text-slate-100">
            {value}
          </span>
          {unit && (
            <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500">
              {unit}
            </span>
          )}
        </div>
      </div>

      {delta && (
        <span
          className={`ml-1 font-mono text-[10px] font-semibold ${
            deltaPositive ? "text-emerald-400" : "text-rose-400"
          }`}
        >
          {deltaPositive ? "+" : ""}{delta}
        </span>
      )}
    </div>
  );
}
