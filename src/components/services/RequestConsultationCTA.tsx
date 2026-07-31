import React from "react";
import { Container } from "../shared/container";
import { ServiceDetail } from "@/config/services";
import { Button } from "../ui/button";

interface RequestConsultationCTAProps {
  service: ServiceDetail;
}

export function RequestConsultationCTA({ service }: RequestConsultationCTAProps) {
  return (
    <section className="bg-navy-dark text-white py-20 lg:py-28 relative overflow-hidden">
      
      {/* Background Graphic Grid */}
      <div className="absolute right-0 bottom-0 w-96 h-96 opacity-5 pointer-events-none translate-x-20 translate-y-20">
        <svg viewBox="0 0 100 100" fill="none" stroke="var(--color-gold)" strokeWidth="0.5">
          <circle cx="50" cy="50" r="45" />
          <path d="M50 0v100M0 50h100" />
        </svg>
      </div>

      <Container className="flex flex-col items-center text-center gap-6 max-w-3xl relative z-10">
        
        <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
          Sourcing Desk Sourcing Support
        </span>
        
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight">
          Request a Consultation for <br />
          {service.title}
        </h2>
        
        <div className="h-0.5 w-12 bg-gold/50" />
        
        <p className="font-sans text-xs sm:text-sm text-ivory/70 leading-relaxed max-w-xl">
          Coordinate on-site quality control, custom sampling workflows, regulatory export documentation clearances, and freight consolidation from our regional offices in India.
        </p>

        {/* Action triggers */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-4">
          <Button href="/contact" variant="secondary" size="lg" className="group">
            Request Export Consultation
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
            Discuss Sourcing Specifications
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
