"use client";

import React from "react";
import { useReducedMotion } from "motion/react";
import { Check, Loader2 } from "lucide-react";

export interface PipelineStep {
  id: string;
  label: string;
  status: "complete" | "current" | "upcoming";
  latency?: string;
}

export interface ProcessingStateProps {
  steps: PipelineStep[];
  variant?: "dark" | "light";
  className?: string;
}

export function ProcessingState({
  steps,
  variant = "dark",
  className = "",
}: ProcessingStateProps) {
  const isDark = variant === "dark";
  const prefersReduced = useReducedMotion();

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-5 ${
        isDark
          ? "bg-[#061326] border-white/10 text-white"
          : "bg-white border-slate-200 text-slate-900 shadow-xs"
      } ${className}`}
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-400">
            Pipeline Execution
          </span>
        </div>
        <span className="font-mono text-[10px] text-slate-400 uppercase">
          Real-time Engine
        </span>
      </div>

      <div className="space-y-3">
        {steps.map((step, idx) => {
          const isComplete = step.status === "complete";
          const isCurrent = step.status === "current";

          return (
            <div
              key={step.id}
              className={`flex items-center justify-between p-2.5 rounded-xl transition-colors ${
                isCurrent
                  ? isDark
                    ? "bg-cyan-950/40 border border-cyan-500/40 text-cyan-200"
                    : "bg-blue-50 border border-blue-200 text-blue-900"
                  : isComplete
                  ? isDark
                    ? "bg-white/[0.03] text-slate-300"
                    : "bg-slate-50 text-slate-700"
                  : "text-slate-500 opacity-60"
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold ${
                    isComplete
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                      : isCurrent
                      ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40"
                      : "bg-white/5 text-slate-500 border border-white/10"
                  }`}
                >
                  {isComplete ? (
                    <Check size={12} strokeWidth={3} />
                  ) : isCurrent ? (
                    <Loader2
                      size={12}
                      className={prefersReduced ? "" : "animate-spin text-cyan-400"}
                    />
                  ) : (
                    idx + 1
                  )}
                </div>

                <span className="font-mono text-xs font-medium truncate">
                  {step.label}
                </span>
              </div>

              {step.latency && (
                <span className="font-mono text-[10px] text-slate-400 shrink-0 ml-2">
                  {step.latency}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
