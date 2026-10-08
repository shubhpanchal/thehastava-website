"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { LucideIcon } from "lucide-react";

export type SystemNodeType =
  | "source"      // DATA
  | "model"       // INTELLIGENCE
  | "engine"      // AUTOMATION
  | "action"      // ACTION
  | "metric"      // RESULTS
  | "database"
  | "api";

export type SystemNodeStatus =
  | "idle"
  | "active"
  | "processing"
  | "success"
  | "warning"
  | "error";

export interface SystemNodeProps extends Omit<HTMLMotionProps<"div">, "children"> {
  label: string;
  sublabel?: string;
  icon: LucideIcon;
  type?: SystemNodeType;
  status?: SystemNodeStatus;
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
  badge?: string;
  metric?: string;
  onClick?: () => void;
}

export function SystemNode({
  label,
  sublabel,
  icon: Icon,
  type = "source",
  status = "idle",
  size = "md",
  variant = "dark",
  badge,
  metric,
  onClick,
  className = "",
  ...props
}: SystemNodeProps) {
  const isDark = variant === "dark";

  // Type accent colors
  const typeColors = {
    source: {
      dark: "border-blue-500/40 bg-blue-950/40 text-blue-300",
      light: "border-blue-200 bg-blue-50/90 text-blue-800",
      iconDark: "bg-blue-500/20 text-blue-400",
      iconLight: "bg-blue-100 text-blue-600",
      glow: "shadow-[0_0_20px_rgba(37,99,235,0.25)]",
    },
    model: {
      dark: "border-cyan-500/40 bg-cyan-950/40 text-cyan-300",
      light: "border-cyan-200 bg-cyan-50/90 text-cyan-800",
      iconDark: "bg-cyan-500/20 text-cyan-300",
      iconLight: "bg-cyan-100 text-cyan-600",
      glow: "shadow-[0_0_20px_rgba(6,182,212,0.3)]",
    },
    engine: {
      dark: "border-indigo-500/40 bg-indigo-950/40 text-indigo-300",
      light: "border-indigo-200 bg-indigo-50/90 text-indigo-800",
      iconDark: "bg-indigo-500/20 text-indigo-300",
      iconLight: "bg-indigo-100 text-indigo-600",
      glow: "shadow-[0_0_20px_rgba(79,70,229,0.25)]",
    },
    action: {
      dark: "border-emerald-500/40 bg-emerald-950/40 text-emerald-300",
      light: "border-emerald-200 bg-emerald-50/90 text-emerald-800",
      iconDark: "bg-emerald-500/20 text-emerald-300",
      iconLight: "bg-emerald-100 text-emerald-600",
      glow: "shadow-[0_0_20px_rgba(16,185,129,0.25)]",
    },
    metric: {
      dark: "border-amber-500/40 bg-amber-950/40 text-amber-300",
      light: "border-amber-200 bg-amber-50/90 text-amber-800",
      iconDark: "bg-amber-500/20 text-amber-300",
      iconLight: "bg-amber-100 text-amber-600",
      glow: "shadow-[0_0_20px_rgba(245,158,11,0.25)]",
    },
    database: {
      dark: "border-purple-500/40 bg-purple-950/40 text-purple-300",
      light: "border-purple-200 bg-purple-50/90 text-purple-800",
      iconDark: "bg-purple-500/20 text-purple-300",
      iconLight: "bg-purple-100 text-purple-600",
      glow: "shadow-[0_0_20px_rgba(168,85,247,0.25)]",
    },
    api: {
      dark: "border-sky-500/40 bg-sky-950/40 text-sky-300",
      light: "border-sky-200 bg-sky-50/90 text-sky-800",
      iconDark: "bg-sky-500/20 text-sky-300",
      iconLight: "bg-sky-100 text-sky-600",
      glow: "shadow-[0_0_20px_rgba(14,165,233,0.25)]",
    },
  }[type];

  const sizeClasses = {
    sm: "px-2.5 py-1.5 text-xs gap-2 rounded-lg",
    md: "px-3.5 py-2.5 text-sm gap-2.5 rounded-xl",
    lg: "px-5 py-3.5 text-base gap-3.5 rounded-2xl",
  }[size];

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 20,
  }[size];

  const isActive = status === "active" || status === "processing";

  return (
    <motion.div
      layout
      data-cursor="data"
      data-cursor-text={`[${type.toUpperCase()}]`}
      onClick={onClick}
      className={`relative flex items-center justify-between border transition-all duration-300 ${sizeClasses} ${
        isDark
          ? isActive
            ? `${typeColors.dark} ${typeColors.glow}`
            : "border-white/10 bg-[#061326]/80 text-slate-200 hover:border-white/25 hover:bg-[#091B33]"
          : isActive
          ? `${typeColors.light} shadow-sm`
          : "border-slate-200 bg-white text-slate-800 hover:border-blue-400 hover:bg-slate-50 shadow-xs"
      } ${onClick ? "cursor-pointer active:scale-98" : ""} ${className}`}
      {...props}
    >
      <div className="flex items-center gap-2.5 min-w-0">
        <div
          className={`flex shrink-0 items-center justify-center rounded-lg p-1.5 transition-colors ${
            isDark ? typeColors.iconDark : typeColors.iconLight
          }`}
        >
          <Icon size={iconSizes} strokeWidth={2} />
        </div>

        <div className="min-w-0">
          <div className="font-semibold tracking-tight whitespace-nowrap leading-tight">
            {label}
          </div>
          {sublabel && (
            <div
              className={`font-mono text-[10px] mt-0.5 whitespace-nowrap ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              {sublabel}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 ml-3 shrink-0">
        {metric && (
          <span
            className={`font-mono text-[10px] font-bold ${
              isDark ? "text-cyan-300" : "text-blue-600"
            }`}
          >
            {metric}
          </span>
        )}

        {badge && (
          <span
            className={`rounded-full px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider ${
              isDark
                ? "bg-white/10 text-cyan-300 border border-cyan-400/30"
                : "bg-blue-100 text-blue-800 border border-blue-200"
            }`}
          >
            {badge}
          </span>
        )}

        {status === "processing" && (
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
        )}
      </div>
    </motion.div>
  );
}
