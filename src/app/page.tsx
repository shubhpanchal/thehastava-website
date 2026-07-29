import React from "react";
import { Hero } from "@/components/marketing/hero";
import { Features } from "@/components/marketing/features";
import { GiShowcase } from "@/components/marketing/gi-showcase";
import { Timeline } from "@/components/marketing/timeline";
import { About } from "@/components/marketing/about";
import { CTA } from "@/components/marketing/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <GiShowcase />
      <Timeline />
      <About />
      <CTA />
    </>
  );
}
