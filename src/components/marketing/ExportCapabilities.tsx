import React from "react";
import { Container } from "../shared/container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";

interface CapabilityItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    title: "Air Freight Forwarding",
    description: "Priority air cargo shipping coordinated through global logistics partners for time-sensitive luxury collections and quick boutique restocks.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
      </svg>
    ),
  },
  {
    title: "Sea Freight Forwarding",
    description: "Cost-effective container freight options via major global lines out of Mundra and Mumbai ports, directly to your destination customs warehouse.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V11.25M3 14.25h15v2.25M15 14.25v-3.375A1.125 1.125 0 0 0 13.875 9.75h-3.75A1.125 1.125 0 0 0 9 10.875v3.375m6-3.375V11.25c0-.621-.504-1.125-1.125-1.125h-3.75A1.125 1.125 0 0 0 9 11.25v2.625M10.5 5.25h3m-3 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V3.375m17.25 1.875a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V3.375" />
      </svg>
    ),
  },
  {
    title: "LCL Cargo Handling",
    description: "Less than Container Load consolidation. Combine smaller shipments into shared containers to minimize shipping costs for smaller B2B volumes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    title: "FCL Container Logistics",
    description: "Full Container Load shipments (20ft and 40ft standard and high-cube) with dedicated container packing protocols to maximize space usage.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25A2.25 2.25 0 0 1 13.5 8.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
    ),
  },
  {
    title: "OEM Sourcing Solutions",
    description: "Custom manufacturing using your proprietary blueprints, precise sketches, or physical reference samples under strict NDA rules.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457-3.077 1.41-.513m14.095 5.13-1.41.513M5.105 6.54l.75-1.299m12.29 8.5 1.298-2.25M6.54 5.105l1.299.75M16.5 18.105l.75-1.299" />
      </svg>
    ),
  },
  {
    title: "ODM Sourcing Solutions",
    description: "Leverage our design library. Collaborate directly with our master craft communities to create custom design adaptations.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-2.22 1.124l-3.13 3.755a1.125 1.125 0 0 0 1.719 1.442l3.13-3.755a3 3 0 0 0 .618-1.72v-1.748Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.727 11.636 18.75 5.613a2.204 2.204 0 0 1 3.118 3.118l-6.023 6.023a2.204 2.204 0 0 1-3.118-3.118Z" />
      </svg>
    ),
  },
  {
    title: "White Label Sourcing",
    description: "Standardized artisan catalog items available for fast wholesale purchasing, complete with your custom brand labeling.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581a2.25 2.25 0 0 0 3.182 0l5.178-5.178a2.25 2.25 0 0 0 0-3.182L12.018 3.659A2.25 2.25 0 0 0 10.427 3Z" />
      </svg>
    ),
  },
  {
    title: "Industrial B2B Packaging",
    description: "Double-walled corrugated outer cartons, customized drop-tested styrofoam inserts, and humidity control packets for fragile ceramics.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    ),
  },
  {
    title: "Secure Warehousing",
    description: "Humidity-controlled export consolidation centers in regional hubs to prevent material moisture expansion in wood crafts.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-12 4.364M12 7.5v3m0 0H8.25m3.75 0h3.75" />
      </svg>
    ),
  },
  {
    title: "Regional Cargo Consolidation",
    description: "Combine multiple crafts (Jaipur pottery, Saharanpur woodwork, Moradabad brass) into one shipping container to save ocean freight costs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" />
      </svg>
    ),
  },
  {
    title: "Independent Quality Inspection",
    description: "We welcome and assist third-party inspection firms (e.g. SGS, Intertek) to audit quality metrics prior to terminal loading.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h3.75a2.25 2.25 0 0 1 2.25 2.25v15a2.25 2.25 0 0 1-2.25 2.25h-3.75a2.25 2.25 0 0 1-2.25-2.25v-15a2.25 2.25 0 0 1 2.25-2.25Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 13.5 2.25 2.25 5.25-5.25" />
      </svg>
    ),
  },
  {
    title: "Flexible MOQ Support",
    description: "Lower Minimum Order Quantities per catalog SKU (starting at 100 units for ceramics and 20 units for wood furniture) for first-time buyers.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
];

export function ExportCapabilities() {
  return (
    <section className="bg-navy-dark text-ivory py-24 lg:py-32 relative overflow-hidden">
      
      {/* Subtle backdrop line graphics */}
      <div className="absolute left-0 top-0 w-80 h-80 opacity-5 pointer-events-none -translate-x-12 -translate-y-12">
        <svg viewBox="0 0 100 100" fill="none" stroke="var(--color-gold)" strokeWidth="0.5">
          <circle cx="50" cy="50" r="45" />
          <path d="M50 0v100M0 50h100" />
        </svg>
      </div>

      <Container className="flex flex-col gap-12 sm:gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
          <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
            B2B Logistics & Production Ready
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white">
            Global Export & Custom Sourcing Capabilities
          </h2>
          <div className="h-0.5 w-12 bg-gold/50 mt-1" />
        </div>

        {/* 12-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {CAPABILITIES.map((cap) => (
            <Card 
              key={cap.title} 
              variant="flat" 
              className="bg-navy-light/15 border border-navy-light/35 p-6 flex flex-col justify-between hover:border-gold/45 hover:bg-navy-light/25 group transition-all duration-300 h-full"
            >
              <CardHeader className="p-0 gap-3">
                <div className="flex items-center justify-start mb-1">
                  {cap.icon}
                </div>
                <CardTitle className="text-base text-white tracking-wide group-hover:text-gold transition-colors font-serif font-semibold">
                  {cap.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-3">
                <CardDescription className="text-ivory/65 text-xs leading-relaxed">
                  {cap.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

      </Container>
    </section>
  );
}
