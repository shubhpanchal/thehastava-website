import React from "react";
import Image from "next/image";
import { Container } from "../shared/container";
import { Button } from "../ui/button";
import { IMAGE_MANIFEST } from "@/config/images";

const VALUE_POINTS = [
  "Access to artisan networks across India",
  "One point of contact for multiple crafts",
  "Quality assurance & factory audits",
  "Custom designs & private labeling",
  "Transparent communication",
  "End-to-end export support",
];

export function About() {
  return (
    <section className="bg-ivory pt-0 pb-24 lg:pb-32 relative overflow-hidden">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Sourcing Value Proposition */}
        <div className="lg:col-span-6 flex flex-col gap-6 lg:gap-8">
          <div className="flex flex-col gap-3">
            <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Why Choose Hastava
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-navy leading-tight">
              More Than a Supplier. <br />
              A Sourcing Partner.
            </h2>
            <div className="h-0.5 w-12 bg-gold/50 mt-1" />
          </div>

          <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed">
            Sourcing handmade products globally is fraught with quality, supply chain, and communication gaps. Hastava acts as your local representative in India, combining the authenticity of traditional craft workshops with the rigor of international trading compliance.
          </p>

          {/* Bullet Points with Gold Accents */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VALUE_POINTS.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-gold/10 text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </span>
                <span className="font-sans text-xs sm:text-sm text-navy font-medium leading-tight">
                  {point}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Button href="/about" variant="outline" size="lg" className="group">
              Learn About Our Sourcing Model
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Right Column: Editorial Framed Photo & Impact Badge */}
        <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-end relative">
          
          {/* Framed Editorial Picture (Artisan Hands) */}
          <div className="md:col-span-7 border-2 border-ivory-dark/60 p-3 bg-ivory-light shadow-premium rounded-xs relative group">
            <div className="relative aspect-[3/4] overflow-hidden bg-ivory border border-ivory-dark flex flex-col justify-between p-6">
              
              {/* Decorative Corner Lines */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gold/40 z-10" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-gold/40 z-10" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-gold/40 z-10" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gold/40 z-10" />

              {/* Image backdrop */}
              <div className="absolute inset-0 w-full h-full bg-ivory-dark/10">
                <Image
                  src={IMAGE_MANIFEST.artisanHands.src}
                  alt={IMAGE_MANIFEST.artisanHands.alt}
                  fill
                  sizes="(max-width: 768px) 70vw, 40vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Spacer to push label down */}
              <div className="flex-grow" />

              {/* Editorial label */}
              <div className="flex flex-col gap-1 border-t border-ivory-dark/30 pt-3 z-10 bg-ivory-light/95 p-3 rounded-xs relative shadow-sm">
                <span className="font-serif text-sm font-medium text-navy">Hands of the Craft</span>
                <span className="font-sans text-[0.6rem] uppercase tracking-wider text-slate-muted">Clay Pottery Molding</span>
              </div>
            </div>
          </div>

          {/* Golden Impact Badge Card */}
          <div className="md:col-span-5 bg-gold text-ivory border border-gold-light/40 p-5 shadow-luxury rounded-sm flex flex-col gap-4 w-full">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-ivory/10 text-ivory">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-[0.6rem] uppercase tracking-[0.2em] font-bold text-ivory/80">
                  Our Impact
                </span>
                <h3 className="font-serif text-sm font-medium leading-none text-white mt-0.5">
                  Empowering Artisans
                </h3>
              </div>
            </div>
            
            <p className="font-sans text-[0.65rem] sm:text-xs leading-relaxed text-ivory/90">
              Every order placed sustains rural livelihoods, provides healthcare access to weavers, and preserves India&apos;s heritage for future generations.
            </p>
          </div>

        </div>

      </Container>
    </section>
  );
}
