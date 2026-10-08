"use client";

import React from "react";
import { motion } from "motion/react";
import { Zap, LucideIcon } from "lucide-react";

export interface DepartmentWorkflowData {
  id: string;
  title: string;
  shortDesc: string;
  problem: string;
  inputData: Array<{ label: string; icon: LucideIcon }>;
  actionSteps: Array<{ step: string; label: string; desc: string }>;
  deliveredOutcome: Array<{ label: string; desc: string; icon: LucideIcon }>;
  exampleTools: string[];
}

export function DepartmentWorkflow({ data }: { data: DepartmentWorkflowData }) {
  return (
    <div className="mt-8 space-y-6">
      {/* 3-Stage Visual Pipeline Grid */}
      <div className="grid gap-4 md:grid-cols-[1fr_auto_1.15fr_auto_1fr] items-stretch">
        {/* Stage 1: Ingestion Channels */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-slate-50/80 p-4 sm:p-5 shadow-2xs">
          <div>
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3">
              <span>1. Ingestion Sources</span>
              <span className="font-mono text-blue-600">Raw Data</span>
            </div>
            <div className="space-y-2">
              {data.inputData.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white px-3 py-2 text-xs font-semibold text-slate-800 shadow-2xs"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                      <Icon size={13} />
                    </div>
                    <span className="truncate">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200/60 text-[10px] text-slate-500 font-mono">
            Continuous Multi-Source Ingestion
          </div>
        </div>

        {/* Animated Connector 1 */}
        <div className="hidden md:flex flex-col items-center justify-center px-1">
          <div className="h-full w-[2px] bg-gradient-to-b from-blue-200 via-blue-500 to-blue-200 relative">
            <motion.div
              animate={{ y: ["-10%", "110%"], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 -translate-x-1/2 w-2 h-3 rounded-full bg-blue-600 shadow-sm"
            />
          </div>
          <div className="my-2 rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[9px] font-bold text-blue-700">
            Intake
          </div>
        </div>

        {/* Stage 2: HASTAVA Business Logic */}
        <div className="flex flex-col justify-between rounded-2xl border-2 border-blue-500/80 bg-blue-50/70 p-4 sm:p-5 shadow-sm">
          <div>
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-blue-800 mb-3">
              <div className="flex items-center gap-1.5">
                <Zap size={13} className="text-blue-600 animate-pulse" />
                <span>2. HASTAVA Logic & Rules</span>
              </div>
              <span className="font-mono text-blue-700 bg-blue-200/60 px-2 py-0.5 rounded-md text-[10px]">
                Deterministic
              </span>
            </div>

            <div className="space-y-2">
              {data.actionSteps.map((step) => (
                <div
                  key={step.label}
                  className="flex items-start gap-2.5 rounded-xl border border-blue-200/90 bg-white p-2.5 shadow-2xs"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-blue-600 text-[10px] font-mono font-bold text-white">
                    {step.step}
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-blue-950 truncate">{step.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5 truncate">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-blue-200/60 text-[10px] text-blue-900 font-medium">
            Zero Hallucination • Verified Rules
          </div>
        </div>

        {/* Animated Connector 2 */}
        <div className="hidden md:flex flex-col items-center justify-center px-1">
          <div className="h-full w-[2px] bg-gradient-to-b from-blue-200 via-emerald-500 to-emerald-200 relative">
            <motion.div
              animate={{ y: ["-10%", "110%"], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute left-1/2 -translate-x-1/2 w-2 h-3 rounded-full bg-emerald-600 shadow-sm"
            />
          </div>
          <div className="my-2 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-700">
            Sync
          </div>
        </div>

        {/* Stage 3: Delivered Business Outcomes */}
        <div className="flex flex-col justify-between rounded-2xl border border-emerald-200/90 bg-emerald-50/70 p-4 sm:p-5 shadow-2xs">
          <div>
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-3">
              <span>3. Delivered Outcomes</span>
              <span className="font-mono text-emerald-700">Automated</span>
            </div>
            <div className="space-y-2">
              {data.deliveredOutcome.map((out) => {
                const Icon = out.icon;
                return (
                  <div
                    key={out.label}
                    className="flex items-start gap-2.5 rounded-xl border border-emerald-200/80 bg-white p-2.5 shadow-2xs"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                      <Icon size={13} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-emerald-950 truncate">{out.label}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5 truncate">{out.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-emerald-200/60 text-[10px] text-emerald-800 font-mono">
            100% Reliable Operational Impact
          </div>
        </div>
      </div>
    </div>
  );
}
