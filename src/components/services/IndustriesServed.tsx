import React from "react";
import { Container } from "../shared/container";
import { ServiceDetail } from "@/config/services";

interface IndustriesServedProps {
  service: ServiceDetail;
}

export function IndustriesServed({ service }: IndustriesServedProps) {
  return (
    <section className="bg-navy-dark text-white py-12 relative overflow-hidden">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <h3 className="font-serif text-lg sm:text-xl text-gold font-medium tracking-wide">
          Key Sectors Supported:
        </h3>
        <div className="flex flex-wrap gap-3">
          {service.industriesServed.map((ind) => (
            <span 
              key={ind} 
              className="font-sans text-[0.65rem] uppercase tracking-wider font-bold bg-navy-light/10 border border-navy-light/35 text-white/80 px-3.5 py-1.5 rounded-xs"
            >
              {ind}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
