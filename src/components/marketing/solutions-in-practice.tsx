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
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ArchitectureWorkflow } from "./workflows/architecture-workflow";

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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#08172B] via-[#0B1F38] to-[#12345A] py-16 md:py-20 lg:py-24 text-white border-y border-white/10">
      {/* Dynamic Background Glows */}
      <div
        className="absolute top-1/3 -left-32 h-[450px] w-[450px] rounded-full bg-blue-500/15 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -right-32 h-[400px] w-[400px] rounded-full bg-cyan-400/12 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
              <Sparkles size={13} className="text-cyan-400" />
              <span>Solutions in Practice</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
              From repetitive manual work to intelligent business workflows.
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
              Illustrative architectures showing how modern AI, data pipelines, and automation solve common operational bottlenecks across organizations.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="shrink-0">
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
        <div className="mt-10 md:mt-12 grid gap-6 md:grid-cols-2">
          {PRACTICAL_SOLUTIONS.map((sol, index) => {
            const Icon = sol.icon;
            return (
              <Reveal
                key={sol.num}
                delay={index * 0.08}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/12 bg-[#081830]/85 p-7 sm:p-9 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_20px_50px_rgba(6,182,212,0.14)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 shadow-sm transition-transform group-hover:scale-105">
                        <Icon size={26} />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-400 font-mono">
                          Pattern {sol.num}
                        </span>
                        <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
                          {sol.title}
                        </h3>
                      </div>
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
                      {sol.badge}
                    </span>
                  </div>

                  <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-300">
                    {sol.desc}
                  </p>

                  {/* Visual Step Pipeline Flow */}
                  <ArchitectureWorkflow patternNum={sol.num} />
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-xs font-mono text-slate-300 leading-relaxed">
                    {sol.pattern}
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300 hover:text-cyan-200 transition-transform group-hover:translate-x-1 shrink-0"
                  >
                    <span>Implement</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <Reveal delay={0.2} className="mt-10 md:mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 rounded-3xl border border-cyan-400/25 bg-cyan-950/30 p-7 sm:p-9 backdrop-blur-md">
            <div>
              <h4 className="text-lg font-bold text-white">
                Have a manual workflow unique to your industry?
              </h4>
              <p className="mt-1.5 text-sm text-slate-300 max-w-2xl">
                We analyze your exact processes, inputs, and constraints to design deterministic automation solutions.
              </p>
            </div>
            <Button href="/contact" size="md" className="shrink-0 font-bold">
              Explore Your Use Case
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
