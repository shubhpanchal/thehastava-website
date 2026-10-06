"use client";

import React from "react";
import {
  ArrowRight,
  ChevronRight,
  Zap,
  Layers,
  Clock,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import { HeroVisual } from "./hero-visual";

const PROOF_POINTS = [
  {
    icon: Zap,
    title: "Automate repetitive work",
    desc: "Eliminate manual data entry & copy-paste",
  },
  {
    icon: Layers,
    title: "Reduce operational friction",
    desc: "Seamlessly connect disparate tools & silos",
  },
  {
    icon: Clock,
    title: "Give teams time back",
    desc: "Focus staff on high-value growth initiatives",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#061326] text-white pt-10 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32">
      {/* Layered Background System */}
      <div className="hero-grid absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
      
      {/* Radial Multi-Glows */}
      <div
        className="absolute top-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-20 left-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 left-10 h-[450px] w-[450px] rounded-full bg-indigo-600/15 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left Column: Messaging & CTAs */}
          <Reveal className="max-w-2xl">
            {/* Pill Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md shadow-lg shadow-cyan-950/50">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span>AI • DATA • AUTOMATION FOR BUSINESSES</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-balance text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl lg:text-[4.25rem] lg:leading-[1.06]">
              Turn Manual Work{" "}
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Into Growth.
              </span>
            </h1>

            {/* Supporting Subtext */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-8">
              AI, data, and automation solutions that eliminate repetitive work, connect your systems, and help your business operate faster.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                href="/contact"
                size="lg"
                className="font-semibold shadow-lg shadow-blue-600/25"
                onClick={() => trackEvent("discovery_cta_clicked", { location: "hero_primary" })}
                icon={<ArrowRight size={16} />}
              >
                Book a Discovery Call
              </Button>
              <Button
                href="#solutions"
                variant="secondary"
                size="lg"
                className="font-semibold"
                icon={<ChevronRight size={16} />}
              >
                See What We Automate
              </Button>
            </div>

            {/* 3 Value Proof Points Info-Band */}
            <div className="mt-12 grid grid-cols-1 gap-3 border-t border-white/10 pt-8 sm:grid-cols-3 sm:gap-4">
              {PROOF_POINTS.map((point) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.title}
                    className="group relative rounded-xl border border-white/10 bg-white/[0.03] p-3.5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.06]"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-cyan-400 transition-colors group-hover:bg-cyan-400/20">
                        <Icon size={16} />
                      </div>
                      <div className="min-w-0">
                        <h2 className="text-xs font-bold text-white tracking-tight leading-snug">
                          {point.title}
                        </h2>
                      </div>
                    </div>
                    <p className="mt-2 text-[11px] leading-relaxed text-slate-400">
                      {point.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Right Column: Hero Workflow Visual */}
          <div className="w-full">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
