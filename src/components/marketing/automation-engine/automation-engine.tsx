"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrowRight,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { WORKFLOW_SCENARIOS } from "./automation-engine-config";
import {
  WorkflowScenario,
  WorkflowNode as WorkflowNodeType,
  EngineState,
} from "./automation-engine-types";
import { WorkflowCanvas } from "./workflow-canvas";
import { WorkflowControls } from "./workflow-controls";
import { WorkflowTelemetry } from "./workflow-telemetry";
import { WorkflowOutcome } from "./workflow-outcome";

export function AutomationEngine() {
  const [selectedScenarioId, setSelectedScenarioId] = useState<"sales" | "operations" | "support">("sales");
  const [currentScenario, setCurrentScenario] = useState<WorkflowScenario>(() => {
    return JSON.parse(JSON.stringify(WORKFLOW_SCENARIOS[0]));
  });

  const [selectedNode, setSelectedNode] = useState<WorkflowNodeType | null>(null);
  const [engineState, setEngineState] = useState<EngineState>("idle");
  const [currentStageIdx, setCurrentStageIdx] = useState<number>(-1);
  const [elapsedTimeMs, setElapsedTimeMs] = useState<number>(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const elapsedTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Synchronize scenario state whenever selected scenario changes or component updates
  useEffect(() => {
    if (engineState === "idle") {
      const template = WORKFLOW_SCENARIOS.find((s) => s.id === selectedScenarioId) || WORKFLOW_SCENARIOS[0];
      setCurrentScenario(JSON.parse(JSON.stringify(template)));
    }
  }, [selectedScenarioId, engineState]);

  // Switch Scenario handler
  const handleSelectScenario = useCallback((scenarioId: "sales" | "operations" | "support") => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (elapsedTimerRef.current) clearInterval(elapsedTimerRef.current);

    setSelectedScenarioId(scenarioId);
    const template = WORKFLOW_SCENARIOS.find((s) => s.id === scenarioId) || WORKFLOW_SCENARIOS[0];
    setCurrentScenario(JSON.parse(JSON.stringify(template)));
    setSelectedNode(null);
    setEngineState("idle");
    setCurrentStageIdx(-1);
    setElapsedTimeMs(0);
  }, []);

  // Reset Workflow State
  const handleResetWorkflow = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (elapsedTimerRef.current) clearInterval(elapsedTimerRef.current);

    const template = WORKFLOW_SCENARIOS.find((s) => s.id === selectedScenarioId) || WORKFLOW_SCENARIOS[0];
    setCurrentScenario(JSON.parse(JSON.stringify(template)));
    setEngineState("idle");
    setCurrentStageIdx(-1);
    setElapsedTimeMs(0);
  }, [selectedScenarioId]);

  // Stage Execution Runner
  const executeStage = useCallback(
    (stageIdx: number, scenarioData: WorkflowScenario) => {
      const sequence = scenarioData.executionSequence;
      if (stageIdx >= sequence.length) {
        // Workflow complete
        if (elapsedTimerRef.current) clearInterval(elapsedTimerRef.current);
        setEngineState("completed");
        return;
      }

      const stageNodeIds = sequence[stageIdx];

      // Mark current stage nodes as PROCESSING
      const updatedNodes = scenarioData.nodes.map((n) => {
        if (stageNodeIds.includes(n.id)) {
          if (n.isEnabled === false) return { ...n, status: "skipped" as const };
          return { ...n, status: "processing" as const };
        }
        return n;
      });

      // Update connection statuses
      const updatedConnections = scenarioData.connections.map((c) => {
        if (stageNodeIds.includes(c.toNodeId)) {
          return { ...c, status: "active" as const };
        }
        return c;
      });

      const nextScenarioState = {
        ...scenarioData,
        nodes: updatedNodes,
        connections: updatedConnections,
      };
      setCurrentScenario(nextScenarioState);
      setCurrentStageIdx(stageIdx);

      // Calculate step duration
      const activeNode = scenarioData.nodes.find((n) => stageNodeIds.includes(n.id));
      const duration = activeNode?.executionTimeMs || 250;

      // Complete this stage after duration
      timerRef.current = setTimeout(() => {
        const completedNodes = nextScenarioState.nodes.map((n) => {
          if (stageNodeIds.includes(n.id) && n.status === "processing") {
            return { ...n, status: "success" as const };
          }
          return n;
        });

        const completedConns = nextScenarioState.connections.map((c) => {
          if (stageNodeIds.includes(c.toNodeId) && c.status === "active") {
            return { ...c, status: "completed" as const };
          }
          return c;
        });

        const settledScenarioState = {
          ...nextScenarioState,
          nodes: completedNodes,
          connections: completedConns,
        };
        setCurrentScenario(settledScenarioState);

        // Advance to next stage
        executeStage(stageIdx + 1, settledScenarioState);
      }, duration);
    },
    []
  );

  // Run Workflow Action
  const handleRunWorkflow = () => {
    if (engineState === "completed" || engineState === "error") {
      handleResetWorkflow();
    }

    setEngineState("running");

    // Start live elapsed timer
    if (elapsedTimerRef.current) clearInterval(elapsedTimerRef.current);
    elapsedTimerRef.current = setInterval(() => {
      setElapsedTimeMs((prev) => prev + 50);
    }, 50);

    const nextStage = currentStageIdx < 0 ? 0 : currentStageIdx;
    executeStage(nextStage, currentScenario);
  };

  // Pause Workflow Action
  const handlePauseWorkflow = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (elapsedTimerRef.current) clearInterval(elapsedTimerRef.current);
    setEngineState("paused");
  };

  // Toggle Optional Node
  const handleToggleOptionalNode = (nodeId: string) => {
    setCurrentScenario((prev) => {
      const updatedNodes = prev.nodes.map((n) => {
        if (n.id === nodeId) {
          const isEnabled = n.isEnabled === false ? true : false;
          return { ...n, isEnabled, status: isEnabled ? ("idle" as const) : ("skipped" as const) };
        }
        return n;
      });
      return { ...prev, nodes: updatedNodes };
    });
  };

  // Retry Failed Node
  const handleRetryNode = (nodeId: string) => {
    setHasErrorRecovered(true);
    setEngineState("running");

    // Start live elapsed timer
    if (elapsedTimerRef.current) clearInterval(elapsedTimerRef.current);
    elapsedTimerRef.current = setInterval(() => {
      setElapsedTimeMs((prev) => prev + 50);
    }, 50);

    // Clear error on node and resume execution
    const recoveredNodes = currentScenario.nodes.map((n) => {
      if (n.id === nodeId) {
        return { ...n, status: "idle" as const, errorMessage: undefined };
      }
      return n;
    });

    const recoveredScenario = { ...currentScenario, nodes: recoveredNodes };
    setCurrentScenario(recoveredScenario);
    executeStage(currentStageIdx, recoveredScenario);
  };

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (elapsedTimerRef.current) clearInterval(elapsedTimerRef.current);
    };
  }, []);

  // Compute metrics
  const completedNodesCount = currentScenario.nodes.filter((n) => n.status === "success").length;
  const activeNode = currentScenario.nodes.find((n) => n.status === "processing");

  return (
    <section
      id="automation-engine"
      aria-label="Interactive Automation Engine - What Hastava Actually Automates"
      className="relative bg-gradient-to-b from-[#020612] via-[#040E24] to-[#020612] text-white selection:bg-cyan-500 selection:text-black border-t border-cyan-500/20 overflow-hidden py-14 sm:py-20"
    >
      {/* Dynamic Background Ambience & Cyber Grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(6, 182, 212, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-cyan-600/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-[600px] h-[600px] bg-indigo-600/12 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-20 max-w-7xl">
        {/* ==================================================================== */}
        {/* 1. SECTION HEADER (From Connected Data to Autonomous Execution)      */}
        {/* ==================================================================== */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 font-mono text-[11px] text-cyan-300 mb-3.5 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
            <Workflow size={13} className="text-cyan-400" />
            <span className="font-bold tracking-wider">PHASE 03 // INTERACTIVE AUTOMATION ENGINE</span>
          </div>

          {/* Core Opening Statement */}
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight sm:leading-[1.15]">
            We don’t just talk about automation. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              We build it.
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-slate-300 max-w-2xl mt-3 leading-relaxed">
            What does Hastava actually automate? Interact with live simulated workflows below. Click nodes to inspect schemas, telemetry, and execute end-to-end business operations in real time.
          </p>
        </div>

        {/* ==================================================================== */}
        {/* 2. WORKFLOW COMMAND CONSOLE (Scenario Switcher & Actions)            */}
        {/* ==================================================================== */}
        <div className="w-full mb-4">
          <WorkflowControls
            selectedScenarioId={selectedScenarioId}
            onSelectScenario={handleSelectScenario}
            engineState={engineState}
            onRunWorkflow={handleRunWorkflow}
            onPauseWorkflow={handlePauseWorkflow}
            onResetWorkflow={handleResetWorkflow}
          />
        </div>

        {/* ==================================================================== */}
        {/* 3. SPATIAL WORKFLOW CANVAS & INSPECTOR                              */}
        {/* ==================================================================== */}
        <div className="w-full mb-4">
          <WorkflowCanvas
            key={selectedScenarioId}
            nodes={currentScenario.nodes}
            connections={currentScenario.connections}
            selectedNode={selectedNode}
            onSelectNode={(node) => setSelectedNode(node)}
            onToggleOptionalNode={handleToggleOptionalNode}
            onRetryNode={handleRetryNode}
            onExecuteNodeSolo={(id) => {
              // Highlight selected single node simulation
              setSelectedNode(currentScenario.nodes.find((n) => n.id === id) || null);
            }}
          />
        </div>

        {/* ==================================================================== */}
        {/* 4. REAL-TIME ENGINE TELEMETRY BAR                                    */}
        {/* ==================================================================== */}
        <div className="w-full mb-10">
          <WorkflowTelemetry
            engineState={engineState}
            completedNodesCount={completedNodesCount}
            totalNodesCount={currentScenario.nodes.filter((n) => n.isEnabled !== false).length}
            currentActiveNodeName={activeNode?.label || null}
            elapsedTimeMs={elapsedTimeMs}
          />
        </div>

        {/* ==================================================================== */}
        {/* 5. TANGIBLE OUTCOME SHOWCASE (Revealed Upon Execution Completion)     */}
        {/* ==================================================================== */}
        {engineState === "completed" && (
          <div className="w-full mb-12 sm:mb-16">
            <WorkflowOutcome
              scenario={currentScenario}
              onReset={handleResetWorkflow}
            />
          </div>
        )}

        {/* ==================================================================== */}
        {/* 6. STRATEGIC BRIDGE TOWARDS PHASE 4 (AUTONOMOUS AGENTS)              */}
        {/* ==================================================================== */}
        <div className="w-full rounded-3xl bg-gradient-to-b from-[#061024]/90 to-[#020817] border border-cyan-500/20 p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="max-w-4xl mx-auto space-y-4 relative z-10">
            {/* The Progression Chain */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-mono text-xs text-slate-400">
              <span className="text-blue-400 font-bold">CONNECTED DATA</span>
              <span>→</span>
              <span className="text-cyan-400 font-bold">INTELLIGENCE</span>
              <span>→</span>
              <span className="text-emerald-400 font-bold">AUTOMATION</span>
              <span>→</span>
              <span className="px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 font-extrabold border border-cyan-400/50 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                AUTONOMOUS AGENTS
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              What if these workflows could reason, adapt, and operate independently?
            </h3>

            <p className="font-sans text-slate-300 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
              Deterministic automation eliminates repetitive manual tasks. Autonomous AI agents take the next leap — reasoning through ambiguity and optimizing business operations around the clock.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-3.5">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="font-bold text-sm px-8 py-3.5 shadow-lg shadow-cyan-500/25 cursor-pointer"
                icon={<ArrowRight size={16} />}
              >
                Discuss Your Automation Roadmap
              </Button>

              <Button
                href="#solutions"
                variant="secondary"
                size="lg"
                className="font-bold text-sm px-6 py-3.5 border-white/20 text-white hover:bg-white/10 cursor-pointer"
              >
                Explore Enterprise Solutions
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
