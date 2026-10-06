import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";

export const metadata = {
  title: "Why Hastava | AI, Data & Automation for Businesses",
  description:
    "Discover why businesses choose Hastava as their AI, data engineering, and workflow automation partner.",
};

export default function WhyHastavaPage() {
  return (
    <div className="py-24 md:py-32">
      <Container className="max-w-3xl text-center">
        <span className="section-eyebrow">Why Hastava</span>
        <h1 className="section-title mt-4">
          Technology built for practical business growth.
        </h1>
        <p className="section-copy mt-6">
          We focus on business-first automation, data reliability, and focused software built specifically for your operational workflows.
        </p>
        <div className="mt-8">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5"
          >
            Learn more about Hastava <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </div>
  );
}
