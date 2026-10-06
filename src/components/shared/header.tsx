"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "./container";
import { Button } from "../ui/button";
import { trackEvent } from "@/lib/analytics";

const NAV_ITEMS = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#061326]/90 text-white backdrop-blur-xl transition-colors duration-300">
      <Container className="flex h-[76px] items-center justify-between">
        {/* Brand Logo: Full logo on desktop, H-only mark on mobile */}
        <Link
          href="/"
          className="flex items-center focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-4 rounded-lg"
          aria-label="HASTAVA Home"
        >
          {/* Mobile: Compact H-only brand mark */}
          <Image
            src="/brand/hastava-mark-transparent.png"
            alt="HASTAVA"
            width={456}
            height={546}
            priority
            className="block md:hidden h-9 w-auto object-contain"
          />
          {/* Desktop: Full HASTAVA logo */}
          <Image
            src="/brand/hastava-logo-dark.svg"
            alt="HASTAVA"
            width={179}
            height={55}
            priority
            className="hidden md:block h-auto w-36 md:w-42 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-blue-400 rounded-md py-1 px-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <Button
            href="/contact"
            size="sm"
            className="normal-case tracking-normal text-white"
            onClick={() => trackEvent("discovery_cta_clicked", { location: "header_desktop" })}
            icon={<ArrowRight size={14} />}
          >
            Book a Discovery Call
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2.5 md:hidden">
          <Button
            href="/contact"
            size="sm"
            className="text-xs px-3 py-1.5"
            onClick={() => trackEvent("discovery_cta_clicked", { location: "header_mobile_compact" })}
          >
            Discovery Call
          </Button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-9.5 w-9.5 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-blue-400"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-white/10 bg-[#061326]/98 backdrop-blur-2xl md:hidden"
          >
            <Container className="flex flex-col gap-2 py-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10">
                <Button
                  href="/contact"
                  size="md"
                  className="w-full justify-center"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    trackEvent("discovery_cta_clicked", { location: "header_mobile_drawer" });
                  }}
                  icon={<ArrowRight size={16} />}
                >
                  Book a Discovery Call
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
