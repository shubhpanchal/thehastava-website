"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/utils/analytics";

export function StickyCTAs() {
  return (
    <>
      {/* Desktop Sticky Sidebar conversion elements */}
      <div className="hidden xl:flex fixed right-6 bottom-8 flex-col gap-3 z-40 items-end">
        
        {/* Widget 1: Catalog */}
        <Link 
          href="/catalog-request"
          onClick={() => trackEvent("catalog_fab_clicked")}
          className="bg-gold text-navy font-sans text-[0.65rem] uppercase tracking-widest font-bold px-4 py-3 shadow-premium rounded-sm hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
        >
          <span>Catalog</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
          </svg>
        </Link>

        {/* Widget 2: RFQ */}
        <Link 
          href="/contact"
          onClick={() => trackEvent("rfq_fab_clicked")}
          className="bg-navy-dark text-white font-sans text-[0.65rem] uppercase tracking-widest font-bold px-4 py-3 shadow-premium rounded-sm border border-navy-light/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
        >
          <span>Request RFQ</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.375M9 18h3.375m1.5-12h-.008v.008H13.5V6Zm-3 0h-.008v.008h.008V6Zm-3 0H7.5v.008h.008V6Zm-.375 0h.008v.008H4.125V6Zm0 0h.008v.008H4.125V6Zm-.375 0H3h.008v.008H3V6Zm18 3.75V19.5a2.25 2.25 0 0 1-2.25 2.25H4.125A2.25 2.25 0 0 1 2 19.5V4.125C2 3.504 2.504 3 3.125 3h17.75c.621 0 1.125.504 1.125 1.125v5.625Z" />
          </svg>
        </Link>

        {/* Widget 3: Live Hotline */}
        <a 
          href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_clicked")}
          className="bg-[#25D366] text-white font-sans text-[0.65rem] uppercase tracking-widest font-bold px-4 py-3 shadow-premium rounded-sm hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
        >
          <span>Sourcing Chat</span>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.59 1.973 14.113.95 11.49.95c-5.438 0-9.863 4.373-9.867 9.801-.001 1.73.475 3.424 1.378 4.9l-.993 3.626 3.73-.974z" />
          </svg>
        </a>

      </div>

      {/* Mobile Floating Action Button (Sticky bottom bar) */}
      <div className="xl:hidden fixed bottom-0 left-0 w-full bg-ivory border-t border-ivory-dark/45 grid grid-cols-3 z-40 shadow-premium h-14 items-center">
        
        {/* FAB 1: WhatsApp */}
        <a 
          href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_clicked")}
          className="flex flex-col items-center justify-center h-full border-r border-ivory-dark/40 font-sans text-[0.55rem] uppercase tracking-wider font-bold text-navy hover:text-gold transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#25D366] mb-0.5">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.59 1.973 14.113.95 11.49.95c-5.438 0-9.863 4.373-9.867 9.801-.001 1.73.475 3.424 1.378 4.9l-.993 3.626 3.73-.974z" />
          </svg>
          <span>WhatsApp</span>
        </a>

        {/* FAB 2: Catalog */}
        <Link 
          href="/catalog-request"
          onClick={() => trackEvent("catalog_fab_clicked")}
          className="flex flex-col items-center justify-center h-full border-r border-ivory-dark/40 font-sans text-[0.55rem] uppercase tracking-wider font-bold text-navy hover:text-gold transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gold mb-0.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
          </svg>
          <span>Catalog</span>
        </Link>

        {/* FAB 3: RFQ */}
        <Link 
          href="/contact"
          onClick={() => trackEvent("rfq_fab_clicked")}
          className="flex flex-col items-center justify-center h-full font-sans text-[0.55rem] uppercase tracking-wider font-bold text-navy hover:text-gold transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-navy mb-0.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.375M9 18h3.375m1.5-12h-.008v.008H13.5V6Zm-3 0h-.008v.008h.008V6Zm-3 0H7.5v.008h.008V6Zm-.375 0h.008v.008H4.125V6Zm0 0h.008v.008H4.125V6Zm-.375 0H3h.008v.008H3V6Zm18 3.75V19.5a2.25 2.25 0 0 1-2.25 2.25H4.125A2.25 2.25 0 0 1 2 19.5V4.125C2 3.504 2.504 3 3.125 3h17.75c.621 0 1.125.504 1.125 1.125v5.625Z" />
          </svg>
          <span>RFQ</span>
        </Link>

      </div>
    </>
  );
}
