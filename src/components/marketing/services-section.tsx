"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/ui/reveal";

import { SERVICES_DATA } from "@/config/services";

export function ServicesSection() {
  return (
    <section id="solutions" className="relative bg-slate-900 py-24 md:py-32 text-white overflow-hidden border-t border-white/5">
      {/* Subtle Background Glows */}
      <div
        className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
              <Sparkles size={12} className="text-cyan-300" />
              What We Do
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
              Practical AI & data systems engineered for reliable operations.
            </h2>
            <p className="mt-4 text-base text-slate-300">
              Start with one bottleneck. Automate it well. Then scale across your business.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-300 hover:text-cyan-200 transition-colors"
            >
              <span>Explore All Capabilities</span>
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>

        {/* 4 Pillar Service Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES_DATA.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal
                key={service.id}
                delay={index * 0.08}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#081830]/80 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)]"
              >
                {/* Radial Glow Highlight on Hover */}
                <div
                  className={`absolute -top-16 -right-16 h-36 w-36 rounded-full bg-gradient-to-br ${service.gradientGlow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Large Icon Badge */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/20 border border-white/15 text-cyan-300 shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:border-cyan-400/40">
                    <Icon size={26} strokeWidth={2} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-6 text-xl font-bold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {service.description}
                  </p>
                </div>

                <div className="relative z-10 mt-8 pt-5 border-t border-white/10">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/5 bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 transition-all duration-200 group-hover:text-cyan-300 group-hover:translate-x-1"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
