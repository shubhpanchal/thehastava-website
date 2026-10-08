"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Zap,
  Cpu,
  ShieldCheck,
  Rocket,
  Database,
  RefreshCw,
  BarChart3,
  FileText,
  Scan,
  Layers,
  Network,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";

interface WorkflowStep {
  label: string;
  sublabel: string;
  icon: LucideIcon;
}

interface ServiceWorkflowConfig {
  eyebrow: string;
  badge: string;
  steps: WorkflowStep[];
}

const SERVICE_WORKFLOW_MAP: Record<string, ServiceWorkflowConfig> = {
  "ai-automation": {
    eyebrow: "Operational Intelligence Flow",
    badge: "Deterministic Rules",
    steps: [
      { label: "Trigger Event", sublabel: "Inbound webhook or action", icon: Zap },
      { label: "AI Decision", sublabel: "Intent & priority score", icon: Cpu },
      { label: "Validation Gate", sublabel: "Deterministic rule check", icon: ShieldCheck },
      { label: "System Action", sublabel: "Automated task execution", icon: Rocket },
    ],
  },
  "data-analytics": {
    eyebrow: "Data Pipeline Flow",
    badge: "Single Source of Truth",
    steps: [
      { label: "Data Sources", sublabel: "Multi-system logs & CSVs", icon: Database },
      { label: "Automated ETL", sublabel: "Scheduled transformation", icon: RefreshCw },
      { label: "Normalization", sublabel: "Clean structured schema", icon: ShieldCheck },
      { label: "Live Dashboards", sublabel: "Executive KPI views", icon: BarChart3 },
    ],
  },
  "document-intelligence": {
    eyebrow: "Unstructured Ingestion Flow",
    badge: "99%+ Accuracy",
    steps: [
      { label: "PDF / Email", sublabel: "Invoices, forms & orders", icon: FileText },
      { label: "LLM Parser", sublabel: "Key entity & table parser", icon: Scan },
      { label: "Rule Verification", sublabel: "PO & tax validation", icon: ShieldCheck },
      { label: "ERP Database", sublabel: "Clean schema sync", icon: CheckCircle2 },
    ],
  },
  "business-systems": {
    eyebrow: "Unified System Flow",
    badge: "Bidirectional APIs",
    steps: [
      { label: "Legacy Stacks", sublabel: "Disconnected internal tools", icon: Layers },
      { label: "API Middleware", sublabel: "Reliable webhook bridge", icon: Network },
      { label: "Custom Portal", sublabel: "Role-aware control center", icon: Cpu },
      { label: "Automated Sync", sublabel: "Unified team operations", icon: CheckCircle2 },
    ],
  },
};

export function ServiceMiniWorkflow({ serviceId }: { serviceId: string }) {
  const config = SERVICE_WORKFLOW_MAP[serviceId] || SERVICE_WORKFLOW_MAP["ai-automation"];

  return (
    <div className="mt-5 rounded-2xl border border-slate-200/80 bg-slate-50/90 p-3.5 sm:p-4 shadow-2xs">
      {/* Mini Workflow Header */}
      <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3">
        <div className="flex items-center gap-1.5 text-blue-700">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
          </span>
          <span>{config.eyebrow}</span>
        </div>
        <span className="text-blue-600 font-mono text-[10px] bg-blue-100/70 border border-blue-200/80 px-2 py-0.5 rounded-full">
          {config.badge}
        </span>
      </div>

      {/* 4 Interactive Connected Steps in 2x2 Grid (Generous width, NO truncation) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {config.steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.label}
              whileHover={{ y: -1 }}
              transition={{ duration: 0.15 }}
              className="group/node relative flex items-start gap-2.5 rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-2xs transition-all hover:border-blue-400 hover:shadow-sm"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100 group-hover/node:bg-blue-600 group-hover/node:text-white transition-colors">
                <Icon size={14} strokeWidth={2} />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono font-bold text-blue-600">0{idx + 1}</span>
                  <span className="text-xs font-bold text-slate-900 leading-tight">
                    {step.label}
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">
                  {step.sublabel}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
