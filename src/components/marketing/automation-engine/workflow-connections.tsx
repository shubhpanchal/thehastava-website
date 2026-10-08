"use client";

import React from "react";
import { motion } from "motion/react";
import { WorkflowNode, WorkflowConnection } from "./automation-engine-types";

interface WorkflowConnectionsProps {
  nodes: WorkflowNode[];
  connections: WorkflowConnection[];
  selectedNodeId: string | null;
  width?: number;
  height?: number;
}

export function WorkflowConnections({
  nodes,
  connections,
  selectedNodeId,
  width = 1200,
  height = 560,
}: WorkflowConnectionsProps) {
  // Map node ID to its pixel coordinates on the SVG canvas
  const nodeCoordsMap = new Map<string, { x: number; y: number; node: WorkflowNode }>();

  nodes.forEach((n) => {
    const px = (n.position.x / 100) * width;
    const py = (n.position.y / 100) * height;
    nodeCoordsMap.set(n.id, { x: px, y: py, node: n });
  });

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
      preserveAspectRatio="none"
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

        <filter id="super-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Linear Gradients */}
        <linearGradient id="active-flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#38BDF8" stopOpacity="1" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
        </linearGradient>

        <linearGradient id="yes-branch-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#10B981" stopOpacity="1" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="1" />
        </linearGradient>

        <linearGradient id="no-branch-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#64748B" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#475569" stopOpacity="0.4" />
        </linearGradient>

        {/* Energy Photon Radial Glow */}
        <radialGradient id="packet-glow">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
        </radialGradient>

        {/* Directional Arrowhead Markers */}
        <marker
          id="arrow-base"
          viewBox="0 0 10 10"
          refX="6"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#0EA5E9" fillOpacity="0.9" />
        </marker>

        <marker
          id="arrow-active"
          viewBox="0 0 10 10"
          refX="6"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto"
        >
          <path d="M 0 1 L 9 5 L 0 9 z" fill="#22D3EE" />
        </marker>

        <marker
          id="arrow-success"
          viewBox="0 0 10 10"
          refX="6"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto"
        >
          <path d="M 0 1 L 9 5 L 0 9 z" fill="#10B981" />
        </marker>

        <marker
          id="arrow-skipped"
          viewBox="0 0 10 10"
          refX="6"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto"
        >
          <path d="M 0 2 L 7 5 L 0 8 z" fill="#64748B" fillOpacity="0.4" />
        </marker>
      </defs>

      {/* Render All Connections */}
      {connections.map((conn) => {
        const from = nodeCoordsMap.get(conn.fromNodeId);
        const to = nodeCoordsMap.get(conn.toNodeId);

        if (!from || !to) return null;

        // Node half dimensions (capsule is ~140px wide in 1200x560 viewBox)
        const nodeHalfW = 70;

        const x1 = from.x + nodeHalfW;
        const y1 = from.y;
        const x2 = Math.max(x1 + 10, to.x - nodeHalfW);
        const y2 = to.y;

        // Calculate smooth cubic bezier curve
        const dx = Math.max(30, (x2 - x1) * 0.5);
        const pathData = `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;

        const isConnectedToSelected =
          selectedNodeId === conn.fromNodeId || selectedNodeId === conn.toNodeId;

        const isSourceProcessing = from.node.status === "processing";
        const isSourceSuccess = from.node.status === "success";
        const isTargetProcessing = to.node.status === "processing";
        const isTargetSuccess = to.node.status === "success";

        const isActiveTransmitting =
          (isSourceProcessing || isTargetProcessing) && conn.status !== "skipped";
        const isCompleted = (isSourceSuccess && isTargetSuccess) || conn.status === "completed";
        const isSkipped = conn.status === "skipped" || from.node.status === "skipped" || to.node.status === "skipped";

        // Label Position (Midpoint of bezier curve)
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;

        return (
          <g key={conn.id}>
            {/* 1. Ambient Glow Underlay Track */}
            <path
              d={pathData}
              fill="none"
              stroke={
                isSkipped
                  ? "rgba(148, 163, 184, 0.08)"
                  : isConnectedToSelected
                  ? "rgba(34, 211, 238, 0.6)"
                  : isCompleted
                  ? "rgba(16, 185, 129, 0.45)"
                  : isActiveTransmitting
                  ? "rgba(6, 182, 212, 0.65)"
                  : "rgba(14, 165, 233, 0.35)"
              }
              strokeWidth={isSkipped ? 2 : 6}
              strokeLinecap="round"
              filter={isSkipped ? undefined : "url(#conduit-glow)"}
            />

            {/* 2. Base Solid Conductor Wire (Crisp, High Contrast, Always Visible) */}
            <path
              d={pathData}
              fill="none"
              stroke={
                isSkipped
                  ? "rgba(148, 163, 184, 0.25)"
                  : isConnectedToSelected
                  ? "#22D3EE"
                  : isCompleted
                  ? "#10B981"
                  : isActiveTransmitting
                  ? "#06B6D4"
                  : "#0EA5E9"
              }
              strokeWidth={isSkipped ? 1.5 : 2.5}
              strokeDasharray={isSkipped ? "4 4" : undefined}
              markerEnd={
                isSkipped
                  ? "url(#arrow-skipped)"
                  : isCompleted
                  ? "url(#arrow-success)"
                  : isActiveTransmitting
                  ? "url(#arrow-active)"
                  : "url(#arrow-base)"
              }
            />

            {/* 3. Ambient Idle Particle Shimmer (Visible when not transmitting) */}
            {!isSkipped && !isActiveTransmitting && !isCompleted && (
              <path
                d={pathData}
                fill="none"
                stroke="rgba(255, 255, 255, 0.5)"
                strokeWidth={1.5}
                strokeDasharray="4 16"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="100"
                  to="0"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>
            )}

            {/* 4. Active Flowing Light Conduit (When Transmitting or Completed) */}
            {(isActiveTransmitting || isCompleted || isConnectedToSelected) && !isSkipped && (
              <motion.path
                d={pathData}
                fill="none"
                stroke={
                  conn.branchType === "yes"
                    ? "url(#yes-branch-grad)"
                    : conn.branchType === "no"
                    ? "url(#no-branch-grad)"
                    : "url(#active-flow-grad)"
                }
                strokeWidth={isActiveTransmitting ? 4 : 2.5}
                filter="url(#conduit-glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: isActiveTransmitting ? 1 : 0.9,
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            )}

            {/* 5. Fast Traveling Energy Photons (During Active Transmission) */}
            {isActiveTransmitting && !isSkipped && (
              <>
                <circle r="6" fill="url(#packet-glow)" filter="url(#super-glow)">
                  <animateMotion
                    path={pathData}
                    dur="0.9s"
                    repeatCount="indefinite"
                    rotate="auto"
                  />
                </circle>
                <circle r="3" fill="#FFFFFF">
                  <animateMotion
                    path={pathData}
                    dur="0.9s"
                    repeatCount="indefinite"
                    rotate="auto"
                  />
                </circle>
                <circle r="2.5" fill="#38BDF8">
                  <animateMotion
                    path={pathData}
                    dur="0.9s"
                    begin="0.3s"
                    repeatCount="indefinite"
                    rotate="auto"
                  />
                </circle>
              </>
            )}

            {/* 6. Branch Decision Badge (YES / NO on decision forks) */}
            {conn.label && (
              <g transform={`translate(${midX}, ${midY})`}>
                <rect
                  x="-48"
                  y="-12"
                  width="96"
                  height="24"
                  rx="7"
                  fill={
                    conn.branchType === "yes"
                      ? "rgba(2, 28, 24, 0.96)"
                      : conn.branchType === "no"
                      ? "rgba(15, 23, 42, 0.96)"
                      : "rgba(3, 15, 36, 0.96)"
                  }
                  stroke={
                    conn.branchType === "yes"
                      ? "rgba(16, 185, 129, 0.9)"
                      : conn.branchType === "no"
                      ? "rgba(100, 116, 139, 0.6)"
                      : "rgba(6, 182, 212, 0.8)"
                  }
                  strokeWidth="1.5"
                  filter="url(#conduit-glow)"
                />
                <text
                  x="0"
                  y="4"
                  textAnchor="middle"
                  fontFamily="monospace"
                  fontSize="8.5"
                  fontWeight="bold"
                  letterSpacing="0.5"
                  fill={
                    conn.branchType === "yes"
                      ? "#34D399"
                      : conn.branchType === "no"
                      ? "#94A3B8"
                      : "#38BDF8"
                  }
                >
                  {conn.label}
                </text>
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
}

