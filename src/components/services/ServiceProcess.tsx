import React from "react";
import { Container } from "../shared/container";
import { ServiceDetail } from "@/config/services";

interface ServiceProcessProps {
  service: ServiceDetail;
}

export function ServiceProcess({ service }: ServiceProcessProps) {
  return (
    <section className="bg-ivory py-20 lg:py-28 border-b border-ivory-dark/45">
      <Container className="max-w-3xl flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Execution Flow
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-navy">
            Our Operational Process
          </h2>
          <div className="h-0.5 w-12 bg-gold/50 mt-1" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-ivory-dark ml-4 sm:ml-6 flex flex-col gap-8">
          {service.process.map((step, idx) => (
            <div key={step} className="relative pl-8 sm:pl-10 group">
              {/* Bullet circle */}
              <span className="absolute -left-3 sm:-left-3.5 top-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-ivory-light border border-ivory-dark text-gold font-serif text-xs font-semibold shadow-premium group-hover:scale-105 transition-transform duration-300">
                {idx + 1}
              </span>
              <p className="font-serif text-base sm:text-lg text-navy font-semibold leading-normal">
                {step}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
