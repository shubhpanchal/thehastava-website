"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "../ui/button";

export function ExitIntentModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!siteConfig.exitIntentEnabled) return;

    // Check if dismissed in this session already
    const isDismissed = sessionStorage.getItem("hastava_exit_dismissed");
    if (isDismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves the top boundary of the viewport
      if (e.clientY < 20) {
        setIsVisible(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("hastava_exit_dismissed", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-navy-dark/65 backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="bg-ivory border border-ivory-dark p-6 sm:p-10 rounded-sm shadow-premium max-w-md w-full relative text-center flex flex-col items-center gap-6">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute right-4 top-4 text-navy/40 hover:text-gold transition-colors text-xl font-light cursor-pointer"
          aria-label="Close modal"
        >
          &times;
        </button>

        <span className="font-sans text-[0.65rem] uppercase tracking-[0.25em] text-gold font-bold">
          Exclusive Trade Access
        </span>

        <h3 className="font-serif text-2xl sm:text-3xl text-navy leading-snug">
          Download the B2B Sourcing Guide & Catalog
        </h3>

        <div className="h-0.5 w-12 bg-gold/50" />

        <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed">
          Access complete Geographical Indication (GI) certification guidelines, carton packaging drops sheets, and direct-trade pricing schedules.
        </p>

        {/* Action Triggers */}
        <div className="flex flex-col gap-3 w-full">
          <Link href="/catalog-request" onClick={handleClose} className="w-full">
            <Button variant="primary" className="w-full py-3">
              Request Wholesale Catalog
            </Button>
          </Link>
          <Link href="/contact" onClick={handleClose} className="w-full">
            <Button variant="outline-gold" className="w-full py-3">
              Discuss Custom Order (RFQ)
            </Button>
          </Link>
          <button 
            onClick={handleClose}
            className="font-sans text-[0.65rem] uppercase tracking-widest font-bold text-navy/55 hover:text-gold transition-colors mt-2 cursor-pointer"
          >
            No thanks, I will keep browsing
          </button>
        </div>

      </div>
    </div>
  );
}
