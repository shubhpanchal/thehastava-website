import React from "react";
import { Container } from "../shared/container";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";

interface CraftItem {
  name: string;
  location: string;
  icon: React.ReactNode;
}

const CRAFT_ITEMS: CraftItem[] = [
  {
    name: "Dhokra Art",
    location: "Bastar, CG",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        {/* Stylized metal horse/deer silhouette */}
        <path d="M4 18h4l3-6h5l2 6h2M6 8l-2-4M10 6h4M12 12V6M16 12l2-4" />
      </svg>
    ),
  },
  {
    name: "Banarasi Sarees",
    location: "Varanasi, UP",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        {/* Weave pattern / floral motif */}
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2ZM7 12h10M12 7v10" />
        <path d="m9.5 9.5 5 5M9.5 14.5l5-5" />
      </svg>
    ),
  },
  {
    name: "Kutch Embroidery",
    location: "Kutch, GJ",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        {/* Geometric mirror/needlework star */}
        <path d="M12 2v20M2 12h20M5 5l14 14M5 19 19 5" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    name: "Blue Pottery",
    location: "Jaipur, RJ",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        {/* Vase/jar outline */}
        <path d="M7 20h10M8 4h8M12 4v4M6 10c0-3 3-4 6-4s6 1 6 4c0 6-3 10-6 10s-6-4-6-10Z" />
      </svg>
    ),
  },
  {
    name: "Madhubani Painting",
    location: "Mithila, BR",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        {/* Sun/eye motif */}
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    ),
  },
  {
    name: "Pashmina",
    location: "Kashmir, JK",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        {/* Wave/soft fabric texture */}
        <path d="M3 10c3-3 6-3 9 0s6 3 9 0M3 14c3-3 6-3 9 0s6 3 9 0" />
      </svg>
    ),
  },
  {
    name: "Pochampally Ikat",
    location: "Yadadri, TS",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        {/* Ikat diamond geometry */}
        <path d="M12 2 2 12l10 10 10-10L12 2ZM12 6l-6 6 6 6 6-6-6-6Z" />
      </svg>
    ),
  },
  {
    name: "Channapatna Toys",
    location: "Ramanagara, KA",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        {/* Lathe-turned wood stack / spinner */}
        <path d="M12 2v20M7 8h10M5 13h14M8 18h8" />
        <circle cx="12" cy="5" r="1.5" />
      </svg>
    ),
  },
  {
    name: "Bidriware",
    location: "Bidar, KA",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        {/* Silver inlay flower/urn */}
        <path d="M12 3v18M7 7h10M9 12h6M12 17h4" />
        <path d="M7 7c0-2.5 10-2.5 10 0v8c0 3.5-3 6-5 6s-5-2.5-5-6V7Z" stroke="currentColor" />
      </svg>
    ),
  },
  {
    name: "Kondapalli Toys",
    location: "Krishna, AP",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        {/* Wood horse/rocker silhouette */}
        <path d="M3 17c5 4 13 4 18 0M7 17v-6h4v6M14 17V8l4-2v11" />
      </svg>
    ),
  },
];

export function GiShowcase() {
  return (
    <section className="bg-navy-dark text-ivory py-24 lg:py-32 relative overflow-hidden">
      
      {/* Decorative Heritage Backdrop Lines */}
      <div className="absolute right-0 bottom-0 w-96 h-96 opacity-5 pointer-events-none translate-x-12 translate-y-12">
        <svg viewBox="0 0 100 100" fill="none" stroke="var(--color-gold)" strokeWidth="0.5">
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="35" />
          <circle cx="50" cy="50" r="25" />
          <path d="M50 0v100M0 50h100M15 15l70 70M15 85l70-70" />
        </svg>
      </div>

      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Sourcing Narrative */}
        <div className="lg:col-span-4 flex flex-col gap-5 lg:gap-6">
          <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Authentic. Verified. GI Tagged.
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white leading-tight">
            India&apos;s GI-Tagged Crafts, Sourced with Integrity
          </h2>
          <p className="font-sans text-xs sm:text-sm text-ivory/60 leading-relaxed">
            Geographical Indication (GI) tags protect regional heritage. We work directly with certified artisan cooperatives and weaver communities to bring you verified products that guarantee historical accuracy, genuine craftsmanship, and fair wage distribution.
          </p>
          <div className="pt-2">
            <Button href="/gi-tagged" variant="outline-gold" size="md">
              Explore GI Tagged Products
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Right Column: Data-Driven Responsive Grid */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
            {CRAFT_ITEMS.map((item) => (
              <Card
                key={item.name}
                variant="bordered"
                hoverable={true}
                className="bg-navy-light/10 border-navy-light/40 hover:border-gold/40 hover:bg-navy-light/20 group p-4 flex flex-col items-center justify-between text-center gap-3 h-full transition-all duration-300"
              >
                <CardHeader className="p-0 flex items-center justify-center">
                  <div className="p-2.5 rounded-full bg-navy-light/20 group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="p-0 flex flex-col items-center gap-0.5">
                  <CardTitle className="text-sm font-serif text-ivory tracking-wide group-hover:text-gold transition-colors">
                    {item.name}
                  </CardTitle>
                  <span className="font-sans text-[0.6rem] uppercase tracking-widest text-gold/60 font-semibold">
                    {item.location}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-right">
            <span className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold/40 font-bold">
              ... and many more craft clusters across India.
            </span>
          </div>
        </div>

      </Container>
    </section>
  );
}
