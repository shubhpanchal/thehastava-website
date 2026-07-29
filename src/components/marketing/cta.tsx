import React from "react";
import { Container } from "../shared/container";
import { Button } from "../ui/button";

export function CTA() {
  return (
    <section className="bg-navy-gradient text-ivory py-24 lg:py-32 relative overflow-hidden border-t border-navy-light/30">
      
      {/* Decorative Golden Corner Frames */}
      <div className="absolute top-8 left-8 w-24 h-24 border-t border-l border-gold/10 pointer-events-none hidden md:block" />
      <div className="absolute top-8 right-8 w-24 h-24 border-t border-r border-gold/10 pointer-events-none hidden md:block" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-b border-l border-gold/10 pointer-events-none hidden md:block" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-b border-r border-gold/10 pointer-events-none hidden md:block" />

      {/* Decorative Backdrop Lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--color-gold)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center gap-8 max-w-3xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4">
          <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Begin Sourcing
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight">
            Partner with India&apos;s Finest <br />
            Artisan Communities
          </h2>
          <div className="h-0.5 w-16 bg-gold/60 mt-1" />
        </div>

        {/* Supporting Copy */}
        <p className="font-sans text-xs sm:text-sm text-ivory/70 leading-relaxed max-w-xl">
          Whether you require bespoke private label design, consolidated shipments of certified GI crafts, or strict quality control inspections on-site, we streamline the entire sourcing pipeline. Let&apos;s build something beautiful together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2">
          <Button href="/contact" variant="secondary" size="lg" className="group">
            Schedule a Discovery Call
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Button>
          
          <Button href="/contact" variant="outline-gold" size="lg">
            Contact Sourcing Desk
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </Button>
        </div>

      </Container>
    </section>
  );
}
