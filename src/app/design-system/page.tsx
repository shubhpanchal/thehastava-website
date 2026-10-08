"use client";

import React, { useState } from "react";
import {
  Database,
  Cpu,
  Workflow,
  Zap,
  BarChart3,
  Sparkles,
  ArrowRight,
  Terminal,
  Activity,
  Layers,
  Play,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { Heading, Text, DataText, Eyebrow } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Divider } from "@/components/ui/divider";
import {
  StaggerGroup,
  StaggerChild,
  Magnetic,
  InteractiveCard,
  AnimatedCounter,
  ScrambleText,
  TextSplit,
} from "@/components/ui/interactive";
import {
  SystemNode,
  DataConnector,
  StatusIndicator,
  TelemetryBadge,
  ProcessingState,
} from "@/components/ui/system";

export default function DesignSystemShowcasePage() {
  const [activeStep, setActiveStep] = useState(1);
  const [activeNodeStatus, setActiveNodeStatus] = useState<"idle" | "active" | "processing">("processing");

  const pipelineSteps = [
    { id: "1", label: "01 // Ingest Enterprise Raw Data", status: "complete" as const, latency: "12ms" },
    { id: "2", label: "02 // Schema Normalization & Embedding", status: activeStep >= 2 ? "complete" as const : "current" as const, latency: "45ms" },
    { id: "3", label: "03 // Intelligence Model Execution", status: activeStep >= 3 ? "complete" as const : activeStep === 2 ? "current" as const : "upcoming" as const, latency: "180ms" },
    { id: "4", label: "04 // Automated Workflow Action", status: activeStep >= 4 ? "complete" as const : activeStep === 3 ? "current" as const : "upcoming" as const, latency: "34ms" },
  ];

  return (
    <div className="bg-[#030712] text-white min-h-screen pb-32 overflow-x-hidden selection:bg-cyan-500/30 selection:text-white">
      {/* Header Banner */}
      <section className="relative pt-16 pb-16 border-b border-white/10 hero-grid">
        <Container className="relative z-10">
          <div className="flex flex-col gap-4">
            <Eyebrow variant="cyan">Phase 0 // Foundation & System Showcase</Eyebrow>
            <Heading variant="display-xl" gradient="blue-cyan">
              HASTAVA Design System
            </Heading>
            <Text variant="lead" className="text-slate-300 max-w-3xl">
              Laboratory-grade digital product foundation engineered for AI, Data Infrastructure, and High-Throughput Automation.
            </Text>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <StatusIndicator status="online" label="DESIGN SYSTEM v1.0 ONLINE" />
              <Divider orientation="vertical" className="h-4 hidden sm:block" />
              <DataText variant="cyan">[SYSTEM ARCHITECTURE: ZERO-REGRESSION]</DataText>
            </div>
          </div>
        </Container>
      </section>

      <Container className="mt-16 space-y-24">
        {/* SECTION 1: CORE VISUAL THESIS */}
        <section className="space-y-8">
          <div className="border-b border-white/10 pb-4">
            <Eyebrow variant="blue">Visual Archetype</Eyebrow>
            <Heading variant="h2" className="mt-2 text-white">
              Data → Intelligence → Automation → Action → Results
            </Heading>
            <Text className="text-slate-400 mt-1">
              The foundational diagrammatic language that will power future interactive modules.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 p-6 rounded-3xl bg-[#061326] border border-blue-500/20 shadow-2xl">
            <div className="flex flex-col items-center text-center gap-2">
              <SystemNode
                label="Data Source"
                sublabel="PostgreSQL / API"
                icon={Database}
                type="source"
                status={activeNodeStatus}
                size="sm"
                className="w-full"
              />
              <span className="font-mono text-[10px] text-blue-400">01. INGESTION</span>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <DataConnector direction="horizontal" animatedSignal speed={1.8} signalColor="cyan" />
            </div>

            <div className="flex flex-col items-center text-center gap-2">
              <SystemNode
                label="Intelligence"
                sublabel="LLM / Vectors"
                icon={Cpu}
                type="model"
                status={activeNodeStatus}
                size="sm"
                className="w-full"
              />
              <span className="font-mono text-[10px] text-cyan-400">02. SYNTHESIS</span>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <DataConnector direction="horizontal" animatedSignal speed={1.8} signalColor="cyan" />
            </div>

            <div className="flex flex-col items-center text-center gap-2">
              <SystemNode
                label="Automation"
                sublabel="Action Engine"
                icon={Workflow}
                type="engine"
                status={activeNodeStatus}
                size="sm"
                className="w-full"
              />
              <span className="font-mono text-[10px] text-indigo-400">03. EXECUTION</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              size="xs"
              variant="telemetry"
              onClick={() => setActiveNodeStatus(activeNodeStatus === "processing" ? "idle" : "processing")}
            >
              Toggle Node State: {activeNodeStatus.toUpperCase()}
            </Button>
          </div>
        </section>

        {/* SECTION 2: TYPOGRAPHY & SCRAMBLE TEXT */}
        <section className="space-y-8">
          <div className="border-b border-white/10 pb-4">
            <Eyebrow variant="cyan">Typography System</Eyebrow>
            <Heading variant="h2" className="mt-2 text-white">
              Display, Heading, Body & Cybernetic Scramble
            </Heading>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card variant="laboratory" withCorners className="p-8 space-y-4">
              <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest">[FONT SCALES]</div>
              <Heading variant="display-lg">Display Heading</Heading>
              <Heading variant="h2">Section Title (H2)</Heading>
              <Heading variant="h4">Subsection Title (H4)</Heading>
              <Text variant="body" className="text-slate-300">
                Standard technical body text engineered for high legibility across dark and light surfaces.
              </Text>
              <div className="pt-2">
                <DataText variant="cyan" glow>[JETBRAINS MONO TELEMETRY TOKEN: 99.98% SPEED]</DataText>
              </div>
            </Card>

            <Card variant="laboratory" withCorners className="p-8 space-y-4">
              <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest">[INTERACTIVE TEXT CIPHER]</div>
              <p className="text-xs text-slate-400">Hover over the text below to trigger real-time AI character decoding:</p>
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-3">
                <div className="text-xl font-bold text-cyan-300">
                  <ScrambleText text="HASTAVA AUTOMATION ENGINE" trigger="hover" />
                </div>
                <div className="text-sm text-slate-300">
                  <ScrambleText text="Deterministic data pipelines with sub-50ms execution latency." trigger="hover" />
                </div>
                <div className="pt-2">
                  <TextSplit text="Staggered character reveal animation" className="text-xs text-blue-400 font-mono" />
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* SECTION 3: BUTTONS & MAGNETIC INTERACTIONS */}
        <section className="space-y-8">
          <div className="border-b border-white/10 pb-4">
            <Eyebrow variant="indigo">Interactive Controls</Eyebrow>
            <Heading variant="h2" className="mt-2 text-white">
              Button Variants & Magnetic Physics
            </Heading>
          </div>

          <Card variant="laboratory" className="p-8 space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <Magnetic>
                <Button variant="primary" icon={<ArrowRight size={16} />}>
                  Magnetic Primary
                </Button>
              </Magnetic>

              <Magnetic>
                <Button variant="cyan" icon={<Sparkles size={16} />}>
                  Magnetic Cyan
                </Button>
              </Magnetic>

              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="glow">Glow Pulse</Button>
              <Button variant="telemetry">Telemetry Mode</Button>
              <Button variant="primary" isLoading>Loading State</Button>
            </div>

            <Divider variant="subtle" />

            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-slate-400">Icon Buttons with Tooltips:</span>
              <Magnetic>
                <IconButton ariaLabel="Terminal" tooltip="Open Terminal" variant="cyan">
                  <Terminal size={16} />
                </IconButton>
              </Magnetic>
              <Magnetic>
                <IconButton ariaLabel="Activity" tooltip="Live Activity Stream" variant="primary">
                  <Activity size={16} />
                </IconButton>
              </Magnetic>
              <IconButton ariaLabel="Layers" tooltip="Layer Architecture" variant="secondary">
                <Layers size={16} />
              </IconButton>
            </div>
          </Card>
        </section>

        {/* SECTION 4: INTERACTIVE 3D SPOTLIGHT CARDS */}
        <section className="space-y-8">
          <div className="border-b border-white/10 pb-4">
            <Eyebrow variant="cyan">Spotlight Cards</Eyebrow>
            <Heading variant="h2" className="mt-2 text-white">
              Mouse Spotlight Beam & 3D Tilt
            </Heading>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <InteractiveCard spotlightColor="rgba(6, 182, 212, 0.2)" data-cursor="explore" data-cursor-text="EXPLORE" className="p-7 space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  <Cpu size={22} />
                </div>
                <Badge variant="cyan" pulse mono>AI ENGINE</Badge>
              </div>
              <h3 className="text-xl font-bold text-white">LLM Orchestration</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Move your cursor across this card to see the high-precision dynamic radial spotlight and subtle 3D tilt tracking.
              </p>
            </InteractiveCard>

            <InteractiveCard spotlightColor="rgba(37, 99, 235, 0.2)" data-cursor="data" className="p-7 space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  <Database size={22} />
                </div>
                <Badge variant="blue" mono>PIPELINE</Badge>
              </div>
              <h3 className="text-xl font-bold text-white">Data Infrastructure</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Autonomous schema generation, stream ETL, and deterministic validation layers.
              </p>
            </InteractiveCard>

            <InteractiveCard spotlightColor="rgba(16, 185, 129, 0.2)" data-cursor="button" className="p-7 space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Zap size={22} />
                </div>
                <Badge variant="emerald" mono>AUTOMATION</Badge>
              </div>
              <h3 className="text-xl font-bold text-white">Workflow Execution</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Event-driven micro-services removing hundreds of hours of manual overhead.
              </p>
            </InteractiveCard>
          </div>
        </section>

        {/* SECTION 5: LIVE TELEMETRY & ANIMATED COUNTERS */}
        <section className="space-y-8">
          <div className="border-b border-white/10 pb-4">
            <Eyebrow variant="blue">Telemetry & Metrics</Eyebrow>
            <Heading variant="h2" className="mt-2 text-white">
              Data Readouts & Animated Deceleration Counters
            </Heading>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <TelemetryBadge label="PROCESSING LATENCY" value="18" unit="ms" delta="4.2ms" deltaPositive variant="cyan" icon={Activity} />
            <TelemetryBadge label="PIPELINE ACCURACY" value="99.94" unit="%" delta="0.4%" deltaPositive variant="emerald" icon={CheckCircle2} />
            <TelemetryBadge label="MANUAL HOURS SAVED" value="14,850" unit="hrs" variant="dark" icon={BarChart3} />
            <TelemetryBadge label="THROUGHPUT RATE" value="4.8" unit="k/sec" variant="dark" icon={Zap} />
          </div>

          <Card variant="laboratory" className="p-8">
            <div className="flex flex-wrap items-center justify-around gap-8 text-center">
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-cyan-300">
                  <AnimatedCounter value={99.9} decimals={1} suffix="%" />
                </div>
                <span className="font-mono text-xs text-slate-400 uppercase mt-2 block">System Uptime SLA</span>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-blue-400">
                  <AnimatedCounter value={500000} prefix="+" suffix=" ops" />
                </div>
                <span className="font-mono text-xs text-slate-400 uppercase mt-2 block">Daily Events Processed</span>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400">
                  <AnimatedCounter value={85} suffix="%" />
                </div>
                <span className="font-mono text-xs text-slate-400 uppercase mt-2 block">Reduction in Repetitive Work</span>
              </div>
            </div>
          </Card>
        </section>

        {/* SECTION 6: PIPELINE PROCESSING STATE */}
        <section className="space-y-8">
          <div className="border-b border-white/10 pb-4">
            <Eyebrow variant="cyan">Pipeline Execution</Eyebrow>
            <Heading variant="h2" className="mt-2 text-white">
              Real-time Step Progression
            </Heading>
          </div>

          <div className="grid gap-6 md:grid-cols-2 items-start">
            <ProcessingState steps={pipelineSteps} />

            <Card variant="laboratory" className="p-6 space-y-4">
              <div className="font-mono text-xs text-cyan-400 uppercase">[PIPELINE CONTROLLER]</div>
              <p className="text-xs text-slate-300">
                Advance the simulated data engineering pipeline to test progressive state changes:
              </p>
              <div className="flex items-center gap-3">
                <Button
                  size="sm"
                  variant="cyan"
                  onClick={() => setActiveStep((prev) => (prev < 4 ? prev + 1 : 1))}
                  icon={<Play size={14} />}
                >
                  Step {activeStep} / 4 (Advance)
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setActiveStep(1)}
                >
                  Reset
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* SECTION 7: SCROLL REVEALS & ACCESSIBILITY */}
        <section className="space-y-8">
          <div className="border-b border-white/10 pb-4">
            <Eyebrow variant="blue">Accessibility & Motion Guarantee</Eyebrow>
            <Heading variant="h2" className="mt-2 text-white">
              Hardware Acceleration & Reduced Motion
            </Heading>
          </div>

          <StaggerGroup className="grid gap-4 sm:grid-cols-3">
            <StaggerChild>
              <Card variant="bordered" className="p-6">
                <div className="font-mono text-xs text-blue-500 mb-2">[WCAG AA CONTRAST]</div>
                <h4 className="font-bold text-white text-base">High-Contrast Radiance</h4>
                <p className="text-xs text-slate-400 mt-2">
                  All typography and telemetry indicators meet WCAG AA contrast standards.
                </p>
              </Card>
            </StaggerChild>

            <StaggerChild>
              <Card variant="bordered" className="p-6">
                <div className="font-mono text-xs text-cyan-400 mb-2">[GPU ACCELERATED]</div>
                <h4 className="font-bold text-white text-base">Transform & Opacity Only</h4>
                <p className="text-xs text-slate-400 mt-2">
                  Zero layout recalculation loops. Smooth 60/120fps performance on all devices.
                </p>
              </Card>
            </StaggerChild>

            <StaggerChild>
              <Card variant="bordered" className="p-6">
                <div className="font-mono text-xs text-emerald-400 mb-2">[PREFERS REDUCED MOTION]</div>
                <h4 className="font-bold text-white text-base">Full Motion Safety</h4>
                <p className="text-xs text-slate-400 mt-2">
                  Animations collapse into instantaneous, accessible state transitions.
                </p>
              </Card>
            </StaggerChild>
          </StaggerGroup>
        </section>
      </Container>
    </div>
  );
}
