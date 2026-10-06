"use client";

import React from "react";
import { ShieldCheck, Cpu, Layers, Sparkles } from "lucide-react";
import { Container } from "@/components/shared/container";

const VALUE_ITEMS = [
  {
    icon: ShieldCheck,
    title: "Built for modern businesses",
    desc: "Engineered around your actual workflows and operational realities",
  },
  {
    icon: Sparkles,
    title: "From idea to automation",
    desc: "Rapid scoping, reliable prototypes, and clear execution paths",
  },
  {
    icon: Layers,
    title: "Practical and scalable solutions",
    desc: "Clean architecture that grows with your business complexity",
  },
  {
    icon: Cpu,
    title: "End-to-end support",
    desc: "Full pipeline design, production integration, and team onboarding",
  },
];

export function ValueBand() {
  return (
    <section className="relative z-20 -mt-8 px-4 sm:px-6 lg:px-8">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#091a33]/90 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8">
          {/* Subtle Accent Glow */}
          <div
            className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-2xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-blue-500/10 blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {VALUE_ITEMS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex flex-col justify-between ${
                    index !== 0
                      ? "lg:border-l lg:border-white/10 lg:pl-6"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-sm font-bold tracking-tight text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-300">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
