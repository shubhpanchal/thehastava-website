import React from "react";
import { Container } from "../shared/container";
import { CraftDetail } from "@/config/crafts";

interface CraftStoryProps {
  craft: CraftDetail;
}

export function CraftStory({ craft }: CraftStoryProps) {
  return (
    <section className="bg-ivory py-20 lg:py-28 border-b border-ivory-dark/45">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
        
        {/* Left Column: Origin & History */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Origin & Heritage
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-navy">
              Historical Pedigree
            </h2>
            <div className="h-0.5 w-12 bg-gold/50 mt-1" />
          </div>

          <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed">
            {craft.fullDescription}
          </p>

          <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed italic bg-ivory-light border border-ivory-dark p-4 rounded-xs mt-2">
            <strong>Historical Background:</strong> {craft.history}
          </p>
        </div>

        {/* Right Column: Techniques & Workshop details */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Master Techniques
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-navy">
              Handcrafting Process
            </h2>
            <div className="h-0.5 w-12 bg-gold/50 mt-1" />
          </div>

          <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed">
            Unlike machine-produced alternatives, every item is crafted manually through a rigorous sequence of heritage techniques passed down through generations.
          </p>

          {/* Technique list */}
          <div className="flex flex-col gap-3.5 mt-2">
            {craft.techniques.map((tech, idx) => (
              <div key={tech} className="flex gap-4">
                <span className="font-serif text-sm font-bold text-gold/80 flex-shrink-0 mt-0.5">
                  0{idx + 1}
                </span>
                <span className="font-sans text-xs sm:text-sm text-slate-muted leading-normal">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
