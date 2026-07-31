import React from "react";
import { Container } from "../shared/container";
import { ServiceDetail } from "@/config/services";

interface ServiceHeroProps {
  service: ServiceDetail;
}

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="bg-navy-dark text-white relative overflow-hidden py-16 sm:py-24">
      {/* Background graphic */}
      <div className="absolute right-0 top-0 w-96 h-96 opacity-5 pointer-events-none translate-x-20 -translate-y-20">
        <svg viewBox="0 0 100 100" fill="none" stroke="var(--color-gold)" strokeWidth="0.5">
          <circle cx="50" cy="50" r="45" />
          <path d="M50 0v100M0 50h100" />
        </svg>
      </div>

      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
        
        {/* Left Column: Metadata & Title */}
        <div className="lg:col-span-6 flex flex-col gap-6 relative z-10">
          <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
            B2B Buyer Services
          </span>

          <div className="flex flex-col gap-2">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-[1.1] tracking-tight">
              {service.title}
            </h1>
            <p className="font-sans text-base sm:text-lg text-gold font-light tracking-wide italic">
              {service.subtitle}
            </p>
          </div>

          <div className="h-0.5 w-16 bg-gold/50" />

          <p className="font-sans text-xs sm:text-sm text-ivory/70 leading-relaxed max-w-xl">
            {service.overview}
          </p>
        </div>

        {/* Right Column: Hero Visual Asset */}
        <div className="lg:col-span-6 relative aspect-video sm:aspect-4/3 w-full overflow-hidden rounded-sm border border-navy-light/20 bg-navy-light/5 shadow-premium">
          {/* We use a placeholder image if the path is not active or use dynamic styling */}
          <div className="absolute inset-0 bg-navy-light/20 flex items-center justify-center text-gold/40">
            {/* Since we don't build image files yet, we render a beautiful, textured SVG placeholder with the image name */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16 opacity-30">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375 0 1 1-.75 0 .375 0 0 1 .75 0Z" />
            </svg>
            <span className="absolute bottom-4 font-mono text-[0.6rem] uppercase tracking-widest text-ivory/40">
              {service.heroImage.src.replace("/images/", "")}
            </span>
          </div>
        </div>

      </Container>
    </section>
  );
}
