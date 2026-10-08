"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";

export interface DataConnectorProps {
  direction?: "horizontal" | "vertical";
  variant?: "dark" | "light";
  label?: string;
  active?: boolean;
  animatedSignal?: boolean;
  speed?: number; // signal duration in seconds
  signalColor?: "cyan" | "blue" | "emerald" | "amber";
  className?: string;
}

export function DataConnector({
  direction = "horizontal",
  variant = "dark",
  label,
  active = true,
  animatedSignal = true,
  speed = 2.0,
  signalColor = "cyan",
  className = "",
}: DataConnectorProps) {
  const isDark = variant === "dark";
  const isHorizontal = direction === "horizontal";
  const prefersReduced = useReducedMotion();

  const signalGradients = {
    cyan: isDark
      ? "bg-gradient-to-r from-cyan-300 to-blue-400 shadow-[0_0_10px_rgba(6,182,212,0.9)]"
      : "bg-gradient-to-r from-cyan-600 to-blue-600 shadow-[0_0_8px_rgba(6,182,212,0.6)]",
    blue: isDark
      ? "bg-gradient-to-r from-blue-400 to-indigo-400 shadow-[0_0_10px_rgba(37,99,235,0.9)]"
      : "bg-gradient-to-r from-blue-600 to-indigo-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]",
    emerald: isDark
      ? "bg-gradient-to-r from-emerald-300 to-teal-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]"
      : "bg-gradient-to-r from-emerald-600 to-teal-600 shadow-[0_0_8px_rgba(16,185,129,0.6)]",
    amber: isDark
      ? "bg-gradient-to-r from-amber-300 to-orange-400 shadow-[0_0_10px_rgba(245,158,11,0.9)]"
      : "bg-gradient-to-r from-amber-600 to-orange-600 shadow-[0_0_8px_rgba(245,158,11,0.6)]",
  }[signalColor];

  return (
    <div
      className={`relative flex items-center justify-center ${
        isHorizontal ? "flex-col py-1 px-3 min-w-[48px]" : "flex-row px-1 py-3 min-h-[44px]"
      } ${className}`}
      aria-hidden="true"
    >
      {/* Background Track Line */}
      <div
        className={`relative ${
          isHorizontal
            ? "w-full h-[2px] bg-gradient-to-r"
            : "h-full w-[2px] bg-gradient-to-b"
        } ${
          isDark
            ? "from-blue-500/20 via-cyan-400/40 to-blue-500/20"
            : "from-slate-200 via-blue-400/50 to-slate-200"
        }`}
      >
        {/* Animated Traveling Signal Packet */}
        {animatedSignal && active && !prefersReduced && (
          <motion.div
            animate={
              isHorizontal
                ? { x: ["-10%", "110%"], opacity: [0, 1, 1, 0] }
                : { y: ["-10%", "110%"], opacity: [0, 1, 1, 0] }
            }
            transition={{
              duration: speed,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute rounded-full ${
              isHorizontal ? "top-1/2 -translate-y-1/2 h-2 w-3.5" : "left-1/2 -translate-x-1/2 w-2 h-3.5"
            } ${signalGradients}`}
          />
        )}
      </div>

      {/* Central Telemetry Label */}
      {label && (
        <div
          className={`absolute z-10 flex items-center gap-1 rounded-full px-2 py-0.5 font-mono text-[9px] font-bold tracking-wider uppercase backdrop-blur-md shadow-xs ${
            isDark
              ? "bg-[#061326]/90 text-cyan-300 border border-cyan-400/30"
              : "bg-white/95 text-blue-700 border border-blue-200"
          }`}
        >
          <span>{label}</span>
          {isHorizontal ? <ArrowRight size={10} /> : <ArrowDown size={10} />}
        </div>
      )}
    </div>
  );
}
