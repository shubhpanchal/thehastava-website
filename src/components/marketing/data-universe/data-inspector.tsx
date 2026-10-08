"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Sparkles,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { useCursor } from "@/components/ui/cursor";
import { DATA_SOURCES, type DataSourceItem } from "./data-universe-config";

interface DataInspectorProps {
  selectedSource: DataSourceItem | null;
  onClose: () => void;
  onSelectSource: (source: DataSourceItem) => void;
  className?: string;
}

export function DataInspector({
  selectedSource,
  onClose,
  onSelectSource,
  className = "",
}: DataInspectorProps) {
  const [activeTab, setActiveTab] = useState<"payload" | "transformation" | "graph">("transformation");
  const [isSimulatingBurst, setIsSimulatingBurst] = useState(false);
  const { setCursorState, resetCursor } = useCursor();

  if (!selectedSource) return null;

  const Icon = selectedSource.icon;

  const handleSimulateBurst = () => {
    setIsSimulatingBurst(true);
    setTimeout(() => {
      setIsSimulatingBurst(false);
    }, 1500);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.96 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={`fixed inset-x-4 bottom-6 md:inset-x-auto md:right-8 md:bottom-8 md:w-[460px] z-50 rounded-2xl bg-[#061224]/95 border border-cyan-500/40 shadow-[0_20px_60px_rgba(0,0,0,0.9)] backdrop-blur-2xl overflow-hidden ${className}`}
        onMouseEnter={() => setCursorState("data", "INSPECT")}
        onMouseLeave={resetCursor}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-white"
              style={{ backgroundColor: selectedSource.accentColor }}
            >
              <Icon size={15} />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-sm font-bold text-white">
                  {selectedSource.name}
                </span>
                <span className="font-mono text-[9px] px-1.5 py-0.2 rounded bg-cyan-950/70 text-cyan-300 border border-cyan-500/30">
                  {selectedSource.shortLabel}
                </span>
              </div>
              <p className="font-mono text-[10px] text-slate-400">
                {selectedSource.samplePayload.rawType}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleSimulateBurst}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 font-mono text-[10px] font-bold transition-colors cursor-pointer"
            >
              <Zap size={11} className={isSimulatingBurst ? "animate-spin text-cyan-200" : ""} />
              <span>{isSimulatingBurst ? "Streaming..." : "Simulate Burst"}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close payload inspector"
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 bg-black/20 font-mono text-[10px]">
          <button
            type="button"
            onClick={() => setActiveTab("transformation")}
            className={`flex-1 py-2 text-center transition-colors cursor-pointer ${
              activeTab === "transformation"
                ? "text-cyan-300 border-b-2 border-cyan-400 font-bold bg-white/5"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            01. AI Extraction
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("payload")}
            className={`flex-1 py-2 text-center transition-colors cursor-pointer ${
              activeTab === "payload"
                ? "text-cyan-300 border-b-2 border-cyan-400 font-bold bg-white/5"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            02. Raw Payload
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("graph")}
            className={`flex-1 py-2 text-center transition-colors cursor-pointer ${
              activeTab === "graph"
                ? "text-cyan-300 border-b-2 border-cyan-400 font-bold bg-white/5"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            03. Graph Node
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 max-h-[300px] overflow-y-auto space-y-3">
          {activeTab === "transformation" && (
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-black/40 border border-white/10 font-mono text-[11px]">
                <div className="flex items-center justify-between text-slate-400 mb-1.5">
                  <span className="text-slate-400">SOURCE INPUT:</span>
                  <span className="text-cyan-300">{selectedSource.samplePayload.rawName}</span>
                </div>
                <div className="text-white text-xs font-semibold flex items-center gap-2">
                  <span className="text-slate-400">→</span>
                  <span>{selectedSource.samplePayload.extractedEntity}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-500/30">
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-cyan-300 font-bold mb-1">
                  <Sparkles size={12} className="text-cyan-400" />
                  <span>HASTAVA RECONCILIATION RESULT:</span>
                </div>
                <p className="text-xs text-slate-200 leading-snug">
                  {selectedSource.samplePayload.transformationOutput}
                </p>
              </div>

              {/* Extracted Key-Value Pills */}
              <div className="space-y-1.5">
                <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider">
                  Extracted Schema Properties
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  {selectedSource.samplePayload.fields.map((field) => (
                    <div
                      key={field.key}
                      className="p-2 rounded-lg bg-white/5 border border-white/10 font-mono text-[10px]"
                    >
                      <div className="text-slate-400 text-[9px] uppercase">{field.key}</div>
                      <div className="text-cyan-200 font-semibold truncate">{field.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "payload" && (
            <div className="p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-[11px] text-slate-300 space-y-1 overflow-x-auto">
              <div className="text-slate-500">{`// Ingested payload from ${selectedSource.shortLabel}`}</div>
              <div>{`{`}</div>
              <div className="pl-4 text-cyan-300">
                {`"source": "${selectedSource.id}",`}
              </div>
              <div className="pl-4 text-cyan-300">
                {`"payloadName": "${selectedSource.samplePayload.rawName}",`}
              </div>
              <div className="pl-4 text-cyan-300">
                {`"timestamp": "${new Date().toISOString()}",`}
              </div>
              <div className="pl-4">{`"data": {`}</div>
              {selectedSource.samplePayload.fields.map((field, idx) => (
                <div key={field.key} className="pl-8 text-emerald-300">
                  {`"${field.key}": "${field.value}"${idx < selectedSource.samplePayload.fields.length - 1 ? "," : ""}`}
                </div>
              ))}
              <div className="pl-4">{`}`}</div>
              <div>{`}`}</div>
            </div>
          )}

          {activeTab === "graph" && (
            <div className="space-y-2 font-mono text-[11px]">
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                <div className="flex items-center gap-1.5 text-emerald-300 font-bold mb-1">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  <span>SYNCHRONIZED WITH BUSINESS GRAPH</span>
                </div>
                <p className="text-xs text-slate-300">
                  Node <span className="text-white font-semibold">[{selectedSource.samplePayload.extractedEntity}]</span> is active and ready for Phase 3 automation rules.
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 flex items-center justify-between text-[10px]">
                <span className="text-slate-400">INGESTION LATENCY:</span>
                <span className="text-cyan-300 font-bold">14ms (Instant)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 flex items-center justify-between text-[10px]">
                <span className="text-slate-400">CROSS-REF ID:</span>
                <span className="text-slate-200">HB-9082-ENT</span>
              </div>
            </div>
          )}
        </div>

        {/* Switch Source Selector Footer */}
        <div className="p-3 bg-black/40 border-t border-white/10 flex items-center justify-between">
          <span className="font-mono text-[9px] text-slate-400">Switch Source:</span>
          <div className="flex gap-1 overflow-x-auto max-w-[300px] py-0.5">
            {DATA_SOURCES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => onSelectSource(s)}
                className={`px-2 py-0.5 rounded font-mono text-[9px] transition-colors cursor-pointer ${
                  s.id === selectedSource.id
                    ? "bg-cyan-500 text-black font-bold"
                    : "bg-white/5 hover:bg-white/15 text-slate-300"
                }`}
              >
                {s.shortLabel}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
