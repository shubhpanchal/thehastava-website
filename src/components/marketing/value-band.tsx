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
    <div className="relative z-10 px-4 sm:px-6 lg:px-8">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border-2 border-blue-500/80 bg-white p-5 sm:p-6 md:p-7 shadow-[0_20px_50px_rgba(0,102,255,0.12)]">
          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {VALUE_ITEMS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex flex-col justify-between ${
                    index !== 0
                      ? "lg:border-l lg:border-slate-200/80 lg:pl-6"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 shadow-sm">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold tracking-tight text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
