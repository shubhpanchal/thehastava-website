import React from "react";
import { Container } from "../shared/container";
import { CraftDetail } from "@/config/crafts";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

interface CraftApplicationsProps {
  craft: CraftDetail;
}

export function CraftApplications({ craft }: CraftApplicationsProps) {
  return (
    <section className="bg-ivory py-20 lg:py-28 border-b border-ivory-dark/45">
      <Container className="flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2 max-w-2xl mx-auto">
          <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Commercial Use Cases
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-navy">
            Sourcing Portfolio Applications
          </h2>
          <div className="h-0.5 w-12 bg-gold/50 mt-1" />
          <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed mt-2">
            These authentic lines are ideally suited for luxury hospitality environments, premium retail inventories, and architectural integrations.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-center">
          {craft.applications.map((app) => (
            <Card key={app} variant="bordered" hoverable={true} className="flex flex-col items-center justify-center p-6 text-center h-full">
              <CardHeader className="p-0 mb-2">
                {/* Visual marker or bullet */}
                <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
              </CardHeader>
              <CardContent className="p-0">
                <CardTitle className="text-sm sm:text-base font-serif text-navy font-semibold leading-snug">
                  {app}
                </CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>

      </Container>
    </section>
  );
}
