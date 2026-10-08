"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/ui/reveal";

import { SERVICES_DATA } from "@/config/services";
import { ValueBand } from "./value-band";
import { ServiceMiniWorkflow } from "./workflows/service-mini-workflow";

export function ServicesSection() {
  const TECHNICAL_CUES: Record<string, { eyebrow: string; badge: string; steps: string[] }> = {
    "ai-automation": {
      eyebrow: "Operational Intelligence",
      badge: "Deterministic Rules",
      steps: ["Event Trigger", "AI Intent Scoring", "Validation Gate", "System Action"],
    },
    "data-analytics": {
      eyebrow: "Data Infrastructure",
      badge: "Single Source of Truth",
      steps: ["Multi-source Data", "Automated ETL", "Schema Normalization", "Executive Views"],
    },
    "document-intelligence": {
      eyebrow: "Unstructured Ingestion",
      badge: "99%+ Field Accuracy",
      steps: ["PDF / Email Intake", "LLM Entity Parser", "Business Rule Match", "ERP Sync"],
    },
    "business-systems": {
      eyebrow: "Unified Software",
      badge: "Bidirectional APIs",
      steps: ["Legacy Tool Stacks", "API Middleware", "Role-based Portal", "Automated Sync"],
    },
  };

  return (
    <section id="solutions" className="relative z-20 bg-[#F8FAFC] pt-10 sm:pt-12 md:pt-14 pb-16 md:pb-24 lg:pb-28 text-slate-900">
      {/* 02. Standalone Value / Proof Band with Hero separation */}
      <ValueBand />

      <Container className="relative z-10 pt-8 sm:pt-10 md:pt-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-blue-700">
              <Sparkles size={12} className="text-blue-600" />
              What We Do
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-slate-900">
              Practical AI & data systems engineered for reliable operations.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Start with one bottleneck. Automate it well. Then scale across your business.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>Explore All Capabilities</span>
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>

        {/* 2x2 Substantial Service Solution Cards */}
        <div className="mt-10 md:mt-12 grid gap-6 md:grid-cols-2">
          {SERVICES_DATA.map((service, index) => {
            const Icon = service.icon;
            const techCue = TECHNICAL_CUES[service.id];

            return (
              <Reveal
                key={service.id}
                delay={index * 0.08}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div>
                  {/* Top Row: Icon Badge + Category Eyebrow & Status Badge */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 border border-blue-200/80 text-blue-600 shadow-sm transition-transform duration-300 group-hover:scale-105">
                        <Icon size={28} strokeWidth={2} />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600">
                          {techCue.eyebrow}
                        </span>
                        <h3 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <span className="hidden sm:inline-flex rounded-full border border-blue-100 bg-blue-50/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700">
                      {techCue.badge}
                    </span>
                  </div>

                  {/* Service Description */}
                  <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  {/* Visual Technical Workflow Cue */}
                  <ServiceMiniWorkflow serviceId={service.id} />
                </div>

                {/* Bottom Card Footer: Tags & Action */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Capabilities Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-slate-200/70 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Direct Link */}
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 transition-all duration-200 group-hover:text-blue-700 group-hover:translate-x-1 shrink-0"
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
