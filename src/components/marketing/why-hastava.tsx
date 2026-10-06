"use client";

import React from "react";
import { Compass, Sparkles, Zap, ShieldCheck } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/ui/reveal";

const PRINCIPLES = [
  {
    title: "Business-first",
    subtitle: "We start with operational problems, not tech hype",
    desc: "Every automation project begins by identifying your specific team bottlenecks, manual time drains, and system constraints before writing a single line of code.",
    icon: Compass,
    gradient: "from-blue-500/15 via-cyan-500/10 to-transparent",
  },
  {
    title: "Practical AI",
    subtitle: "Reliable automation with predictable accuracy",
    desc: "We focus on pragmatic AI models engineered for deterministic data extraction, workflow routing, and validation — avoiding expensive, ungrounded experiments.",
    icon: Sparkles,
    gradient: "from-cyan-500/15 via-blue-500/10 to-transparent",
  },
  {
    title: "Data expertise",
    subtitle: "Clean pipelines & reliable schemas at the core",
    desc: "Automation is only as good as the underlying data. We build robust schemas, validation gates, and API connectors that keep your data clean and reliable.",
    icon: Zap,
    gradient: "from-indigo-500/15 via-purple-500/10 to-transparent",
  },
  {
    title: "Built for you",
    subtitle: "Custom architecture aligned to your exact stack",
    desc: "We engineer systems tailored to your specific tools and business workflows, avoiding bloated off-the-shelf software subscriptions you only half use.",
    icon: ShieldCheck,
    gradient: "from-emerald-500/15 via-cyan-500/10 to-transparent",
  },
];

export function WhyHastava() {
  return (
    <section className="relative bg-slate-900 py-24 md:py-32 text-white overflow-hidden border-t border-white/5">
      {/* Background Subtle Accent Glows */}
      <div
        className="absolute top-0 left-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <Reveal className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
            <Sparkles size={13} className="text-cyan-400" />
            <span>Why HASTAVA</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
            Technology built to make your business run easier, not more complex.
          </h2>
        </Reveal>

        {/* 4 Premium Feature Blocks */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={index * 0.08}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#081830]/85 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/50 hover:shadow-[0_15px_35px_rgba(6,182,212,0.12)]"
              >
                {/* Radial Glow Highlight */}
                <div
                  className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${item.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 pointer-events-none`}
                />

                <div className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/10 text-cyan-300 shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-1 text-xs font-semibold text-cyan-400">
                    {item.subtitle}
                  </div>
                  <p className="mt-3.5 text-xs leading-relaxed text-slate-300">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
