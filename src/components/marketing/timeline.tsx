import React from "react";
import { Container } from "../shared/container";
import { Step } from "../ui/step";

interface SourcingStep {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const STEPS: SourcingStep[] = [
  {
    number: 1,
    title: "Share Your Requirement",
    description: "Tell us what you need. We understand your custom product specs, quantity, quality parameters, and timeline.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5A3.375 3.375 0 0 0 10.125 2.25H3.75A2.25 2.25 0 0 0 1.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25h16.5A2.25 2.25 0 0 0 21.75 19.5V16.5A2.25 2.25 0 0 0 19.5 14.25Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12.75h12m-12 3h12m-12-6h12" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "We Find the Right Artisans",
    description: "We map your request to the best historical artisan clusters and shortlisted regional manufacturers.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A9.342 9.342 0 0 1 11.885 20c-1.423 0-2.774-.317-3.99-.882s-2.254-1.395-3.033-2.404a4.125 4.125 0 0 1 7.532-2.492c.501.91.786 1.957.786 3.07v.003Zm0-12.256a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM18.75 7.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM4.5 19.128a9.38 9.38 0 0 1 2.625-.372 9.337 9.337 0 0 1 4.121.952 4.125 4.125 0 0 1-7.533-2.493M3.75 7.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Sampling & Verification",
    description: "Bespoke samples are developed by master craftsmen and verified against your quality guidelines before mass production.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "Production Coordination",
    description: "We oversee active workshops, coordinate timelines, and perform mid-term quality audits on-site.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.68-.15-1.38-.2-2.09-.15a8.003 8.003 0 0 0-4.7 3.03M13.66 15.84c.68-.15 1.38-.2 2.09-.15a8.003 8.003 0 0 1 4.7 3.03M16 9.75a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM11.25 15.75H12.75V21H11.25V15.75Z" />
      </svg>
    ),
  },
  {
    number: 5,
    title: "Export & Delivery",
    description: "We handle international packaging standards, ocean/air cargo booking, customs documentation, and door delivery.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
      </svg>
    ),
  },
];

export function Timeline() {
  return (
    <section className="bg-ivory py-24 lg:py-32 overflow-hidden">
      <Container className="flex flex-col gap-12 sm:gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
          <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
            How It Works
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-navy">
            Simple Process. Seamless Experience.
          </h2>
          <div className="h-0.5 w-12 bg-gold/50 mt-1" />
        </div>

        {/* Timeline Steps Layout */}
        <div className="relative">
          
          {/* Desktop Horizontal Connecting Line */}
          <div
            className="hidden md:block absolute top-7 left-10 right-10 h-0.5 border-t border-dashed border-gold/30 z-0"
            aria-hidden="true"
          />

          {/* Mobile Vertical Connecting Line */}
          <div
            className="md:hidden absolute top-7 bottom-7 left-[1.75rem] w-0.5 border-l border-dashed border-gold/30 z-0"
            aria-hidden="true"
          />

          {/* Steps Grid */}
          <ol className="flex flex-col md:flex-row gap-10 md:gap-6 justify-between">
            {STEPS.map((step) => (
              <Step
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                className="flex-1"
              />
            ))}
          </ol>

        </div>

      </Container>
    </section>
  );
}
