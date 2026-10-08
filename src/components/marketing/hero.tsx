"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  FileText,
  Mail,
  FileSpreadsheet,
  Database,
  Cpu,
  Zap,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  Activity,
  Layers,
  Sparkles,
  ShieldCheck,
  Play,
  Pause,
  RotateCcw,
  Search,
  AlertCircle,
  Bot,
  Flame,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { Heading, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/interactive/magnetic";
import { StatusIndicator } from "@/components/ui/system/status-indicator";

type StageId = "manual-work" | "identify" | "automate" | "time-back" | "growth";

interface ManualTask {
  id: string;
  title: string;
  tool: string;
  timeCost: string;
  icon: LucideIcon;
  frictionReason: string;
  manualSteps: string[];
  automatedSolution: string;
  automationSpeed: string;
  reclaimedHours: string;
  patternTag: string;
}

const MANUAL_TASKS: ManualTask[] = [
  {
    id: "invoices",
    title: "Invoice & Receipt Data Entry",
    tool: "PDFs, Scans & QuickBooks/NetSuite",
    timeCost: "25 min / invoice",
    icon: FileText,
    frictionReason: "Manually re-typing vendor line items, tax numbers & matching POs",
    manualSteps: [
      "1. Download PDF invoice from email",
      "2. Open ERP accounting system",
      "3. Manually type 18 fields line-by-line",
      "4. Cross-check against Purchase Order",
      "5. Check for human clerical typos",
      "6. Click save and post to ledger",
    ],
    automatedSolution: "AI Document Intelligence parses fields & verifies deterministic rules in 0.02s",
    automationSpeed: "0.02 sec",
    reclaimedHours: "35 hrs/wk",
    patternTag: "HIGH VOLUME // RULE-BASED",
  },
  {
    id: "lead-research",
    title: "Lead Research & CRM Logging",
    tool: "Inboxes, Google & Salesforce/HubSpot",
    timeCost: "35 min / lead",
    icon: Search,
    frictionReason: "Searching company details, finding contacts & updating deal stages",
    manualSteps: [
      "1. Inbound inquiry arrives in shared inbox",
      "2. Rep searches prospect website & LinkedIn",
      "3. Manually copy revenue & company size",
      "4. Create contact in CRM",
      "5. Assign account executive manually",
      "6. Write template outreach email",
    ],
    automatedSolution: "AI Intent Engine scores lead, enriches CRM & drafts custom proposal instantly",
    automationSpeed: "0.04 sec",
    reclaimedHours: "42 hrs/wk",
    patternTag: "REPETITIVE // STRUCTURED",
  },
  {
    id: "spreadsheets",
    title: "Spreadsheet & CSV Consolidation",
    tool: "Excel, Google Sheets & Legacy DBs",
    timeCost: "12 hrs / week",
    icon: FileSpreadsheet,
    frictionReason: "Copy-pasting exports between 5 siloed tools to produce weekly updates",
    manualSteps: [
      "1. Export CSV from tool #1",
      "2. Export CSV from tool #2",
      "3. Run manual VLOOKUP formulas",
      "4. Fix broken formatting & duplicates",
      "5. Manually compile master spreadsheet",
      "6. Email updated file to management",
    ],
    automatedSolution: "Automated Data Pipeline unifies schemas and syncs live into a single source of truth",
    automationSpeed: "Continuous",
    reclaimedHours: "50+ hrs/wk",
    patternTag: "SILOED // ERROR PRONE",
  },
  {
    id: "email-triage",
    title: "Repetitive Email & Ticket Triage",
    tool: "Support Inbox, Zendesk & Slack",
    timeCost: "4 hrs / day",
    icon: Mail,
    frictionReason: "Reading customer questions, sorting categories & manual forwards",
    manualSteps: [
      "1. Read incoming customer ticket",
      "2. Search knowledge base for answers",
      "3. Copy-paste standard reply template",
      "4. Escalate to engineering via Slack",
      "5. Tag status in support tracker",
    ],
    automatedSolution: "Autonomous triage agent resolves common requests & routes priority deals",
    automationSpeed: "Instant",
    reclaimedHours: "30 hrs/wk",
    patternTag: "HIGH VELOCITY // 24/7",
  },
];

interface StageInfo {
  id: StageId;
  stepNumber: string;
  badge: string;
  headline: string;
  narrative: string;
  themeColor: "amber" | "blue" | "cyan" | "indigo" | "emerald";
  actionButtonText: string;
}

const STAGES: Record<StageId, StageInfo> = {
  "manual-work": {
    id: "manual-work",
    stepNumber: "01",
    badge: "01 // THE OPERATIONAL BOTTLENECK",
    headline: "Your team is buried in repetitive manual work.",
    narrative:
      "Disjointed spreadsheets, endless copy-paste data entry, and manual follow-ups consume hundreds of hours every week, draining company momentum.",
    themeColor: "amber",
    actionButtonText: "⚡ Identify Repetitive Work ↓",
  },
  identify: {
    id: "identify",
    stepNumber: "02",
    badge: "02 // PATTERN DETECTION",
    headline: "Hastava pinpoints repetitive, rule-based friction.",
    narrative:
      "We analyze your operations to isolate high-volume, repetitive tasks where human time is wasted on predictable rules that software should handle.",
    themeColor: "blue",
    actionButtonText: "⚡ Activate Hastava Automation ↓",
  },
  automate: {
    id: "automate",
    stepNumber: "03",
    badge: "03 // THE HASTAVA ENGINE",
    headline: "AI + Data + Automation eliminates the manual effort.",
    narrative:
      "We connect your business data, deploy pragmatic AI models, and engineer custom automated workflows that execute deterministically without manual intervention.",
    themeColor: "cyan",
    actionButtonText: "⚡ See Time Liberated ↓",
  },
  "time-back": {
    id: "time-back",
    stepNumber: "04",
    badge: "04 // CAPACITY LIBERATED",
    headline: "Hours reclaimed. Friction gone. Teams energized.",
    narrative:
      "Manual queues dissolve. Clerical errors drop to zero. Your team gets hundreds of hours back to focus on high-leverage clients, strategy, and innovation.",
    themeColor: "indigo",
    actionButtonText: "⚡ Experience Business Growth ↓",
  },
  growth: {
    id: "growth",
    stepNumber: "05",
    badge: "05 // THE FINAL OUTCOME",
    headline: "Turn Manual Work Into Compounding Growth.",
    narrative:
      "More operational capacity means faster deal velocity, happier customers, and effortless scale without hiring linearly for manual busywork.",
    themeColor: "emerald",
    actionButtonText: "⚡ Restart Interactive Demo ↺",
  },
};

const STAGE_SEQUENCE: StageId[] = ["manual-work", "identify", "automate", "time-back", "growth"];

export function Hero() {
  const [currentStage, setCurrentStage] = useState<StageId>("manual-work");
  const [selectedTaskId, setSelectedTaskId] = useState<string>("invoices");
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const stageData = STAGES[currentStage];
  const activeTask = MANUAL_TASKS.find((t) => t.id === selectedTaskId) || MANUAL_TASKS[0];
  const currentStageIdx = STAGE_SEQUENCE.indexOf(currentStage);

  // Mouse Parallax Physics for Interactive Depth (Layer 2)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !heroContainerRef.current) return;
    const rect = heroContainerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  // Auto-Cycle timer if playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStage((prev) => {
        const idx = STAGE_SEQUENCE.indexOf(prev);
        return STAGE_SEQUENCE[(idx + 1) % STAGE_SEQUENCE.length];
      });
    }, 7000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToNextStage = () => {
    setIsPlaying(false);
    const nextIdx = (currentStageIdx + 1) % STAGE_SEQUENCE.length;
    setCurrentStage(STAGE_SEQUENCE[nextIdx]);
  };

  const handleStageSelect = (stageId: StageId) => {
    setIsPlaying(false);
    setCurrentStage(stageId);
  };

  return (
    <section
      ref={heroContainerRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-[#030712] text-white pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-28"
    >
      {/* Layer 1: Ambient Technical Background & Reactive Parallax Glow */}
      <div className="absolute inset-0 hero-grid opacity-25 pointer-events-none" aria-hidden="true" />

      {/* Dynamic Luminous Glow responding to mouse position */}
      <motion.div
        animate={{
          x: mousePos.x * 40,
          y: mousePos.y * 40,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 100 }}
        className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-600/15 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          x: mousePos.x * -35,
          y: mousePos.y * -35,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 100 }}
        className="absolute bottom-1/4 right-1/4 h-[550px] w-[550px] rounded-full bg-cyan-500/12 blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10 space-y-10 lg:space-y-12">
        {/* ==================================================================== */}
        {/* TOP HERO HEADER: CORE BUSINESS POSITIONING & CTAs                   */}
        {/* ==================================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="max-w-3xl space-y-4">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/50 px-3.5 py-1.5 text-xs font-mono font-bold tracking-widest text-cyan-300 backdrop-blur-md shadow-md shadow-cyan-950/40">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,1)]" />
              </span>
              <span>AI • DATA • AUTOMATION FOR BUSINESSES</span>
            </div>

            {/* Primary Display Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] text-white leading-[1.06]">
              Turn Manual Work{" "}
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Into Growth.
              </span>
            </h1>

            {/* Supporting Copy */}
            <Text variant="lead" className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Hastava eliminates repetitive manual busywork by connecting your business data, deploying pragmatic AI, and engineering automated workflows—giving your team time and capacity to grow.
            </Text>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 shrink-0">
            <Magnetic strength={0.3}>
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="font-bold text-sm sm:text-base px-7 py-3.5 shadow-xl shadow-blue-600/30"
                icon={<ArrowRight size={16} />}
              >
                Book a Discovery Call
              </Button>
            </Magnetic>

            <Button
              href="#solutions"
              variant="outline"
              size="lg"
              className="text-sm font-bold border-white/20 text-slate-200 hover:bg-white/10 px-6 py-3.5"
            >
              See What We Automate
            </Button>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* INTERACTIVE SYSTEM EXPERIENCE CANVAS: 5-STAGE LIVING ENGINE          */}
        {/* ==================================================================== */}
        <div className="relative rounded-3xl border border-cyan-500/30 bg-[#061326]/95 p-5 sm:p-7 shadow-[0_25px_90px_rgba(0,0,0,0.85)] backdrop-blur-2xl overflow-hidden space-y-6">
          {/* Blueprint Corner Accents */}
          <span className="absolute top-3 left-3 h-3.5 w-3.5 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
          <span className="absolute top-3 right-3 h-3.5 w-3.5 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
          <span className="absolute bottom-3 left-3 h-3.5 w-3.5 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
          <span className="absolute bottom-3 right-3 h-3.5 w-3.5 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />

          {/* Top Stage Navigation Stepper (Layer 1: User Controlled Transformation) */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Activity size={14} className="text-cyan-400 animate-pulse" />
                  HASTAVA TRANSFORMATION SYSTEM
                </span>
                <span className="h-1 w-1 rounded-full bg-cyan-400" />
                <StatusIndicator status="online" label="" size="sm" />
              </div>
              <p className="text-xs text-slate-300">
                Explore each stage to experience how manual friction converts into compounding growth:
              </p>
            </div>

            {/* Stepper Buttons: 01 MANUAL WORK -> 02 IDENTIFY -> 03 AUTOMATE -> 04 TIME BACK -> 05 GROWTH */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-black/60 border border-white/10">
              {STAGE_SEQUENCE.map((stageId, idx) => {
                const isSelected = stageId === currentStage;
                const isPassed = idx < currentStageIdx;
                const s = STAGES[stageId];
                return (
                  <button
                    key={stageId}
                    onClick={() => handleStageSelect(stageId)}
                    data-cursor="button"
                    data-cursor-text={s.id}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-cyan-500 text-[#030712] shadow-[0_0_15px_rgba(6,182,212,0.6)] scale-102"
                        : isPassed
                        ? "text-cyan-300 bg-cyan-950/30 hover:bg-cyan-950/60"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{s.stepNumber}</span>
                    <span className="hidden sm:inline font-sans uppercase">
                      {stageId === "manual-work"
                        ? "Manual"
                        : stageId === "identify"
                        ? "Identify"
                        : stageId === "automate"
                        ? "Automate"
                        : stageId === "time-back"
                        ? "Time Back"
                        : "Growth"}
                    </span>
                  </button>
                );
              })}

              {/* Play / Pause Auto Tour */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-cyan-300 hover:bg-white/10 transition-colors ml-1 cursor-pointer"
                title={isPlaying ? "Pause automated tour" : "Resume automated tour"}
                aria-label={isPlaying ? "Pause automated tour" : "Resume automated tour"}
              >
                {isPlaying ? <Pause size={13} /> : <Play size={13} />}
              </button>
            </div>
          </div>

          {/* Current Stage Headline & Narrative Banner */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 bg-black/40 rounded-2xl p-4 sm:p-5 border border-white/10">
            <div className="space-y-1 max-w-2xl">
              <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest block">
                {stageData.badge}
              </span>
              <Heading variant="h3" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {stageData.headline}
              </Heading>
              <Text className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                {stageData.narrative}
              </Text>
            </div>

            {/* Direct Trigger to Advance to Next Stage */}
            <button
              onClick={goToNextStage}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-mono text-xs font-bold tracking-wider uppercase shadow-lg shadow-cyan-500/25 hover:brightness-110 active:scale-98 transition-all cursor-pointer shrink-0"
            >
              <span>{stageData.actionButtonText}</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* ==================================================================== */}
          {/* DYNAMIC SYSTEM ENVIRONMENT: TRANSFORMS BASED ON ACTIVE STAGE        */}
          {/* ==================================================================== */}
          <AnimatePresence mode="wait">
            {/* STAGE 01 & 02: MANUAL WORK STATE & PATTERN IDENTIFICATION */}
            {(currentStage === "manual-work" || currentStage === "identify") && (
              <motion.div
                key="manual-state"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-5"
              >
                {/* Left 7 Cols: Interactive Manual Tasks Matrix (Layer 3: Interactive Objects) */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-1">
                    <span className="flex items-center gap-1.5 text-amber-400 font-bold uppercase">
                      <Flame size={14} className="text-amber-400 animate-pulse" />
                      ACTIVE MANUAL WORKLOADS ({MANUAL_TASKS.length})
                    </span>
                    <span>Click any task to inspect manual friction</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {MANUAL_TASKS.map((task) => {
                      const isSelected = task.id === selectedTaskId;
                      const isIdentifyStage = currentStage === "identify";
                      const Icon = task.icon;

                      return (
                        <div
                          key={task.id}
                          onClick={() => setSelectedTaskId(task.id)}
                          data-cursor="interactive"
                          data-cursor-text="INSPECT"
                          className={`group relative rounded-2xl border p-4 transition-all duration-300 cursor-pointer ${
                            isSelected
                              ? isIdentifyStage
                                ? "border-blue-400 bg-blue-950/40 shadow-lg shadow-blue-950/80 ring-1 ring-blue-400"
                                : "border-amber-400 bg-amber-950/30 shadow-lg shadow-amber-950/80 ring-1 ring-amber-400"
                              : "border-white/10 bg-black/40 hover:border-white/20 hover:bg-white/[0.04]"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-3">
                              <div
                                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all ${
                                  isSelected
                                    ? isIdentifyStage
                                      ? "bg-blue-500 text-black shadow-md shadow-blue-500/40 scale-105"
                                      : "bg-amber-500 text-black shadow-md shadow-amber-500/40 scale-105"
                                    : "bg-white/10 text-slate-300"
                                }`}
                              >
                                <Icon size={18} />
                              </div>
                              <div className="min-w-0">
                                <div className="text-xs font-bold text-white truncate leading-tight">
                                  {task.title}
                                </div>
                                <div className="text-[10px] text-slate-400 font-mono mt-0.5 truncate">
                                  {task.tool}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
                            <span className="text-amber-400 font-bold">{task.timeCost}</span>
                            {isIdentifyStage ? (
                              <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-bold border border-blue-400/30">
                                {task.patternTag}
                              </span>
                            ) : (
                              <span className="text-slate-400">Status: WAITING</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Operational Overload Warning */}
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-3 text-xs text-amber-300">
                    <AlertCircle size={16} className="text-amber-400 shrink-0" />
                    <span>
                      <strong>High Friction Alert:</strong> 160+ hours per month spent on repetitive manual copy-pasting and document typing across 4 disconnected tool silos.
                    </span>
                  </div>
                </div>

                {/* Right 5 Cols: Deep-Dive Task Inspector (Shows the Painful Multi-Step Loop) */}
                <div className="lg:col-span-5 rounded-2xl bg-[#030914] border border-cyan-500/30 p-5 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider">
                          TASK INSPECTION HUD
                        </span>
                        <span className="h-1 w-1 rounded-full bg-cyan-400" />
                      </div>
                      <span className="font-mono text-[10px] text-amber-400 font-bold">
                        {activeTask.timeCost}
                      </span>
                    </div>

                    <div className="mt-3 space-y-1">
                      <h4 className="text-sm font-bold text-white">{activeTask.title}</h4>
                      <p className="text-xs text-slate-300 leading-normal">{activeTask.frictionReason}</p>
                    </div>

                    {/* Step-by-Step Manual Agony Sequence */}
                    <div className="mt-4 space-y-2">
                      <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                        MANUAL WORKFLOW LOOP:
                      </span>
                      <div className="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                        {activeTask.manualSteps.map((step, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-xs text-slate-300 p-1.5 rounded-lg bg-black/40 border border-white/5"
                          >
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-amber-500/20 text-amber-300 font-mono text-[9px] font-bold">
                              {idx + 1}
                            </span>
                            <span className="truncate">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hastava Solution Preview */}
                  <div className="pt-3 border-t border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-cyan-400 font-bold">AUTOMATION POTENTIAL:</span>
                      <span className="text-emerald-400 font-bold">100% AUTOMATED</span>
                    </div>
                    <p className="text-xs text-slate-200 bg-cyan-950/40 p-2.5 rounded-xl border border-cyan-500/30 leading-relaxed">
                      {activeTask.automatedSolution}
                    </p>
                    <button
                      onClick={() => handleStageSelect("automate")}
                      className="w-full py-2 rounded-xl bg-cyan-500 text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-cyan-400 transition-colors shadow-md shadow-cyan-500/30 cursor-pointer"
                    >
                      Automate This Task With Hastava →
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STAGE 03: THE HASTAVA AUTOMATION STATE (Layer 4: System Transformation) */}
            {currentStage === "automate" && (
              <motion.div
                key="automate-state"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                {/* Visual Architecture: Manual Inputs -> HASTAVA TRIAD (AI + Data + Automation) -> Execution Output */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                  {/* Left 3 Cols: Ingested Manual Inputs */}
                  <div className="lg:col-span-3 space-y-2.5">
                    <span className="font-mono text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                      01 // INGESTING MANUAL WORK
                    </span>
                    {MANUAL_TASKS.map((t) => (
                      <div
                        key={t.id}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs"
                      >
                        <t.icon size={15} className="text-amber-400 shrink-0" />
                        <span className="truncate text-slate-200 font-medium">{t.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* Center 6 Cols: The Hastava Core Triad */}
                  <div className="lg:col-span-6 relative rounded-2xl border-2 border-cyan-400 bg-gradient-to-b from-[#0e2c56] via-[#091b35] to-[#0e2c56] p-5 shadow-2xl shadow-cyan-500/30 text-center space-y-4">
                    {/* Glowing Header */}
                    <div className="flex items-center justify-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 text-white shadow-lg">
                        <Cpu size={22} />
                      </div>
                      <div className="text-left">
                        <h4 className="text-base font-extrabold text-white tracking-tight">
                          HASTAVA ORCHESTRATION ENGINE
                        </h4>
                        <p className="font-mono text-[10px] text-cyan-300">
                          Autonomous Deterministic Transformation
                        </p>
                      </div>
                    </div>

                    {/* The 3 Core Capabilities Pillars */}
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <div className="p-3 rounded-xl bg-black/50 border border-cyan-400/40 text-center space-y-1">
                        <Sparkles size={16} className="text-cyan-400 mx-auto" />
                        <div className="text-xs font-bold text-white">PRAGMATIC AI</div>
                        <div className="text-[9px] font-mono text-slate-400">OCR & Intent Models</div>
                      </div>

                      <div className="p-3 rounded-xl bg-black/50 border border-blue-400/40 text-center space-y-1">
                        <Database size={16} className="text-blue-400 mx-auto" />
                        <div className="text-xs font-bold text-white">CONNECTED DATA</div>
                        <div className="text-[9px] font-mono text-slate-400">Unified Lakehouse</div>
                      </div>

                      <div className="p-3 rounded-xl bg-black/50 border border-indigo-400/40 text-center space-y-1">
                        <Zap size={16} className="text-indigo-400 mx-auto" />
                        <div className="text-xs font-bold text-white">AUTOMATION</div>
                        <div className="text-[9px] font-mono text-slate-400">Instant Execution</div>
                      </div>
                    </div>

                    {/* Live Processing Metric */}
                    <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-white/10 text-slate-300">
                      <span className="flex items-center gap-1 text-cyan-300">
                        <ShieldCheck size={14} className="text-emerald-400" />
                        Zero Clerical Error Gate: ACTIVE
                      </span>
                      <span className="text-cyan-300 font-bold">LATENCY: 0.02s</span>
                    </div>
                  </div>

                  {/* Right 3 Cols: Automated Real-Time System Actions */}
                  <div className="lg:col-span-3 space-y-2.5">
                    <span className="font-mono text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">
                      03 // AUTONOMOUS EXECUTION
                    </span>
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                      <span className="truncate text-slate-200 font-medium">ERP Reconciled in 0.02s</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs">
                      <TrendingUp size={15} className="text-emerald-400 shrink-0" />
                      <span className="truncate text-slate-200 font-medium">CRM Deal Stage Advanced</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs">
                      <Layers size={15} className="text-emerald-400 shrink-0" />
                      <span className="truncate text-slate-200 font-medium">Single Source of Truth Live</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs">
                      <Bot size={15} className="text-emerald-400 shrink-0" />
                      <span className="truncate text-slate-200 font-medium">Inquiry Resolved 24/7</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STAGE 04: TIME BACK (Calm, Liberated Capacity) */}
            {currentStage === "time-back" && (
              <motion.div
                key="time-back-state"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                <div className="p-5 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 text-center space-y-2">
                  <div className="font-mono text-3xl sm:text-4xl font-extrabold text-cyan-300">
                    160+ Hrs
                  </div>
                  <div className="text-sm font-bold text-white">Reclaimed Monthly</div>
                  <p className="text-xs text-slate-300">
                    Staff completely liberated from manual data entry and spreadsheet copying.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 text-center space-y-2">
                  <div className="font-mono text-3xl sm:text-4xl font-extrabold text-emerald-400">
                    0%
                  </div>
                  <div className="text-sm font-bold text-white">Clerical Errors</div>
                  <p className="text-xs text-slate-300">
                    Deterministic business rules guarantee zero human typing mistakes.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 text-center space-y-2">
                  <div className="font-mono text-3xl sm:text-4xl font-extrabold text-blue-300">
                    -87%
                  </div>
                  <div className="text-sm font-bold text-white">Manual Busywork</div>
                  <p className="text-xs text-slate-300">
                    Repetitive tasks disappear into automated background pipelines.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 text-center space-y-2">
                  <div className="font-mono text-3xl sm:text-4xl font-extrabold text-indigo-300">
                    +90%
                  </div>
                  <div className="text-sm font-bold text-white">Strategic Focus</div>
                  <p className="text-xs text-slate-300">
                    Teams direct energy toward client relationships, deal closing, and product quality.
                  </p>
                </div>
              </motion.div>
            )}

            {/* STAGE 05: GROWTH (The Business Outcome) */}
            {currentStage === "growth" && (
              <motion.div
                key="growth-state"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl bg-gradient-to-r from-emerald-950/30 via-[#071d18]/60 to-emerald-950/30 border border-emerald-500/40 p-6 text-center space-y-5"
              >
                <div className="max-w-xl mx-auto space-y-2">
                  <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest">
                    THE TRANSFORMATION IS COMPLETE
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                    Turn Manual Work Into Growth.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    By removing manual friction with Hastava’s AI, Data, and Automation engineering, your business gains the capacity to scale revenue 10x without adding headcount overhead.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto font-mono text-xs">
                  <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/30">
                    <div className="text-lg font-bold text-emerald-300">4.8x</div>
                    <div className="text-[11px] text-slate-400">Deal Execution Velocity</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/30">
                    <div className="text-lg font-bold text-cyan-300">10x</div>
                    <div className="text-[11px] text-slate-400">Operational Scale</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/30">
                    <div className="text-lg font-bold text-white">GROWTH</div>
                    <div className="text-[11px] text-slate-400">Compounding Margin</div>
                  </div>
                </div>

                <div className="pt-2 flex justify-center gap-3">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="lg"
                    className="font-bold text-sm px-7 py-3 shadow-lg shadow-emerald-600/30"
                    icon={<ArrowRight size={16} />}
                  >
                    Discuss Your Business Transformation
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ==================================================================== */}
          {/* SYSTEM TELEMETRY FOOTER: REAL-TIME CONSOLE & STATUS STREAM          */}
          {/* ==================================================================== */}
          <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-[11px] text-slate-300">
            <div className="flex items-center gap-2">
              <span className="text-slate-400 font-bold">FLOW STATUS:</span>
              <span className="text-cyan-300 uppercase">
                {currentStage === "manual-work"
                  ? "MANUAL_FRICTION_QUEUED"
                  : currentStage === "identify"
                  ? "PATTERN_DETECTION_ACTIVE"
                  : currentStage === "automate"
                  ? "AI_DATA_AUTO_ORCHESTRATING"
                  : currentStage === "time-back"
                  ? "160_HOURS_RECLAIMED"
                  : "GROWTH_UNLOCKED"}
              </span>
            </div>

            <div className="flex items-center gap-4 text-[10px] text-slate-400">
              <span>STAGE {currentStageIdx + 1} OF 5</span>
              <button
                onClick={() => setCurrentStage("manual-work")}
                className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw size={11} />
                <span>Reset Simulation</span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
