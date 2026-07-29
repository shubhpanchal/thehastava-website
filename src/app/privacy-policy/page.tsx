import React from "react";
import { Container } from "@/components/shared/container";

export const metadata = {
  title: "Privacy Policy | HASTAVA Sourcing Partner",
  description: "Learn how HASTAVA handles business inquiry data, trade communications, and client privacy in compliance with international B2B regulations.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-ivory py-16 sm:py-24">
      <Container className="max-w-3xl flex flex-col gap-8">
        <div className="flex flex-col gap-3 border-b border-ivory-dark/65 pb-6">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold">Legal Statement</span>
          <h1 className="font-serif text-3xl sm:text-4xl text-navy">Privacy Policy</h1>
          <span className="font-sans text-xs text-slate-muted">Last Updated: July 2026</span>
        </div>

        <div className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed flex flex-col gap-6">
          <p>
            At HASTAVA, we prioritize the protection and confidentiality of the corporate data and design files shared by our B2B partners, importers, and trade visitors.
          </p>

          <div className="flex flex-col gap-3">
            <h2 className="font-serif text-lg text-navy font-semibold">1. Information We Collect</h2>
            <p>
              We collect information provided directly through our Inquiry Form, including names, corporate emails, telephone numbers, and project specifications. We also collect design drafts or specifications uploaded for counter-sampling purposes.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-serif text-lg text-navy font-semibold">2. How We Use Information</h2>
            <p>
              Corporate contact details are used exclusively to process your inquiries, arrange logistics, and verify origin details. We do not sell, rent, or distribute design specifications or contact coordinates to third parties.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-serif text-lg text-navy font-semibold">3. Design File Protection</h2>
            <p>
              All proprietary drawings, CAD models, and private label sketches shared with HASTAVA are kept secure and shared only with the specific artisan cluster assigned to execute your samples, under strict non-disclosure terms.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
