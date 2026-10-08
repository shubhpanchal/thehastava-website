import React from "react";
import type { Metadata } from "next";
import { ArrowRight, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Case Studies | HASTAVA",
  description: "Real work deserves real proof. Documented client outcomes and automated business workflows.",
};

export default function CaseStudiesPage() {
  return (
    <div className="overflow-x-hidden bg-white text-slate-900">
      {/* Hero Header */}
      <section className="relative overflow-hidden hero-luminous py-20 md:py-28 text-white border-b border-white/10">
        <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[550px] rounded-full bg-blue-500/20 blur-[140px] pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-300">
              <Sparkles size={13} className="text-cyan-400" />
              <span>Verified Outcomes</span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
              Real work deserves real proof.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-200">
              We&apos;re building a library of documented client outcomes. As projects move into production, we&apos;ll publish the problem, solution, and verified results here.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Coming Soon Notice Card */}
      <section className="relative bg-[#F8FAFC] py-20 md:py-28 text-slate-900 border-b border-slate-200/60">
        <Container className="max-w-4xl">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 md:p-12 shadow-xl shadow-slate-200/50 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 border border-blue-200/60 text-blue-600">
                <Clock size={28} />
              </div>

              <h2 className="mt-6 text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                Case studies are currently in preparation
              </h2>

              <p className="mt-4 max-w-xl mx-auto text-sm leading-relaxed text-slate-600">
                We believe in publishing honest, verified metrics rather than hypothetical claims. Production architectures and outcome telemetry will be published following milestone sign-offs.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 text-left max-w-lg mx-auto">
                <div className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/80 p-4">
                  <ShieldCheck size={18} className="text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-700">
                    Documented technical architectures & live telemetry
                  </p>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/80 p-4">
                  <Sparkles size={18} className="text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-700">
                    Real workflows across document parsing, data & systems
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  href="/contact"
                  size="lg"
                  className="font-semibold shadow-lg shadow-blue-600/25"
                  icon={<ArrowRight size={16} />}
                >
                  Talk to Hastava
                </Button>
                <Button
                  href="/#solutions"
                  variant="secondary"
                  size="lg"
                  className="font-semibold"
                >
                  Explore Capabilities
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}