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
    icon: Search,
  },
  {
    num: "02",
    title: "Identify",
    desc: "Pinpoint the highest-ROI automation opportunities and define concrete success criteria.",
    icon: Compass,
  },
  {
    num: "03",
    title: "Build",
    desc: "Develop and integrate custom AI models, data pipelines, and workflow automation logic.",
    icon: Hammer,
  },
  {
    num: "04",
    title: "Deploy",
    desc: "Safely deploy the system into production with full testing, team onboarding, and docs.",
    icon: Rocket,
  },
  {
    num: "05",
    title: "Improve",
    desc: "Monitor execution telemetry, optimize accuracy, and iterate as your operations grow.",
    icon: LineChart,
  },
];

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#061326] py-24 md:py-32 text-white border-t border-white/5">
      {/* Background Decorative Tech Grids & Glows */}
      <div className="hero-grid absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] rounded-full bg-blue-600/10 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <Reveal className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
            <Sparkles size={13} className="text-cyan-400" />
            <span>Structured Delivery</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
            How We Work
          </h2>
          <p className="mt-4 text-base text-slate-300">
            A structured, transparent path from manual bottleneck to automated impact.
          </p>
        </Reveal>

        {/* Connected Horizontal Timeline (Desktop) & Stack (Mobile) */}
        <div className="relative mt-16">
          {/* Connecting Line on Desktop */}
          <div
            className="hidden lg:block absolute top-12 left-8 right-8 h-[2px] bg-gradient-to-r from-blue-500/30 via-cyan-400/50 to-emerald-400/30"
            aria-hidden="true"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#081830]/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-[#0a1e3b]"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 text-sm font-black text-cyan-300 shadow-md transition-transform group-hover:scale-105">
                        {step.num}
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-slate-400 group-hover:text-cyan-300 transition-colors">
                        <Icon size={16} />
                      </div>
                    </div>

                    <h3 className="mt-6 text-xl font-bold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-slate-300">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-cyan-400/80 pt-4 border-t border-white/5">
                    <span>Phase 0{index + 1}</span>
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
