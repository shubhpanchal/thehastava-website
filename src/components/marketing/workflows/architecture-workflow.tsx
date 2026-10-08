"use client";

import React from "react";
import { motion } from "motion/react";
import {
  FileText,
  Scan,
  ShieldCheck,
  Database,
  Workflow,
  Cpu,
  Zap,
  CheckCircle2,
  BarChart3,
  RefreshCw,
  Layers,
  Network,
  LucideIcon,
} from "lucide-react";

interface ArchitectureStep {
  step: string;
  name: string;
  detail: string;
  icon: LucideIcon;
}

interface ArchitecturePatternConfig {
  num: string;
  title: string;
  eyebrow: string;
  steps: ArchitectureStep[];
}

const ARCHITECTURE_CONFIGS: Record<string, ArchitecturePatternConfig> = {
  "01": {
    num: "01",
    title: "Document Intelligence",
    eyebrow: "Unstructured Ingestion Pipeline",
    steps: [
      { step: "01", name: "PDF / Email Intake", detail: "Invoices, forms & orders", icon: FileText },
      { step: "02", name: "AI Extraction", detail: "Key entities & line items", icon: Scan },
      { step: "03", name: "Logic Verification", detail: "PO & tax validation gates", icon: ShieldCheck },
      { step: "04", name: "Structured Schema", detail: "Clean ERP & DB sync", icon: Database },
    ],
  },
  "02": {
    num: "02",
    title: "Workflow Automation",
    eyebrow: "Autonomous Business Flow",
    steps: [
      { step: "01", name: "Inbound Request", detail: "Webhook or form intake", icon: Workflow },
      { step: "02", name: "Intent Scoring", detail: "Deterministic rule check", icon: Cpu },
      { step: "03", name: "Orchestration", detail: "Task routing & alerts", icon: Zap },
      { step: "04", name: "System Execution", detail: "Multi-app state sync", icon: CheckCircle2 },
    ],
  },
  "03": {
    num: "03",
    title: "Data & Reporting",
    eyebrow: "Automated Data Infrastructure",
    steps: [
      { step: "01", name: "Multi-Source Logs", detail: "Siloed app exports & CSVs", icon: Database },
      { step: "02", name: "Automated ETL", detail: "Scheduled transforms", icon: RefreshCw },
      { step: "03", name: "Aggregation", detail: "Core KPI calculations", icon: ShieldCheck },
      { step: "04", name: "Live Dashboards", detail: "Executive real-time views", icon: BarChart3 },
    ],
  },
  "04": {
    num: "04",
    title: "Business Systems",
    eyebrow: "Unified Operational Core",
    steps: [
      { step: "01", name: "Legacy Software", detail: "Disconnected tool stacks", icon: Layers },
      { step: "02", name: "API Middleware", detail: "Secure webhook bridge", icon: Network },
      { step: "03", name: "Custom Portal", detail: "Role-aware control center", icon: Cpu },
      { step: "04", name: "Unified Operations", detail: "Two-way automated sync", icon: CheckCircle2 },
    ],
  },
};

export function ArchitectureWorkflow({ patternNum }: { patternNum: string }) {
  const config = ARCHITECTURE_CONFIGS[patternNum] || ARCHITECTURE_CONFIGS["01"];

  return (
    <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/70 p-3.5 sm:p-4 backdrop-blur-md">
      {/* Mini Header */}
      <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-cyan-400 mb-3">
        <div className="flex items-center gap-1.5">
          <Zap size={13} className="text-cyan-400 animate-pulse" />
          <span>{config.eyebrow}</span>
        </div>
        <span className="text-slate-400 font-mono text-[10px]">Active Architecture</span>
      </div>

      {/* 4 Luminous Connected Steps in 2x2 Grid (Spacious, ZERO truncation) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {config.steps.map((step) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.name}
              whileHover={{ y: -1 }}
              transition={{ duration: 0.15 }}
              className="group/item relative flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] p-2.5 transition-all hover:border-cyan-400/50 hover:bg-white/[0.08]"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 group-hover/item:bg-cyan-500/20 transition-colors">
                <Icon size={14} />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono font-bold text-cyan-400">
                    {step.step}
                  </span>
                  <span className="text-xs font-bold text-white leading-tight">
                    {step.name}
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
