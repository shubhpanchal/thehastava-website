import React from "react";
import Image from "next/image";
import { Container } from "../shared/container";
import { Button } from "../ui/button";
import { IMAGE_MANIFEST } from "@/config/images";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory pt-20 pb-16 lg:pt-28 lg:pb-20">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Sourcing Narrative & CTAs */}
        <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8">
          
          {/* Sub-header / Brand Promise */}
          <div className="flex flex-col gap-2">
            <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Sourcing. Quality. Trust. Delivered Globally.
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-navy leading-[1.1] tracking-tight">
              Your Trusted Partner for <br />
              <span className="text-gold italic font-normal">Authentic Indian</span> <br />
              Handicrafts
            </h1>
          </div>

          {/* Descriptive Copy */}
          <p className="font-sans text-sm sm:text-base text-slate-muted leading-relaxed max-w-2xl">
            Hastava connects global buyers with India&apos;s finest artisan communities and GI-tagged handicrafts. We simplify sourcing, guarantee production-grade quality, and handle the entire logistics journey from workshop to your doorstep.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button href="/crafts" variant="primary" size="lg" className="group">
              Explore Our Crafts
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
            <Button href="/contact" variant="outline" size="lg">
              Talk to a Sourcing Expert
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.806-5.194-4.177-7-7l1.293-.97c.362-.271.528-.733.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-6 border-t border-ivory-dark grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-1.5">
              <span className="font-serif text-lg sm:text-xl font-semibold text-navy">100+</span>
              <span className="font-sans text-[0.65rem] uppercase tracking-widest text-slate-muted font-bold">
                Artisan Clusters
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-serif text-lg sm:text-xl font-semibold text-navy">GI-Tagged</span>
              <span className="font-sans text-[0.65rem] uppercase tracking-widest text-slate-muted font-bold">
                Certified Authentic
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-serif text-lg sm:text-xl font-semibold text-navy">Assured</span>
              <span className="font-sans text-[0.65rem] uppercase tracking-widest text-slate-muted font-bold">
                Quality Inspections
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Product Images Collage */}
        <div className="lg:col-span-5 grid grid-cols-12 gap-4 relative">
          
          {/* Decorative Background Motif Grid */}
          <div className="absolute inset-0 border border-dashed border-ivory-dark/30 pointer-events-none -m-4 rounded-lg" />

          {/* Blue Pottery Vase Image Card */}
          <div className="col-span-7 aspect-[3/4] border border-ivory-dark rounded-sm p-2.5 bg-ivory-light flex flex-col justify-between relative overflow-hidden group">
            <div className="flex-grow relative w-full h-full overflow-hidden mb-2 rounded-xs bg-ivory-dark/10">
              <Image
                src={IMAGE_MANIFEST.bluePottery.src}
                alt={IMAGE_MANIFEST.bluePottery.alt}
                fill
                sizes="(max-width: 768px) 50vw, 30vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-sm font-medium text-navy">{IMAGE_MANIFEST.bluePottery.title}</span>
              <span className="font-sans text-[0.6rem] uppercase tracking-wider text-slate-muted">{IMAGE_MANIFEST.bluePottery.origin}</span>
            </div>
          </div>

          {/* Dhokra Art Sculpture Image Card */}
          <div className="col-span-5 aspect-square border border-ivory-dark rounded-sm p-2.5 bg-ivory-light flex flex-col justify-between relative overflow-hidden group">
            <div className="flex-grow relative w-full h-full overflow-hidden mb-2 rounded-xs bg-ivory-dark/10">
              <Image
                src={IMAGE_MANIFEST.woodCarving.src}
                alt={IMAGE_MANIFEST.woodCarving.alt}
                fill
                sizes="(max-width: 768px) 30vw, 20vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-sm font-medium text-navy">{IMAGE_MANIFEST.woodCarving.title}</span>
              <span className="font-sans text-[0.6rem] uppercase tracking-wider text-slate-muted">{IMAGE_MANIFEST.woodCarving.origin}</span>
            </div>
          </div>

          {/* Luxury Brand Navy Statement Box */}
          <div className="col-span-12 bg-navy border border-navy-light/40 rounded-sm p-6 text-ivory flex flex-col justify-between gap-6 shadow-premium">
            <div className="flex items-center justify-between">
              <span className="font-sans text-[0.6rem] uppercase tracking-[0.25em] text-gold font-bold">
                Artisan Heritage
              </span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold">
                <path
                  d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9Z"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-normal leading-relaxed max-w-md">
              &ldquo;Bringing India&apos;s rich artisan heritage and GI-tagged handicrafts to the world.&rdquo;
            </h3>
          </div>
          
        </div>

      </Container>
    </section>
  );
}
