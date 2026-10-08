import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "./container";
import { siteConfig } from "@/config/site";

const SOLUTION_LINKS = [
  { label: "AI Automation", href: "/services" },
  { label: "Data & Analytics", href: "/services" },
  { label: "Document Intelligence", href: "/services" },
  { label: "Business Systems", href: "/services" },
];

const COMPANY_LINKS = [
  { label: "About Hastava", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Book a Discovery Call", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#061326] text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
        {/* Brand & Value Proposition Column */}
        <div className="space-y-6 md:col-span-5">
          <Link href="/" className="inline-block" aria-label="HASTAVA Home">
            <Image
              src="/brand/hastava-logo-dark.svg"
              alt="HASTAVA"
              width={179}
              height={55}
              className="h-auto w-36 sm:w-40 md:w-44 object-contain"
            />
          </Link>

          <p className="max-w-sm text-sm leading-relaxed text-slate-400">
            Practical AI, data, and automation solutions that eliminate repetitive manual work, connect your systems, and help your business operate faster.
          </p>

          <div className="space-y-2.5 text-sm text-slate-300">
            <div className="flex items-center gap-2.5">
              <MapPin size={16} className="text-cyan-400 shrink-0" />
              <span>{siteConfig.address.full}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail size={16} className="text-cyan-400 shrink-0" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-cyan-300"
              >
                {siteConfig.email}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone size={16} className="text-cyan-400 shrink-0" />
              <a
                href={`tel:${siteConfig.phoneClean}`}
                className="transition-colors hover:text-cyan-300"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Solutions Links Column */}
        <div className="space-y-4 md:col-span-4 lg:col-span-3 lg:col-start-7">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
            Solutions
          </div>
          <nav className="flex flex-col space-y-2.5" aria-label="Solutions Navigation">
            {SOLUTION_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-slate-300 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Company & Legal Links Column */}
        <div className="space-y-4 md:col-span-3 lg:col-span-3">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
            Company
          </div>
          <nav className="flex flex-col space-y-2.5" aria-label="Company Navigation">
            {COMPANY_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-slate-300 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 transition-transform hover:translate-x-0.5 hover:text-cyan-300"
            >
              Start a Conversation <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </Container>

      {/* Bottom Sub-footer */}
      <div className="border-t border-white/10 bg-[#040d1a]">
        <Container className="flex flex-col gap-4 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HASTAVA. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="transition-colors hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
