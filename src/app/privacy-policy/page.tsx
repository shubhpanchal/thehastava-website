import React from "react";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/ui/typography";

export const metadata = {
  title: "Privacy Policy | HASTAVA AI, Data & Automation",
  description: "Learn how HASTAVA handles business data, telemetry, and communications in accordance with modern security and privacy standards.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-16 sm:py-24 text-slate-900 border-b border-slate-200">
      <Container className="max-w-3xl flex flex-col gap-8">
        <div className="flex flex-col gap-3 border-b border-slate-200 pb-6">
          <Eyebrow variant="blue">Data Protection</Eyebrow>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Privacy Policy
          </h1>
          <span className="font-mono text-xs text-slate-500">Last Updated: October 2026</span>
        </div>

        <div className="font-sans text-sm text-slate-600 leading-relaxed flex flex-col gap-6">
          <p>
            HASTAVA is committed to protecting the privacy, security, and integrity of corporate communications, technical inquiries, and project specifications.
          </p>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg text-slate-900 font-bold">1. Information We Collect</h2>
            <p>
              We collect information provided directly through our contact and discovery forms, including corporate email addresses, company names, contact names, and project requirements.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg text-slate-900 font-bold">2. How We Use Information</h2>
            <p>
              We use inquiry data solely to schedule discovery calls, evaluate technical requirements, and deliver requested proposals. We never sell, rent, or distribute client contact data to third parties.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg text-slate-900 font-bold">3. Data Security & Storage</h2>
            <p>
              We implement industry-standard security measures and encryption to safeguard all project communications and technical data stored within our infrastructure.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
