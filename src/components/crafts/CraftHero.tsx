import React from "react";
import Image from "next/image";
import { Container } from "../shared/container";
import { CraftDetail } from "@/config/crafts";

interface CraftHeroProps {
  craft: CraftDetail;
}

export function CraftHero({ craft }: CraftHeroProps) {
  return (
    <section className="bg-navy-dark text-ivory relative overflow-hidden py-16 sm:py-24">
      {/* Background Graphic */}
      <div className="absolute right-0 top-0 w-96 h-96 opacity-5 pointer-events-none translate-x-20 -translate-y-20">
        <svg viewBox="0 0 100 100" fill="none" stroke="var(--color-gold)" strokeWidth="0.5">
          <circle cx="50" cy="50" r="45" />
          <path d="M50 0v100M0 50h100" />
        </svg>
      </div>

      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
        
        {/* Left Column: Metadata & Title */}
        <div className="lg:col-span-6 flex flex-col gap-6 relative z-10">
          <div className="flex flex-wrap gap-2.5">
            <span className="font-sans text-[0.65rem] uppercase tracking-wider font-bold bg-gold/10 border border-gold/30 text-gold px-2.5 py-1 rounded-xs">
              {craft.giStatus}
            </span>
            <span className="font-sans text-[0.65rem] uppercase tracking-wider font-bold bg-navy-light/20 border border-navy-light/40 text-ivory/80 px-2.5 py-1 rounded-xs">
              {craft.origin}, {craft.state}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-[1.1] tracking-tight">
              {craft.title}
            </h1>
            <p className="font-sans text-base sm:text-lg text-gold font-light tracking-wide italic">
              {craft.subtitle}
            </p>
          </div>

          <div className="h-0.5 w-16 bg-gold/50" />

          <p className="font-sans text-xs sm:text-sm text-ivory/70 leading-relaxed max-w-xl">
            {craft.shortDescription}
          </p>

          {/* Sourcing desk quick parameters */}
          <div className="grid grid-cols-2 gap-4 border-t border-navy-light/30 pt-6 mt-2">
            <div className="flex flex-col gap-0.5">
              <span className="font-sans text-[0.6rem] uppercase tracking-widest text-gold font-semibold">Min Order Qty (MOQ)</span>
              <span className="font-serif text-sm font-semibold text-white">{craft.moq}</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-sans text-[0.6rem] uppercase tracking-widest text-gold font-semibold">Est. Production Lead Time</span>
              <span className="font-serif text-sm font-semibold text-white">{craft.leadTime}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Asset */}
        <div className="lg:col-span-6 relative aspect-video sm:aspect-4/3 w-full overflow-hidden rounded-sm border border-navy-light/20 bg-navy-light/5 shadow-premium">
          <Image
            src={craft.heroImage.src}
            alt={craft.heroImage.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

      </Container>
    </section>
  );
}
