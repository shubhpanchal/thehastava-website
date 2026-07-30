import React from "react";
import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./logo";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Crafts", href: "/crafts" },
  { label: "GI Tagged Products", href: "/gi-tagged" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Why Hastava", href: "/why-hastava" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const CRAFTS = [
  { label: "Dhokra Art", href: "/crafts/dhokra-art" },
  { label: "Blue Pottery", href: "/crafts/blue-pottery" },
  { label: "Madhubani Paintings", href: "/crafts/madhubani-paintings" },
  { label: "Pashmina & Textiles", href: "/crafts/pashmina-textiles" },
  { label: "Wood Carving", href: "/crafts/wood-carving" },
  { label: "Brass & Metalware", href: "/crafts/brass-metalware" },
  { label: "View All Crafts", href: "/crafts" },
];

const BUYERS = [
  { label: "Sourcing Support", href: "/sourcing-support" },
  { label: "Private Label", href: "/private-label" },
  { label: "Quality Assurance", href: "/quality-assurance" },
  { label: "Export Support", href: "/export-support" },
  { label: "FAQ", href: "/faq" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-ivory/80 pt-16 pb-8 border-t border-navy-light/20">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-navy-light/30">
        
        {/* Brand Information */}
        <div className="lg:col-span-1 flex flex-col gap-4">
          <Logo variant="full" light={true} size="md" />
          <p className="font-sans text-[0.75rem] leading-relaxed text-ivory/60 mt-2 max-w-xs">
            Connecting India&apos;s rich artisan heritage and GI-tagged crafts with wholesalers, importers, and global brands worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold">
            Quick Links
          </h4>
          <nav className="flex flex-col gap-2.5">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-sans text-xs text-ivory/60 hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Our Crafts */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold">
            Our Crafts
          </h4>
          <nav className="flex flex-col gap-2.5">
            {CRAFTS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-sans text-xs text-ivory/60 hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* For Buyers */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold">
            For Buyers
          </h4>
          <nav className="flex flex-col gap-2.5">
            {BUYERS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-sans text-xs text-ivory/60 hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold">
            Contact Us
          </h4>
          <div className="flex flex-col gap-3 font-sans text-xs text-ivory/60">
            <p className="flex items-start gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-0.5 text-gold flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.806-5.194-4.177-7-7l1.293-.97c.362-.271.528-.733.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <a href="tel:+919762753259" className="hover:text-gold transition-colors">+91 97627 53259</a>
            </p>
            <p className="flex items-start gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-0.5 text-gold flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <a href="mailto:hello@hastava.com" className="hover:text-gold transition-colors">hello@hastava.com</a>
            </p>
            <p className="flex items-start gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 text-gold flex-shrink-0">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <a href="https://instagram.com/the_hastava" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">@the_hastava</a>
            </p>
            <p className="flex items-start gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-0.5 text-gold flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span>Chavhan Nivas, near sai kadba kutti, Kawade Nagar, Lane no1, New Sangvi, Pune 411027</span>
            </p>
          </div>
        </div>

      </Container>

      {/* Copyright and Legal Section */}
      <Container className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-sans text-[0.7rem] text-ivory/40">
          &copy; {currentYear} HASTAVA. Crafted by Hands, Delivered with Pride. All Rights Reserved.
        </p>
        <div className="flex items-center gap-6 font-sans text-[0.7rem] text-ivory/40">
          <Link href="/privacy-policy" className="hover:text-gold transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-gold transition-colors">
            Terms & Conditions
          </Link>
        </div>
      </Container>
    </footer>
  );
}
