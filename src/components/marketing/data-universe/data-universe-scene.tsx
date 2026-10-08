"use client";

import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { DATA_SOURCES, type DataSourceItem } from "./data-universe-config";
import { DataSourceNode } from "./data-source-node";
import { DataPacketStream } from "./data-packet-stream";
import { IntelligenceCore } from "./intelligence-core";
import { DataInspector } from "./data-inspector";

interface DataUniverseSceneProps {
  stageKey: "dormant" | "conduits" | "streaming" | "intelligence" | "unified";
  className?: string;
}

export function DataUniverseScene({
  stageKey,
  className = "",
}: DataUniverseSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedSource, setSelectedSource] = useState<DataSourceItem | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const prefersReduced = useReducedMotion();


  // Subtle Mouse Parallax Handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-[480px] sm:h-[520px] lg:h-[560px] flex items-center justify-center overflow-hidden rounded-3xl bg-[#040A18] border border-cyan-500/20 shadow-[0_0_80px_rgba(6,182,212,0.15)] ${className}`}
    >
      {/* 1. Rich Cyan/Blue Cyber Grid & Ambient Radial Blooms */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(6,182,212,0.18),transparent_75%)] pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[100px] pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-indigo-500/15 blur-[80px] pointer-events-none" />

      {/* 2. Concentric Orbit Rings in Background */}
      <div className="absolute w-[380px] h-[380px] rounded-full border border-cyan-500/15 pointer-events-none" />
      <div className="absolute w-[620px] h-[620px] rounded-full border border-blue-500/10 border-dashed pointer-events-none" />
      <div className="absolute w-[860px] h-[860px] rounded-full border border-indigo-500/10 pointer-events-none" />

      {/* 3. Background Micro-Telemetry Labels */}
      <div className="absolute top-3 left-4 font-mono text-[9px] text-cyan-500/60 pointer-events-none hidden sm:flex items-center gap-2">
        <span>MATRIX: UNIFIED_GRAPH_v2</span>
        <span className="text-slate-600">{"//"}</span>
        <span>LATENCY: 14ms</span>
      </div>
      <div className="absolute top-3 right-4 font-mono text-[9px] text-cyan-500/60 pointer-events-none hidden sm:flex items-center gap-2">
        <span>SECURITY: TLS_256_E2E</span>
        <span className="text-slate-600">{"//"}</span>
        <span className="text-emerald-400">8/8 CONDUITS_SYNCED</span>
      </div>

      {/* ==================================================================== */}
      {/* DESKTOP SPATIAL UNIVERSE (Visible md+)                              */}
      {/* ==================================================================== */}
      <div className="relative w-full h-full hidden md:flex items-center justify-center">
        {/* SVG Conduits & Flowing Packets */}
        <DataPacketStream
          sources={DATA_SOURCES}
          stageKey={stageKey}
          selectedSourceId={selectedSource?.id || null}
          width={1200}
          height={560}
        />

        {/* Central Hastava Intelligence Layer */}
        <motion.div
          animate={{ x: mousePos.x * 0.15, y: mousePos.y * 0.15 }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="relative z-20"
        >
          <IntelligenceCore stageKey={stageKey} />
        </motion.div>

        {/* 8 Orbital Data Source Nodes (High z-index to never hide behind anything) */}
        {DATA_SOURCES.map((source) => {
          // Calculate desktop coordinates centered around (50%, 50%)
          const leftPercent = 50 + source.position.x;
          const topPercent = 50 + source.position.y;

          return (
            <motion.div
              key={source.id}
              animate={{
                x: mousePos.x * (source.position.x > 0 ? 0.35 : -0.35),
                y: mousePos.y * (source.position.y > 0 ? 0.35 : -0.35),
              }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              style={{
                position: "absolute",
                left: `${leftPercent}%`,
                top: `${topPercent}%`,
                transform: "translate(-50%, -50%)",
              }}
              className="z-30"
            >
              <DataSourceNode
                source={source}
                stageKey={stageKey}
                isSelected={selectedSource?.id === source.id}
                onSelect={(src) => setSelectedSource(src)}
              />
            </motion.div>
          );
        })}
      </div>

      {/* ==================================================================== */}
      {/* MOBILE ADAPTIVE VIEW (Streamlined for touch & vertical scrolling)     */}
      {/* ==================================================================== */}
      <div className="relative z-20 w-full h-full px-4 py-3 md:hidden flex flex-col items-center justify-between overflow-y-auto space-y-3">
        {/* Central Core */}
        <div className="w-full max-w-xs shrink-0">
          <IntelligenceCore stageKey={stageKey} />
        </div>

        {/* 8 Data Sources Touch Grid */}
        <div className="w-full space-y-1 pb-2">
          <div className="flex items-center justify-between px-1">
            <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider">
              Connected Data Sources (8)
            </span>
            <span className="font-mono text-[9px] text-cyan-400">
              Tap to inspect
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {DATA_SOURCES.map((source) => (
              <DataSourceNode
                key={source.id}
                source={source}
                stageKey={stageKey}
                isSelected={selectedSource?.id === source.id}
                onSelect={(src) => setSelectedSource(src)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Payload Inspector Drawer */}
      <DataInspector
        selectedSource={selectedSource}
        onClose={() => setSelectedSource(null)}
        onSelectSource={(src) => setSelectedSource(src)}
      />
    </div>
  );
}
