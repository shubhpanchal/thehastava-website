"use client";

import React, { useState } from "react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { BUYER_PROFILES } from "@/config/buyerProfiles";
import { COUNTRIES_INTELLIGENCE } from "@/config/countries";
import { TOOLKIT_ITEMS } from "@/config/toolkit";

export default function BuyersPage() {
  const [activeProfile, setActiveProfile] = useState(BUYER_PROFILES[0].id);
  const [activeCountry, setActiveCountry] = useState(COUNTRIES_INTELLIGENCE[0].id);

  const selectedProfile = BUYER_PROFILES.find((p) => p.id === activeProfile) || BUYER_PROFILES[0];
  const selectedCountry = COUNTRIES_INTELLIGENCE.find((c) => c.id === activeCountry) || COUNTRIES_INTELLIGENCE[0];

  return (
    <div className="bg-ivory py-16 sm:py-24">
      {/* Page Hero */}
      <Container className="max-w-4xl text-center flex flex-col gap-4 mb-20">
        <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold">
          Global Sourcing Portal
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-navy leading-tight">
          Importers & Trade Partners Hub
        </h1>
        <div className="h-0.5 w-16 bg-gold/50 mx-auto mt-2" />
        <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed max-w-xl mx-auto mt-2">
          Verify export compliance documents, examine shipping transit times, and browse our sourcing toolkit for global procurement.
        </p>
      </Container>

      {/* Section 1: Buyer Qualification Cards */}
      <Container className="mb-24 flex flex-col gap-10">
        <div className="flex flex-col items-center text-center gap-2 max-w-2xl mx-auto">
          <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Buyer Profile Matching
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-navy">
            Sourcing Solutions by Business Profile
          </h2>
          <div className="h-0.5 w-12 bg-gold/50 mt-1" />
          <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed mt-2">
            Select your business profile to view recommended crafts, required auditing services, and custom MOQs.
          </p>
        </div>

        {/* Profile Card Tabs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {BUYER_PROFILES.map((profile) => (
            <button
              key={profile.id}
              onClick={() => setActiveProfile(profile.id)}
              className={`p-4 text-center border rounded-xs font-serif text-sm sm:text-base font-semibold cursor-pointer transition-all duration-300 ${
                activeProfile === profile.id
                  ? "bg-navy-dark border-navy-dark text-white shadow-premium"
                  : "bg-ivory-light border-ivory-dark text-navy hover:border-gold/60"
              }`}
            >
              {profile.title}
            </button>
          ))}
        </div>

        {/* Dynamic Qualification Details Card */}
        <div className="bg-ivory-light border border-ivory-dark p-6 sm:p-10 rounded-sm shadow-premium grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <h3 className="font-serif text-xl sm:text-2xl text-navy font-semibold">
              {selectedProfile.title} Procurement Strategy
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed">
              {selectedProfile.description}
            </p>
            <div className="border-t border-ivory-dark/65 pt-4 mt-2 flex flex-col gap-1.5 font-sans text-xs sm:text-sm">
              <span className="font-bold text-gold uppercase text-[0.65rem] tracking-wider">Target Benefit</span>
              <p className="text-navy font-medium leading-relaxed">{selectedProfile.keyBenefit}</p>
            </div>
            <div className="flex flex-col gap-1.5 font-sans text-xs sm:text-sm">
              <span className="font-bold text-gold uppercase text-[0.65rem] tracking-wider">MOQ Guideline</span>
              <p className="text-navy font-medium leading-relaxed">{selectedProfile.moqGuideline}</p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-ivory border border-ivory-dark p-6 rounded-xs flex flex-col gap-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold">
              Tailored Sourcing Coordinates
            </h4>
            <div className="flex flex-col gap-1">
              <span className="font-sans text-[0.65rem] uppercase tracking-widest text-slate font-semibold">Recommended Crafts</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {selectedProfile.targetCrafts.map((craft) => (
                  <span key={craft} className="font-sans text-[0.65rem] uppercase font-bold bg-ivory-dark/45 border border-ivory-dark text-navy px-2 py-0.5 rounded-xs">
                    {craft.replace("-", " ")}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-sans text-[0.65rem] uppercase tracking-widest text-slate font-semibold">Suggested Services</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {selectedProfile.targetServices.map((srv) => (
                  <span key={srv} className="font-sans text-[0.65rem] uppercase font-bold bg-gold/10 border border-gold/30 text-gold px-2 py-0.5 rounded-xs">
                    {srv.replace("-", " ")}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Section 2: Country Intelligence Module */}
      <Container className="mb-24 flex flex-col gap-10">
        <div className="flex flex-col items-center text-center gap-2 max-w-2xl mx-auto">
          <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Global Trade Intelligence
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-navy">
            Country Sourcing Guidelines
          </h2>
          <div className="h-0.5 w-12 bg-gold/50 mt-1" />
          <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed mt-2">
            Review specific import documentation, customs regulations, and transit times for your destination.
          </p>
        </div>

        {/* Country Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {COUNTRIES_INTELLIGENCE.map((country) => (
            <button
              key={country.id}
              onClick={() => setActiveCountry(country.id)}
              className={`px-4 py-2 border rounded-xs font-sans text-xs uppercase tracking-wider font-bold cursor-pointer transition-all duration-300 ${
                activeCountry === country.id
                  ? "bg-gold border-gold text-navy shadow-premium"
                  : "bg-ivory-light border-ivory-dark text-navy hover:border-gold/60"
              }`}
            >
              {country.name}
            </button>
          ))}
        </div>

        {/* Country Details Box */}
        <div className="bg-ivory-light border border-ivory-dark p-6 sm:p-10 rounded-sm shadow-premium grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-xl text-navy font-semibold">
              Importing to the {selectedCountry.name}
            </h3>
            <div className="flex flex-col gap-1 font-sans text-xs sm:text-sm mt-2">
              <span className="font-bold text-gold uppercase text-[0.65rem] tracking-wider">Shipping Pathways</span>
              <ul className="list-disc pl-4 text-slate-muted flex flex-col gap-1 mt-1">
                {selectedCountry.shippingModes.map((mode) => (
                  <li key={mode}>{mode}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-1 font-sans text-xs sm:text-sm">
              <span className="font-bold text-gold uppercase text-[0.65rem] tracking-wider">Estimated Transit Time</span>
              <p className="text-navy font-semibold">{selectedCountry.transitTime}</p>
            </div>
            <div className="flex flex-col gap-1 font-sans text-xs sm:text-sm">
              <span className="font-bold text-gold uppercase text-[0.65rem] tracking-wider">Customs Duties & Tariffs</span>
              <p className="text-slate-muted leading-relaxed">{selectedCountry.importDutyGuideline}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5 font-sans text-xs sm:text-sm">
              <span className="font-bold text-gold uppercase text-[0.65rem] tracking-wider">Mandatory Certificates</span>
              <ul className="list-disc pl-4 text-slate-muted flex flex-col gap-1 mt-1">
                {selectedCountry.documentationRequired.map((doc) => (
                  <li key={doc}>{doc}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-1 font-sans text-xs sm:text-sm">
              <span className="font-bold text-gold uppercase text-[0.65rem] tracking-wider">Biosecurity & Customs Notes</span>
              <p className="text-slate-muted leading-relaxed mt-1">{selectedCountry.customsNotes}</p>
            </div>
            <div className="flex flex-col gap-1.5 font-sans text-xs sm:text-sm">
              <span className="font-bold text-gold uppercase text-[0.65rem] tracking-wider">Port Recommendations</span>
              <ul className="list-disc pl-4 text-navy font-medium flex flex-col gap-1 mt-1">
                {selectedCountry.recommendations.map((rec) => (
                  <li key={rec}>{rec}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* Section 3: Buyer Sourcing Toolkit */}
      <Container className="mb-20 flex flex-col gap-10">
        <div className="flex flex-col items-center text-center gap-2 max-w-2xl mx-auto">
          <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
            B2B Procurement Toolkit
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-navy">
            Educational Sourcing Reference Guides
          </h2>
          <div className="h-0.5 w-12 bg-gold/50 mt-1" />
          <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed mt-2">
            Reference table dimensions, container specifications, and export milestones.
          </p>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {TOOLKIT_ITEMS.map((item) => (
            <details
              key={item.id}
              className="group border border-ivory-dark rounded-sm bg-ivory-light p-6 outline-none [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="font-serif text-navy font-semibold text-base sm:text-lg cursor-pointer list-none flex items-center justify-between gap-4 outline-none">
                <div className="flex flex-col text-left">
                  <span>{item.title}</span>
                  <span className="font-sans text-xs text-slate-muted font-normal mt-0.5">{item.subtitle}</span>
                </div>
                <span className="flex-shrink-0 transition-transform duration-300 group-open:rotate-180 text-gold text-xl font-light">
                  ↓
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-ivory-dark/40 flex flex-col gap-4">
                <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed">
                  {item.content}
                </p>

                {item.tableData && (
                  <div className="overflow-x-auto border border-ivory-dark rounded-xs">
                    <table className="w-full text-left font-sans text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="bg-ivory border-b border-ivory-dark text-navy font-semibold">
                          {item.tableData.headers.map((h) => (
                            <th key={h} className="p-3 text-[0.65rem] uppercase tracking-wider">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-ivory-dark/60 text-slate-muted bg-ivory-light">
                        {item.tableData.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-ivory-dark/15">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-3 leading-relaxed">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>
      </Container>

      {/* Conversion CTAs */}
      <Container className="max-w-3xl text-center flex flex-col items-center gap-6 mt-16 pt-16 border-t border-ivory-dark/65">
        <h2 className="font-serif text-2xl sm:text-3xl text-navy">Ready to Sourced Handcrafted Lots?</h2>
        <p className="font-sans text-xs sm:text-sm text-slate-muted max-w-lg leading-relaxed">
          Submit customized RFQs with packing preferences, download catalog documents, or chat directly with our Indian sourcing coordinators.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
          <Button href="/catalog-request" variant="primary" size="lg" className="w-full sm:w-auto">
            Request Wholesale Catalog
          </Button>
          <Button href="/contact" variant="outline-gold" size="lg" className="w-full sm:w-auto">
            Submit Sourcing RFQ
          </Button>
        </div>
      </Container>
    </div>
  );
}
