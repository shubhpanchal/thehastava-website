import React from "react";
import { Container } from "../shared/container";
import { ServiceDetail } from "@/config/services";

interface ServiceOverviewProps {
  service: ServiceDetail;
}

export function ServiceOverview({ service }: ServiceOverviewProps) {
  return (
    <section className="bg-ivory py-20 lg:py-28 border-b border-ivory-dark/45">
      <Container className="max-w-4xl flex flex-col gap-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Strategic Advantage
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-navy">
            Business Value Proposition
          </h2>
          <div className="h-0.5 w-12 bg-gold/50 mt-1" />
        </div>

        {/* Business value box */}
        <div className="bg-ivory-light border border-ivory-dark p-6 sm:p-10 rounded-sm shadow-premium flex flex-col gap-4">
          <p className="font-sans text-sm sm:text-base text-slate-muted leading-relaxed">
            {service.overview}
          </p>
          <div className="border-t border-ivory-dark/65 pt-6 mt-2 flex flex-col sm:flex-row gap-4 items-start">
            <span className="font-sans text-[0.65rem] uppercase tracking-wider font-bold bg-gold/10 border border-gold/30 text-gold px-2.5 py-1 rounded-xs flex-shrink-0">
              Key Value
            </span>
            <p className="font-sans text-xs sm:text-sm text-navy font-semibold leading-relaxed">
              {service.businessValue}
            </p>
          </div>
        </div>

      </Container>
    </section>
  );
}
