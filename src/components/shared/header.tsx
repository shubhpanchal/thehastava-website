"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./logo";
import { Button } from "../ui/button";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Crafts", href: "/crafts" },
  { label: "GI Tagged Products", href: "/gi-tagged" },
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
      <Container className="flex items-center justify-between h-20">
        <div className="flex items-center gap-12">
          {/* Brand Logo */}
          <Logo size="sm" />

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-sans text-[0.7rem] uppercase tracking-[0.2em] font-semibold transition-colors ${
                    isActive
                      ? "text-gold"
                      : "text-navy hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Desktop CTA */}
        <div className="hidden xl:block">
          <Button href="/contact" size="sm">
            Get In Touch
          </Button>
        </div>

        {/* Mobile Navigation Toggle (Hamburger) */}
        <div className="flex xl:hidden items-center gap-4">
          <Button href="/contact" size="sm" className="hidden sm:inline-flex">
            Get In Touch
          </Button>
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="p-2 text-navy hover:text-gold rounded-xs transition-colors duration-200"
          >
            {isMenuOpen ? (
              // Close Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Panel (Without animations) */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          aria-label="Mobile Navigation"
          className="xl:hidden w-full border-t border-ivory-dark/40 bg-ivory"
        >
          <Container className="py-6 flex flex-col gap-5">
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => {
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
                Get In Touch
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
