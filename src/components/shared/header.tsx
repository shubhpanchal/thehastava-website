import React from "react";
import Link from "next/link";
import { Container } from "./container";
import { Button } from "../ui/button";

const NAV = [
  ["Solutions", "/#solutions"],
  ["Case Studies", "/case-studies"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#061326]/90 text-white backdrop-blur-xl">
      <Container className="flex h-[76px] items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" aria-label="HASTAVA home">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-blue-600 to-cyan-400 shadow-[0_8px_25px_rgba(37,99,235,.28)]">
            <span className="text-lg font-black tracking-[-0.15em] text-white">H</span>
          </div>
          <div className="leading-none">
            <div className="text-[1.15rem] font-bold tracking-[0.08em]">HASTAVA</div>
            <div className="mt-1 text-[8px] font-semibold tracking-[0.22em] text-slate-400">AI • DATA • AUTOMATION</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden text-sm font-medium text-slate-300 transition hover:text-white sm:block">
            Book a Call
          </Link>
          <Button href="/contact" size="sm" className="border-0 bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 normal-case tracking-normal text-white hover:text-white">
            Talk to Hastava
          </Button>
        </div>
      </Container>
    </header>
  );
}
