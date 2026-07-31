import React from "react";
import { Container } from "../shared/container";
import { CraftDetail } from "@/config/crafts";

interface CraftSpecificationsProps {
  craft: CraftDetail;
}

export function CraftSpecifications({ craft }: CraftSpecificationsProps) {
  return (
    <section className="bg-ivory py-20 lg:py-28 border-b border-ivory-dark/45">
      <Container className="max-w-4xl flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
            B2B Sourcing Metrics
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-navy">
            Technical & Sourcing Specifications
          </h2>
          <div className="h-0.5 w-12 bg-gold/50 mt-1" />
        </div>

        {/* Spec Sheet Table */}
        <div className="border border-ivory-dark bg-ivory-light rounded-sm overflow-hidden shadow-premium">
          <table className="w-full text-left font-sans text-xs sm:text-sm border-collapse">
            <tbody>
              
              {/* Materials Row */}
              <tr className="border-b border-ivory-dark">
                <td className="px-6 py-5 font-bold text-navy bg-ivory-dark/20 w-1/3 sm:w-1/4">
                  Raw Materials
                </td>
                <td className="px-6 py-5 text-slate-muted leading-relaxed">
                  <div className="flex flex-wrap gap-2">
                    {craft.materials.map((mat) => (
                      <span key={mat} className="bg-ivory px-2.5 py-1 border border-ivory-dark rounded-xs">
                        {mat}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>

              {/* Geographic Coordinates */}
              <tr className="border-b border-ivory-dark">
                <td className="px-6 py-5 font-bold text-navy bg-ivory-dark/20">
                  Regional Pedigree
                </td>
                <td className="px-6 py-5 text-slate-muted leading-relaxed">
                  <strong>District:</strong> {craft.district} &nbsp;|&nbsp; <strong>State:</strong> {craft.state} &nbsp;|&nbsp; <strong>Country:</strong> India
                </td>
              </tr>

              {/* GI registry status */}
              <tr className="border-b border-ivory-dark">
                <td className="px-6 py-5 font-bold text-navy bg-ivory-dark/20">
                  GI Certification
                </td>
                <td className="px-6 py-5 text-slate-muted leading-relaxed">
                  {craft.giStatus} (Guarantees authentic geographical origin and prevents counterfeit manufacturing)
                </td>
              </tr>

              {/* Sustainability */}
              <tr>
                <td className="px-6 py-5 font-bold text-navy bg-ivory-dark/20">
                  Eco & Fair Trade
                </td>
                <td className="px-6 py-5 text-slate-muted leading-relaxed">
                  {craft.sustainability}
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </Container>
    </section>
  );
}
