import React from "react";
import { Container } from "../shared/container";

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

const QUALITY_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Artisan Selection",
    subtitle: "Cooperative Verification",
    description: "We audit and select registered master craftsmen and weaver clusters, ensuring genuine heritage, child-free spaces, and fair trade compensation.",
  },
  {
    number: "02",
    title: "Material Verification",
    subtitle: "Raw Material Audits",
    description: "Inspect wood moisture content (below 12%), clay glaze chemical safety, base metals, and yarn fiber purity before production begins.",
  },
  {
    number: "03",
    title: "Production Monitoring",
    subtitle: "On-Site Supervision",
    description: "Our local quality controllers conduct weekly audits at the workshops to monitor design accuracy, dimensional variance, and safety parameters.",
  },
  {
    number: "04",
    title: "Quality Inspection",
    subtitle: "Pre-Shipment Inspections",
    description: "A final 100% inspection is performed on finished lots. We verify shapes, weights, color finishes, and compatibility with third-party testing.",
  },
  {
    number: "05",
    title: "Custom Packaging",
    subtitle: "Transit Safety Prep",
    description: "Delicate crafts are packed using double-walled corrugated cartons, drop-tested protective contours, and silica gel moisture absorbents.",
  },
  {
    number: "06",
    title: "Export Documentation",
    subtitle: "Customs Compliance ready",
    description: "Manage official certificates: Fumigation (ISPM 15 standards), Phytosanitary clearances, Certificates of Origin, and correct HS codes.",
  },
  {
    number: "07",
    title: "Global Shipping",
    subtitle: "Freight Consolidation",
    description: "Deliver via insured FCL/LCL ocean freight or priority air forwarding, consolidated cleanly into single customs shipments.",
  },
];

export function QualityProcess() {
  return (
    <section className="bg-ivory py-24 lg:py-32 border-t border-ivory-dark/45">
      <Container className="flex flex-col gap-12 sm:gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
          <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Strict Sourcing Standards
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-navy">
            Our Quality Assurance Workflow
          </h2>
          <div className="h-0.5 w-12 bg-gold/50 mt-1" />
          <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed max-w-xl mx-auto mt-2">
            Every collection undergoes our structured 7-step inspection and logistics pipeline to ensure premium quality.
          </p>
        </div>

        {/* Process Steps Layout */}
        <div className="relative">
          {/* Connecting Line - Desktop Only */}
          <div 
            className="hidden xl:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-dashed border-t border-dashed border-gold/30 z-0" 
            aria-hidden="true" 
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 gap-8 xl:gap-4 relative z-10">
            {QUALITY_STEPS.map((step, idx) => (
              <div key={step.number} className="flex flex-col items-start xl:items-center text-left xl:text-center group">
                
                {/* Step Circle Marker */}
                <div className="flex items-center gap-4 xl:flex-col xl:gap-3 mb-3">
                  <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-ivory-light border border-ivory-dark text-gold font-serif text-lg font-medium shadow-premium z-10 transition-transform duration-300 group-hover:scale-105">
                    {step.number}
                  </div>
                  
                  {/* Arrow Indicator on Desktop (excluding last item) */}
                  {idx < QUALITY_STEPS.length - 1 && (
                    <div 
                      className="hidden xl:block absolute top-6 -right-[50%] w-full h-[1px]" 
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Step Description content */}
                <div className="flex flex-col gap-1 pl-4 md:pl-0">
                  <h3 className="font-serif text-sm font-semibold text-navy mt-1 tracking-wide">
                    {step.title}
                  </h3>
                  <span className="font-sans text-[0.6rem] uppercase tracking-widest text-gold font-bold">
                    {step.subtitle}
                  </span>
                  <p className="font-sans text-[0.7rem] text-slate-muted leading-relaxed max-w-xs mt-2 xl:mx-auto">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
