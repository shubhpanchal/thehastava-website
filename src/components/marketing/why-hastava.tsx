"use client";

import React from "react";
import { Compass, Sparkles, Zap, ShieldCheck } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/ui/reveal";

export function WhyHastava() {
  const WHY_FEATURES = [
    {
      title: "Business-First Approach",
      subtitle: "We start with operational friction, not tech hype",
      desc: "Every automation project begins by identifying your specific team bottlenecks, manual time drains, and system constraints before writing a single line of code.",
      icon: Compass,
      highlights: ["Bottleneck discovery", "Time-drain audits", "Clear ROI scoping"],
      accent: "from-blue-500/10 via-blue-500/5 to-transparent",
    },
    {
      title: "Practical AI Deployment",
      subtitle: "Reliable automation with predictable accuracy",
      desc: "We focus on pragmatic AI models engineered for deterministic data extraction, workflow routing, and validation — avoiding expensive, ungrounded experiments.",
      icon: Sparkles,
      highlights: ["Deterministic models", "99%+ extraction accuracy", "Continuous validation"],
      accent: "from-cyan-500/10 via-cyan-500/5 to-transparent",
    },
    {
      title: "Deep Data Expertise",
      subtitle: "Clean pipelines & reliable schemas at the core",
      desc: "Automation is only as good as the underlying data. We build robust schemas, validation gates, and API connectors that keep your data clean and reliable.",
      icon: Zap,
      highlights: ["Single source of truth", "Schema validation", "Automated ETL pipelines"],
      accent: "from-indigo-500/10 via-indigo-500/5 to-transparent",
    },
    {
      title: "Built For Your Exact Stack",
      subtitle: "Custom architecture aligned to your workflows",
      desc: "We engineer systems tailored to your specific tools and business workflows, avoiding bloated off-the-shelf software subscriptions you only half use.",
      icon: ShieldCheck,
      highlights: ["Zero bloated SaaS", "Custom API middleware", "Full ownership & control"],
      accent: "from-emerald-500/10 via-emerald-500/5 to-transparent",
    },
  ];

  return (
    <section className="relative bg-[#F8FAFC] py-24 md:py-32 text-slate-900 overflow-hidden border-t border-slate-200/60">
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-blue-700">
              <Sparkles size={13} className="text-blue-600" />
              <span>Why HASTAVA</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-slate-900">
              Technology built to make your business run easier, not more complex.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              We design software and automated systems that fit seamlessly into how your team actually works.
            </p>
          </Reveal>
        </div>

        {/* 2x2 Substantial Feature Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {WHY_FEATURES.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={index * 0.08}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 border border-blue-200/80 text-blue-600 shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <Icon size={26} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <div className="mt-0.5 text-xs font-semibold text-blue-600">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <p className="mt-6 text-sm sm:text-base leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
                  {item.highlights.map((hl) => (
                    <span
                      key={hl}
                      className="rounded-lg border border-slate-200/70 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
                    >
                      {hl}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
