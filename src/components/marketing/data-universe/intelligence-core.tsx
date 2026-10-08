"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu } from "lucide-react";
import { useCursor } from "@/components/ui/cursor";
import { SYNTHESIS_PILLARS } from "./data-universe-config";

interface IntelligenceCoreProps {
  stageKey: "dormant" | "conduits" | "streaming" | "intelligence" | "unified";
  onPillarClick?: (pillarId: string) => void;
  className?: string;
}

export function IntelligenceCore({
  stageKey,
  onPillarClick,
  className = "",
}: IntelligenceCoreProps) {
  const [activePillarId, setActivePillarId] = useState<string>("understand");
  const { setCursorState, resetCursor } = useCursor();

  const hasConduits = stageKey !== "dormant";
  const isStreaming = stageKey === "streaming";
  const isIntelligenceActive = stageKey === "intelligence" || stageKey === "unified";
  const isUnified = stageKey === "unified";

  const activePillar = SYNTHESIS_PILLARS.find((p) => p.id === activePillarId) || SYNTHESIS_PILLARS[1];

  return (
    <div
      className={`relative flex flex-col items-center justify-center ${className}`}
      onMouseEnter={() => setCursorState("view", "INTELLIGENCE")}
      onMouseLeave={resetCursor}
    >
      {/* Outer Atmospheric Glow Sphere */}
      <div
        className={`absolute -inset-6 rounded-full blur-2xl transition-opacity duration-1000 pointer-events-none ${
          isUnified
            ? "bg-gradient-to-tr from-cyan-600/35 via-blue-600/30 to-indigo-600/35 opacity-100 scale-110"
            : isIntelligenceActive
            ? "bg-gradient-to-tr from-cyan-600/25 via-blue-600/25 to-indigo-600/20 opacity-90"
            : hasConduits
            ? "bg-blue-600/15 opacity-60"
            : "bg-blue-900/10 opacity-30"
        }`}
      />

      {/* Main Core Capsule (Ultra-compact & sleek) */}
      <motion.div
        animate={
          isIntelligenceActive
            ? { scale: [1, 1.015, 1], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } }
            : {}
        }
        className={`relative z-20 w-[270px] sm:w-[295px] p-3 sm:p-3.5 rounded-2xl border transition-all duration-700 backdrop-blur-2xl shadow-2xl ${
          isUnified
            ? "bg-[#061224]/95 border-cyan-400/60 shadow-[0_0_35px_rgba(6,182,212,0.35)] ring-1 ring-cyan-400/40"
            : isIntelligenceActive
            ? "bg-[#061224]/90 border-cyan-500/40 shadow-[0_0_25px_rgba(6,182,212,0.25)]"
            : hasConduits
            ? "bg-[#071328]/85 border-blue-500/30 shadow-[0_0_18px_rgba(37,99,235,0.2)]"
            : "bg-[#050C1A]/80 border-white/10 opacity-80"
        }`}
      >
        {/* Top Status Bar & Live Telemetry */}
        <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <div
              className={`w-1.5 h-1.5 rounded-full ${
                isUnified
                  ? "bg-emerald-400 shadow-[0_0_6px_#10B981] animate-pulse"
                  : isIntelligenceActive
                  ? "bg-cyan-400 shadow-[0_0_6px_#06B6D4] animate-pulse"
                  : hasConduits
                  ? "bg-blue-400"
                  : "bg-slate-600"
              }`}
            />
            <span className="font-mono text-[8px] font-bold uppercase tracking-wider text-slate-300">
              HASTAVA INTELLIGENCE
            </span>
          </div>

          <span
            className={`px-1.5 py-0.2 rounded-full font-mono text-[7px] font-bold uppercase border ${
              isUnified
                ? "bg-emerald-950/60 text-emerald-300 border-emerald-500/40"
                : isIntelligenceActive
                ? "bg-cyan-950/60 text-cyan-300 border-cyan-500/40"
                : isStreaming
                ? "bg-blue-950/60 text-blue-300 border-blue-500/30"
                : hasConduits
                ? "bg-blue-950/60 text-blue-300 border-blue-500/30"
                : "bg-slate-900 text-slate-500 border-slate-700"
            }`}
          >
            {isUnified
              ? "UNIFIED GRAPH"
              : isIntelligenceActive
              ? "SYNTHESIZING"
              : isStreaming
              ? "STREAMING"
              : hasConduits
              ? "LINKED"
              : "STANDBY"}
          </span>
        </div>

        {/* Center Core Brand Heading */}
        <div className="text-center py-0.5">
          <div className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded bg-white/5 border border-white/10 font-mono text-[8px] text-cyan-300 mb-0.5">
            <Cpu size={9} className="text-cyan-400" />
            <span>CROSS-SYSTEM RECONCILIATION</span>
          </div>
          <h3 className="font-display text-base sm:text-lg font-extrabold tracking-tight text-white leading-none">
            HASTAVA
          </h3>
          <p className="font-mono text-[9px] text-slate-400 mt-0.5">
            {isUnified
              ? "Living Business Knowledge Graph"
              : isIntelligenceActive
              ? "Normalizing & Understanding Streams"
              : "Central Intelligence & Context Engine"}
          </p>
        </div>

        {/* 4 Interactive Synthesis Pillars / Stages */}
        <div className="mt-2 pt-1.5 border-t border-white/10">
          <div className="grid grid-cols-4 gap-1">
            {SYNTHESIS_PILLARS.map((pillar) => {
              const isSelected = activePillarId === pillar.id;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => {
                    setActivePillarId(pillar.id);
                    onPillarClick?.(pillar.id);
                  }}
                  className={`relative p-1 rounded-md border text-center transition-all cursor-pointer focus:outline-none ${
                    isSelected
                      ? "border-cyan-400 bg-cyan-950/70 shadow-[0_0_8px_rgba(6,182,212,0.3)]"
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  <div className="font-mono text-[7px] text-slate-400 font-bold">
                    {pillar.step}
                  </div>
                  <div
                    className={`font-display text-[8px] font-bold uppercase truncate ${
                      isSelected ? "text-cyan-300" : "text-slate-300"
                    }`}
                  >
                    {pillar.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Synthesis Pillar Description Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, y: 2 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -2 }}
              transition={{ duration: 0.1 }}
              className={`mt-1.5 p-1.5 rounded-md border ${activePillar.bgAccent} backdrop-blur-md`}
            >
              <div className="flex items-center justify-between mb-0.5">
                <span className={`font-mono text-[8px] font-bold ${activePillar.accent}`}>
                  {`${activePillar.step} // ${activePillar.title}`}
                </span>
                <span className="font-mono text-[7px] px-1 py-0.2 rounded bg-black/40 text-slate-300 border border-white/10">
                  {activePillar.metric}
                </span>
              </div>
              <p className="text-[9px] text-slate-200 leading-snug">
                {activePillar.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Live Processing Telemetry Rows */}
        <div className="mt-1.5 pt-1.5 border-t border-white/10 grid grid-cols-2 gap-1 font-mono text-[8px]">
          <div className="p-1 rounded bg-black/40 border border-white/5 flex items-center justify-between">
            <span className="text-slate-400">SOURCES:</span>
            <span className="text-cyan-300 font-bold">8 LINKED</span>
          </div>
          <div className="p-1 rounded bg-black/40 border border-white/5 flex items-center justify-between">
            <span className="text-slate-400">SCHEMA:</span>
            <span className="text-emerald-300 font-bold">UNIFIED</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
