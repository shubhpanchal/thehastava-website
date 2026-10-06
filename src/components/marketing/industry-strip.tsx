"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Factory,
  Building2,
  Truck,
  Stethoscope,
  ShoppingBag,
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/ui/reveal";

const INDUSTRIES = [
  { name: "Manufacturing", icon: Factory, desc: "Supply chain & batch tracking" },
  { name: "Real Estate", icon: Building2, desc: "Lease ops & tenant workflows" },
  { name: "Logistics", icon: Truck, desc: "Dispatch routing & consignment tracking" },
  { name: "Healthcare", icon: Stethoscope, desc: "Patient intake & document triage" },
  { name: "Retail & E-commerce", icon: ShoppingBag, desc: "Inventory sync & order routing" },
  { name: "Professional Services", icon: Briefcase, desc: "Client onboarding & billing sync" },
  { name: "Education", icon: GraduationCap, desc: "Admissions & records processing" },
  { name: "And More", icon: Sparkles, desc: "Custom business-critical workflows" },
];

export function IndustryStrip() {
  return (
    <section className="relative bg-slate-900/60 py-16 border-y border-white/5 text-white">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Cross-Industry Automation Capability
            </span>
            <p className="mt-2 text-sm text-slate-300 max-w-xl">
              Engineered to resolve operational bottlenecks across diverse industry domains.
            </p>
          </Reveal>
        </div>

        {/* Industry Interactive Pills Grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {INDUSTRIES.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-sm transition-colors hover:border-cyan-400/50 hover:bg-cyan-950/20 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-cyan-300 transition-colors group-hover:bg-cyan-400/20 group-hover:text-cyan-200">
                  <Icon size={20} />
                </div>
                <h3 className="mt-3 text-xs font-bold text-white tracking-tight">
                  {ind.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
