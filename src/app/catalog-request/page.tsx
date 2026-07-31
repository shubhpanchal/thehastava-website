"use client";

import React, { useState } from "react";
import { Container } from "@/components/shared/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/utils/analytics";

const CRAFT_OPTIONS = [
  { id: "jaipur-blue-pottery", label: "Jaipur Blue Pottery (Ceramics)" },
  { id: "bastar-dhokra-art", label: "Bastar Dhokra Art (Brass)" },
  { id: "saharanpur-wood-carvings", label: "Saharanpur Wood Carvings (Furniture)" },
  { id: "kashmiri-pashmina", label: "Kashmiri Pashmina (Luxury Textiles)" },
  { id: "banarasi-silk-sarees", label: "Banarasi Silk Sarees (Textiles)" },
  { id: "kutch-handloom-embroidery", label: "Kutch Handloom Embroidery (Decor)" },
];

const SERVICE_OPTIONS = [
  { id: "oem", label: "OEM Custom Prototyping" },
  { id: "private-label", label: "Private Label Stamping" },
  { id: "qa", label: "AQL 2.5 Quality Inspections" },
  { id: "logistics", label: "Freight Cargo Consolidation" },
];

export default function CatalogRequestPage() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    industry: "",
  });
  const [selectedCrafts, setSelectedCrafts] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCraftToggle = (id: string) => {
    setSelectedCrafts((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleServiceToggle = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Full name is required";
    if (!formState.company.trim()) newErrors.company = "Company name is required";
    if (!formState.email.trim()) {
      newErrors.email = "Corporate email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid corporate email address";
    }
    if (!formState.country.trim()) newErrors.country = "Destination country is required";
    if (!formState.industry) newErrors.industry = "Please select your industry";
    if (selectedCrafts.length === 0) newErrors.crafts = "Select at least one craft of interest";
    return newErrors;
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

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      trackEvent("catalog_requested", {
        industry: formState.industry,
        country: formState.country,
        crafts: selectedCrafts,
        services: selectedServices,
      });
    }, 1000);
  };

  return (
    <div className="bg-ivory py-16 sm:py-24">
      {/* Header */}
      <Container className="max-w-3xl text-center flex flex-col gap-4 mb-16">
        <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold">
          Self-Service Catalog
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-medium text-navy leading-tight">
          Request Wholesale Catalog
        </h1>
        <div className="h-0.5 w-16 bg-gold/50 mx-auto mt-2" />
        <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed max-w-lg mx-auto mt-2">
          Tell us about your industry requirements and download specialized craft catalog packages immediately.
        </p>
      </Container>

      {/* Main Panel */}
      <Container className="max-w-2xl bg-ivory-light border border-ivory-dark p-6 sm:p-10 rounded-sm shadow-premium">
        {submitted ? (
          <div className="flex flex-col gap-6">
            <div className="p-5 bg-gold/10 border border-gold/30 rounded-xs flex flex-col gap-2">
              <h2 className="font-serif text-xl font-semibold text-gold">Personalized Catalog Prepared</h2>
              <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed">
                Thank you, {formState.name}. We have customized a download package tailored for your business in the **{formState.industry}** industry.
              </p>
            </div>

            {/* Catalog Download Links */}
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-gold">
                Available Downloads
              </h3>
              <div className="flex flex-col gap-3">
                {selectedCrafts.map((craftId) => {
                  const label = CRAFT_OPTIONS.find((c) => c.id === craftId)?.label || craftId;
                  return (
                    <div key={craftId} className="flex items-center justify-between p-4 border border-ivory-dark bg-ivory rounded-xs hover:border-gold/60 transition-colors">
                      <span className="font-serif text-sm text-navy font-semibold">{label}</span>
                      <a
                        href="/catalog-preview.webp"
                        download
                        className="font-sans text-xs font-bold uppercase tracking-wider text-gold hover:text-navy transition-colors"
                      >
                        Download PDF &darr;
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sourcing CTA */}
            <div className="border-t border-ivory-dark/65 pt-6 flex flex-col gap-4 text-center">
              <p className="font-sans text-xs text-slate-muted">
                Need pricing worksheets, shipping rates, or design customization?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button href="/contact" variant="primary" size="md">
                  Request Custom RFQ
                </Button>
                <Button 
                  href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`} 
                  onClick={() => trackEvent("whatsapp_clicked")}
                  variant="outline-gold" 
                  size="md"
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
            
            {/* Contact Details */}
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
              <Input
                label="Destination Country *"
                required
                disabled={isSubmitting}
                error={errors.country}
                value={formState.country}
                onChange={(e) => setFormState({ ...formState, country: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-sans text-xs font-semibold uppercase tracking-widest text-slate">
                Industry Segment *
              </label>
              <select
                disabled={isSubmitting}
                value={formState.industry}
                onChange={(e) => setFormState({ ...formState, industry: e.target.value })}
                className={`w-full font-sans text-sm text-navy px-4 py-3 bg-ivory-light border rounded-sm focus:border-gold focus:ring-1 focus:ring-gold/20 focus:outline-none transition-all duration-300 ${
                  errors.industry ? "border-red-500!" : "border-ivory-dark"
                }`}
              >
                <option value="">Select industry...</option>
                <option value="retail">Boutique Retail / Store Chains</option>
                <option value="hospitality">Hotel & Resort Hospitality</option>
                <option value="gifting">Corporate Gifting Partner</option>
                <option value="interior-design">Interior Decor / Architecture</option>
                <option value="wholesale">Import / Distribution Wholesale</option>
                <option value="other">Other Business Type</option>
              </select>
              {errors.industry && <p className="font-sans text-xs text-red-500 mt-0.5">{errors.industry}</p>}
            </div>

            {/* Crafts Choice */}
            <div className="flex flex-col gap-2.5 mt-2">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-slate">
                Select Crafts of Interest *
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CRAFT_OPTIONS.map((craft) => (
                  <label key={craft.id} className="flex items-center gap-3 font-sans text-xs sm:text-sm text-navy cursor-pointer select-none">
                    <input
                      type="checkbox"
                      disabled={isSubmitting}
                      checked={selectedCrafts.includes(craft.id)}
                      onChange={() => handleCraftToggle(craft.id)}
                      className="w-4 h-4 rounded-xs border-ivory-dark text-gold focus:ring-gold focus:outline-none"
                    />
                    <span>{craft.label}</span>
                  </label>
                ))}
              </div>
              {errors.crafts && <p className="font-sans text-xs text-red-500 mt-0.5">{errors.crafts}</p>}
            </div>

            {/* Preferred Services Choice */}
            <div className="flex flex-col gap-2.5 mt-2">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-slate">
                Sourcing Assistance Needed (Optional)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICE_OPTIONS.map((srv) => (
                  <label key={srv.id} className="flex items-center gap-3 font-sans text-xs sm:text-sm text-navy cursor-pointer select-none">
                    <input
                      type="checkbox"
                      disabled={isSubmitting}
                      checked={selectedServices.includes(srv.id)}
                      onChange={() => handleServiceToggle(srv.id)}
                      className="w-4 h-4 rounded-xs border-ivory-dark text-gold focus:ring-gold focus:outline-none"
                    />
                    <span>{srv.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" variant="primary" size="lg" className="w-full" isLoading={isSubmitting}>
                Request Personalized Catalog
              </Button>
            </div>

          </form>
        )}
      </Container>
    </div>
  );
}
