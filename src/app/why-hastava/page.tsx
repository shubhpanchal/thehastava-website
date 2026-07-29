import React from "react";
import Image from "next/image";
import { Container } from "@/components/shared/container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { IMAGE_MANIFEST } from "@/config/images";

export const metadata = {
  title: "Why Hastava | Premium B2B Handicraft Sourcing",
  description: "Discover why international wholesalers, designers, and retailers trust HASTAVA as their primary Indian sourcing agency. Quality auditing, packaging excellence, and compliance.",
};

const STRATEGIC_ADVANTAGES = [
  {
    title: "On-Site Quality Assurance",
    description: "Unlike traditional trading agents, our internal quality controllers physically visit the artisan workshops at multiple stages of production, checking moisture parameters, wood finishes, weave patterns, and paint composition.",
  },
  {
    title: "Fragile Packaging Standards",
    description: "Handcrafted products are delicate. We enforce packing rules: reinforced edge protectors, customized interior cardboard dividers, moisture-absorbing silica packets, and double-wall heavy corrugated outer cartons.",
  },
  {
    title: "Consolidated Shipping Options",
    description: "Source across multiple regions (e.g. ceramics from Jaipur, woodwork from Saharanpur, brassware from Moradabad) and have them consolidated into a single export container, drastically reducing ocean freight and brokerage fees.",
  },
  {
    title: "Fair-Trade & Social Auditing",
    description: "We are committed to ethical production. We verify that all partner workshops pay living wages, provide safe working environments, use zero child labor, and promote gender equity in artisan pay.",
  },
];

export default function WhyHastavaPage() {
  return (
    <div className="bg-ivory py-16 sm:py-24">
      {/* Page Header */}
      <Container className="max-w-4xl text-center flex flex-col gap-4 mb-16 sm:mb-20">
        <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold">
          The Sourcing Edge
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-navy leading-[1.1] tracking-tight">
          Sourcing Excellence
        </h1>
        <div className="h-0.5 w-16 bg-gold/50 mx-auto mt-2" />
        <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed max-w-xl mx-auto mt-2">
          Combining regional Indian heritage craft with modern international trading standards.
        </p>
      </Container>

      {/* Grid Features */}
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {STRATEGIC_ADVANTAGES.map((advantage) => (
          <Card key={advantage.title} variant="bordered" hoverable={true} className="h-full">
            <CardHeader className="gap-2">
              <CardTitle className="text-lg font-serif text-navy font-semibold">
                {advantage.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed">
                {advantage.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </Container>

      {/* Corporate Compliance Block */}
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
        <div className="lg:col-span-6 relative aspect-video sm:aspect-4/3 overflow-hidden rounded-sm border border-ivory-dark bg-ivory-dark/10 shadow-premium">
          <Image
            src={IMAGE_MANIFEST.exportLogistics.src}
            alt={IMAGE_MANIFEST.exportLogistics.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="lg:col-span-6 flex flex-col gap-6">
          <h2 className="font-serif text-2xl sm:text-3xl text-navy">
            100% Export Ready Compliance
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed">
            International borders require flawless documentation. HASTAVA manages the creation and filing of export invoices, shipping bills, packing lists, bill of lading, certificate of origin, and custom plant quarantine certifications (e.g. wood fumigation).
          </p>
          <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed">
            Our trade desk works closely with your import brokers to ensure that HS Codes are correctly cataloged, eliminating port storage surcharges or customs delays.
          </p>
        </div>
      </Container>
    </div>
  );
}
