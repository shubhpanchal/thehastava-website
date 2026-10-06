import React from "react";
import type { Metadata } from "next";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { SERVICES_DATA } from "@/config/services";

export const metadata: Metadata = {
  title: "Services & Capabilities | HASTAVA",
  description: "Explore HASTAVA's core capabilities in AI automation, data & analytics, document intelligence, and business systems.",
};

export default function ServicesPage() {
  return (
    <div className="overflow-x-hidden bg-[#061326] text-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-24 md:py-32 border-b border-white/5">
        <div className="hero-grid absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[550px] rounded-full bg-blue-600/15 blur-[140px] pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-300">
              <Sparkles size={13} className="text-cyan-400" />
              <span>Core Capabilities</span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
              Practical AI and data solutions for modern businesses.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              We design, build, and deploy custom automation infrastructure that eliminates manual busywork, integrates your tools, and scales with your team.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 md:py-28">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {SERVICES_DATA.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal
                  key={service.id}
                  delay={index * 0.08}
                  className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#081830]/85 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_20px_50px_rgba(6,182,212,0.12)]"
                >
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 shadow-sm transition-transform group-hover:scale-105">
                      <Icon size={26} />
                    </div>

                    <h2 className="mt-6 text-2xl font-bold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {service.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <Button href="/contact" size="sm" className="font-semibold">
                      Discuss This Solution
                    </Button>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#061326] via-[#091f3c] to-[#061326] py-20 text-white border-t border-white/10">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Ready to automate a manual business workflow?
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Schedule a 30-minute discovery call to map out high-impact opportunities.
            </p>
          </div>
          <Button href="/contact" size="lg" className="shrink-0 font-bold" icon={<ArrowRight size={16} />}>
            Book a Discovery Call
          </Button>
        </Container>
      </section>
    </div>
  );
}
