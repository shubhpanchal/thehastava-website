"use client";

import React from "react";
import { motion } from "motion/react";
import {
  CheckCircle2,
  ArrowRight,
  XCircle,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WorkflowScenario } from "./automation-engine-types";

interface WorkflowOutcomeProps {
  scenario: WorkflowScenario;
  onReset: () => void;
  className?: string;
}

export function WorkflowOutcome({
  scenario,
  onReset,
  className = "",
}: WorkflowOutcomeProps) {
  const { simulatedOutcome } = scenario;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`w-full rounded-3xl bg-[#040A18] border border-cyan-500/30 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_0_80px_rgba(6,182,212,0.18)] ${className}`}
    >
      {/* Top Banner: Success Eyebrow & Core Headline */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 font-mono text-[10px] text-emerald-300 font-bold mb-2 shadow-[0_0_12px_rgba(16,185,129,0.3)]">
            <CheckCircle2 size={12} className="text-emerald-400" />
            <span>WORKFLOW EXECUTION COMPLETE // OUTCOME COMMITTED</span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
            {simulatedOutcome.headline}
          </h3>

          <p className="font-sans text-xs sm:text-sm text-slate-300 max-w-2xl mt-1.5 leading-relaxed">
            {simulatedOutcome.summary}
          </p>
        </div>

        {/* Quick Re-Run Button */}
        <button
          type="button"
          onClick={onReset}
          className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-mono text-xs text-slate-300 flex items-center gap-1.5 self-start cursor-pointer transition-colors shrink-0"
        >
          <RotateCcw size={13} />
          <span>Test Again</span>
        </button>
      </div>

      {/* 4 Key Business Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 py-6 border-b border-white/10">
        {simulatedOutcome.keyMetrics.map((metric) => (
          <div
            key={metric.label}
            className="p-3.5 rounded-2xl bg-black/40 border border-white/5 font-mono"
          >
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">{metric.label}</div>
            <div className="text-base sm:text-lg font-bold text-cyan-300 mt-0.5">{metric.value}</div>
          </div>
        ))}
      </div>

      {/* Side-by-Side: BEFORE (Manual Friction) vs AFTER (Hastava Autonomous Engine) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6">
        {/* BEFORE CARD */}
        <div className="p-5 sm:p-6 rounded-2xl bg-rose-950/15 border border-rose-500/30 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-rose-500/20">
            <div className="flex items-center gap-2">
              <XCircle size={14} className="text-rose-400" />
              <span className="font-mono text-xs font-bold text-rose-300 uppercase tracking-wider">
                BEFORE // MANUAL HUMAN WORKFLOW
              </span>
            </div>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-rose-950/80 text-rose-300 border border-rose-500/30 font-semibold">
              {simulatedOutcome.beforeManual.duration}
            </span>
          </div>

          <p className="text-xs text-rose-200/80 leading-relaxed font-sans">
            {simulatedOutcome.beforeManual.friction}
          </p>

          <div className="space-y-1.5 pt-1 font-mono text-[11px] text-slate-400">
            {simulatedOutcome.beforeManual.steps.map((step) => (
              <div key={step} className="flex items-start gap-2">
                <span className="text-rose-400 font-bold shrink-0">✕</span>
                <span className="text-slate-300">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AFTER CARD */}
        <div className="p-5 sm:p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/40 space-y-3 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
          <div className="flex items-center justify-between pb-2 border-b border-emerald-500/20">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-400" />
              <span className="font-mono text-xs font-bold text-emerald-300 uppercase tracking-wider">
                AFTER // HASTAVA AUTONOMOUS ENGINE
              </span>
            </div>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 font-bold">
              {simulatedOutcome.afterAutomated.duration}
            </span>
          </div>

          <p className="text-xs text-emerald-200/90 leading-relaxed font-sans">
            {simulatedOutcome.afterAutomated.outcome}
          </p>

          <div className="space-y-1.5 pt-1 font-mono text-[11px]">
            {simulatedOutcome.afterAutomated.steps.map((step) => (
              <div key={step} className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span className="text-slate-200">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Proposition Reinforcement Callout */}
      <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="text-cyan-400 font-bold">CORE OUTCOME:</span>
          <span className="text-white font-extrabold tracking-wide">
            LESS MANUAL WORK. MORE TIME TO GROW.
          </span>
        </div>

        <Button
          href="/contact"
          variant="primary"
          size="sm"
          className="font-bold text-xs px-5 py-2.5 shadow-md shadow-cyan-500/20 cursor-pointer self-start sm:self-auto"
          icon={<ArrowRight size={13} />}
        >
          Build This Workflow For Your Business
        </Button>
      </div>
    </motion.div>
  );
}
