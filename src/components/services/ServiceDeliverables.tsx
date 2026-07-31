import React from "react";
import { Container } from "../shared/container";
import { ServiceDetail } from "@/config/services";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

interface ServiceDeliverablesProps {
  service: ServiceDetail;
}

export function ServiceDeliverables({ service }: ServiceDeliverablesProps) {
  return (
    <section className="bg-ivory py-20 lg:py-28 border-b border-ivory-dark/45">
      <Container className="flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2 max-w-2xl mx-auto">
          <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Buyer Outputs
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-navy">
            Service Deliverables
          </h2>
          <div className="h-0.5 w-12 bg-gold/50 mt-1" />
          <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed mt-2">
            Every transaction is accompanied by complete inspection logs, origin tracking cards, and custom logs.
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 justify-center">
          {service.deliverables.map((item) => (
            <Card key={item} variant="bordered" hoverable={true} className="p-6 text-center h-full flex flex-col justify-center items-center">
              <CardHeader className="p-0 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39 1.593 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </CardHeader>
              <CardContent className="p-0">
                <CardTitle className="text-sm sm:text-base font-serif text-navy font-semibold leading-relaxed">
                  {item}
                </CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>

      </Container>
    </section>
  );
}
