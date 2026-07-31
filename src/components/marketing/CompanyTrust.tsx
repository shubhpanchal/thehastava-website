import React from "react";
import { Container } from "../shared/container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";

interface TrustItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const TRUST_ITEMS: TrustItem[] = [
  {
    title: "Direct Artisan Network",
    description: "By sourcing directly from rural weaver cooperatives and metal workshops, we eliminate middle-tier brokers, ensuring fair trade compensation and direct traceability.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m0 0a8.947 8.947 0 0 1-3.741-.479 3 3 0 0 1 4.682-2.72m-4.682 2.72.001.031c0 .225.012.447.037.666A11.944 11.944 0 0 0 12 21c2.17 0 4.207-.576 5.963-1.584A6.06 6.06 0 0 0 18 18.722m-12 0V18a2.998 2.998 0 0 1 2.998-2.998h6.004A2.997 2.997 0 0 1 18 18v.722m-12 0a9 9 0 0 0 12 0M9 10.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />
      </svg>
    ),
  },
  {
    title: "Authentic Indian Handicrafts",
    description: "We guarantee 100% genuine products bearing regional pedigree. Every certified item is backed by official government-registered Geographical Indication (GI) certificates.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
  {
    title: "Export Documentation Support",
    description: "Flawless customs clearance compliance. We prepare and file Certificates of Origin, Fumigation Certificates, Phytosanitary Inspections, and precise B2B invoices.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5A3.375 3.375 0 0 0 10.125 2.25H3.75A2.25 2.25 0 0 0 1.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25h16.5A2.25 2.25 0 0 0 21.75 19.5V16.5A2.25 2.25 0 0 0 19.5 14.25Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12.75h12m-12 3h12m-12-6h12" />
      </svg>
    ),
  },
  {
    title: "Global Shipping & Logistics",
    description: "Ocean container forwarding and priority air freight coordinated through leading global carriers, complete with consolidated logistics cargo tracking.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
      </svg>
    ),
  },
  {
    title: "Quality Inspected",
    description: "Strict quality control inspection protocols. We audit raw materials, oversee mid-term assembly/firing, and conduct final pre-shipment inspections on-site.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: "Custom Manufacturing",
    description: "Flexible production parameters tailored to your design specs. We coordinate the molding of unique shapes, dimensions, and materials directly with our artisans.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-2.22 1.124l-3.13 3.755a1.125 1.125 0 0 0 1.719 1.442l3.13-3.755a3 3 0 0 0 .618-1.72v-1.748Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.727 11.636 18.75 5.613a2.204 2.204 0 0 1 3.118 3.118l-6.023 6.023a2.204 2.204 0 0 1-3.118-3.118Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.773 13.682 17.5 16.409a2.204 2.204 0 0 1-3.118 3.118l-2.727-2.727a2.204 2.204 0 0 1 3.118-3.118Z" />
      </svg>
    ),
  },
  {
    title: "Private Label Support",
    description: "Bespoke brand tag integrations, custom carton packaging configurations, and custom engraving services to prepare collections for your direct retail catalog.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581a2.25 2.25 0 0 0 3.182 0l5.178-5.178a2.25 2.25 0 0 0 0-3.182L12.018 3.659A2.25 2.25 0 0 0 10.427 3ZM6 6.75h.008v.008H6V6.75Z" />
      </svg>
    ),
  },
];

export function CompanyTrust() {
  return (
    <section className="bg-ivory py-24 lg:py-32">
      <Container className="flex flex-col gap-12 sm:gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
          <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
            B2B Trust & Sourcing Assurances
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-navy">
            Sourced with Integrity. <br />
            Delivered with Absolute Trust.
          </h2>
          <div className="h-0.5 w-12 bg-gold/50 mt-1" />
        </div>

        {/* Grid Cards Layout - Balanced Row 1 (4 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TRUST_ITEMS.slice(0, 4).map((item) => (
            <div key={item.title} className="w-full">
              <Card variant="bordered" hoverable={true} className="h-full">
                <CardHeader className="gap-3">
                  <div className="mb-1 flex items-center justify-start">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg text-navy font-serif">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-muted text-xs leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Grid Cards Layout - Balanced Row 2 (3 items) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto w-full">
          {TRUST_ITEMS.slice(4).map((item) => (
            <div key={item.title} className="w-full">
              <Card variant="bordered" hoverable={true} className="h-full">
                <CardHeader className="gap-3">
                  <div className="mb-1 flex items-center justify-start">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg text-navy font-serif">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-muted text-xs leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
