"use client";

import React from "react";
import { Clock, CheckCircle2, ShieldCheck, AlertCircle, Cpu } from "lucide-react";
import { EngineState } from "./automation-engine-types";

interface WorkflowTelemetryProps {
  engineState: EngineState;
  completedNodesCount: number;
  totalNodesCount: number;
  currentActiveNodeName: string | null;
  elapsedTimeMs: number;
  className?: string;
}

export function WorkflowTelemetry({
  engineState,
  completedNodesCount,
  totalNodesCount,
  currentActiveNodeName,
  elapsedTimeMs,
  className = "",
}: WorkflowTelemetryProps) {
  const isRunning = engineState === "running";
  const isCompleted = engineState === "completed";
  const isError = engineState === "error";

  const progressPercent =
    totalNodesCount > 0 ? Math.round((completedNodesCount / totalNodesCount) * 100) : 0;

  return (
    <div
      className={`w-full px-4 py-3 rounded-2xl bg-[#030919]/90 border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-[11px] shadow-lg ${className}`}
    >
      {/* Left: Execution Status Indicator */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          {isRunning ? (
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
          ) : isCompleted ? (
            <CheckCircle2 size={13} className="text-emerald-400" />
          ) : isError ? (
            <AlertCircle size={13} className="text-rose-400" />
          ) : (
            <span className="w-2 h-2 rounded-full bg-slate-600" />
          )}

          <span className="text-slate-500 font-bold uppercase">STATUS:</span>
        </div>

        <span
          className={`font-semibold ${
            isCompleted
              ? "text-emerald-300"
              : isRunning
              ? "text-cyan-300 animate-pulse"
              : isError
              ? "text-rose-300"
              : "text-slate-400"
          }`}
        >
          {isCompleted
            ? "ALL ACTIONS COMMITTED"
            : isRunning
            ? `PROCESSING: ${currentActiveNodeName || "WORKFLOW"}`
            : isError
            ? "EXECUTION PAUSED: ERROR DETECTED"
            : "ENGINE READY"}
        </span>
      </div>

      {/* Center: Live Progress Bar */}
      <div className="hidden md:flex items-center gap-2.5 flex-1 max-w-xs mx-4">
        <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden border border-white/10">
          <div
            className={`h-full transition-all duration-300 ${
              isCompleted ? "bg-emerald-400" : "bg-gradient-to-r from-cyan-500 to-blue-500"
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="text-[10px] text-slate-400 shrink-0">{progressPercent}%</span>
      </div>

      {/* Right: Metrics (Elapsed Time + Node Counts) */}
      <div className="flex items-center gap-4 text-slate-400">
        <div className="flex items-center gap-1.5">
          <Clock size={11} className="text-cyan-400" />
          <span>{(elapsedTimeMs / 1000).toFixed(2)}s</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Cpu size={11} className="text-blue-400" />
          <span>
            {completedNodesCount} / {totalNodesCount} NODES
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-1.5 text-emerald-400">
          <ShieldCheck size={11} />
          <span>DETERMINISTIC</span>
        </div>
      </div>
    </div>
  );
}
