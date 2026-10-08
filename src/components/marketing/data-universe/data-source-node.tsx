"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Activity, Layers, CheckCircle2 } from "lucide-react";
import { useCursor } from "@/components/ui/cursor";
import type { DataSourceItem } from "./data-universe-config";

interface DataSourceNodeProps {
  source: DataSourceItem;
  stageKey: "dormant" | "conduits" | "streaming" | "intelligence" | "unified";
  isSelected: boolean;
  onSelect: (source: DataSourceItem) => void;
  className?: string;
}

export function DataSourceNode({
  source,
  stageKey,
  isSelected,
  onSelect,
  className = "",
}: DataSourceNodeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { setCursorState, resetCursor } = useCursor();

  const isDormant = stageKey === "dormant";
  const hasConduit = stageKey !== "dormant";
  const isStreaming = stageKey === "streaming" || stageKey === "intelligence" || stageKey === "unified";
  const Icon = source.icon;

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCursorState("explore", source.shortLabel);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    resetCursor();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(source);
    }
  };

  // Explicit directional placement: Email, ERP, Sheets, CRM, Databases, APIs all open NORTH (upwards)
  // Only top-row items (Documents, Websites) open SOUTH (downwards)
  const getPopoverPlacement = () => {
    switch (source.id) {
      case "email":
        // Opens NORTH (Upwards) into the open space, staying completely inside the container
        return { vertical: "bottom-full mb-2.5", horizontal: "right-0", isUp: true };
      case "erp":
        // Opens NORTH (Upwards) into the open top-right area
        return { vertical: "bottom-full mb-2.5", horizontal: "right-0", isUp: true };
      case "spreadsheet":
        // Opens NORTH (Upwards) into the open space, staying completely inside the container
        return { vertical: "bottom-full mb-2.5", horizontal: "left-0", isUp: true };
      case "crm":
        // Opens NORTH (Upwards) into the open top-left area
        return { vertical: "bottom-full mb-2.5", horizontal: "left-0", isUp: true };
      case "database":
        // Opens NORTH (Upwards)
        return { vertical: "bottom-full mb-2.5", horizontal: "left-0", isUp: true };
      case "api":
        // Opens NORTH (Upwards)
        return { vertical: "bottom-full mb-2.5", horizontal: "right-0", isUp: true };
      case "document":
        // Opens SOUTH (Downwards)
        return { vertical: "top-full mt-2.5", horizontal: "left-0", isUp: false };
      case "website":
        // Opens SOUTH (Downwards)
        return { vertical: "top-full mt-2.5", horizontal: "right-0", isUp: false };
      default:
        return { vertical: "bottom-full mb-2.5", horizontal: "left-1/2 -translate-x-1/2", isUp: true };
    }
  };

  const placement = getPopoverPlacement();

  return (
    <div
      className={`relative group select-none ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Node Outer Button / Capsule */}
      <motion.button
        type="button"
        role="button"
        tabIndex={0}
        aria-pressed={isSelected}
        aria-label={`Explore ${source.name} data source`}
        onClick={() => onSelect(source)}
        onKeyDown={handleKeyDown}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className={`relative flex items-center gap-2 px-2.5 py-1.5 rounded-xl border transition-all duration-300 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-cyan-400 backdrop-blur-xl shrink-0 ${
          isSelected
            ? "border-cyan-400 bg-[#0B172E]/95 shadow-[0_0_20px_rgba(6,182,212,0.4)] ring-1 ring-cyan-400/50"
            : isHovered
            ? "border-white/30 bg-[#0B1528]/95 shadow-[0_0_16px_rgba(59,130,246,0.3)]"
            : isDormant
            ? "border-white/10 bg-[#080E1A]/85 shadow-md opacity-80 hover:opacity-100"
            : "border-blue-500/25 bg-[#091324]/90 shadow-[0_4px_14px_rgba(0,0,0,0.6)] hover:border-blue-400/50"
        }`}
      >
        {/* Glow backdrop */}
        <div
          className="absolute -inset-1 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity pointer-events-none"
          style={{ background: source.glowColor }}
        />

        {/* Icon Pill with Pulse */}
        <div className="relative flex items-center justify-center shrink-0">
          <div
            className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center transition-colors ${
              isSelected
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40"
                : isHovered
                ? "bg-blue-500/20 text-white border border-blue-400/40"
                : isDormant
                ? "bg-white/5 text-slate-400 border border-white/10"
                : "bg-blue-950/60 text-blue-300 border border-blue-500/30"
            }`}
          >
            <Icon size={13} />
          </div>

          {/* Active Status Pulse Dot */}
          {hasConduit && (
            <span className="absolute -top-1 -right-1 flex h-1.5 w-1.5">
              {isStreaming && (
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: source.accentColor }}
                />
              )}
              <span
                className="relative inline-flex rounded-full h-1.5 w-1.5"
                style={{ backgroundColor: source.accentColor }}
              />
            </span>
          )}
        </div>

        {/* Labels */}
        <div className="min-w-0 pr-0.5">
          <div className="flex items-center gap-1">
            <span className="font-display text-[11px] font-bold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
              {source.shortLabel}
            </span>
            <ArrowUpRight
              size={9}
              className={`transition-transform duration-200 ${
                isHovered || isSelected ? "text-cyan-300 translate-x-0.5 -translate-y-0.5" : "text-slate-500"
              }`}
            />
          </div>
          <p className="font-mono text-[8px] text-slate-400 truncate max-w-[85px] sm:max-w-[95px]">
            {source.category}
          </p>
        </div>

        {/* Live Packet Sync Mini Badge */}
        {isStreaming && (
          <div className="hidden xl:flex items-center gap-0.5 px-1 py-0.2 rounded-full bg-cyan-950/60 border border-cyan-500/30 font-mono text-[7px] text-cyan-300 ml-auto">
            <Activity size={7} className="animate-pulse text-cyan-400" />
            <span>SYNC</span>
          </div>
        )}
      </motion.button>

      {/* Contextual Hover Popover Card (Guaranteed ZERO collisions) */}
      <AnimatePresence>
        {isHovered && !isSelected && (
          <motion.div
            initial={{ opacity: 0, y: placement.isUp ? -6 : 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: placement.isUp ? -4 : 4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={`absolute z-50 ${placement.vertical} ${placement.horizontal} w-56 p-2.5 rounded-xl bg-[#061022]/95 border border-cyan-500/30 shadow-[0_12px_40px_rgba(0,0,0,0.95)] backdrop-blur-2xl pointer-events-none`}
          >
            <div className="flex items-center justify-between pb-1 mb-1 border-b border-white/10 font-mono text-[8px]">
              <span className="text-cyan-300 font-bold uppercase">{source.name}</span>
              <span className="text-emerald-400 flex items-center gap-0.5">
                <CheckCircle2 size={8} />
                {isStreaming ? "STREAMING" : hasConduit ? "LINKED" : "DETECTED"}
              </span>
            </div>

            <p className="text-[9px] text-slate-300 leading-snug mb-1.5">
              {source.description}
            </p>

            <div className="space-y-0.5">
              <div className="flex items-center gap-1 font-mono text-[7px] text-slate-400 uppercase tracking-wider">
                <Layers size={7} className="text-cyan-400" />
                <span>Streams:</span>
              </div>
              <div className="flex flex-wrap gap-0.5">
                {source.streams.slice(0, 3).map((stream) => (
                  <span
                    key={stream}
                    className="px-1 py-0.2 rounded bg-blue-950/70 border border-blue-500/20 font-mono text-[7px] text-slate-200"
                  >
                    {stream}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-1.5 pt-1 border-t border-white/10 flex items-center justify-between font-mono text-[7px] text-slate-400">
              <span>Click to inspect</span>
              <span className="text-cyan-300 font-bold">[EXPLORE]</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
