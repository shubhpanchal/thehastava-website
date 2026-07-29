import React from "react";
import Image from "next/image";
import { Container } from "@/components/shared/container";
import { IMAGE_MANIFEST } from "@/config/images";

export const metadata = {
  title: "How It Works | HASTAVA B2B Sourcing Process",
  description: "An in-depth look at HASTAVA's structured five-step sourcing workflow: from custom inquiries and sampling to strict production audits and sea/air cargo delivery.",
};

const DETAILED_STEPS = [
  {
    phase: "01",
    title: "Detailed Requirement Mapping",
    description: "Submit your design requests, dimensional specifications, wood/fabric preference, target unit pricing, and quantity targets. Our sourcing team evaluates the feasibility within our artisan network and provides initial ballpark quotes within 72 hours.",
  },
  {
    phase: "02",
    title: "Artisan Match & Sampling",
    description: "We match your project with the best-suited certified master craftsmen. We supervise the handcrafting of counter-samples, inspect them for accuracy, and ship them to your international headquarters for final material, color, and finish approval.",
  },
  {
    phase: "03",
    title: "Quality Assurance & Production",
    description: "Once the sample is approved, raw material sourcing begins. We establish a production schedule and perform on-site audits at the workshops (checking moisture content in wood, warp tension in looms, and paint safety) during middle and final phases.",
  },
  {
    phase: "04",
    title: "Custom Packaging & Consolidation",
    description: "Handicrafts are fragile. We supervise premium packaging (re-enforced corner protectors, custom styrofoam contours, humidity absorbents, and drop-tested double-wall cartons). We consolidate items from multiple craft clusters into a single shipment.",
  },
  {
    phase: "05",
    title: "Export Compliance & Logistics",
    description: "We handle all Indian export clearances, custom document preparation (Fumigation Certificates, Certificates of Origin), ocean/air container booking, port handling, and custom house brokerage, delivering directly to your distribution center.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-ivory py-16 sm:py-24">
      {/* Page Header */}
      <Container className="max-w-4xl text-center flex flex-col gap-4 mb-16 sm:mb-20">
        <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold">
          Operational Workflow
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-navy leading-[1.1] tracking-tight">
          Our Sourcing Journey
        </h1>
        <div className="h-0.5 w-16 bg-gold/50 mx-auto mt-2" />
        <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed max-w-xl mx-auto mt-2">
          From first sketch to port delivery, we provide an structured B2B sourcing process designed for scale and security.
        </p>
      </Container>

      {/* Detailed Steps Loop */}
      <Container className="max-w-3xl flex flex-col gap-12 sm:gap-16 mb-20">
        {DETAILED_STEPS.map((step) => (
          <div key={step.phase} className="flex gap-6 sm:gap-10 border-l border-gold/30 pl-6 sm:pl-10 relative">
            {/* Phase Badge Bullet */}
            <div className="absolute -left-[11px] top-0 flex items-center justify-center w-5 h-5 rounded-full bg-gold border-4 border-ivory" />
            
            <div className="flex flex-col gap-3">
              <span className="font-serif text-2xl text-gold font-bold leading-none">
                Phase {step.phase}
              </span>
              <h2 className="font-serif text-xl sm:text-2xl text-navy font-semibold">
                {step.title}
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </Container>

      {/* Logistics Backdrop Image Card */}
      <Container className="max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-navy text-ivory rounded-sm p-8 sm:p-12 shadow-luxury">
        <div className="lg:col-span-7 flex flex-col gap-4">
          <span className="font-sans text-[0.65rem] uppercase tracking-wider text-gold font-bold">
            Logistics Excellence
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-normal leading-tight text-white">
            Worry-Free Freight Handling
          </h3>
          <p className="font-sans text-xs sm:text-sm text-ivory/80 leading-relaxed">
            We operate in partnership with top international freight forwarders, supporting both LCL (Less than Container Load) and FCL (Full Container Load) sea cargo, as well as air freight for time-sensitive luxury collections.
          </p>
        </div>
        <div className="lg:col-span-5 relative aspect-video rounded-xs overflow-hidden border border-navy-light/30 bg-navy-light/20">
          <Image
            src={IMAGE_MANIFEST.cargoShipping.src}
            alt={IMAGE_MANIFEST.cargoShipping.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 30vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
      </Container>
    </div>
  );
}
