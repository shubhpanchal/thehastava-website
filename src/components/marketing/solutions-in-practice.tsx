"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  Workflow,
  BarChart3,
  Layers,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

const PRACTICAL_SOLUTIONS = [
  {
    num: "01",
    title: "Document Intelligence",
    pattern: "PDF & Email Ingestion → AI Extraction → Rule Validation → Structured Data",
    desc: "Unstructured incoming invoices, customer emails, and forms are automatically parsed, validated against business logic, and structured for downstream databases.",
    icon: FileText,
    badge: "Typical Automation Pattern",
    steps: ["Incoming PDF/Email", "Entity Extraction", "Logic Verification", "Structured Schema"],
  },
  {
    num: "02",
    title: "Workflow Automation",
    pattern: "Business Request → Routing Rules → System Trigger → Automated Action",
    desc: "Operational requests and status triggers flow through intelligent decision rules to automate cross-team handoffs, assignments, and external communications.",
    icon: Workflow,
    badge: "Example Workflow",
    steps: ["Inbound Request", "Intent Scoring", "Action Orchestration", "System Execution"],
  },
  {
    num: "03",
    title: "Data & Reporting",
    pattern: "Operational Data → Transformation Pipeline → Automated Sync → Live Dashboards",
    desc: "Siloed operational numbers and daily spreadsheets are unified into reliable data pipelines delivering automated executive metrics and real-time reports.",
    icon: BarChart3,
    badge: "Illustrative Solution",
    steps: ["Multi-source Logs", "Data Cleaning", "Scheduled Aggregation", "Executive Views"],
  },
  {
    num: "04",
    title: "Business Systems",
    pattern: "Disconnected Tools → API Bridge → Custom Interface → Unified Operations",
    desc: "Custom role-aware interfaces and API middleware that connect legacy tools, eliminate double-entry, and provide a single operational command centre.",
    icon: Layers,
    badge: "System Architecture Pattern",
    steps: ["Legacy Software", "API Middleware", "Role-based Portal", "Unified Workspace"],
  },
];

export function SolutionsInPractice() {
  return (
    <section className="relative overflow-hidden bg-[#061326] py-24 md:py-32 text-white border-t border-white/5">
      {/* Dynamic Background Glows */}
      <div
        className="absolute top-1/3 -left-32 h-[450px] w-[450px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -right-32 h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
              <Sparkles size={13} className="text-cyan-400" />
              <span>Solutions in Practice</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
              From repetitive manual work to intelligent business workflows.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Illustrative architectures showing how modern AI, data pipelines, and automation solve common operational bottlenecks across organizations.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-300 transition-transform hover:translate-x-1"
            >
              <span>Discuss Your Workflow</span>
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>

        {/* 4 Practical Solution Workflow Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PRACTICAL_SOLUTIONS.map((sol, index) => {
            const Icon = sol.icon;
            return (
              <Reveal
                key={sol.num}
                delay={index * 0.08}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#081830]/80 p-7 md:p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_20px_50px_rgba(6,182,212,0.12)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 shadow-sm transition-transform group-hover:scale-105">
                        <Icon size={22} />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                          Pattern {sol.num}
                        </span>
                        <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
                          {sol.title}
                        </h3>
                      </div>
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                      {sol.badge}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-slate-300">
                    {sol.desc}
                  </p>

                  {/* Visual Step Pipeline Flow */}
                  <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                      <Zap size={12} className="text-cyan-400 animate-pulse" />
                      <span>Transformation Architecture</span>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {sol.steps.map((step, sIdx) => (
                        <div
                          key={step}
                          className="flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-slate-300"
                        >
                          <span className="text-[10px] font-mono text-cyan-400">{sIdx + 1}.</span>
                          <span className="truncate">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 truncate max-w-[280px] sm:max-w-none">
                    {sol.pattern}
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-cyan-300 hover:text-cyan-200 transition-transform group-hover:translate-x-0.5 shrink-0 ml-2"
                  >
                    <span>Implement</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <Reveal delay={0.2} className="mt-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-cyan-400/20 bg-cyan-950/20 p-6 backdrop-blur-md">
            <div>
              <h4 className="text-base font-bold text-white">
                Have a manual workflow unique to your industry?
              </h4>
              <p className="mt-1 text-xs text-slate-300">
                We analyze your exact processes, inputs, and constraints to design deterministic automation solutions.
              </p>
            </div>
            <Button href="/contact" size="sm" className="shrink-0">
              Explore Your Use Case
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
