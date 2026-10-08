"use client";

import React from "react";
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

export interface WorkflowNodeProps {
  label: string;
  sublabel?: string;
  icon: LucideIcon;
  variant?: "dark" | "light";
  status?: "idle" | "active" | "processing" | "success";
  size?: "sm" | "md" | "lg";
  className?: string;
  highlightColor?: "blue" | "cyan" | "emerald" | "indigo" | "purple";
  badge?: string;
}

export function WorkflowNode({
  label,
  sublabel,
  icon: Icon,
  variant = "dark",
  status = "idle",
  size = "md",
  className = "",
  highlightColor = "blue",
  badge,
}: WorkflowNodeProps) {
  const isDark = variant === "dark";

  // Color mappings
  const colorStyles = {
    blue: {
      darkBg: "bg-blue-950/40 border-blue-500/30 text-blue-300",
      lightBg: "bg-blue-50/90 border-blue-200 text-blue-700",
      iconDark: "text-blue-400 bg-blue-500/20",
      iconLight: "text-blue-600 bg-blue-100/80",
      glow: "shadow-[0_0_20px_rgba(37,99,235,0.2)]",
      activeBorderDark: "border-blue-400",
      activeBorderLight: "border-blue-500",
    },
    cyan: {
      darkBg: "bg-cyan-950/40 border-cyan-500/30 text-cyan-300",
      lightBg: "bg-cyan-50/90 border-cyan-200 text-cyan-700",
      iconDark: "text-cyan-300 bg-cyan-400/20",
      iconLight: "text-cyan-600 bg-cyan-100/80",
      glow: "shadow-[0_0_20px_rgba(6,182,212,0.25)]",
      activeBorderDark: "border-cyan-300",
      activeBorderLight: "border-cyan-500",
    },
    emerald: {
      darkBg: "bg-emerald-950/40 border-emerald-500/30 text-emerald-300",
      lightBg: "bg-emerald-50/90 border-emerald-200 text-emerald-700",
      iconDark: "text-emerald-400 bg-emerald-500/20",
      iconLight: "text-emerald-600 bg-emerald-100/80",
      glow: "shadow-[0_0_20px_rgba(16,185,129,0.2)]",
      activeBorderDark: "border-emerald-400",
      activeBorderLight: "border-emerald-500",
    },
    indigo: {
      darkBg: "bg-indigo-950/40 border-indigo-500/30 text-indigo-300",
      lightBg: "bg-indigo-50/90 border-indigo-200 text-indigo-700",
      iconDark: "text-indigo-400 bg-indigo-500/20",
      iconLight: "text-indigo-600 bg-indigo-100/80",
      glow: "shadow-[0_0_20px_rgba(79,70,229,0.2)]",
      activeBorderDark: "border-indigo-400",
      activeBorderLight: "border-indigo-500",
    },
    purple: {
      darkBg: "bg-purple-950/40 border-purple-500/30 text-purple-300",
      lightBg: "bg-purple-50/90 border-purple-200 text-purple-700",
      iconDark: "text-purple-400 bg-purple-500/20",
      iconLight: "text-purple-600 bg-purple-100/80",
      glow: "shadow-[0_0_20px_rgba(168,85,247,0.2)]",
      activeBorderDark: "border-purple-400",
      activeBorderLight: "border-purple-500",
    },
  }[highlightColor];

  const sizeClasses = {
    sm: "px-2.5 py-1.5 text-xs gap-1.5 rounded-lg",
    md: "px-3 py-2 text-xs sm:text-sm gap-2 rounded-xl",
    lg: "px-4 py-3 text-sm sm:text-base gap-3 rounded-2xl",
  }[size];

  const iconSizes = {
    sm: 13,
    md: 15,
    lg: 18,
  }[size];

  const isActive = status === "active" || status === "processing";

  return (
    <motion.div
      layout
      className={`relative flex items-center justify-between border transition-all duration-300 ${sizeClasses} ${
        isDark
          ? isActive
            ? `${colorStyles.darkBg} ${colorStyles.activeBorderDark} ${colorStyles.glow}`
            : "border-white/10 bg-white/[0.04] text-slate-200 hover:border-white/20 hover:bg-white/[0.07]"
          : isActive
          ? `${colorStyles.lightBg} ${colorStyles.activeBorderLight} shadow-sm`
          : "border-slate-200/90 bg-white text-slate-800 hover:border-blue-300 hover:bg-slate-50/80 shadow-2xs"
      } ${className}`}
    >
      <div className="flex items-center gap-2 min-w-0">
        <div
          className={`flex shrink-0 items-center justify-center rounded-lg p-1.5 transition-colors ${
            isDark ? colorStyles.iconDark : colorStyles.iconLight
          }`}
        >
          <Icon size={iconSizes} strokeWidth={2} />
        </div>

        <div className="min-w-0">
          <div className="font-semibold tracking-tight whitespace-nowrap leading-none">
            {label}
          </div>
          {sublabel && (
            <div
              className={`text-[10px] mt-0.5 whitespace-nowrap ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              {sublabel}
            </div>
          )}
        </div>
      </div>

      {badge && (
        <span
          className={`ml-2 shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
            isDark
              ? "bg-white/10 text-cyan-300 border border-cyan-400/30"
              : "bg-blue-100 text-blue-800 border border-blue-200"
          }`}
        >
          {badge}
        </span>
      )}

      {status === "processing" && (
        <span className="ml-2 relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
        </span>
      )}
    </motion.div>
  );
}
