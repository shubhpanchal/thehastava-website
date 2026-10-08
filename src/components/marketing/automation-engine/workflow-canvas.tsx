"use client";

import React, { useRef } from "react";
import { WorkflowNode as WorkflowNodeType, WorkflowConnection } from "./automation-engine-types";
import { WorkflowNode } from "./workflow-node";
import { WorkflowConnections } from "./workflow-connections";
import { WorkflowInspector } from "./workflow-inspector";

interface WorkflowCanvasProps {
  nodes: WorkflowNodeType[];
  connections: WorkflowConnection[];
  selectedNode: WorkflowNodeType | null;
  onSelectNode: (node: WorkflowNodeType | null) => void;
  onToggleOptionalNode?: (nodeId: string) => void;
  onRetryNode?: (nodeId: string) => void;
  onExecuteNodeSolo?: (nodeId: string) => void;
  className?: string;
}

export function WorkflowCanvas({
  nodes,
  connections,
  selectedNode,
  onSelectNode,
  onToggleOptionalNode,
  onRetryNode,
  onExecuteNodeSolo,
  className = "",
}: WorkflowCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={`relative w-full min-h-[580px] lg:h-[620px] rounded-3xl bg-[#030816] border border-cyan-500/20 p-4 sm:p-6 overflow-hidden shadow-[0_0_80px_rgba(6,182,212,0.12)] flex flex-col justify-between ${className}`}
    >
      {/* 1. Cyber Laboratory Grid & Ambient Background Blooms */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(6,182,212,0.15),transparent_75%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-blue-600/12 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-purple-600/12 blur-[120px] pointer-events-none" />

      {/* 2. Background Corner Coordinate Crosshairs */}
      <div className="absolute top-3 left-4 font-mono text-[9px] text-cyan-500/60 pointer-events-none hidden sm:flex items-center gap-2">
        <span>WORKFLOW_ENGINE // v3.2</span>
        <span className="text-slate-600">{"//"}</span>
        <span>CANVAS_READY</span>
      </div>

      <div className="absolute top-3 right-4 font-mono text-[9px] text-cyan-500/60 pointer-events-none hidden sm:flex items-center gap-2">
        <span>TOPOLOGY: DETERMINISTIC_DAG</span>
        <span className="text-slate-600">{"//"}</span>
        <span className="text-emerald-400">SIGNALS_ONLINE</span>
      </div>

      {/* ==================================================================== */}
      {/* DESKTOP SPATIAL CANVAS (Visible md+)                                */}
      {/* ==================================================================== */}
      <div className="relative w-full flex-1 min-h-[500px] hidden md:flex items-center justify-between my-2">
        {/* SVG Bezier Conduits & Flowing Particles */}
        <WorkflowConnections
          nodes={nodes}
          connections={connections}
          selectedNodeId={selectedNode?.id || null}
          width={1200}
          height={560}
        />

        {/* Spatial Workflow Nodes */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {nodes.map((node) => {
            // Position percentage on canvas
            return (
              <div
                key={node.id}
                style={{
                  position: "absolute",
                  left: `${node.position.x}%`,
                  top: `${node.position.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                className="pointer-events-auto z-20"
              >
                <WorkflowNode
                  node={node}
                  isSelected={selectedNode?.id === node.id}
                  onSelect={(n) => onSelectNode(selectedNode?.id === n.id ? null : n)}
                  onToggleOptional={onToggleOptionalNode}
                  onRetry={onRetryNode}
                />
              </div>
            );
          })}
        </div>

        {/* Floating Side Inspector Drawer */}
        {selectedNode && (
          <div className="absolute right-4 top-4 bottom-4 z-40 flex items-center pointer-events-auto">
            <WorkflowInspector
              selectedNode={selectedNode}
              onClose={() => onSelectNode(null)}
              onToggleNode={onToggleOptionalNode}
              onExecuteNodeSolo={onExecuteNodeSolo}
            />
          </div>
        )}
      </div>

      {/* ==================================================================== */}
      {/* MOBILE ADAPTIVE STEPPER VIEW (Touch Friendly Vertical Sequence)      */}
      {/* ==================================================================== */}
      <div className="relative z-20 w-full md:hidden flex flex-col space-y-3 py-2">
        <div className="flex items-center justify-between px-1">
          <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
            Sequential Workflow Pipeline ({nodes.length} Steps)
          </span>
          <span className="font-mono text-[9px] text-cyan-400">
            Tap node to inspect
          </span>
        </div>

        <div className="space-y-2">
          {nodes.map((node, idx) => (
            <div key={node.id} className="flex flex-col items-center">
              <WorkflowNode
                node={node}
                isSelected={selectedNode?.id === node.id}
                onSelect={(n) => onSelectNode(selectedNode?.id === n.id ? null : n)}
                onToggleOptional={onToggleOptionalNode}
                onRetry={onRetryNode}
                className="w-full"
              />

              {/* Mobile Vertical Flow Connector */}
              {idx < nodes.length - 1 && (
                <div className="h-4 w-0.5 bg-gradient-to-b from-cyan-500/50 to-blue-500/20 my-0.5" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile Bottom Sheet Inspector */}
        {selectedNode && (
          <div className="fixed inset-x-3 bottom-3 z-50">
            <WorkflowInspector
              selectedNode={selectedNode}
              onClose={() => onSelectNode(null)}
              onToggleNode={onToggleOptionalNode}
              onExecuteNodeSolo={onExecuteNodeSolo}
            />
          </div>
        )}
      </div>
    </div>
  );
}
