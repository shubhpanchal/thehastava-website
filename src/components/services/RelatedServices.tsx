import React from "react";
import Link from "next/link";
import { Container } from "../shared/container";
import { ServiceDetail, SERVICE_DATABASE } from "@/config/services";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";

interface RelatedServicesProps {
  service: ServiceDetail;
}

export function RelatedServices({ service }: RelatedServicesProps) {
  // Resolve other services from the database dynamically (excluding current)
  const related = Object.values(SERVICE_DATABASE)
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3); // Show 3 items max

  if (related.length === 0) return null;

  return (
    <section className="bg-ivory py-20 lg:py-28 border-b border-ivory-dark/45">
      <Container className="flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Support Solutions
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-navy">
            Additional Buyer Services
          </h2>
          <div className="h-0.5 w-12 bg-gold/50 mt-1" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {related.map((item) => (
            <Card key={item.slug} variant="bordered" hoverable={true} className="p-6 flex flex-col justify-between h-full">
              <CardHeader className="p-0 gap-1.5">
                <span className="font-sans text-[0.65rem] uppercase tracking-wider font-bold text-gold">
                  {item.subtitle}
                </span>
                <CardTitle className="text-lg font-serif text-navy font-semibold mt-1">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-3 flex-grow">
                <CardDescription className="text-slate-muted text-xs leading-relaxed line-clamp-3">
                  {item.overview}
                </CardDescription>
              </CardContent>
              <CardContent className="p-0 mt-4 pt-4 border-t border-ivory-dark/40">
                <Link 
                  href={`/services/${item.slug}`}
                  className="font-sans text-xs font-bold uppercase tracking-wider text-gold hover:text-navy transition-colors duration-200"
                >
                  Explore Service &rarr;
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

      </Container>
    </section>
  );
}
