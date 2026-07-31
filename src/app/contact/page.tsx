"use client";

import React, { useState } from "react";
import { Container } from "@/components/shared/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/utils/analytics";

const FAQ_ITEMS = [
  {
    q: "How does the RFQ process work?",
    a: "After you submit this RFQ, our B2B team reviews the specifications, matches your project with verified artisan cooperatives in India, and drafts a custom pricing quote with packaging and shipping estimations.",
  },
  {
    q: "Do you support small test batches?",
    a: "Yes. Sourcing samples and pre-production prototypes do not require meeting bulk MOQs. We encourage sample testing before locking in full containers.",
  },
  {
    q: "Can we submit our own CAD drawings for custom designs?",
    a: "Absolutely. Under our OEM Manufacturing service, we sign NDAs and translate your sketches or CAD models into physical master molds and finished samples.",
  },
  {
    q: "How long does it take to receive a quote?",
    a: "We review and send initial estimates and feasibility evaluations for all qualified RFQs within 24 to 48 business hours.",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    category: "",
    craft: "",
    serviceRequired: "",
    businessType: "",
    country: "",
    quantity: "",
    packagingPreference: "",
    timeline: "",
    budget: "",
    message: "",
    name: "",
    company: "",
    email: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rfqRef, setRfqRef] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Full name is required";
    if (!formState.company.trim()) newErrors.company = "Company name is required";
    if (!formState.email.trim()) {
      newErrors.email = "Corporate email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid corporate email address";
    }
    if (!formState.category) newErrors.category = "Please select a product category";
    if (!formState.craft) newErrors.craft = "Please select a craft of interest";
    if (!formState.serviceRequired) newErrors.serviceRequired = "Please select a required service";
    if (!formState.businessType) newErrors.businessType = "Please select your business type";
    if (!formState.country.trim()) newErrors.country = "Destination country is required";
    if (!formState.quantity.trim()) newErrors.quantity = "Estimated quantity is required";
    if (!formState.packagingPreference) newErrors.packagingPreference = "Please select a packaging preference";
    if (!formState.timeline) newErrors.timeline = "Please select your target timeline";
    if (!formState.message.trim()) newErrors.message = "Sourcing notes/specifications are required";
    return newErrors;
  };

  const [hasStartedTracking, setHasStartedTracking] = useState(false);

  const handleStartTracking = () => {
    if (!hasStartedTracking) {
      trackEvent("rfq_started");
      setHasStartedTracking(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Generate client-side RFQ reference ID
    const year = new Date().getFullYear();
    const month = String(new Date().getMonth() + 1).padStart(2, "0");
    const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
    const referenceId = `RFQ-${year}${month}-${rand}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setRfqRef(referenceId);
      trackEvent("rfq_submitted", {
        rfqId: referenceId,
        category: formState.category,
        craft: formState.craft,
        quantity: formState.quantity,
        businessType: formState.businessType,
        country: formState.country,
      });
    }, 1200);
  };

  return (
    <div className="bg-ivory py-16 sm:py-24">
      {/* Page Header */}
      <Container className="max-w-4xl text-center flex flex-col gap-4 mb-16 sm:mb-20">
        <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold">
          Lead Acquisition
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-navy leading-[1.1] tracking-tight">
          Request for Quotation (RFQ)
        </h1>
        <div className="h-0.5 w-16 bg-gold/50 mx-auto mt-2" />
        <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed max-w-xl mx-auto mt-2">
          Submit your product specifications, target volumes, and custom packing instructions to receive a wholesale quote.
        </p>
      </Container>

      {/* Main Grid */}
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start mb-20">
        
        {/* Left Column: Direct Coordinates & Sales SLA */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-2xl text-navy">B2B Sourcing Parameters</h2>
            <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed">
              We consolidate multiple handicraft categories directly at exit ports in India, verifying all legal timber certificates, moisture limits, and AQL quality logs.
            </p>
            <ul className="flex flex-col gap-3 font-sans text-xs sm:text-sm text-slate-muted leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold mr-1">✓</span>
                <span><strong>AQL 2.5 Audits:</strong> On-site inspection logs and moisture test reports included with every shipment.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold mr-1">✓</span>
                <span><strong>Palletized Logistics:</strong> Custom ISPM 15 fumigated pallet wrapping and port clearance documentation.</span>
              </li>
            </ul>
          </div>

          <div className="bg-ivory-light border border-ivory-dark p-5 rounded-xs flex flex-col gap-2">
            <h3 className="font-serif text-sm font-semibold text-navy">Response Commitment</h3>
            <p className="font-sans text-xs text-slate-muted leading-relaxed">
              Initial B2B estimates and feasibility evaluations are issued within **{siteConfig.responseSla}**.
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t border-ivory-dark/65 pt-6 font-sans text-xs sm:text-sm text-navy">
            <div className="flex flex-col gap-1">
              <span className="text-[0.65rem] uppercase tracking-wider font-bold text-gold">Sourcing Desk Email</span>
              <a href={`mailto:${siteConfig.email}`} className="font-medium hover:text-gold transition-colors">{siteConfig.email}</a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[0.65rem] uppercase tracking-wider font-bold text-gold">Direct Phone Coordinates</span>
              <a href={`tel:${siteConfig.phoneClean}`} className="font-medium hover:text-gold transition-colors">{siteConfig.phone}</a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[0.65rem] uppercase tracking-wider font-bold text-gold">WhatsApp Sourcing Hotline</span>
              <a 
                href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => trackEvent("whatsapp_clicked")}
                className="font-medium hover:text-gold transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: RFQ Form Container */}
        <div className="lg:col-span-7 bg-ivory-light border border-ivory-dark p-6 sm:p-10 rounded-sm shadow-premium">
          <h2 className="font-serif text-xl sm:text-2xl text-navy mb-6">RFQ Request Form</h2>
          
          {rfqRef ? (
            <div className="p-6 bg-gold/10 border border-gold/30 text-navy rounded-sm flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold">RFQ Reference Generated</span>
                <span className="font-mono text-2xl font-bold tracking-wider text-navy mt-1">{rfqRef}</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed">
                Thank you for submitting your Request for Quotation. A sourcing consultant has been assigned to your reference ID and will follow up with pricing worksheets and customs estimates within 24 hours.
              </p>
              <div className="pt-2">
                <Button onClick={() => setRfqRef(null)} variant="outline-gold" size="md">
                  Submit Another RFQ
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} onChange={handleStartTracking} className="flex flex-col gap-6" noValidate>
              
              {/* Product Specifications Section */}
              <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-gold border-b border-ivory-dark/40 pb-2">
                1. Product Specifications
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-xs font-semibold uppercase tracking-widest text-slate">
                    Product Category *
                  </label>
                  <select
                    disabled={isSubmitting}
                    value={formState.category}
                    onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                    className={`w-full font-sans text-sm text-navy px-4 py-3 bg-ivory-light border rounded-sm focus:border-gold focus:ring-1 focus:ring-gold/20 focus:outline-none transition-all duration-300 ${
                      errors.category ? "border-red-500!" : "border-ivory-dark"
                    }`}
                  >
                    <option value="">Select category...</option>
                    <option value="ceramics">Ceramics & Clayware</option>
                    <option value="metals">Metal casting & Alloys</option>
                    <option value="woodware">Woodware & Carved Panels</option>
                    <option value="textiles">Apparel & Fine Weaves</option>
                    <option value="other">Other / Mixed Lots</option>
                  </select>
                  {errors.category && <p className="font-sans text-xs text-red-500 mt-0.5">{errors.category}</p>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-xs font-semibold uppercase tracking-widest text-slate">
                    Heritage Craft *
                  </label>
                  <select
                    disabled={isSubmitting}
                    value={formState.craft}
                    onChange={(e) => setFormState({ ...formState, craft: e.target.value })}
                    className={`w-full font-sans text-sm text-navy px-4 py-3 bg-ivory-light border rounded-sm focus:border-gold focus:ring-1 focus:ring-gold/20 focus:outline-none transition-all duration-300 ${
                      errors.craft ? "border-red-500!" : "border-ivory-dark"
                    }`}
                  >
                    <option value="">Select craft...</option>
                    <option value="jaipur-blue-pottery">Jaipur Blue Pottery</option>
                    <option value="bastar-dhokra-art">Bastar Dhokra Art</option>
                    <option value="saharanpur-wood-carvings">Saharanpur Wood Carvings</option>
                    <option value="kashmiri-pashmina">Kashmiri Pashmina</option>
                    <option value="banarasi-silk-sarees">Banarasi Silk Sarees</option>
                    <option value="kutch-handloom-embroidery">Kutch Handloom Embroidery</option>
                    <option value="other">Other Heritage Craft</option>
                  </select>
                  {errors.craft && <p className="font-sans text-xs text-red-500 mt-0.5">{errors.craft}</p>}
                </div>
              </div>

              {/* Sourcing Requirements Section */}
              <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-gold border-b border-ivory-dark/40 pb-2 mt-2">
                2. Sourcing Requirements
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-xs font-semibold uppercase tracking-widest text-slate">
                    Service Required *
                  </label>
                  <select
                    disabled={isSubmitting}
                    value={formState.serviceRequired}
                    onChange={(e) => setFormState({ ...formState, serviceRequired: e.target.value })}
                    className={`w-full font-sans text-sm text-navy px-4 py-3 bg-ivory-light border rounded-sm focus:border-gold focus:ring-1 focus:ring-gold/20 focus:outline-none transition-all duration-300 ${
                      errors.serviceRequired ? "border-red-500!" : "border-ivory-dark"
                    }`}
                  >
                    <option value="">Select service...</option>
                    <option value="sourcing-support">Direct Sourcing Support</option>
                    <option value="private-label">Private Label Support</option>
                    <option value="oem-manufacturing">OEM Manufacturing</option>
                    <option value="quality-assurance">Quality Assurance Auditing</option>
                    <option value="export-documentation">Export Documentation Support</option>
                    <option value="packaging">Export Packaging Support</option>
                    <option value="logistics-coordination">Logistics Freight Coordination</option>
                    <option value="vendor-verification">Vendor Verification Audits</option>
                    <option value="product-development">Artisan Prototyping</option>
                  </select>
                  {errors.serviceRequired && <p className="font-sans text-xs text-red-500 mt-0.5">{errors.serviceRequired}</p>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-xs font-semibold uppercase tracking-widest text-slate">
                    Packaging Preference *
                  </label>
                  <select
                    disabled={isSubmitting}
                    value={formState.packagingPreference}
                    onChange={(e) => setFormState({ ...formState, packagingPreference: e.target.value })}
                    className={`w-full font-sans text-sm text-navy px-4 py-3 bg-ivory-light border rounded-sm focus:border-gold focus:ring-1 focus:ring-gold/20 focus:outline-none transition-all duration-300 ${
                      errors.packagingPreference ? "border-red-500!" : "border-ivory-dark"
                    }`}
                  >
                    <option value="">Select packaging...</option>
                    <option value="standard">Standard Double-Walled Cartons</option>
                    <option value="molded">Custom Molded Foam Contours</option>
                    <option value="honeycomb">Eco-Friendly Honeycomb wrap</option>
                    <option value="wooden">Padded Wooden Pallet Crates</option>
                    <option value="custom">Other Custom Specifications</option>
                  </select>
                  {errors.packagingPreference && <p className="font-sans text-xs text-red-500 mt-0.5">{errors.packagingPreference}</p>}
                </div>
              </div>

              {/* Order Logistics Section */}
              <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-gold border-b border-ivory-dark/40 pb-2 mt-2">
                3. Order Logistics & Budget
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                  label="Destination Country *"
                  required
                  disabled={isSubmitting}
                  error={errors.country}
                  value={formState.country}
                  onChange={(e) => setFormState({ ...formState, country: e.target.value })}
                />
                <Input
                  label="Estimated Order Volume (Units) *"
                  required
                  disabled={isSubmitting}
                  error={errors.quantity}
                  value={formState.quantity}
                  onChange={(e) => setFormState({ ...formState, quantity: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-xs font-semibold uppercase tracking-widest text-slate">
                    Target Delivery Timeline *
                  </label>
                  <select
                    disabled={isSubmitting}
                    value={formState.timeline}
                    onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                    className={`w-full font-sans text-sm text-navy px-4 py-3 bg-ivory-light border rounded-sm focus:border-gold focus:ring-1 focus:ring-gold/20 focus:outline-none transition-all duration-300 ${
                      errors.timeline ? "border-red-500!" : "border-ivory-dark"
                    }`}
                  >
                    <option value="">Select target timeline...</option>
                    <option value="immediate">Immediate (Next 30 Days)</option>
                    <option value="3months">Within 3 Months</option>
                    <option value="6months">Within 6 Months</option>
                    <option value="standing">Regular Standing Contract</option>
                  </select>
                  {errors.timeline && <p className="font-sans text-xs text-red-500 mt-0.5">{errors.timeline}</p>}
                </div>

                <Input
                  label="Target Sourcing Budget (USD, Optional)"
                  disabled={isSubmitting}
                  value={formState.budget}
                  onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                />
              </div>

              {/* Corporate Identity Section */}
              <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-gold border-b border-ivory-dark/40 pb-2 mt-2">
                4. Corporate Identity
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                  label="Full Name *"
                  required
                  disabled={isSubmitting}
                  error={errors.name}
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
                <Input
                  label="Company Name *"
                  required
                  disabled={isSubmitting}
                  error={errors.company}
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                  label="Corporate Email *"
                  type="email"
                  required
                  disabled={isSubmitting}
                  error={errors.email}
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />

                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-xs font-semibold uppercase tracking-widest text-slate">
                    Business Type *
                  </label>
                  <select
                    disabled={isSubmitting}
                    value={formState.businessType}
                    onChange={(e) => setFormState({ ...formState, businessType: e.target.value })}
                    className={`w-full font-sans text-sm text-navy px-4 py-3 bg-ivory-light border rounded-sm focus:border-gold focus:ring-1 focus:ring-gold/20 focus:outline-none transition-all duration-300 ${
                      errors.businessType ? "border-red-500!" : "border-ivory-dark"
                    }`}
                  >
                    <option value="">Select business type...</option>
                    <option value="importer">Global Importer</option>
                    <option value="wholesaler">Regional Wholesaler</option>
                    <option value="retail-chain">Retail Chain Buyer</option>
                    <option value="designer-architect">Interior Designer</option>
                    <option value="hospitality">Hotel & Hospitality Sourcing</option>
                    <option value="gifts">Corporate Gifting Agency</option>
                    <option value="marketplace">E-Commerce Marketplace Seller</option>
                    <option value="brand">Brand Owner (D2C)</option>
                  </select>
                  {errors.businessType && <p className="font-sans text-xs text-red-500 mt-0.5">{errors.businessType}</p>}
                </div>
              </div>

              <Input
                multiline
                rows={5}
                label="Sourcing Specifications & Notes *"
                required
                disabled={isSubmitting}
                error={errors.message}
                helperText="Detail target dimensions, wood moisture specifications, custom glazing shades, or labeling needs."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />

              <div className="pt-2">
                <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto" isLoading={isSubmitting}>
                  Request RFQ Quotation
                </Button>
              </div>
            </form>
          )}
        </div>

      </Container>

      {/* Accessible FAQ Section */}
      <Container className="max-w-3xl border-t border-ivory-dark/65 pt-16">
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
