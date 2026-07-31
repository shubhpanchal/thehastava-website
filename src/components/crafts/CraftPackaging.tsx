import React from "react";
import { Container } from "../shared/container";
import { CraftDetail } from "@/config/crafts";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../ui/card";

interface CraftPackagingProps {
  craft: CraftDetail;
}

export function CraftPackaging({ craft }: CraftPackagingProps) {
  const LOGISTICS_CARDS = [
    {
      title: "Packaging Standards",
      description: craft.packaging,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gold">
          <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
        </svg>
      ),
    },
    {
      title: "Container & Freight Allocation",
      description: craft.containerInformation,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gold">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      ),
    },
    {
      title: "Customization & OEM / ODM",
      description: craft.customization,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gold">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-2.22 1.124l-3.13 3.755a1.125 1.125 0 0 0 1.719 1.442l3.13-3.755a3 3 0 0 0 .618-1.72v-1.748Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12.727 11.636 18.75 5.613a2.204 2.204 0 0 1 3.118 3.118l-6.023 6.023a2.204 2.204 0 0 1-3.118-3.118Z" />
        </svg>
      ),
    },
    {
      title: "Active Export Markets",
      description: `Regularly dispatched to: ${craft.exportMarkets.join(", ")}. Documentations and customs declarations fully aligned.`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gold">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-navy-dark text-white py-20 lg:py-28 relative overflow-hidden">
      {/* Background graphic grid */}
      <div className="absolute left-0 bottom-0 w-80 h-80 opacity-5 pointer-events-none -translate-x-16 translate-y-16">
        <svg viewBox="0 0 100 100" fill="none" stroke="var(--color-gold)" strokeWidth="0.5">
          <circle cx="50" cy="50" r="45" />
        </svg>
      </div>

      <Container className="flex flex-col gap-12 sm:gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2 max-w-2xl mx-auto">
          <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
            B2B Logistics Desk
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-white">
            Packaging & Export Logistics
          </h2>
          <div className="h-0.5 w-12 bg-gold/50 mt-1" />
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {LOGISTICS_CARDS.map((card) => (
            <Card 
              key={card.title} 
              variant="flat" 
              className="bg-navy-light/10 border border-navy-light/35 p-6 flex flex-col justify-between hover:border-gold/40 hover:bg-navy-light/20 transition-all duration-300 h-full"
            >
              <CardHeader className="p-0 gap-3">
                <div className="flex items-center justify-start">
                  {card.icon}
                </div>
                <CardTitle className="text-base text-white font-serif font-semibold tracking-wide">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-3">
                <CardDescription className="text-ivory/70 text-xs sm:text-sm leading-relaxed">
                  {card.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

      </Container>
    </section>
  );
}
