import React from "react";
import { Hero } from "@/components/marketing/hero";
import { DataUniverse } from "@/components/marketing/data-universe";
import { AutomationEngine } from "@/components/marketing/automation-engine";
import { IndustryStrip } from "@/components/marketing/industry-strip";
import { ServicesSection } from "@/components/marketing/services-section";
import { SolutionsInPractice } from "@/components/marketing/solutions-in-practice";
import { AutomationUseCases } from "@/components/marketing/automation-use-cases";
import { ProcessSection } from "@/components/marketing/process-section";
import { WhyHastava } from "@/components/marketing/why-hastava";
import { FinalCta } from "@/components/marketing/final-cta";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-white">
      {/* 01. Hero Section (Phase 1 - Turn Manual Work Into Growth) */}
      <Hero />

      {/* 02. The Data Universe (Phase 2 - Where Business Data Lives & Connects) */}
      <DataUniverse />

      {/* 03. Interactive Automation Engine (Phase 3 - What Hastava Actually Automates) */}
      <AutomationEngine />

      {/* 04. Services + Overlapping Value Band (Light 2x2 High-Density Modules) */}
      <ServicesSection />

      {/* 04. Intelligence / Workflow Visualization (Dark Showcase) */}
      <SolutionsInPractice />

      {/* 05. What Can We Automate? (Light Interactive Studio Explorer) */}
      <AutomationUseCases />

      {/* 06. How We Work (Light 5-Stage Connected Process) */}
      <ProcessSection />

      {/* 07. Why Businesses Choose Hastava (Light 2x2 Feature Modules) */}
      <WhyHastava />

      {/* 08. Industry Capability Strip (Light Substantial Strip) */}
      <IndustryStrip />

      {/* 09. Final Closing CTA (Dark Luminous) */}
      <FinalCta />
    </div>
  );
}