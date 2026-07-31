import React from "react";
import { Container } from "../shared/container";
import { ServiceDetail } from "@/config/services";

interface ServiceFAQProps {
  service: ServiceDetail;
}

export function ServiceFAQ({ service }: ServiceFAQProps) {
  if (!service.faq || service.faq.length === 0) return null;

  return (
    <section className="bg-ivory py-20 lg:py-28 border-b border-ivory-dark/45">
      <Container className="max-w-3xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-10">
          <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Service FAQ
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-navy">
            Sourcing Desk FAQ
          </h2>
          <div className="h-0.5 w-12 bg-gold/50 mt-1" />
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {service.faq.map((item) => (
            <details 
              key={item.q} 
              className="group border border-ivory-dark rounded-sm bg-ivory-light p-5 outline-none [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="font-serif text-navy font-semibold text-sm sm:text-base cursor-pointer list-none flex items-center justify-between gap-4 outline-none">
                <span>{item.q}</span>
                <span className="flex-shrink-0 transition-transform duration-300 group-open:rotate-180 text-gold text-xl font-light">
                  ↓
                </span>
              </summary>
              <div className="mt-3 pt-3 border-t border-ivory-dark/40 font-sans text-xs sm:text-sm text-slate-muted leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>

      </Container>
    </section>
  );
}
