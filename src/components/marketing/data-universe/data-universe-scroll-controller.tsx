"use client";

import React from "react";
import { motion } from "motion/react";
import { Activity } from "lucide-react";
import { SCROLL_STAGES } from "./data-universe-config";

interface DataUniverseScrollControllerProps {
  currentStageIdx: number;
  onSelectStage: (stageIdx: number) => void;
  className?: string;
}

export function DataUniverseScrollController({
  currentStageIdx,
  onSelectStage,
  className = "",
}: DataUniverseScrollControllerProps) {
  const stage = SCROLL_STAGES[currentStageIdx] || SCROLL_STAGES[0];

  return (
    <div className={`w-full max-w-4xl mx-auto flex flex-col items-center text-center select-none ${className}`}>
      {/* Stage Status Pill & Telemetry Badge */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-1.5 font-mono text-[10px]">
        <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_12px_rgba(6,182,212,0.2)]">
          <Activity size={10} className="animate-pulse text-cyan-400" />
          <span>{stage.tag}</span>
        </span>

        <span className="px-2 py-0.5 rounded-full bg-black/50 border border-white/10 text-slate-400 font-medium">
          {stage.badge}
        </span>
      </div>

      {/* Main Narrative Headline */}
      <motion.h2
        key={`stage-title-${stage.id}`}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="font-display text-lg sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white max-w-2xl leading-tight"
      >
        {stage.title}
      </motion.h2>

      {/* Narrative Subtitle */}
      <motion.p
        key={`stage-subtitle-${stage.id}`}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.05 }}
        className="font-sans text-xs sm:text-sm text-slate-300 max-w-xl mt-1 leading-snug"
      >
        {stage.subtitle}
      </motion.p>

      {/* Interactive 5-Stage Stepper Bar */}
      <div className="mt-2.5 flex items-center gap-1 sm:gap-1.5 p-1 rounded-xl bg-black/60 border border-white/10 backdrop-blur-xl max-w-full overflow-x-auto">
        {SCROLL_STAGES.map((s, idx) => {
          const isActive = idx === currentStageIdx;
          const isPassed = idx < currentStageIdx;

          return (
            <button
              key={s.id}
              type="button"
              onClick={() => onSelectStage(idx)}
              className={`relative px-2.5 py-1 rounded-lg font-mono text-[10px] sm:text-xs font-semibold transition-all duration-150 cursor-pointer flex items-center gap-1 shrink-0 ${
                isActive
                  ? "bg-cyan-500 text-black shadow-[0_0_12px_rgba(6,182,212,0.5)] font-bold"
                  : isPassed
                  ? "bg-white/10 text-slate-200 hover:bg-white/15"
                  : "bg-transparent text-slate-500 hover:text-slate-300 hover:bg-white/5"
              }`}
            >
              <span className={`text-[9px] ${isActive ? "text-black" : "text-cyan-400"}`}>
                0{s.id}
              </span>
              <span className="uppercase">
                {s.key}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
