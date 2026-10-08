import React from "react";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/ui/typography";

export const metadata = {
  title: "Terms & Conditions | HASTAVA AI, Data & Automation",
  description: "Review HASTAVA's standard terms of service, engagement models, intellectual property, and data protection guidelines.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-white py-16 sm:py-24 text-slate-900 border-b border-slate-200">
      <Container className="max-w-3xl flex flex-col gap-8">
        <div className="flex flex-col gap-3 border-b border-slate-200 pb-6">
          <Eyebrow variant="blue">Legal Framework</Eyebrow>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Terms & Conditions
          </h1>
          <span className="font-mono text-xs text-slate-500">Last Updated: October 2026</span>
        </div>

        <div className="font-sans text-sm text-slate-600 leading-relaxed flex flex-col gap-6">
          <p>
            These terms govern the engineering partnerships, AI/data software development, and automation consulting services provided by HASTAVA to business clients.
          </p>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg text-slate-900 font-bold">1. Scope of Engagement</h2>
            <p>
              HASTAVA delivers custom AI automation pipelines, data engineering architecture, and integrated business software based on agreed sprint specifications and technical statements of work.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg text-slate-900 font-bold">2. Intellectual Property & Code Ownership</h2>
            <p>
              Custom application code, data transformations, and bespoke automation workflows engineered specifically for the client remain the intellectual property of the client upon full payment. Underlying reusable libraries and foundation modules remain the property of HASTAVA under a perpetual license to the client.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg text-slate-900 font-bold">3. Confidentiality & Data Security</h2>
            <p>
              HASTAVA adheres to strict non-disclosure protocols. Client operational data, proprietary schemas, and system credentials are encrypted and accessed solely for development and deployment purposes.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
