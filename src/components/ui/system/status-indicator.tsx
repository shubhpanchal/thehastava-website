"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

export type StatusType = "online" | "processing" | "syncing" | "idle" | "offline" | "error";

export interface StatusIndicatorProps {
  status?: StatusType;
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function StatusIndicator({
  status = "online",
  label,
  size = "md",
  className = "",
}: StatusIndicatorProps) {
  const prefersReduced = useReducedMotion();

  const statusConfig = {
    online: {
      color: "bg-emerald-400",
      pingColor: "bg-emerald-400",
      textColor: "text-emerald-600 dark:text-emerald-400",
      defaultLabel: "ONLINE",
    },
    processing: {
      color: "bg-cyan-400",
      pingColor: "bg-cyan-400",
      textColor: "text-cyan-600 dark:text-cyan-400",
      defaultLabel: "PROCESSING",
    },
    syncing: {
      color: "bg-blue-400",
      pingColor: "bg-blue-400",
      textColor: "text-blue-600 dark:text-blue-400",
      defaultLabel: "SYNCING",
    },
    idle: {
      color: "bg-slate-400",
      pingColor: "bg-slate-400",
      textColor: "text-slate-500 dark:text-slate-400",
      defaultLabel: "IDLE",
    },
    offline: {
      color: "bg-slate-500",
      pingColor: "bg-slate-500",
      textColor: "text-slate-500",
      defaultLabel: "OFFLINE",
    },
    error: {
      color: "bg-rose-500",
      pingColor: "bg-rose-500",
      textColor: "text-rose-600 dark:text-rose-400",
      defaultLabel: "ERROR",
    },
  }[status];

  const sizeDimensions = {
    sm: "h-1.5 w-1.5",
    md: "h-2 w-2",
    lg: "h-2.5 w-2.5",
  }[size];

  const textSizes = {
    sm: "text-[10px]",
    md: "text-xs",
    lg: "text-sm",
  }[size];

  const isAnimated = (status === "online" || status === "processing" || status === "syncing") && !prefersReduced;

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span className="relative flex shrink-0 items-center justify-center">
        {isAnimated && (
          <motion.span
            animate={{ scale: [1, 2.2, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute inline-flex h-full w-full rounded-full ${statusConfig.pingColor}`}
          />
        )}
        <span className={`relative inline-flex rounded-full ${sizeDimensions} ${statusConfig.color}`} />
      </span>
      {label !== undefined ? (
        label && (
          <span className={`font-mono font-semibold uppercase tracking-wider ${textSizes} ${statusConfig.textColor}`}>
            {label}
          </span>
        )
      ) : (
        <span className={`font-mono font-semibold uppercase tracking-wider ${textSizes} ${statusConfig.textColor}`}>
          {statusConfig.defaultLabel}
        </span>
      )}
    </div>
  );
}
