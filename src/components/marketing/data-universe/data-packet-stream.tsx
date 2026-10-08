"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import type { DataSourceItem } from "./data-universe-config";

interface DataPacketStreamProps {
  sources: DataSourceItem[];
  stageKey: "dormant" | "conduits" | "streaming" | "intelligence" | "unified";
  selectedSourceId: string | null;
  width?: number;
  height?: number;
}

export function DataPacketStream({
  sources,
  stageKey,
  selectedSourceId,
  width = 1200,
  height = 560,
}: DataPacketStreamProps) {
  const prefersReduced = useReducedMotion();
  const centerX = width / 2;
  const centerY = height / 2;

  const isDormant = stageKey === "dormant";
  const hasConduits = stageKey !== "dormant";
  const isStreaming =
    stageKey === "streaming" || stageKey === "intelligence" || stageKey === "unified";

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
      aria-hidden="true"
    >
      <defs>
        {/* Glow Filters */}
        <filter id="conduit-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="packet-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Dynamic Gradients for each source conduit */}
        {sources.map((source) => {
          const sourceX = centerX + (source.position.x / 100) * width;
          const sourceY = centerY + (source.position.y / 100) * height;
          return (
            <linearGradient
              key={`grad-${source.id}`}
              id={`grad-${source.id}`}
              x1={sourceX}
              y1={sourceY}
              x2={centerX}
              y2={centerY}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor={source.accentColor} stopOpacity={isDormant ? 0.2 : 0.8} />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity={isDormant ? 0.1 : 0.9} />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity={isDormant ? 0.2 : 1} />
            </linearGradient>
          );
        })}
      </defs>

      {/* Render Connection Conduits */}
      {sources.map((source, index) => {
        const sourceX = centerX + (source.position.x / 100) * width;
        const sourceY = centerY + (source.position.y / 100) * height;

        // Control point for smooth organic circuit curvature
        const midX = (sourceX + centerX) / 2;
        const midY = (sourceY + centerY) / 2;
        const curveFactor = index % 2 === 0 ? 30 : -30;
        const cpX = midX + Math.sin((source.position.angle * Math.PI) / 180) * curveFactor;
        const cpY = midY - Math.cos((source.position.angle * Math.PI) / 180) * curveFactor;

        const pathD = `M ${sourceX} ${sourceY} Q ${cpX} ${cpY} ${centerX} ${centerY}`;
        const isHighlighted = selectedSourceId === source.id;

        return (
          <g key={source.id} className="transition-opacity duration-700">
            {/* Base Wire Track */}
            <path
              d={pathD}
              fill="none"
              stroke={isDormant ? "#1E293B" : isHighlighted ? "#22D3EE" : `url(#grad-${source.id})`}
              strokeWidth={isHighlighted ? 2.5 : hasConduits ? 1.5 : 1}
              strokeDasharray={isDormant ? "4 6" : "none"}
              opacity={isDormant ? 0.25 : isHighlighted ? 1 : 0.65}
              filter={hasConduits ? "url(#conduit-glow)" : undefined}
            />

            {/* Glowing Secondary Flow Track */}
            {hasConduits && !isDormant && (
              <path
                d={pathD}
                fill="none"
                stroke="#FFFFFF"
                strokeWidth={0.75}
                strokeDasharray="6 18"
                opacity={isHighlighted ? 0.9 : 0.4}
                className="animate-[dash_3s_linear_infinite]"
              />
            )}

            {/* Ingestion Entry Pulse at Central Hub boundary */}
            {hasConduits && (
              <circle
                cx={centerX + (sourceX - centerX) * 0.24}
                cy={centerY + (sourceY - centerY) * 0.24}
                r={isHighlighted ? 3.5 : 2}
                fill={source.accentColor}
                opacity={0.85}
              />
            )}

            {/* Flowing Data Packet (Active in Stages 3, 4, 5) */}
            {isStreaming && !prefersReduced && (
              <g>
                {/* Main Packet along path */}
                <motion.circle
                  r={isHighlighted ? 4 : 3}
                  fill={isHighlighted ? "#22D3EE" : source.accentColor}
                  filter="url(#packet-glow)"
                >
                  <animateMotion
                    path={pathD}
                    dur={`${2.4 + (index % 4) * 0.3}s`}
                    repeatCount="indefinite"
                    keyPoints="0;1"
                    keyTimes="0;1"
                    calcMode="linear"
                  />
                </motion.circle>

                {/* Secondary Fast Pulse */}
                <motion.circle
                  r={2}
                  fill="#FFFFFF"
                  opacity={0.85}
                >
                  <animateMotion
                    path={pathD}
                    dur={`${1.6 + (index % 3) * 0.4}s`}
                    begin={`${(index * 0.25).toFixed(1)}s`}
                    repeatCount="indefinite"
                    keyPoints="0;1"
                    keyTimes="0;1"
                    calcMode="linear"
                  />
                </motion.circle>
              </g>
            )}
          </g>
        );
      })}

      {/* Central Gravitational Conductor Ring */}
      <circle
        cx={centerX}
        cy={centerY}
        r={hasConduits ? 70 : 50}
        fill="none"
        stroke="#06B6D4"
        strokeWidth={1}
        strokeDasharray="4 8"
        opacity={isDormant ? 0.15 : 0.4}
        className="animate-[spin_40s_linear_infinite]"
      />

      <circle
        cx={centerX}
        cy={centerY}
        r={hasConduits ? 95 : 70}
        fill="none"
        stroke="#3B82F6"
        strokeWidth={0.75}
        strokeDasharray="2 12"
        opacity={isDormant ? 0.1 : 0.25}
        className="animate-[spin_60s_linear_infinite_reverse]"
      />
    </svg>
  );
}
