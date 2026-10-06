import React from "react";
import { Hero } from "@/components/marketing/hero";
import { ValueBand } from "@/components/marketing/value-band";
import { IndustryStrip } from "@/components/marketing/industry-strip";
import { ServicesSection } from "@/components/marketing/services-section";
import { SolutionsInPractice } from "@/components/marketing/solutions-in-practice";
import { AutomationUseCases } from "@/components/marketing/automation-use-cases";
import { ProcessSection } from "@/components/marketing/process-section";
import { WhyHastava } from "@/components/marketing/why-hastava";
import { FinalCta } from "@/components/marketing/final-cta";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-[#061326]">
      {/* 01. Hero Section */}
      <Hero />

      {/* 02. Value / Trust Band */}
      <ValueBand />

      {/* 03. Industry Capability Strip */}
      <IndustryStrip />

      {/* 04. What We Do (Services) */}
      <ServicesSection />

      {/* 05. Solutions in Practice */}
      <SolutionsInPractice />

      {/* 06. What Can We Automate? (Dynamic Workflow & Use-Cases) */}
      <AutomationUseCases />

      {/* 07. How We Work (5-Stage Connected Process) */}
      <ProcessSection />

      {/* 08. Why Businesses Choose Hastava */}
      <WhyHastava />

      {/* 09. Final Closing CTA */}
      <FinalCta />
    </div>
  );
}