"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";

export interface WorkflowConnectorProps {
  direction?: "horizontal" | "vertical";
  variant?: "dark" | "light";
  label?: string;
  active?: boolean;
  className?: string;
  animatedSignal?: boolean;
}

export function WorkflowConnector({
  direction = "horizontal",
  variant = "dark",
  label,
  active = true,
  className = "",
  animatedSignal = true,
}: WorkflowConnectorProps) {
  const isDark = variant === "dark";
  const isHorizontal = direction === "horizontal";

  return (
    <div
      className={`relative flex items-center justify-center ${
        isHorizontal ? "flex-col py-1 px-2 min-w-[36px]" : "flex-row px-1 py-2 min-h-[32px]"
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
            ? "from-blue-500/20 via-cyan-400/50 to-blue-500/20"
            : "from-slate-200 via-blue-400/60 to-slate-200"
        }`}
      >
        {/* Animated Traveling Signal Packet (Respects reduced motion via CSS) */}
        {animatedSignal && active && (
          <motion.div
            animate={
              isHorizontal
                ? { x: ["-10%", "110%"], opacity: [0, 1, 1, 0] }
                : { y: ["-10%", "110%"], opacity: [0, 1, 1, 0] }
            }
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute rounded-full ${
              isHorizontal ? "top-1/2 -translate-y-1/2 h-2 w-3" : "left-1/2 -translate-x-1/2 w-2 h-3"
            } ${
              isDark
                ? "bg-gradient-to-r from-cyan-300 to-blue-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                : "bg-gradient-to-r from-blue-600 to-indigo-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]"
            }`}
          />
        )}
      </div>

      {/* Optional Central Badge / Label */}
      {label && (
        <div
          className={`absolute z-10 flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase backdrop-blur-md shadow-xs ${
            isDark
              ? "bg-[#07172e]/90 text-cyan-300 border border-cyan-400/30"
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
