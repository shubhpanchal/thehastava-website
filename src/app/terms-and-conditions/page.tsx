import React from "react";
import { Container } from "@/components/shared/container";

export const metadata = {
  title: "Terms & Conditions | HASTAVA B2B Trading",
  description: "Review HASTAVA's standard business-to-business sourcing, export payment structures, counter-sampling timelines, and shipping liability terms.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-ivory py-16 sm:py-24">
      <Container className="max-w-3xl flex flex-col gap-8">
        <div className="flex flex-col gap-3 border-b border-ivory-dark/65 pb-6">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold">Trade Framework</span>
          <h1 className="font-serif text-3xl sm:text-4xl text-navy">Terms & Conditions</h1>
          <span className="font-sans text-xs text-slate-muted">Last Updated: July 2026</span>
        </div>

        <div className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed flex flex-col gap-6">
          <p>
            These terms define the business-to-business (B2B) trade relations, export terms, and sampling agreements between HASTAVA and our international clients.
          </p>

          <div className="flex flex-col gap-3">
            <h2 className="font-serif text-lg text-navy font-semibold">1. Sampling & Development</h2>
            <p>
              Custom counter-samples require standard development times (normally 14 to 28 days depending on craft complexity). Sample costs are paid in advance and are fully refundable upon confirmation of the associated bulk purchase order.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-serif text-lg text-navy font-semibold">2. Sourcing & Payment Structures</h2>
            <p>
              Standard commercial orders require a 30% deposit upon order confirmation, with the remaining 70% balance due against the presentation of the Bill of Lading (B/L) and shipping documents. Other payment methods (such as Irrevocable Letters of Credit) are subject to prior approval.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-serif text-lg text-navy font-semibold">3. Quality Disputes & Allowances</h2>
            <p>
              Given that our catalog items are 100% handcrafted from natural wood, stone, clay, or fabrics, slight variations in color, grain, and dimensions are inherent and celebrated as proof of authenticity. We accommodate a standard 2% break/defect margin in fragile shipments.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
