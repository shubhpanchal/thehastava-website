import React from "react";
import { Container } from "../shared/container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FEATURE_ITEMS: FeatureItem[] = [
  {
    title: "Extensive Artisan Network",
    description: "Direct access to over 100+ rural craft clusters, cooperative societies, and master weavers across the Indian subcontinent.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-8 h-8 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m0 0a8.947 8.947 0 0 1-3.741-.479 3 3 0 0 1 4.682-2.72m-4.682 2.72.001.031c0 .225.012.447.037.666A11.944 11.944 0 0 0 12 21c2.17 0 4.207-.576 5.963-1.584A6.06 6.06 0 0 0 18 18.722m-12 0V18a2.998 2.998 0 0 1 2.998-2.998h6.004A2.997 2.997 0 0 1 18 18v.722m-12 0a9 9 0 0 0 12 0M9 10.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />
      </svg>
    ),
  },
  {
    title: "GI Certified & Authentic",
    description: "Every item is tagged with certified Geographical Indication labels, preserving heritage and guaranteeing origin pedigree.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-8 h-8 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
  {
    title: "Quality Assured",
    description: "Strict quality control inspections from raw material sourcing, craft carving/weaving, up to international packaging standards.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-8 h-8 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: "Custom Private Label",
    description: "Design collaboration, bespoke branding, tailored tags, and premium product packaging unique to your enterprise catalog.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-8 h-8 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-2.22 1.124l-3.13 3.755a1.125 1.125 0 0 0 1.719 1.442l3.13-3.755a3 3 0 0 0 .618-1.72v-1.748Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.727 11.636 18.75 5.613a2.204 2.204 0 0 1 3.118 3.118l-6.023 6.023a2.204 2.204 0 0 1-3.118-3.118Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.773 13.682 17.5 16.409a2.204 2.204 0 0 1-3.118 3.118l-2.727-2.727a2.204 2.204 0 0 1 3.118-3.118Z" />
      </svg>
    ),
  },
  {
    title: "Export & Logistics Support",
    description: "End-to-end management of import/export customs clearance, certificate of origin paperwork, and cargo consolidation.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-8 h-8 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5A3.375 3.375 0 0 0 10.125 2.25H3.75A2.25 2.25 0 0 0 1.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25h16.5A2.25 2.25 0 0 0 21.75 19.5V16.5A2.25 2.25 0 0 0 19.5 14.25Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 13.5 2.25 2.25 5.25-5.25" />
      </svg>
    ),
  },
  {
    title: "Reliable Global Shipping",
    description: "Consolidated freight shipping options via air and ocean, backed by fully insured, door-to-door tracking protocols.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-8 h-8 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section className="bg-ivory pt-0 pb-24 lg:pb-32">
      <Container className="flex flex-col gap-12 sm:gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
          <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Our Sourcing Pillars
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-navy">
            Sourced with Integrity. <br />
            Delivered with Pride.
          </h2>
          <div className="h-0.5 w-12 bg-gold/50 mt-1" />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURE_ITEMS.map((item) => (
            <Card key={item.title} variant="bordered" hoverable={true} className="h-full">
              <CardHeader className="gap-3">
                <div className="mb-1 flex items-center justify-start">
                  {item.icon}
                </div>
                <CardTitle className="text-lg text-navy font-serif">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-muted text-xs leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

      </Container>
    </section>
  );
}
