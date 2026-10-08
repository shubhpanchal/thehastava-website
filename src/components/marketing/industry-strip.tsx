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
    <section className="relative bg-white py-12 md:py-16 border-t border-slate-200/60 text-slate-900">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Cross-Industry Automation Capability
            </span>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Engineered to resolve complex operational bottlenecks across diverse business environments.
            </p>
          </Reveal>
        </div>

        {/* Industry Interactive Cards Grid */}
        <div className="mt-8 md:mt-10 grid grid-cols-2 gap-3.5 sm:grid-cols-4 lg:grid-cols-8">
          {INDUSTRIES.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group flex flex-col items-center justify-between rounded-2xl border border-slate-200/90 bg-slate-50/80 p-5 text-center transition-all hover:border-blue-400 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 transition-colors group-hover:bg-blue-100 group-hover:text-blue-700 shadow-2xs">
                  <Icon size={22} />
                </div>
                <div className="mt-4">
                  <h3 className="text-xs font-bold text-slate-900 tracking-tight leading-snug">
                    {ind.name}
                  </h3>
                  <p className="mt-1 text-[10px] text-slate-500 leading-tight">
                    {ind.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
