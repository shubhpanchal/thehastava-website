import React from "react";
import Image from "next/image";
import { Container } from "@/components/shared/container";
import { IMAGE_MANIFEST } from "@/config/images";

export const metadata = {
  title: "About Us | HASTAVA Sourcing Partner",
  description: "Learn about HASTAVA's mission, our direct-trade connection with Indian artisan clusters, and our commitment to authenticity, quality, and global distribution.",
};

export default function AboutPage() {
  return (
    <div className="bg-ivory py-16 sm:py-24">
      {/* Editorial Header */}
      <Container className="max-w-4xl text-center flex flex-col gap-4 mb-16 sm:mb-20">
        <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold">
          Our Heritage & Sourcing Model
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-navy leading-[1.1] tracking-tight">
          Preserving Legacy. <br />
          Simplifying Sourcing.
        </h1>
        <div className="h-0.5 w-16 bg-gold/50 mx-auto mt-2" />
      </Container>

      {/* Grid Overview */}
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center mb-20">
        <div className="lg:col-span-6 flex flex-col gap-6">
          <h2 className="font-serif text-2xl sm:text-3xl text-navy">
            Connecting Traditional Workshops with Modern Global Supply Chains
          </h2>
          <p className="font-sans text-sm text-slate-muted leading-relaxed">
            HASTAVA was founded to bridge the gap between rural Indian artisans holding centuries-old heritage crafts and international importers requiring strict reliability, delivery timelines, and certified quality standards.
          </p>
          <p className="font-sans text-sm text-slate-muted leading-relaxed">
            By acting as a direct sourcing agent, we eliminate middle-layer brokers, ensuring that artisans receive fair trade compensation and global retail partners receive genuine Geographical Indication (GI) tagged products at sustainable prices.
          </p>
        </div>
        <div className="lg:col-span-6 relative aspect-video sm:aspect-4/3 overflow-hidden rounded-sm border border-ivory-dark bg-ivory-dark/10 shadow-premium">
          <Image
            src={IMAGE_MANIFEST.handWeaving.src}
            alt={IMAGE_MANIFEST.handWeaving.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </Container>

      {/* Core Values */}
      <Container className="bg-navy text-ivory rounded-sm p-8 sm:p-12 shadow-luxury grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        <div className="flex flex-col gap-3">
          <h3 className="font-serif text-xl text-gold">Authenticity</h3>
          <p className="font-sans text-xs sm:text-sm text-ivory/70 leading-relaxed">
            Every product is fully audited and carries verified GI-tag certificates of origin, preserving original regional designs.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-serif text-xl text-gold">Transparency</h3>
          <p className="font-sans text-xs sm:text-sm text-ivory/70 leading-relaxed">
            We provide direct communication channels, open cost sheets, and mid-production audits to our B2B partners.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-serif text-xl text-gold">Sustainability</h3>
          <p className="font-sans text-xs sm:text-sm text-ivory/70 leading-relaxed">
            We operate on fair trade principles, supporting community development, child-free production, and safe working conditions.
          </p>
        </div>
      </Container>
    </div>
  );
}
