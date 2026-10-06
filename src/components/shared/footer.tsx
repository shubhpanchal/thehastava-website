import Link from "next/link";
import { Container } from "./container";
import { siteConfig } from "@/config/site";

const links = [
  ["Solutions", "/#solutions"],
  ["Case Studies", "/case-studies"],
  ["About", "/about"],
  ["Contact", "/contact"],
  ["Privacy", "/privacy-policy"],
  ["Terms", "/terms-and-conditions"],
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_.8fr_.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-blue-600 to-cyan-400">
              <span className="text-lg font-black tracking-[-0.15em] text-white">H</span>
            </div>
            <div>
              <div className="text-lg font-bold tracking-[0.08em] text-slate-950">HASTAVA</div>
              <div className="text-[8px] font-semibold tracking-[0.2em] text-slate-500">AI • DATA • AUTOMATION</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">
            Practical AI, data, and automation solutions for businesses that want to remove repetitive work and operate with better systems.
          </p>
          <div className="mt-5 text-sm font-medium text-slate-700">
            {siteConfig.address.full} · <a className="hover:text-blue-600" href={"mailto:" + siteConfig.email}>{siteConfig.email}</a>
          </div>
        </div>

        <div>
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Explore</div>
          <nav className="mt-4 flex flex-col gap-3">
            {links.slice(0, 4).map(([label, href]) => (
              <Link key={href} href={href} className="text-sm text-slate-600 transition hover:text-blue-600">{label}</Link>
            ))}
          </nav>
        </div>

        <div>
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Connect</div>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
            <a className="hover:text-blue-600" href={"mailto:" + siteConfig.email}>{siteConfig.email}</a>
            <a className="hover:text-blue-600" href={"tel:" + siteConfig.phoneClean}>{siteConfig.phone}</a>
            <Link className="hover:text-blue-600" href="/contact">Start a conversation →</Link>
          </div>
        </div>
      </Container>
      <div className="border-t border-slate-100">
        <Container className="flex flex-col gap-3 py-5 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} HASTAVA. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-and-conditions">Terms</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
