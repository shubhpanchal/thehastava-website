import React from "react";
import Image from "next/image";
import { Container } from "@/components/shared/container";
import { IMAGE_MANIFEST } from "@/config/images";

export const metadata = {
  title: "GI Certified Crafts | HASTAVA Authenticity Guarantee",
  description: "Learn about Geographical Indication (GI) tags for Indian handicrafts. HASTAVA guarantees 100% genuine GI-tagged heritage products with certificates of origin.",
};

export default function GiTaggedPage() {
  return (
    <div className="bg-ivory py-16 sm:py-24">
      {/* Page Header */}
      <Container className="max-w-4xl text-center flex flex-col gap-4 mb-16 sm:mb-20">
        <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold">
          Authenticity Standard
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-navy leading-[1.1] tracking-tight">
          Geographical Indication
        </h1>
        <div className="h-0.5 w-16 bg-gold/50 mx-auto mt-2" />
        <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed max-w-xl mx-auto mt-2">
          Understanding the premium value and legal protections behind certified regional Indian craftsmanship.
        </p>
      </Container>

      {/* Narrative Section */}
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center mb-20">
        <div className="lg:col-span-6 flex flex-col gap-6">
          <h2 className="font-serif text-2xl sm:text-3xl text-navy">
            What is a GI Tag & Why It Matters for Importers
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed">
            A Geographical Indication (GI) is a certified sign issued by the Government of India that identifies a product as originating from a specific town, region, or state. The tag guarantees that the product is made using traditional local techniques, local raw materials, and within the defined geographical boundary.
          </p>
          <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed">
            For international brands, wholesalers, and luxury retailers, sourcing GI-tagged crafts protects your brand from low-quality counterfeits and ensures that you are marketing genuine, heritage-rich products to your target consumers.
          </p>
        </div>
        <div className="lg:col-span-6 relative aspect-video sm:aspect-4/3 overflow-hidden rounded-sm border border-ivory-dark bg-ivory-dark/10 shadow-premium">
          <Image
            src={IMAGE_MANIFEST.dhokraArt.src}
            alt={IMAGE_MANIFEST.dhokraArt.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </Container>

      {/* Certification Process */}
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="border border-ivory-dark p-6 sm:p-8 bg-ivory-light flex flex-col gap-4 rounded-sm">
          <span className="font-serif text-3xl text-gold font-semibold leading-none">01</span>
          <h3 className="font-serif text-lg text-navy font-semibold">Origin Auditing</h3>
          <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed">
            Our local sourcing teams audit workshops on-site to verify that production occurs within the legally defined regional boundary (e.g. verifying that Blue Pottery is baked inside Jaipur district borders).
          </p>
        </div>
        <div className="border border-ivory-dark p-6 sm:p-8 bg-ivory-light flex flex-col gap-4 rounded-sm">
          <span className="font-serif text-3xl text-gold font-semibold leading-none">02</span>
          <h3 className="font-serif text-lg text-navy font-semibold">Government Certificates</h3>
          <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed">
            We procure, verify, and attach copies of official GI certification papers and registry credentials issued by the GI Registry office of India for every commercial export shipment.
          </p>
        </div>
      </Container>
    </div>
  );
}
