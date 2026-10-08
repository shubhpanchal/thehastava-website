"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Building,
  Mail,
  User,
  Phone,
  Workflow,
  Layers,
  FileText,
} from "lucide-react";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";
import { trackEvent } from "@/lib/analytics";

export function ContactForm() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      automationTarget: "",
      volume: "",
      context: "",
      botField: "",
    },
  });

  const handleFieldFocus = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackEvent("contact_form_started");
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    setFormStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit inquiry.");
      }

      setFormStatus("success");
      trackEvent("contact_form_submitted", { company: data.company });

      // Google Ads "Submit lead form" conversion event
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
          send_to: "AW-18487685875/Ssp-CL37nJQdEPPIzu9E",
        });
      }

      reset();
    } catch (err: unknown) {
      setFormStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again or email hello@thehastava.com.");
      }
    }
  };

  if (formStatus === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="overflow-hidden rounded-3xl border border-blue-100 bg-white p-8 md:p-12 text-center shadow-2xl shadow-slate-200/60"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 border border-blue-200 text-blue-600">
          <CheckCircle2 size={32} />
        </div>

        <h3 className="mt-6 text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
          Discovery Inquiry Received
        </h3>

        <p className="mt-4 max-w-lg mx-auto text-base text-slate-600 leading-relaxed">
          Thanks — your inquiry has been received. We&apos;ll get back to you within <strong className="text-blue-600">24 business hours</strong> to schedule our discovery conversation.
        </p>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => {
              setFormStatus("idle");
              setHasStarted(false);
            }}
            className="rounded-xl border border-slate-200 bg-slate-50 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-100 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 md:p-10 shadow-2xl shadow-slate-200/50">
      <div className="border-b border-slate-100 pb-6 mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
          Book a Discovery Conversation
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Tell us about the process you want to automate. We will review feasibility and discuss a structured solution.
        </p>
      </div>

      {formStatus === "error" && (
        <div
          role="alert"
          className="mb-8 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-800 text-sm"
        >
          <AlertCircle size={18} className="shrink-0 mt-0.5 text-red-600" />
          <div>
            <p className="font-semibold text-red-900">Unable to submit inquiry</p>
            <p className="mt-1 text-xs text-red-700">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
        {/* Hidden Honeypot Field */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="botField">Leave this field blank</label>
          <input
            id="botField"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("botField")}
          />
        </div>

        {/* Row 1: Name & Work Email */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700"
            >
              <User size={13} className="text-blue-600" />
              <span>Full Name <span className="text-blue-600">*</span></span>
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              disabled={formStatus === "submitting"}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              placeholder="Alex Morgan"
              onFocus={handleFieldFocus}
              {...register("name")}
              className={`mt-2 w-full rounded-xl border bg-slate-50/80 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 disabled:opacity-50 ${
                errors.name ? "border-red-500 bg-red-50/30" : "border-slate-200 hover:border-slate-300"
              }`}
            />
            {errors.name && (
              <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-600">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700"
            >
              <Mail size={13} className="text-blue-600" />
              <span>Work Email <span className="text-blue-600">*</span></span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              disabled={formStatus === "submitting"}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              placeholder="alex@company.com"
              onFocus={handleFieldFocus}
              {...register("email")}
              className={`mt-2 w-full rounded-xl border bg-slate-50/80 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 disabled:opacity-50 ${
                errors.email ? "border-red-500 bg-red-50/30" : "border-slate-200 hover:border-slate-300"
              }`}
            />
            {errors.email && (
              <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Company & Phone */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="company"
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700"
            >
              <Building size={13} className="text-blue-600" />
              <span>Company / Organization <span className="text-blue-600">*</span></span>
            </label>
            <input
              id="company"
              type="text"
              autoComplete="organization"
              disabled={formStatus === "submitting"}
              aria-invalid={!!errors.company}
              aria-describedby={errors.company ? "company-error" : undefined}
              placeholder="Acme Enterprises"
              onFocus={handleFieldFocus}
              {...register("company")}
              className={`mt-2 w-full rounded-xl border bg-slate-50/80 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 disabled:opacity-50 ${
                errors.company ? "border-red-500 bg-red-50/30" : "border-slate-200 hover:border-slate-300"
              }`}
            />
            {errors.company && (
              <p id="company-error" role="alert" className="mt-1.5 text-xs text-red-600">
                {errors.company.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700"
            >
              <Phone size={13} className="text-blue-600" />
              <span>Phone Number <span className="text-slate-400 font-normal">(Optional)</span></span>
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              disabled={formStatus === "submitting"}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              placeholder="+1 (555) 000-0000"
              onFocus={handleFieldFocus}
              {...register("phone")}
              className={`mt-2 w-full rounded-xl border bg-slate-50/80 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 disabled:opacity-50 ${
                errors.phone ? "border-red-500 bg-red-50/30" : "border-slate-200 hover:border-slate-300"
              }`}
            />
            {errors.phone && (
              <p id="phone-error" role="alert" className="mt-1.5 text-xs text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Row 3: What would you like to automate? */}
        <div>
          <label
            htmlFor="automationTarget"
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700"
          >
            <Workflow size={13} className="text-blue-600" />
            <span>What would you like to automate? <span className="text-blue-600">*</span></span>
          </label>
          <textarea
            id="automationTarget"
            rows={3}
            disabled={formStatus === "submitting"}
            aria-invalid={!!errors.automationTarget}
            aria-describedby={errors.automationTarget ? "target-error" : undefined}
            placeholder="e.g. We spend 15 hours a week extracting supplier invoice line items from PDFs and manually re-entering them into our ERP..."
            onFocus={handleFieldFocus}
            {...register("automationTarget")}
            className={`mt-2 w-full rounded-xl border bg-slate-50/80 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 disabled:opacity-50 ${
              errors.automationTarget ? "border-red-500 bg-red-50/30" : "border-slate-200 hover:border-slate-300"
            }`}
          />
          {errors.automationTarget && (
            <p id="target-error" role="alert" className="mt-1.5 text-xs text-red-600">
              {errors.automationTarget.message}
            </p>
          )}
        </div>

        {/* Row 4: Volume & Frequency */}
        <div>
          <label
            htmlFor="volume"
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700"
          >
            <Layers size={13} className="text-blue-600" />
            <span>Approximate Volume / Frequency <span className="text-slate-400 font-normal">(Optional)</span></span>
          </label>
          <input
            id="volume"
            type="text"
            disabled={formStatus === "submitting"}
            placeholder="e.g. ~500 invoices/month, 50 daily RFQs, or 3 team handoffs per order"
            onFocus={handleFieldFocus}
            {...register("volume")}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 disabled:opacity-50 hover:border-slate-300"
          />
        </div>

        {/* Row 5: Additional Context */}
        <div>
          <label
            htmlFor="context"
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700"
          >
            <FileText size={13} className="text-blue-600" />
            <span>Additional Context / Existing Stack <span className="text-slate-400 font-normal">(Optional)</span></span>
          </label>
          <textarea
            id="context"
            rows={2}
            disabled={formStatus === "submitting"}
            placeholder="e.g. Currently using QuickBooks, Google Workspace, and Postgres database."
            onFocus={handleFieldFocus}
            {...register("context")}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 disabled:opacity-50 hover:border-slate-300"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={formStatus === "submitting"}
            className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/25 transition-all duration-300 hover:from-blue-500 hover:to-indigo-600 hover:shadow-blue-600/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {formStatus === "submitting" ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Sending Discovery Inquiry...</span>
              </>
            ) : (
              <>
                <span>Book a Discovery Call</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </>
            )}
          </button>
          <p className="mt-3 text-center text-xs text-slate-500">
            We respect your privacy. No spam. You will receive a direct reply from our engineering team within 24 business hours.
          </p>
        </div>
      </form>
    </div>
  );
}
