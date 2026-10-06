"use client";

import React from "react";
import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#061326] via-[#091f3c] to-[#061326] py-24 text-white md:py-32 border-t border-white/10">
      {/* Background Decorative Tech Grid & Multi-Layered Glows */}
      <div className="hero-grid absolute inset-0 opacity-45 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-cyan-500/20 blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-blue-600/25 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <Reveal className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-300 backdrop-blur-md shadow-lg shadow-cyan-950/40">
              <Sparkles size={14} className="text-cyan-400" />
              <span>Start With One Process</span>
            </div>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white text-balance leading-tight">
              Have a process that feels unnecessarily manual?
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Tell us what you are doing today. We&apos;ll help identify whether and how it can be automated.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="shrink-0">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                href="/contact"
                size="lg"
                className="text-base px-8 py-4 font-bold shadow-xl shadow-blue-600/30"
                onClick={() => trackEvent("discovery_cta_clicked", { location: "final_cta_primary" })}
                icon={<ArrowRight size={18} />}
              >
                Book a Discovery Call
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="text-base px-6 py-4 font-semibold"
                onClick={() => trackEvent("discovery_cta_clicked", { location: "final_cta_secondary" })}
                icon={<MessageSquare size={16} />}
              >
                Discuss Your Workflow
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
