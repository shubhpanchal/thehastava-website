import React from "react";
import type { Metadata } from "next";
import { ArrowRight, Sparkles, Compass, ShieldCheck, Database } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About HASTAVA | AI, Data & Automation Engineering",
  description:
    "Learn about HASTAVA's mission to eliminate manual business bottlenecks through practical AI models, robust data engineering, and custom automation.",
};

const PRINCIPLES = [
  {
    icon: Compass,
    title: "Problem-first mindset",
    desc: "We prioritize understanding your team's operational friction over technology hype.",
  },
  {
    icon: Sparkles,
    title: "Pragmatic AI deployment",
    desc: "We implement deterministic AI solutions that perform real work with measurable accuracy.",
  },
  {
    icon: Database,
    title: "Clean data infrastructure",
    desc: "We engineer single sources of truth, robust schemas, and reliable automated pipelines.",
  },
  {
    icon: ShieldCheck,
    title: "Engineered for your stack",
    desc: "We build custom systems designed around your existing software and operational constraints.",
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden bg-white text-slate-900">
      {/* Hero Header */}
      <section className="relative overflow-hidden hero-luminous pt-12 pb-14 md:pt-16 md:pb-20 text-white border-b border-white/10">
        <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[550px] rounded-full bg-blue-500/20 blur-[140px] pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-300">
              <Sparkles size={13} className="text-cyan-400" />
              <span>About HASTAVA</span>
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
              We build systems that remove manual work.
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-200">
              HASTAVA helps modern organizations convert repetitive manual processes into reliable AI, data pipelines, and automated business software.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Main Philosophy & Principles */}
      <section className="relative bg-[#F8FAFC] py-14 md:py-20 text-slate-900 border-b border-slate-200/60">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  Our Engineering Approach
                </span>
                <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
                  Start with the business bottleneck. Then engineer the solution.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Rather than pushing generic SaaS tools or lengthy transformation consulting, we identify high-value manual time drains, build a targeted system, integrate it with your tools, and refine it as your operations grow.
                </p>

                <div className="mt-8 rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Founder & Technical Direction
                  </div>
                  <div className="mt-2 text-xl font-bold text-slate-900">
                    {siteConfig.founderName}
                  </div>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                    Focused on business automation, data engineering, document intelligence, and unified operating software.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
              {PRINCIPLES.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <Reveal
                    key={principle.title}
                    delay={index * 0.08}
                    className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm transition-all hover:border-blue-400 hover:shadow-xl hover:shadow-slate-200/50"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 border border-blue-200/80 text-blue-600 shadow-2xs">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {principle.desc}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#08172B] via-[#0B1F38] to-[#12345A] py-20 text-white border-t border-white/10">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Have a process you want to discuss?
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Schedule a practical 20-minute discovery call with our engineering team.
            </p>
          </div>
          <Button href="/contact" size="lg" className="shrink-0 font-bold" icon={<ArrowRight size={16} />}>
            Book a Discovery Call
          </Button>
        </Container>
      </section>
    </div>
  );
}