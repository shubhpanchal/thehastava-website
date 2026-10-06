import React from "react";
import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Search,
  Target,
  Sliders,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Book a Discovery Call | HASTAVA",
  description:
    "Have a process that feels unnecessarily manual? Tell us what you are doing today. We'll help identify whether and how it can be automated.",
};

const DISCOVERY_STEPS = [
  {
    num: "01",
    title: "Understand",
    desc: "We map your current manual workflows, data inputs, and team handoffs.",
    icon: Search,
  },
  {
    num: "02",
    title: "Identify",
    desc: "We pinpoint high-friction bottlenecks and error-prone busywork.",
    icon: Target,
  },
  {
    num: "03",
    title: "Prioritize",
    desc: "We evaluate automation feasibility, implementation speed, and ROI.",
    icon: Sliders,
  },
  {
    num: "04",
    title: "Recommend",
    desc: "We deliver a concrete technical architecture and clear next steps.",
    icon: CheckCircle2,
  },
];

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden bg-[#061326] text-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-20 md:py-28 border-b border-white/5">
        <div className="hero-grid absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[550px] rounded-full bg-blue-600/15 blur-[140px] pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-300">
              <Sparkles size={13} className="text-cyan-400" />
              <span>Practical Discovery Session</span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white text-balance">
              Have a process that feels unnecessarily manual?
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Tell us what happens today. We will help you understand the business problem and evaluate where custom automation creates the highest return.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Main Content: 4-Step Process & Production Contact Form */}
      <section className="relative py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Left Column: 4-Step Discovery Blueprint & Direct Info */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal>
                <div className="rounded-3xl border border-white/10 bg-[#081830]/80 p-6 sm:p-8 backdrop-blur-xl">
                  <div className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                    What to Expect
                  </div>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
                    Our 4-Step Discovery Framework
                  </h2>
                  <p className="mt-2 text-xs text-slate-300">
                    A focused, practical 20-minute conversation centered on your operational reality.
                  </p>

                  <div className="mt-8 space-y-5">
                    {DISCOVERY_STEPS.map((step) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.num} className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-xs font-black text-cyan-300">
                            {step.num}
                          </div>
                          <div>
                            <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                              <span>{step.title}</span>
                              <Icon size={13} className="text-cyan-400" />
                            </h3>
                            <p className="mt-1 text-xs leading-relaxed text-slate-300">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>

              {/* Guarantees & Response Time */}
              <Reveal delay={0.1}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4.5 backdrop-blur-sm">
                    <Clock size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">Fast Response</div>
                      <p className="mt-1 text-[11px] text-slate-400">
                        Direct engineer reply within 24 business hours.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4.5 backdrop-blur-sm">
                    <ShieldCheck size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">No Obligation</div>
                      <p className="mt-1 text-[11px] text-slate-400">
                        Honest feasibility & architectural guidance.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Direct Reach Information */}
              <Reveal delay={0.15}>
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6 text-sm text-slate-300 space-y-3.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Direct Contact
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-cyan-400 shrink-0" />
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="transition-colors hover:text-cyan-300 text-white font-medium text-xs sm:text-sm"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-cyan-400 shrink-0" />
                    <a
                      href={`tel:${siteConfig.phoneClean}`}
                      className="transition-colors hover:text-cyan-300 text-white font-medium text-xs sm:text-sm"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-cyan-400 shrink-0" />
                    <span className="text-xs sm:text-sm">{siteConfig.address.full}</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Production Contact Form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}