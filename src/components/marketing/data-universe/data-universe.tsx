"use client";

import React, { useState, useEffect } from "react";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Activity,
  Play,
  Pause,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { SCROLL_STAGES, ScrollStage } from "./data-universe-config";
import { DataUniverseScene } from "./data-universe-scene";
import { DataTransformationDemo } from "./data-transformation-demo";

export function DataUniverse() {
  const [currentStageIdx, setCurrentStageIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Auto-cycle through the 5 stages every 5 seconds unless user pauses or manual interacts
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentStageIdx((prev) => (prev + 1) % SCROLL_STAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const activeStage: ScrollStage = SCROLL_STAGES[currentStageIdx] || SCROLL_STAGES[0];

  const handleSelectStage = (idx: number) => {
    setCurrentStageIdx(idx);
    setIsPlaying(false); // Pause auto-play when user manually explores
  };

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <section
      id="data-universe"
      aria-label="The Data Universe - Where Business Data Lives and Connects"
      className="relative bg-gradient-to-b from-[#020612] via-[#040C1F] to-[#020612] text-white selection:bg-cyan-500 selection:text-black border-t border-cyan-500/20 overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      {/* Dynamic Background Ambience & Cyber Grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(6, 182, 212, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.22),transparent_70%)] pointer-events-none blur-[60px]" />
      <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-20 max-w-7xl">
        {/* ==================================================================== */}
        {/* 1. HIGH-IMPACT UNIFIED CONTROL HEADER                               */}
        {/* ==================================================================== */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 font-mono text-[11px] text-cyan-300 mb-3.5 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
            <Sparkles size={13} className="text-cyan-400" />
            <span className="font-bold tracking-wider">PHASE 02 // THE DATA UNIVERSE</span>
          </div>

          {/* Core Opening Statement */}
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight sm:leading-[1.15]">
            Growth requires an intelligent understanding of your business.
          </h2>

          <p className="font-sans text-sm sm:text-base text-slate-300 max-w-2xl mt-3 leading-relaxed">
            Before automation can make decisions, data must be connected. Explore how Hastava unifies scattered business data into intelligent context.
          </p>

          {/* Interactive 5-Stage Stepper & Status Bar */}
          <div className="w-full mt-6 flex flex-col items-center gap-3">
            {/* Stage Pills Navigator */}
            <div className="flex items-center gap-1 sm:gap-2 p-1.5 rounded-2xl bg-[#030919]/90 border border-white/15 backdrop-blur-xl shadow-xl max-w-full overflow-x-auto">
              {SCROLL_STAGES.map((s, idx) => {
                const isActive = idx === currentStageIdx;
                const isPassed = idx < currentStageIdx;

                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => handleSelectStage(idx)}
                    className={`relative px-3 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 shrink-0 ${
                      isActive
                        ? "bg-cyan-500 text-black shadow-[0_0_16px_rgba(6,182,212,0.6)] font-bold scale-[1.02]"
                        : isPassed
                        ? "bg-white/10 text-slate-200 hover:bg-white/20"
                        : "bg-transparent text-slate-400 hover:text-slate-200 hover:bg-white/5"
                    }`}
                  >
                    <span className={`text-[10px] font-bold ${isActive ? "text-black" : "text-cyan-400"}`}>
                      0{s.id}
                    </span>
                    <span className="uppercase tracking-wider">
                      {s.key}
                    </span>
                  </button>
                );
              })}

              {/* Auto-Play / Pause Toggle Button */}
              <button
                type="button"
                onClick={handleTogglePlay}
                title={isPlaying ? "Pause auto-progression" : "Resume auto-progression"}
                className={`px-2.5 py-1.5 rounded-xl font-mono text-xs transition-colors cursor-pointer flex items-center gap-1 border shrink-0 ${
                  isPlaying
                    ? "bg-cyan-950/70 border-cyan-500/40 text-cyan-300 hover:bg-cyan-900/80"
                    : "bg-black/50 border-white/20 text-slate-400 hover:text-white"
                }`}
              >
                {isPlaying ? (
                  <>
                    <Pause size={12} className="text-cyan-400" />
                    <span className="text-[10px] hidden sm:inline">AUTOPLAY</span>
                  </>
                ) : (
                  <>
                    <Play size={12} className="text-slate-300" />
                    <span className="text-[10px] hidden sm:inline">PLAY</span>
                  </>
                )}
              </button>
            </div>

            {/* Active Stage Narrative Caption */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 font-mono text-xs text-slate-300">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                <Activity size={11} className="animate-pulse text-cyan-400" />
                <span>{activeStage.tag}</span>
              </span>
              <span className="text-slate-200 font-sans font-medium text-xs sm:text-sm">
                {activeStage.subtitle}
              </span>
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* 2. SPATIAL UNIVERSE ARENA (Large, Wide, Beautifully Integrated)     */}
        {/* ==================================================================== */}
        <div className="w-full relative mx-auto mb-12 sm:mb-16">
          <DataUniverseScene
            stageKey={activeStage.key}
            className="w-full"
          />

          {/* Unified Console Telemetry Footer */}
          <div className="mt-3 px-4 py-2.5 rounded-2xl bg-[#030919]/90 border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-[11px] text-slate-400 shadow-lg">
            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-bold uppercase">Telemetry Stream:</span>
              <span className="text-cyan-300 font-semibold">{activeStage.telemetryLog}</span>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <span className="text-slate-400">STAGE {currentStageIdx + 1} OF 5</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <CheckCircle2 size={13} />
                8/8 CHANNELS LINKED
              </span>
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* 3. TANGIBLE DATA TRANSFORMATION SHOWCASE                            */}
        {/* ==================================================================== */}
        <div className="w-full mb-12 sm:mb-16">
          <DataTransformationDemo />
        </div>

        {/* ==================================================================== */}
        {/* 4. NATURAL BRIDGE TO PHASE 3 (THE AUTOMATION ENGINE QUESTION)        */}
        {/* ==================================================================== */}
        <div className="w-full rounded-3xl bg-gradient-to-b from-[#061024]/90 to-[#020817] border border-cyan-500/20 p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="max-w-4xl mx-auto space-y-4 relative z-10">
            {/* The Progression Chain */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-mono text-xs text-slate-400">
              <span className="text-blue-400 font-bold">DATA</span>
              <span>→</span>
              <span className="text-cyan-400 font-bold">CONNECTION</span>
              <span>→</span>
              <span className="text-indigo-400 font-bold">CONTEXT</span>
              <span>→</span>
              <span className="text-emerald-400 font-bold">INTELLIGENCE</span>
              <span>→</span>
              <span className="px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 font-extrabold border border-cyan-400/50 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                AUTOMATION
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Now that your data is unified & understood, what can you automate?
            </h3>

            <p className="font-sans text-slate-300 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
              When business systems stop operating in silos, repetitive manual workflows disappear. Connected intelligence becomes the foundation for autonomous operations.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-3.5">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="font-bold text-sm px-8 py-3.5 shadow-lg shadow-cyan-500/25 cursor-pointer"
                icon={<ArrowRight size={16} />}
              >
                Discuss Your Data Architecture
              </Button>

              <Button
                href="#services"
                variant="secondary"
                size="lg"
                className="font-bold text-sm px-6 py-3.5 border-white/20 text-white hover:bg-white/10 cursor-pointer"
              >
                Explore Solution Capabilities
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
