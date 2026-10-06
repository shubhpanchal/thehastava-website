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
    <div className="overflow-x-hidden bg-[#061326] text-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-24 md:py-32 border-b border-white/5">
        <div className="hero-grid absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[550px] rounded-full bg-blue-600/15 blur-[140px] pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-300">
              <Sparkles size={13} className="text-cyan-400" />
              <span>About HASTAVA</span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
              We build systems that remove manual work.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              HASTAVA helps modern organizations convert repetitive manual processes into reliable AI, data pipelines, and automated business software.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Main Philosophy & Principles */}
      <section className="relative py-20 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  Our Engineering Approach
                </span>
                <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                  Start with the business bottleneck. Then engineer the solution.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  Rather than pushing generic SaaS tools or lengthy transformation consulting, we identify high-value manual time drains, build a targeted system, integrate it with your tools, and refine it as your operations grow.
                </p>

                <div className="mt-8 rounded-2xl border border-white/10 bg-[#081830]/80 p-6 backdrop-blur-xl">
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    Founder & Technical Direction
                  </div>
                  <div className="mt-2 text-lg font-bold text-white">
                    {siteConfig.founderName}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    Focused on business automation, data engineering, document intelligence, and unified operating software.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
              {PRINCIPLES.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <Reveal
                    key={principle.title}
                    delay={index * 0.08}
                    className="rounded-2xl border border-white/10 bg-[#081830]/80 p-6 backdrop-blur-xl"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-300">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-white">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#061326] via-[#091f3c] to-[#061326] py-20 text-white border-t border-white/10">
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