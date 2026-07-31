import React from "react";
import { Hero } from "@/components/marketing/hero";
import { CompanyTrust } from "@/components/marketing/CompanyTrust";
import { FeaturedCrafts } from "@/components/marketing/FeaturedCrafts";
import { ExportCapabilities } from "@/components/marketing/ExportCapabilities";
import { QualityProcess } from "@/components/marketing/QualityProcess";
import { GiShowcase } from "@/components/marketing/gi-showcase";
import { About } from "@/components/marketing/about";
import { CTA } from "@/components/marketing/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyTrust />
      <FeaturedCrafts />
      <ExportCapabilities />
      <QualityProcess />
      <GiShowcase />
      <About />
      <CTA />
    </>
  );
}
