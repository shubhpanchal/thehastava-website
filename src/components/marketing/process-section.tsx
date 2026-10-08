"use client";

import React from "react";
import { motion } from "motion/react";
import { Sparkles, Search, Compass, Hammer, Rocket, LineChart } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/ui/reveal";

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discover",
    desc: "Understand your current manual workflows, team bottlenecks, and business objectives.",
    deliverables: ["Workflow Bottleneck Audit", "Data Input Mapping", "Time-Drain Assessment"],
    icon: Search,
  },
  {
    num: "02",
    title: "Identify",
    desc: "Pinpoint the highest-ROI automation opportunities and define concrete success criteria.",
    deliverables: ["Feasibility Scoring", "Architecture Blueprint", "Success Metric Definition"],
    icon: Compass,
  },
  {
    num: "03",
    title: "Build",
    desc: "Develop and integrate custom AI models, data pipelines, and workflow automation logic.",
    deliverables: ["AI Extraction Models", "Business Logic Gates", "Bidirectional API Connectors"],
    icon: Hammer,
  },
  {
    num: "04",
    title: "Deploy",
    desc: "Safely deploy the system into production with full testing, team onboarding, and docs.",
    deliverables: ["Edge-Case Testing", "Team Training & Runbooks", "Production System Launch"],
    icon: Rocket,
  },
  {
    num: "05",
    title: "Improve",
    desc: "Monitor execution telemetry, optimize accuracy, and iterate as your operations grow.",
    deliverables: ["Live Telemetry Monitoring", "Extraction Accuracy Tuning", "Ongoing Scalability Updates"],
    icon: LineChart,
  },
];

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24 text-slate-900 border-t border-slate-200/60">
      <Container className="relative z-10">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-blue-700">
            <Sparkles size={13} className="text-blue-600" />
            <span>Operating Methodology</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-slate-900">
            How We Work
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A structured, transparent engineering path from manual operational bottleneck to automated business impact.
          </p>
        </Reveal>

        {/* Connected Horizontal Timeline (Desktop) & Stack (Mobile) */}
        <div className="relative mt-10 md:mt-14">
          {/* Connecting Line on Desktop */}
          <div
            className="hidden lg:block absolute top-14 left-10 right-10 h-[2px] bg-gradient-to-r from-blue-200 via-blue-500 to-indigo-300"
            aria-hidden="true"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-slate-50/80 p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-blue-400 hover:bg-white hover:shadow-xl hover:shadow-slate-200/60"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-base font-black text-white shadow-md shadow-blue-600/25 transition-transform group-hover:scale-105">
                        {step.num}
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-blue-100/70 transition-colors">
                        <Icon size={18} />
                      </div>
                    </div>

                    <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-slate-600">
                      {step.desc}
                    </p>

                    {/* Deliverable points */}
                    <div className="mt-6 space-y-1.5 border-t border-slate-200/70 pt-4">
                      {step.deliverables.map((del) => (
                        <div key={del} className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700">
                          <span className="h-1 w-1 rounded-full bg-blue-600 shrink-0" />
                          <span className="leading-snug">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-blue-600 pt-4 border-t border-slate-200/60">
                    <span>Phase 0{index + 1}</span>
                    <span className="text-slate-400 font-mono text-[10px]">Active</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
