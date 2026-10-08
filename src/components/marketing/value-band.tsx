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
    <section className="relative z-20 -mt-10 md:-mt-12 px-4 sm:px-6 lg:px-8">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-7 md:p-9 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {VALUE_ITEMS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex flex-col justify-between ${
                    index !== 0
                      ? "lg:border-l lg:border-slate-200/80 lg:pl-8"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 shadow-sm">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-bold tracking-tight text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">
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
