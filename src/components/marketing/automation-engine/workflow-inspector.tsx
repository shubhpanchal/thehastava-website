"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  CheckCircle2,
  Zap,
  Cpu,
  GitFork,
  ToggleLeft,
  ToggleRight,
  Code2,
} from "lucide-react";
import { WorkflowNode } from "./automation-engine-types";

interface WorkflowInspectorProps {
  selectedNode: WorkflowNode | null;
  onClose: () => void;
  onToggleNode?: (nodeId: string) => void;
  onExecuteNodeSolo?: (nodeId: string) => void;
}

export function WorkflowInspector({
  selectedNode,
  onClose,
  onToggleNode,
  onExecuteNodeSolo,
}: WorkflowInspectorProps) {
  // Listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!selectedNode) return null;

  const isLogic = selectedNode.type === "logic";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 20, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 20, scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="w-full lg:w-96 rounded-3xl bg-[#040A18]/95 border border-cyan-500/30 p-5 sm:p-6 backdrop-blur-2xl shadow-[0_12px_50px_rgba(0,0,0,0.9)] flex flex-col justify-between max-h-[580px] overflow-y-auto relative z-30"
      >
        {/* Top Bar: Eyebrow + Close */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#06B6D4]" />
            <span className="font-mono text-[10px] font-bold text-cyan-300 uppercase tracking-wider">
              INSPECTOR // {selectedNode.type}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Inspector"
            className="p-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X size={14} />
          </button>
        </div>

        {/* Node Name & Category */}
        <div className="pt-3 pb-2">
          <div className="flex items-center justify-between gap-2">
            <h4 className="font-display text-lg font-bold text-white tracking-tight">
              {selectedNode.label}
            </h4>

            <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300">
              {selectedNode.executionTimeMs}ms Latency
            </span>
          </div>
          <p className="font-mono text-xs text-slate-400 mt-0.5">
            {selectedNode.sublabel} • {selectedNode.category}
          </p>
        </div>

        {/* Section 1: Operational Purpose */}
        <div className="space-y-1.5 pt-2">
          <span className="font-mono text-[9px] text-cyan-400 font-bold uppercase tracking-wider">
            01. OPERATIONAL PURPOSE
          </span>
          <p className="text-xs text-slate-200 leading-relaxed bg-black/40 p-3 rounded-xl border border-white/5">
            {selectedNode.processDescription}
          </p>
        </div>

        {/* Section 2: Technology & Engine */}
        <div className="space-y-1.5 pt-3">
          <div className="flex items-center gap-1.5 font-mono text-[9px] text-slate-400 uppercase tracking-wider">
            <Cpu size={10} className="text-cyan-400" />
            <span>02. EXECUTION ENGINE & STACK</span>
          </div>
          <div className="font-mono text-[11px] text-cyan-200 bg-cyan-950/30 px-3 py-1.5 rounded-lg border border-cyan-500/20 flex items-center justify-between">
            <span>{selectedNode.techStack}</span>
            <span className="text-[9px] text-emerald-400">READY</span>
          </div>
        </div>

        {/* Section 3: Inputs Schema */}
        <div className="space-y-1.5 pt-3">
          <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">
            03. INBOUND INPUTS ({selectedNode.inputs.length})
          </span>
          <div className="space-y-1 bg-black/40 p-2.5 rounded-xl border border-white/5">
            {selectedNode.inputs.map((inp) => (
              <div key={inp.label} className="flex items-center justify-between font-mono text-[10px] gap-2">
                <span className="text-slate-400">{inp.label}:</span>
                <span className="text-slate-200 font-medium truncate max-w-[170px]">{inp.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Outputs Schema & Entities */}
        <div className="space-y-1.5 pt-3">
          <span className="font-mono text-[9px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
            <CheckCircle2 size={10} />
            04. PRODUCED OUTPUTS
          </span>
          <div className="space-y-1 bg-emerald-950/20 p-2.5 rounded-xl border border-emerald-500/30">
            {selectedNode.outputs.map((out) => (
              <div key={out.label} className="flex items-center justify-between font-mono text-[10px] gap-2">
                <span className="text-emerald-300/80">{out.label}:</span>
                <span className="text-white font-semibold truncate max-w-[170px]">{out.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Decision Logic Gate (If applicable) */}
        {isLogic && selectedNode.decisionConfig && (
          <div className="space-y-1.5 pt-3">
            <div className="flex items-center gap-1 font-mono text-[9px] text-amber-400 font-bold uppercase tracking-wider">
              <GitFork size={10} />
              <span>05. DECISION RULE CONFIGURATION</span>
            </div>
            <div className="p-3 rounded-xl bg-amber-950/25 border border-amber-500/30 font-mono text-[10px] space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Condition:</span>
                <span className="text-amber-200 font-bold">{selectedNode.decisionConfig.conditionLabel}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Threshold:</span>
                <span className="text-white font-bold">{selectedNode.decisionConfig.threshold}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Evaluated Value:</span>
                <span className="text-emerald-300 font-bold">{selectedNode.decisionConfig.evaluatedValue} (PASS)</span>
              </div>
            </div>
          </div>
        )}

        {/* Section 6: Live Payload JSON Preview */}
        {selectedNode.livePayload && (
          <div className="space-y-1.5 pt-3">
            <div className="flex items-center gap-1 font-mono text-[9px] text-slate-400 uppercase tracking-wider">
              <Code2 size={10} className="text-cyan-400" />
              <span>06. STRUCTURED TELEMETRY PAYLOAD</span>
            </div>
            <div className="p-2 rounded-lg bg-black/60 border border-white/5 font-mono text-[9px] text-cyan-300/90 whitespace-pre overflow-x-auto">
              {JSON.stringify(selectedNode.livePayload, null, 2)}
            </div>
          </div>
        )}

        {/* Action Controls in Footer */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
          {selectedNode.isOptional && onToggleNode && (
            <button
              type="button"
              onClick={() => onToggleNode(selectedNode.id)}
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-mono text-[10px] text-slate-300 flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              {selectedNode.isEnabled !== false ? (
                <>
                  <ToggleRight size={13} className="text-cyan-400" />
                  <span>Bypass Node</span>
                </>
              ) : (
                <>
                  <ToggleLeft size={13} className="text-slate-500" />
                  <span>Enable Node</span>
                </>
              )}
            </button>
          )}

          {onExecuteNodeSolo && (
            <button
              type="button"
              onClick={() => onExecuteNodeSolo(selectedNode.id)}
              className="ml-auto px-3.5 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/50 font-mono text-[10px] font-bold text-cyan-300 flex items-center gap-1.5 shadow-[0_0_12px_rgba(6,182,212,0.25)] cursor-pointer transition-colors"
            >
              <Zap size={11} />
              <span>Simulate Single Step</span>
            </button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
