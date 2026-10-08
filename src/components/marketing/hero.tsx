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
    <section className="relative overflow-hidden hero-luminous text-white pt-8 pb-12 md:pt-10 md:pb-14 lg:pt-12 lg:pb-16">
      {/* Layered Background System with Restrained Grid */}
      <div className="hero-grid absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
      
      {/* Soft Luminous Multi-Glows */}
      <div
        className="absolute top-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-blue-500/15 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-20 left-1/4 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 left-10 h-[450px] w-[450px] rounded-full bg-indigo-500/12 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-10 xl:gap-14">
          {/* Left Column: Messaging & CTAs */}
          <Reveal className="w-full min-w-0">
            {/* Pill Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-cyan-400/30 bg-cyan-950/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md shadow-lg shadow-cyan-950/50">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span>AI • DATA • AUTOMATION FOR BUSINESSES</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-balance text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl lg:text-5xl xl:text-[4.15rem] leading-[1.08]">
              Turn Manual Work{" "}
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Into Growth.
              </span>
            </h1>

            {/* Supporting Subtext */}
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg sm:leading-8">
              AI, data, and automation solutions that eliminate repetitive work, connect your systems, and help your business operate faster.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                href="/contact"
                size="lg"
                className="font-bold text-base px-8 py-4 shadow-xl shadow-blue-600/30"
                onClick={() => trackEvent("discovery_cta_clicked", { location: "hero_primary" })}
                icon={<ArrowRight size={18} />}
              >
                Book a Discovery Call
              </Button>
              <Button
                href="#solutions"
                variant="secondary"
                size="lg"
                className="font-semibold text-base px-6 py-4"
                icon={<ChevronRight size={18} />}
              >
                See What We Automate
              </Button>
            </div>

            {/* 3 Value Proof Points Info-Band */}
            <div className="mt-8 grid grid-cols-1 gap-3 border-t border-white/10 pt-6 sm:grid-cols-3 sm:gap-3.5">
              {PROOF_POINTS.map((point) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.title}
                    className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 sm:p-4 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.08]"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-cyan-300 transition-colors group-hover:bg-cyan-400/20">
                        <Icon size={16} />
                      </div>
                      <div className="min-w-0">
                        <h2 className="text-xs font-bold text-white tracking-tight leading-snug">
                          {point.title}
                        </h2>
                      </div>
                    </div>
                    <p className="mt-2 text-[11px] leading-relaxed text-slate-300">
                      {point.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Right Column: Hero Workflow Visual */}
          <div className="w-full min-w-0 lg:pt-1">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
