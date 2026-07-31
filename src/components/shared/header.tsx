"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./logo";
import { Button } from "../ui/button";

interface SubmenuItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Crafts", href: "/crafts" },
  { 
    label: "Services", 
    href: "#", 
    submenu: [
      { label: "Sourcing Support", href: "/services/sourcing-support" },
      { label: "Private Label", href: "/services/private-label" },
      { label: "OEM Manufacturing", href: "/services/oem-manufacturing" },
      { label: "Quality Assurance", href: "/services/quality-assurance" },
      { label: "Export Documentation", href: "/services/export-documentation" },
      { label: "Packaging Support", href: "/services/packaging" },
      { label: "Logistics Coordination", href: "/services/logistics-coordination" },
      { label: "Vendor Verification", href: "/services/vendor-verification" },
      { label: "Product Development", href: "/services/product-development" }
    ]
  },
  { 
    label: "Resources", 
    href: "#",
    submenu: [
      { label: "Import Guide", href: "/resources/import-guide" },
      { label: "MOQ Guide", href: "/resources/moq-guide" },
      { label: "Packaging Guide", href: "/resources/packaging-guide" },
      { label: "GI Products Guide", href: "/resources/gi-products-guide" },
      { label: "Export Docs Guide", href: "/resources/export-documentation-guide" },
      { label: "Quality Guide", href: "/resources/quality-guide" }
    ]
  },
  { label: "GI Tagged", href: "/gi-tagged" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Why Hastava", href: "/why-hastava" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 w-full bg-ivory/90 backdrop-blur-md border-b border-ivory-dark/40 z-50 transition-colors duration-300">
      <Container className="flex items-center justify-between h-[72px]">
        <div className="flex items-center gap-6 h-full">
          {/* Brand Logo */}
          <Logo size="sm" />

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-3.5 h-full">
            {NAV_ITEMS.map((item, index) => {
              const isActive = pathname === item.href;
              const linkEl = item.submenu ? (
                <div key={item.label} className="group h-full flex items-center">
                  <button className="font-sans text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-navy hover:text-gold transition-colors flex items-center gap-1 cursor-pointer h-full">
                    {item.label}
                    <span className="text-[0.5rem] transition-transform duration-200 group-hover:rotate-180">▼</span>
                  </button>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block bg-ivory border border-ivory-dark/45 p-6 rounded-sm shadow-premium w-[75vw] max-w-[900px] z-50">
                    <div className="grid grid-cols-3 gap-4">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="p-3 border border-ivory-dark/40 hover:border-gold/60 rounded-xs bg-ivory-light hover:bg-ivory transition-all duration-200 group flex flex-col justify-center min-h-[70px] text-left"
                        >
                          <span className="font-serif text-xs font-semibold text-navy group-hover:text-gold transition-colors">
                            {sub.label}
                          </span>
                          <span className="font-sans text-[0.6rem] text-slate-muted uppercase tracking-wider mt-0.5">
                            Explore details &rarr;
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-sans text-[0.7rem] uppercase tracking-[0.2em] font-semibold transition-colors h-full flex items-center ${
                    isActive ? "text-gold" : "text-navy hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
              );

              return (
                <React.Fragment key={item.label || item.href}>
                  {index > 0 && (
                    <span className="text-[0.65rem] text-navy/15 select-none font-light">|</span>
                  )}
                  {linkEl}
                </React.Fragment>
              );
            })}
          </nav>
        </div>

        {/* Desktop CTA */}
        <div className="hidden xl:block">
          <Button href="/contact" variant="outline-gold" size="sm" className="whitespace-nowrap">
            Talk to a Sourcing Expert
          </Button>
        </div>

        {/* Mobile Navigation Toggle (Hamburger) */}
        <div className="flex xl:hidden items-center gap-4">
          <Button href="/contact" variant="outline-gold" size="sm" className="hidden sm:inline-flex whitespace-nowrap">
            Talk to a Sourcing Expert
          </Button>
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="p-2 -mr-2 text-navy hover:text-gold transition-colors cursor-pointer"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          aria-label="Mobile Navigation"
          className="xl:hidden w-full border-t border-ivory-dark/40 bg-ivory overflow-y-auto max-h-[calc(100vh-5rem)]"
        >
          <Container className="py-6 flex flex-col gap-5">
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => {
                if (item.submenu) {
                  return (
                    <div key={item.label} className="flex flex-col gap-2">
                      <span className="font-sans text-xs uppercase tracking-widest font-semibold text-gold py-1 border-b border-ivory-dark/20">
                        {item.label}
                      </span>
                      <div className="flex flex-col gap-2 pl-4">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={closeMenu}
                            className="font-sans text-[0.7rem] uppercase tracking-wider text-navy hover:text-gold py-0.5"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`font-sans text-xs uppercase tracking-widest font-semibold py-1 border-b border-ivory-dark/20 ${
                      isActive ? "text-gold" : "text-navy"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="pt-2">
              <Button href="/contact" size="md" className="w-full" onClick={closeMenu}>
                Talk to a Sourcing Expert
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
