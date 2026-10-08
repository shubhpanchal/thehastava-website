"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  FileText,
  Mail,
  Table2,
  Layers,
  Cpu,
  Sparkles,
  Database,
  Workflow,
  BarChart3,
  CheckCircle2,
  Bell,
  ArrowDown,
  ArrowRight,
  Zap,
} from "lucide-react";

export function HeroVisual() {
  const [activeStep, setActiveStep] = useState<number>(0);

  // Cycling active highlight to simulate live automation pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      {/* Dynamic Ambient Glow Behind Canvas */}
      <div
        className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600/25 via-cyan-500/20 to-indigo-600/25 opacity-75 blur-3xl"
        aria-hidden="true"
      />

      {/* Main Glass Workflow Canvas */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#08172e]/85 p-4 sm:p-5 md:p-6 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
            </span>
            <span className="text-xs font-bold tracking-wider uppercase text-slate-300">
              End-to-End Automation Pipeline
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase text-cyan-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              Live Stream
            </span>
          </div>
        </div>

        {/* 3-Stage Pipeline Diagram */}
        <div className="mt-4 space-y-2.5">
          {/* STAGE 1: EXISTING BUSINESS DATA (MANUAL INPUTS) */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className={`rounded-2xl border p-3 sm:p-3.5 transition-all duration-500 ${
              activeStep === 0
                ? "border-blue-400/60 bg-blue-500/10 shadow-lg shadow-blue-500/10"
                : "border-white/10 bg-white/[0.03] hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-blue-500/20 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-blue-300">
                  Stage 01
                </span>
                <span className="text-xs font-semibold text-slate-200">
                  Existing Business Data & Manual Inputs
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400 shrink-0">4 Sources</span>
            </div>

            <div className="mt-2.5 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-xs text-slate-300 transition-colors hover:border-cyan-400/40">
                <FileText size={14} className="text-cyan-400 shrink-0" />
                <span className="whitespace-nowrap font-medium">PDFs & Docs</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-xs text-slate-300 transition-colors hover:border-blue-400/40">
                <Mail size={14} className="text-blue-400 shrink-0" />
                <span className="whitespace-nowrap font-medium">Emails</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-xs text-slate-300 transition-colors hover:border-indigo-400/40">
                <Table2 size={14} className="text-indigo-400 shrink-0" />
                <span className="whitespace-nowrap font-medium">Spreadsheets</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-xs text-slate-300 transition-colors hover:border-cyan-300/40">
                <Layers size={14} className="text-cyan-300 shrink-0" />
                <span className="whitespace-nowrap font-medium">Legacy ERP</span>
              </div>
            </div>
          </motion.div>

          {/* GLOWING CONNECTOR 1 */}
          <div className="relative flex items-center justify-center py-0.5">
            <div className="absolute inset-x-12 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
            <div className="relative flex items-center gap-2 rounded-full border border-cyan-400/40 bg-[#07172f] px-3.5 py-1 text-[10px] font-semibold text-cyan-300 shadow-md shadow-cyan-500/10">
              <Zap size={12} className="text-cyan-400 animate-pulse" />
              <span>Ingestion & Real-time Extraction</span>
            </div>
          </div>

          {/* STAGE 2: HASTAVA INTELLIGENCE LAYER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`relative overflow-hidden rounded-2xl border p-3.5 transition-all duration-500 ${
              activeStep === 1
                ? "border-cyan-400/80 bg-gradient-to-r from-[#0d274f] via-[#091f3c] to-[#0d274f] shadow-xl shadow-cyan-500/20"
                : "border-blue-400/40 bg-gradient-to-r from-[#0a203f] via-[#07172d] to-[#0a203f]"
            }`}
          >
            {/* Animated accent gradient line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-indigo-500 via-cyan-400 to-blue-500" />

            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-blue-600 to-cyan-400 text-white shadow-md shadow-blue-500/30">
                  <Cpu size={18} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight whitespace-nowrap">
                      HASTAVA Intelligence & Rules Engine
                    </h4>
                    <Sparkles size={13} className="text-cyan-300 shrink-0 animate-spin-slow" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-mono text-emerald-300 shrink-0">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Processing</span>
              </div>
            </div>

            <div className="mt-2.5 flex flex-wrap items-center gap-1.5 text-[10px] text-cyan-200">
              <span className="rounded bg-white/10 px-2 py-0.5 font-medium whitespace-nowrap">AI Extraction</span>
              <span className="text-cyan-400/50">•</span>
              <span className="rounded bg-white/10 px-2 py-0.5 font-medium whitespace-nowrap">Validation</span>
              <span className="text-cyan-400/50">•</span>
              <span className="rounded bg-white/10 px-2 py-0.5 font-medium whitespace-nowrap">Business Logic</span>
              <span className="text-cyan-400/50">•</span>
              <span className="rounded bg-white/10 px-2 py-0.5 font-medium whitespace-nowrap">Orchestration</span>
            </div>
          </motion.div>

          {/* GLOWING CONNECTOR 2 */}
          <div className="relative flex items-center justify-center py-0.5">
            <div className="absolute inset-x-12 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
            <div className="relative flex items-center gap-2 rounded-full border border-blue-400/40 bg-[#07172f] px-3.5 py-1 text-[10px] font-semibold text-blue-300 shadow-md shadow-blue-500/10">
              <ArrowDown size={12} className="text-blue-400" />
              <span>Automated Routing & Output Delivery</span>
            </div>
          </div>

          {/* STAGE 3: AUTOMATED BUSINESS OUTCOMES */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className={`rounded-2xl border p-3 sm:p-3.5 transition-all duration-500 ${
              activeStep === 2
                ? "border-emerald-400/60 bg-emerald-500/10 shadow-lg shadow-emerald-500/10"
                : "border-white/10 bg-white/[0.03] hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-cyan-500/20 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-cyan-300">
                  Stage 03
                </span>
                <span className="text-xs font-semibold text-slate-200">
                  Automated Business Outcomes
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 shrink-0">100% Verified</span>
            </div>

            <div className="mt-2.5 flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 rounded-xl border border-emerald-500/20 bg-emerald-950/40 px-3 py-2 text-xs text-emerald-300">
                <Database size={14} className="shrink-0" />
                <span className="whitespace-nowrap font-medium">Clean Data</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-xl border border-blue-500/20 bg-blue-950/40 px-3 py-2 text-xs text-blue-300">
                <Workflow size={14} className="shrink-0" />
                <span className="whitespace-nowrap font-medium">Workflows</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-xl border border-indigo-500/20 bg-indigo-950/40 px-3 py-2 text-xs text-indigo-300">
                <BarChart3 size={14} className="shrink-0" />
                <span className="whitespace-nowrap font-medium">Dashboards</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-xl border border-cyan-500/20 bg-cyan-950/40 px-3 py-2 text-xs text-cyan-300">
                <Bell size={14} className="shrink-0" />
                <span className="whitespace-nowrap font-medium">Alerts</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-xl border border-purple-500/20 bg-purple-950/40 px-3 py-2 text-xs text-purple-300">
                <CheckCircle2 size={14} className="shrink-0" />
                <span className="whitespace-nowrap font-medium">Synced APIs</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Metrics / Telemetry Row */}
        <div className="mt-4 flex flex-wrap items-center justify-between border-t border-white/10 pt-3 text-[11px] sm:text-xs text-slate-400 gap-2">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>Eliminates Manual Copy-Paste & Data Handoffs</span>
          </div>
          <span className="flex items-center gap-1 font-semibold text-cyan-300">
            Real-Time Output Delivery <ArrowRight size={13} />
          </span>
        </div>
      </motion.div>
    </div>
  );
}
