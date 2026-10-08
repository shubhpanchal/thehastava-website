"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  FileText,
  Mail,
  Table2,
  Database,
  Cpu,
  Sparkles,
  BarChart3,
  CheckCircle2,
  Bell,
  ArrowRight,
  Zap,
  Layers,
  ArrowDown,
} from "lucide-react";

const INPUT_NODES = [
  { label: "PDFs & Invoices", sublabel: "Unstructured docs", icon: FileText, color: "text-cyan-400" },
  { label: "Inbound Emails", sublabel: "Customer & vendor RFQs", icon: Mail, color: "text-blue-400" },
  { label: "Spreadsheets & CSVs", sublabel: "Data exports & tables", icon: Table2, color: "text-indigo-400" },
  { label: "System Webhooks", sublabel: "Legacy databases & APIs", icon: Database, color: "text-cyan-300" },
];

const PROCESSING_STEPS = [
  { step: "01", name: "AI Extraction", detail: "Parse raw fields & tables" },
  { step: "02", name: "Validation Gate", detail: "Deterministic business rules" },
  { step: "03", name: "Intent Scoring", detail: "Classify priority & route" },
  { step: "04", name: "Orchestration", detail: "Trigger multi-system actions" },
];

const OUTCOME_NODES = [
  { label: "CRM Synced", sublabel: "Instant deal creation", icon: Layers, color: "text-blue-400" },
  { label: "ERP Reconciled", sublabel: "Zero manual entry", icon: CheckCircle2, color: "text-emerald-400" },
  { label: "Live Dashboards", sublabel: "Real-time KPI metrics", icon: BarChart3, color: "text-indigo-400" },
  { label: "Instant Alerts", sublabel: "Slack & Email dispatch", icon: Bell, color: "text-cyan-300" },
];

export function HeroWorkflow() {
  const [activeStage, setActiveStage] = useState<number>(0);

  // Cycling active highlights to illustrate continuous workflow flow
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 3);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      {/* Luminous Ambient Backglow */}
      <div
        className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600/20 via-cyan-500/25 to-indigo-600/20 opacity-70 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Transparent Glass Workflow Canvas */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#07172f]/90 p-4 sm:p-5 md:p-6 shadow-[0_25px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
            </span>
            <span className="text-xs font-bold tracking-wider uppercase text-slate-200">
              Automated Business Workflow
            </span>
          </div>

          <div className="flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase text-cyan-300">
            <Sparkles size={11} className="text-cyan-400 animate-pulse" />
            <span>5-Sec Clarity Flow</span>
          </div>
        </div>

        {/* 3-Stage Vertical Linear Pipeline (Generous full-width layout, ZERO truncation) */}
        <div className="mt-4 space-y-3">
          {/* STAGE 01: BUSINESS INPUTS */}
          <div
            className={`rounded-2xl border p-3.5 transition-all duration-500 ${
              activeStage === 0
                ? "border-blue-400/70 bg-blue-500/10 shadow-lg shadow-blue-500/10"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-blue-500/20 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-blue-300">
                  Stage 01
                </span>
                <span className="text-xs font-bold text-slate-200">
                  Business Inputs & Raw Data
                </span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 font-semibold">4 Channels</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {INPUT_NODES.map((node) => {
                const Icon = node.icon;
                return (
                  <div
                    key={node.label}
                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-xs transition-colors hover:border-white/20"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
                      <Icon size={14} className={node.color} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-slate-200 leading-tight">
                        {node.label}
                      </div>
                      <div className="text-[10px] text-slate-400 leading-tight mt-0.5">
                        {node.sublabel}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* GLOWING CONNECTOR 1 */}
          <div className="relative flex items-center justify-center py-0.5">
            <div className="absolute inset-x-8 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
            <div className="relative flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-[#07172f] px-3.5 py-1 text-[10px] font-semibold text-cyan-300 shadow-md shadow-cyan-500/10">
              <Zap size={11} className="text-cyan-400 animate-pulse" />
              <span>Real-Time Ingestion & AI Extraction</span>
            </div>
          </div>

          {/* STAGE 02: HASTAVA AI + AUTOMATION */}
          <div
            className={`relative overflow-hidden rounded-2xl border p-3.5 transition-all duration-500 ${
              activeStage === 1
                ? "border-cyan-400/80 bg-gradient-to-r from-[#0d274f] via-[#091f3c] to-[#0d274f] shadow-xl shadow-cyan-500/20"
                : "border-blue-400/40 bg-gradient-to-r from-[#0a203f] via-[#07172d] to-[#0a203f]"
            }`}
          >
            {/* Top gradient highlight bar */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-indigo-500 via-cyan-400 to-blue-500" />

            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 text-white shadow-sm">
                  <Cpu size={16} />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                    HASTAVA AI + Automation
                  </h3>
                  <p className="text-[10px] text-cyan-300 font-mono">
                    Deterministic Business Rules & Logic
                  </p>
                </div>
              </div>

              <span className="flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-bold text-emerald-300 border border-emerald-500/30 shrink-0">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active Flow
              </span>
            </div>

            {/* 4 Execution Gates in 2x2 grid (Plenty of space, NO clipping) */}
            <div className="mt-2.5 grid grid-cols-2 gap-2">
              {PROCESSING_STEPS.map((step) => {
                const isStepActive = activeStage === 1;
                return (
                  <div
                    key={step.name}
                    className={`flex items-start gap-2 rounded-xl border p-2 transition-all ${
                      isStepActive
                        ? "border-cyan-400/40 bg-cyan-950/40 text-cyan-200"
                        : "border-white/5 bg-white/[0.03] text-slate-300"
                    }`}
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-cyan-500/20 text-[10px] font-mono font-bold text-cyan-300">
                      {step.step}
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white leading-tight">
                        {step.name}
                      </div>
                      <div className="text-[10px] text-slate-400 leading-tight mt-0.5">
                        {step.detail}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* GLOWING CONNECTOR 2 */}
          <div className="relative flex items-center justify-center py-0.5">
            <div className="absolute inset-x-8 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
            <div className="relative flex items-center gap-1.5 rounded-full border border-blue-400/40 bg-[#07172f] px-3.5 py-1 text-[10px] font-semibold text-blue-300 shadow-md shadow-blue-500/10">
              <ArrowDown size={11} className="text-blue-400" />
              <span>Automated System Routing & Delivery</span>
            </div>
          </div>

          {/* STAGE 03: AUTOMATED BUSINESS OUTCOMES */}
          <div
            className={`rounded-2xl border p-3.5 transition-all duration-500 ${
              activeStage === 2
                ? "border-emerald-400/70 bg-emerald-500/10 shadow-lg shadow-emerald-500/10"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-emerald-500/20 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-emerald-300">
                  Stage 03
                </span>
                <span className="text-xs font-bold text-slate-200">
                  Delivered Business Outcomes
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 font-semibold">100% Automated</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {OUTCOME_NODES.map((node) => {
                const Icon = node.icon;
                return (
                  <div
                    key={node.label}
                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-xs transition-colors hover:border-white/20"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
                      <Icon size={14} className={node.color} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-slate-200 leading-tight">
                        {node.label}
                      </div>
                      <div className="text-[10px] text-slate-400 leading-tight mt-0.5">
                        {node.sublabel}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Telemetry Bar */}
        <div className="mt-4 flex flex-wrap items-center justify-between border-t border-white/10 pt-3 text-[11px] text-slate-300 gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>Eliminates Manual Copy-Paste & Disconnected Silos</span>
          </div>
          <span className="flex items-center gap-1 font-semibold text-cyan-300">
            End-to-End System Action <ArrowRight size={13} />
          </span>
        </div>
      </motion.div>
    </div>
  );
}
