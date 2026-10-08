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
    <div className="overflow-x-hidden bg-white text-slate-900">
      {/* Hero Header (Compact Luminous Dark Hero) */}
      <section className="relative overflow-hidden hero-luminous text-white pt-10 pb-12 md:pt-14 md:pb-16 border-b border-white/10">
        <div className="hero-grid absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[500px] rounded-full bg-blue-500/15 blur-[120px] pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-300">
              <Sparkles size={13} className="text-cyan-400" />
              <span>Practical Discovery Session</span>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white text-balance">
              Have a process that feels unnecessarily manual?
            </h1>
            <p className="mt-3 text-base leading-relaxed text-slate-300 sm:text-lg">
              Tell us what happens today. We will help you understand the business problem and evaluate where custom automation creates the highest return.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Main Content: 4-Step Process & Production Contact Form (Light Surface) */}
      <section className="relative bg-[#F8FAFC] pt-8 pb-14 md:pt-10 md:pb-18 lg:pb-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Left Column: 4-Step Discovery Blueprint & Direct Info */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal>
                <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm">
                  <div className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    What to Expect
                  </div>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                    Our 4-Step Discovery Framework
                  </h2>
                  <p className="mt-2 text-xs text-slate-600">
                    A focused, practical 20-minute conversation centered on your operational reality.
                  </p>

                  <div className="mt-8 space-y-5">
                    {DISCOVERY_STEPS.map((step) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.num} className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-xs font-black text-blue-600">
                            {step.num}
                          </div>
                          <div>
                            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                              <span>{step.title}</span>
                              <Icon size={13} className="text-blue-600" />
                            </h3>
                            <p className="mt-1 text-xs leading-relaxed text-slate-600">
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
                  <div className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-4.5 shadow-sm">
                    <Clock size={18} className="text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Fast Response</div>
                      <p className="mt-1 text-[11px] text-slate-600">
                        Direct engineer reply within 24 business hours.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-4.5 shadow-sm">
                    <ShieldCheck size={18} className="text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">No Obligation</div>
                      <p className="mt-1 text-[11px] text-slate-600">
                        Honest feasibility & architectural guidance.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Direct Reach Information */}
              <Reveal delay={0.15}>
                <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm text-sm text-slate-600 space-y-3.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Direct Contact
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-blue-600 shrink-0" />
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="transition-colors hover:text-blue-600 text-slate-900 font-medium text-xs sm:text-sm"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-blue-600 shrink-0" />
                    <a
                      href={`tel:${siteConfig.phoneClean}`}
                      className="transition-colors hover:text-blue-600 text-slate-900 font-medium text-xs sm:text-sm"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-blue-600 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-700">{siteConfig.address.full}</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Elevated Production Contact Form Card */}
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