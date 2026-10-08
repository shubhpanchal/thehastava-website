"use client";

import React from "react";
import {
  Play,
  Pause,
  RotateCcw,
} from "lucide-react";
import { WORKFLOW_SCENARIOS } from "./automation-engine-config";
import { EngineState } from "./automation-engine-types";

interface WorkflowControlsProps {
  selectedScenarioId: string;
  onSelectScenario: (scenarioId: "sales" | "operations" | "support") => void;
  engineState: EngineState;
  onRunWorkflow: () => void;
  onPauseWorkflow: () => void;
  onResetWorkflow: () => void;
  className?: string;
}

export function WorkflowControls({
  selectedScenarioId,
  onSelectScenario,
  engineState,
  onRunWorkflow,
  onPauseWorkflow,
  onResetWorkflow,
  className = "",
}: WorkflowControlsProps) {
  const isRunning = engineState === "running";

  return (
    <div className={`w-full flex flex-col gap-4 select-none ${className}`}>
      {/* 1. SCENARIO SELECTOR TABS & ACTION BUTTONS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
        {/* Scenario Switcher Pill Bar */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-[#030919]/90 border border-white/15 backdrop-blur-xl max-w-full">
          {WORKFLOW_SCENARIOS.map((scenario) => {
            const isSelected = scenario.id === selectedScenarioId;
            return (
              <button
                key={scenario.id}
                type="button"
                onClick={() => onSelectScenario(scenario.id)}
                className={`px-4 py-2 rounded-xl font-mono text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? "bg-cyan-500 text-black shadow-[0_0_14px_rgba(6,182,212,0.5)] font-bold scale-[1.02]"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                <span className={`text-[10px] ${isSelected ? "text-black" : "text-cyan-400"}`}>
                  0{scenario.id === "sales" ? "1" : scenario.id === "operations" ? "2" : "3"}
                </span>
                <span className="uppercase tracking-wider font-bold">
                  {scenario.id}
                </span>
              </button>
            );
          })}
        </div>

        {/* Action Controls: Run / Pause & Reset */}
        <div className="flex items-center gap-2.5">
          {isRunning ? (
            <button
              type="button"
              onClick={onPauseWorkflow}
              className="px-6 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400 font-mono text-xs font-bold text-amber-200 flex items-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.3)] cursor-pointer transition-all active:scale-95"
            >
              <Pause size={14} className="text-amber-400 animate-pulse" />
              <span>PAUSE EXECUTION</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onRunWorkflow}
              className="px-7 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-display text-xs sm:text-sm font-extrabold flex items-center gap-2 shadow-[0_0_25px_rgba(6,182,212,0.5)] cursor-pointer transition-all active:scale-95 hover:scale-[1.02]"
            >
              <Play size={14} fill="currentColor" />
              <span>RUN WORKFLOW</span>
            </button>
          )}

          {/* Reset Action */}
          <button
            type="button"
            onClick={onResetWorkflow}
            title="Reset Workflow State"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

