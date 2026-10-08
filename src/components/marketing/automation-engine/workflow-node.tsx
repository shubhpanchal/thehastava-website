"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Zap,
  Sparkles,
  Database,
  GitFork,
  Layers,
  Send,
  LifeBuoy,
  FileText,
  Truck,
  DollarSign,
  ShieldCheck,
  Bell,
  Cpu,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  Check,
  HelpCircle,
} from "lucide-react";
import { useCursor } from "@/components/ui/cursor";
import { WorkflowNode as WorkflowNodeType, NodeType } from "./automation-engine-types";

// Icon Resolver
const ICON_MAP: Record<string, React.ElementType> = {
  Zap,
  Sparkles,
  Database,
  GitFork,
  Layers,
  Send,
  LifeBuoy,
  FileText,
  Truck,
  DollarSign,
  ShieldCheck,
  Bell,
  Cpu,
  CheckCircle2,
  AlertTriangle: AlertCircle,
  RotateCcw,
};

interface WorkflowNodeProps {
  node: WorkflowNodeType;
  isSelected: boolean;
  onSelect: (node: WorkflowNodeType) => void;
  onToggleOptional?: (nodeId: string) => void;
  onRetry?: (nodeId: string) => void;
  className?: string;
}

export function WorkflowNode({
  node,
  isSelected,
  onSelect,
  onRetry,
  className = "",
}: WorkflowNodeProps) {
  const { setCursorState, resetCursor } = useCursor();
  const IconComponent = ICON_MAP[node.iconName] || HelpCircle;

  const isProcessing = node.status === "processing";
  const isSuccess = node.status === "success";
  const isError = node.status === "error";
  const isSkipped = node.status === "skipped" || node.isEnabled === false;

  // Type Color Configuration
  const getTypeColor = (type: NodeType) => {
    switch (type) {
      case "trigger":
        return {
          badge: "text-cyan-300 bg-cyan-950/80 border-cyan-500/40",
          iconBg: "bg-cyan-500/20 text-cyan-300 border-cyan-400/40",
          glow: "rgba(6, 182, 212, 0.4)",
        };
      case "ai":
        return {
          badge: "text-purple-300 bg-purple-950/80 border-purple-500/40",
          iconBg: "bg-purple-500/20 text-purple-300 border-purple-400/40",
          glow: "rgba(168, 85, 247, 0.4)",
        };
      case "data":
        return {
          badge: "text-blue-300 bg-blue-950/80 border-blue-500/40",
          iconBg: "bg-blue-500/20 text-blue-300 border-blue-400/40",
          glow: "rgba(59, 130, 246, 0.4)",
        };
      case "logic":
        return {
          badge: "text-amber-300 bg-amber-950/80 border-amber-500/40",
          iconBg: "bg-amber-500/20 text-amber-300 border-amber-400/40",
          glow: "rgba(245, 158, 11, 0.4)",
        };
      case "action":
        return {
          badge: "text-emerald-300 bg-emerald-950/80 border-emerald-500/40",
          iconBg: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
          glow: "rgba(16, 185, 129, 0.4)",
        };
      case "output":
        return {
          badge: "text-teal-300 bg-teal-950/80 border-teal-500/40",
          iconBg: "bg-teal-500/20 text-teal-300 border-teal-400/40",
          glow: "rgba(20, 184, 166, 0.4)",
        };
      default:
        return {
          badge: "text-slate-300 bg-slate-900 border-slate-700",
          iconBg: "bg-white/10 text-white border-white/20",
          glow: "rgba(255, 255, 255, 0.2)",
        };
    }
  };

  const style = getTypeColor(node.type);

  const handleMouseEnter = () => {
    setCursorState("view", node.label);
  };

  const handleMouseLeave = () => {
    resetCursor();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(node);
    }
  };

  return (
    <div
      className={`relative select-none ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Outer Button Container */}
      <motion.button
        type="button"
        role="button"
        tabIndex={0}
        aria-pressed={isSelected}
        aria-label={`Inspect ${node.label} node (${node.type})`}
        onClick={() => onSelect(node)}
        onKeyDown={handleKeyDown}
        whileHover={{ scale: isSkipped ? 1 : 1.04 }}
        whileTap={{ scale: isSkipped ? 1 : 0.96 }}
        className={`relative w-[140px] sm:w-[148px] p-2.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 backdrop-blur-2xl ${
          isSkipped
            ? "bg-[#060B16]/40 border-white/5 opacity-30 grayscale"
            : isError
            ? "bg-rose-950/40 border-rose-500 shadow-[0_0_24px_rgba(244,63,94,0.4)] ring-1 ring-rose-400"
            : isSelected
            ? "bg-[#0B1A35]/95 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.4)] ring-1 ring-cyan-400"
            : isProcessing
            ? "bg-[#08152B]/95 border-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.35)] ring-1 ring-cyan-400/50"
            : isSuccess
            ? "bg-[#061824]/90 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:border-emerald-400"
            : "bg-[#061022]/85 border-white/12 shadow-[0_4px_14px_rgba(0,0,0,0.6)] hover:border-cyan-500/40 hover:bg-[#081429]/95"
        }`}
      >
        {/* Glow Halo behind Node when Processing or Selected */}
        {(isSelected || isProcessing) && (
          <div
            className="absolute -inset-1 rounded-2xl blur-md opacity-60 pointer-events-none transition-opacity"
            style={{ background: style.glow }}
          />
        )}

        {/* Top Eyebrow: Step Badge & Node Type */}
        <div className="relative z-10 flex items-center justify-between gap-1 pb-1 mb-1 border-b border-white/10 font-mono text-[7.5px]">
          <span className={`px-1.5 py-0.2 rounded border font-bold uppercase tracking-wider ${style.badge}`}>
            {node.badge || node.type}
          </span>

          {/* Status Indicator */}
          <div className="flex items-center gap-1">
            {isProcessing ? (
              <span className="flex items-center gap-1 text-cyan-300 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>SYNC</span>
              </span>
            ) : isSuccess ? (
              <span className="flex items-center gap-0.5 text-emerald-400 font-bold">
                <Check size={8} />
                <span>OK</span>
              </span>
            ) : isError ? (
              <span className="flex items-center gap-0.5 text-rose-400 font-bold">
                <AlertCircle size={8} />
                <span>ERR</span>
              </span>
            ) : isSkipped ? (
              <span className="text-slate-500 font-medium">SKIP</span>
            ) : (
              <span className="text-slate-500 font-medium">READY</span>
            )}
          </div>
        </div>

        {/* Main Node Header: Icon + Title */}
        <div className="relative z-10 flex items-center gap-2">
          {/* Icon Capsule */}
          <div
            className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
              isProcessing
                ? "bg-cyan-500/30 text-cyan-200 border-cyan-400 animate-pulse"
                : isSuccess
                ? "bg-emerald-500/20 text-emerald-300 border-emerald-400/50"
                : isError
                ? "bg-rose-500/20 text-rose-300 border-rose-400"
                : style.iconBg
            }`}
          >
            <IconComponent size={13} />
          </div>

          {/* Titles */}
          <div className="min-w-0 flex-1">
            <div className="font-display text-[11px] sm:text-xs font-bold text-white tracking-tight leading-tight truncate">
              {node.label}
            </div>
            <div className="font-mono text-[8px] text-slate-400 truncate mt-0.5">
              {node.sublabel}
            </div>
          </div>
        </div>

        {/* Real-Time Live Micro-Metric Bar */}
        <div className="relative z-10 mt-1.5 pt-1 border-t border-white/10 flex items-center justify-between font-mono text-[7.5px] text-slate-400">
          <span className="truncate max-w-[80px] text-slate-500">
            {node.category.split(" ")[0]}
          </span>

          <span
            className={`font-semibold ${
              isSuccess ? "text-emerald-300" : isProcessing ? "text-cyan-300" : "text-slate-400"
            }`}
          >
            {isSuccess ? `${node.executionTimeMs}ms` : isProcessing ? "Running" : "Ready"}
          </span>
        </div>

        {/* Error State Recovery Button */}
        {isError && onRetry && (
          <div
            className="relative z-10 mt-1.5 pt-1 border-t border-rose-500/30 flex items-center justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="font-mono text-[7.5px] text-rose-300">Timeout</span>
            <button
              type="button"
              onClick={() => onRetry(node.id)}
              className="px-1.5 py-0.2 rounded bg-rose-500/20 hover:bg-rose-500/40 border border-rose-400 font-mono text-[7.5px] font-bold text-rose-200 flex items-center gap-0.5 cursor-pointer"
            >
              <RotateCcw size={7} />
              <span>RETRY</span>
            </button>
          </div>
        )}

        {/* Left Input Port Dot (Connector Anchor) */}
        {node.type !== "trigger" && (
          <div
            className={`absolute -left-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 z-30 transition-all ${
              isProcessing
                ? "bg-cyan-300 border-[#030816] shadow-[0_0_10px_#22D3EE]"
                : isSuccess
                ? "bg-emerald-400 border-[#030816] shadow-[0_0_8px_#10B981]"
                : isSkipped
                ? "bg-slate-700 border-[#030816] opacity-40"
                : "bg-[#030F20] border-cyan-400/80 shadow-[0_0_6px_rgba(6,182,212,0.6)]"
            }`}
          />
        )}

        {/* Right Output Port Dot (Connector Anchor) */}
        {node.type !== "output" && (
          <div
            className={`absolute -right-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 z-30 transition-all ${
              isProcessing
                ? "bg-cyan-300 border-[#030816] shadow-[0_0_10px_#22D3EE]"
                : isSuccess
                ? "bg-emerald-400 border-[#030816] shadow-[0_0_8px_#10B981]"
                : isSkipped
                ? "bg-slate-700 border-[#030816] opacity-40"
                : "bg-[#030F20] border-cyan-400/80 shadow-[0_0_6px_rgba(6,182,212,0.6)]"
            }`}
          />
        )}
      </motion.button>
    </div>
  );
}
