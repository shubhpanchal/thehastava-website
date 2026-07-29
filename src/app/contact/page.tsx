"use client";

import React, { useState } from "react";
import { Container } from "@/components/shared/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FAQ_ITEMS = [
  {
    q: "What is your minimum order quantity (MOQ)?",
    a: "Our MOQs vary by craft category. For smaller metalware or pottery items, it typically starts at 100 units. For large-scale wood furniture or complex custom carvings, we support custom batch runs starting at 20 units.",
  },
  {
    q: "Do you offer custom designs and private labeling?",
    a: "Yes. Over 60% of our business involves custom designs. You provide specifications, drawings, or reference samples, and our artisan clusters create custom counter-samples for your approval before bulk production.",
  },
  {
    q: "How do you guarantee quality and authenticity?",
    a: "We have local quality inspectors situated in main artisan clusters. We perform on-site inspections of raw materials, mid-term assembly, and final packing. Every shipment of certified items includes official GI-tag origin registry papers.",
  },
  {
    q: "What are your standard shipping terms and lead times?",
    a: "We default to FOB (Free On Board) Indian ports (typically Mundra or Mumbai) or CIF terms. Average lead times range between 45 to 75 days depending on the craft complexity and order volume.",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    category: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setSubmitted(true);
    setFormState({ name: "", company: "", email: "", category: "", message: "" });
  };

  return (
    <div className="bg-ivory py-16 sm:py-24">
      {/* Page Header */}
      <Container className="max-w-4xl text-center flex flex-col gap-4 mb-16 sm:mb-20">
        <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold">
          Get In Touch
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-navy leading-[1.1] tracking-tight">
          Sourcing Inquiry
        </h1>
        <div className="h-0.5 w-16 bg-gold/50 mx-auto mt-2" />
      </Container>

      {/* Main Grid */}
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start mb-20">
        
        {/* Left Column: Direct Coordinates & Map Placeholder */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-2xl text-navy">Global Sourcing Desk</h2>
            <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed">
              Have specific catalog requirements or want to initiate a custom development project? Contact our trade office directly.
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t border-ivory-dark/65 pt-6 font-sans text-xs sm:text-sm text-navy">
            <div className="flex flex-col gap-1">
              <span className="text-[0.65rem] uppercase tracking-wider font-bold text-gold">Business Inquiries</span>
              <span className="font-medium">sourcing@hastava.com</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[0.65rem] uppercase tracking-wider font-bold text-gold">Instagram</span>
              <a href="https://instagram.com/the_hastava" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-gold transition-colors">@the_hastava</a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[0.65rem] uppercase tracking-wider font-bold text-gold">Trade Office Address</span>
              <span className="font-medium text-slate-muted">
                12, Heritage Arcade, Sector 5, <br />
                Malviya Nagar, Jaipur, Rajasthan - 302017, India
              </span>
            </div>
          </div>

          {/* Map / Office Placement Placeholder */}
          <div className="relative aspect-video border border-ivory-dark rounded-sm bg-ivory-light flex items-center justify-center p-6 text-center group">
            <div className="absolute inset-2 border border-dashed border-gold/15" />
            <div className="z-10 flex flex-col gap-2">
              <span className="font-serif text-sm font-medium text-navy">Jaipur Sourcing Office</span>
              <span className="font-sans text-[0.65rem] uppercase tracking-wider text-slate-muted">Central Trade Desk location</span>
            </div>
          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="lg:col-span-7 bg-ivory-light border border-ivory-dark p-6 sm:p-10 rounded-sm shadow-premium">
          <h2 className="font-serif text-xl sm:text-2xl text-navy mb-6">Commercial Inquiry Form</h2>
          
          {submitted ? (
            <div className="p-6 bg-gold/10 border border-gold/30 text-navy rounded-sm flex flex-col gap-2">
              <h3 className="font-serif text-lg font-semibold text-gold">Inquiry Submitted</h3>
              <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed">
                Thank you for reaching out. Our B2B sourcing representative will review your request and follow up via email within 24 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
                <Input
                  label="Company Name"
                  required
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                />
              </div>
              <Input
                label="Corporate Email Address"
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              />
              
              {/* Selective Category */}
              <div className="flex flex-col gap-1.5">
                <label className="font-sans text-xs font-semibold uppercase tracking-widest text-slate">
                  Craft Category interest *
                </label>
                <select
                  required
                  value={formState.category}
                  onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                  className="w-full font-sans text-sm text-navy placeholder:text-slate-muted/50 px-4 py-3 bg-ivory-light border border-ivory-dark rounded-sm focus:border-gold focus:ring-1 focus:ring-gold/20 focus:outline-none transition-all duration-300"
                >
                  <option value="">Select a craft category...</option>
                  <option value="ceramics">Jaipur Blue Pottery (Ceramics)</option>
                  <option value="metal">Dhokra Art & Brassware (Metals)</option>
                  <option value="textiles">Pashmina & Handloom (Textiles)</option>
                  <option value="wood">Saharanpur Carvings (Woodware)</option>
                  <option value="other">Multiple Categories / General Inquiry</option>
                </select>
              </div>

              <Input
                multiline
                rows={5}
                label="Sourcing Specifications"
                required
                helperText="Please include target quantities, design details, or certification requests."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />

              <div className="pt-2">
                <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                  Submit Inquiry
                </Button>
              </div>
            </form>
          )}
        </div>

      </Container>

      {/* Accessible native details/summary FAQ accordion */}
      <Container className="max-w-3xl">
        <h2 className="font-serif text-2xl text-navy text-center mb-8 sm:mb-12">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.q} className="group border border-ivory-dark rounded-sm bg-ivory-light p-5 outline-none [&_summary::-webkit-details-marker]:hidden">
              <summary className="font-serif text-navy font-semibold text-sm sm:text-base cursor-pointer list-none flex items-center justify-between gap-4 outline-none">
                <span>{item.q}</span>
                <span className="flex-shrink-0 transition-transform duration-300 group-open:rotate-180 text-gold text-xl font-light">
                  ↓
                </span>
              </summary>
              <div className="mt-3 pt-3 border-t border-ivory-dark/40 font-sans text-xs sm:text-sm text-slate-muted leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </Container>
    </div>
  );
}
