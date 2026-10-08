"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Users,
  Workflow,
  FileCheck,
  MessageSquare,
  BarChart3,
  Sparkles,
  CheckCircle2,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/ui/reveal";

interface UseCaseItem {
  id: string;
  title: string;
  shortDesc: string;
  problem: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  inputData: string[];
  automatedAction: string;
  actionSteps: string[];
  deliveredOutcome: string[];
  exampleTools: string[];
}

const USE_CASES_DATA: UseCaseItem[] = [
  {
    id: "sales",
    title: "Sales & Inquiries",
    shortDesc: "Automate inquiry capture, RFQ routing, and CRM synchronization.",
    problem: "Sales reps spend 10+ hours a week copying inbound email requests, manually typing lead details into CRMs, and assigning deals.",
    icon: Users,
    inputData: ["Inbound Webforms", "Email RFQs", "LinkedIn Inquiries", "Partner Referrals"],
    automatedAction: "AI parses lead details, scores urgency, extracts line items, and creates structured deals in CRM instantly.",
    actionSteps: ["Extract Buyer Intent", "Score Urgency & Value", "Deduplicate Contact", "Auto-Assign Rep"],
    deliveredOutcome: ["Instant 60-second response", "Zero missed RFQs", "Automated rep assignment"],
    exampleTools: ["HubSpot / Salesforce", "Gmail / Outlook", "WhatsApp API", "PostgreSQL"],
  },
  {
    id: "operations",
    title: "Operations & Logistics",
    shortDesc: "Eliminate repetitive manual data entry, handoffs, and status checking.",
    problem: "Ops teams manually re-key dispatch notes between ERPs, vendor portals, and spreadsheets, causing shipping delays and lost records.",
    icon: Workflow,
    inputData: ["Vendor Packing Slips", "Dispatch Sheets", "Warehouse CSVs", "Carrier APIs"],
    automatedAction: "Real-time parsing of dispatch data, automated stock matching, and multi-system updates with exception routing.",
    actionSteps: ["Ingest Dispatch Logs", "Stock Line Matching", "Sync ERP Inventory", "Trigger Status Alerts"],
    deliveredOutcome: ["Zero double-entry errors", "Live dispatch visibility", "Automated exception alerts"],
    exampleTools: ["Custom ERP", "Google Sheets", "Inventory Systems", "Webhook APIs"],
  },
  {
    id: "finance",
    title: "Finance & Accounting",
    shortDesc: "Extract invoice data, validate line items, and sync accounting records.",
    problem: "Finance staff spend days reconciling supplier PDFs against purchase orders and manually drafting ledger entries.",
    icon: FileCheck,
    inputData: ["Supplier PDFs", "Bank Statements", "Expense Receipts", "Vendor Portals"],
    automatedAction: "OCR + LLM extraction, PO matching, tax calculation, and automated ledger drafting with validation gates.",
    actionSteps: ["PDF Table Extraction", "PO Number Matching", "Tax & Total Validation", "Draft Ledger Entry"],
    deliveredOutcome: ["90% faster reconciliation", "Audit-ready records", "Elimination of invoice backlog"],
    exampleTools: ["QuickBooks / Xero", "Tally ERP", "Banking Portals", "Stripe API"],
  },
  {
    id: "customer-service",
    title: "Customer Support",
    shortDesc: "Auto-classify requests, draft replies, and route complex tickets.",
    problem: "Tier-1 agents get swamped answering repetitive status questions and manually categorizing high-volume support tickets.",
    icon: MessageSquare,
    inputData: ["Support Inboxes", "Portal Tickets", "Customer Chat", "Feedback Forms"],
    automatedAction: "Categorize intent, fetch user history, draft contextual resolution, and route to the appropriate domain specialist.",
    actionSteps: ["Intent Classification", "CRM History Lookup", "Draft AI Resolution", "Smart Specialist Escalation"],
    deliveredOutcome: ["Instant triage", "Reduced first-reply time", "Automated FAQ resolution"],
    exampleTools: ["Zendesk / Freshdesk", "Intercom", "Internal Knowledge Base", "Slack"],
  },
  {
    id: "management",
    title: "Executive & Management",
    shortDesc: "Aggregate operational metrics into consolidated real-time dashboards.",
    problem: "Executives wait days for manual end-of-week spreadsheet rollups from different departments to understand basic operational KPIs.",
    icon: BarChart3,
    inputData: ["Sales Pipelining", "Operational Delays", "Financial P&L", "Staff Utilization"],
    automatedAction: "Nightly automated data synchronization and AI summary generation delivered directly via executive email and dashboard.",
    actionSteps: ["Aggregate Multi-Source Data", "Calculate Core KPIs", "Generate Executive Summary", "Publish Live Views"],
    deliveredOutcome: ["Unified visibility", "Automated daily briefing", "Actionable bottleneck alerts"],
    exampleTools: ["Looker Studio / Metabase", "Slack / Teams", "Executive Portal", "PostgreSQL"],
  },
];

export function AutomationUseCases() {
  const [selectedCase, setSelectedCase] = useState<string>("sales");
  const activeItem = USE_CASES_DATA.find((c) => c.id === selectedCase) || USE_CASES_DATA[0];

  return (
    <section className="relative bg-[#F8FAFC] py-16 md:py-20 lg:py-24 text-slate-900 overflow-hidden border-t border-slate-200/60">
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-blue-700">
              <Sparkles size={13} className="text-blue-600" />
              <span>Operational Solutions Explorer</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-slate-900">
              What Can We Automate?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Target the repetitive, friction-heavy workflows that cost your teams hours every week. Explore common transformation architectures below.
            </p>
          </Reveal>
        </div>

        {/* Dynamic Department Tabs / Switcher Bar */}
        <div className="mt-8 md:mt-10 grid grid-cols-2 gap-2.5 sm:grid-cols-5">
          {USE_CASES_DATA.map((item) => {
            const Icon = item.icon;
            const isSelected = selectedCase === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedCase(item.id)}
                className={`flex flex-col items-center sm:items-start gap-3 rounded-2xl border p-4 sm:p-4.5 text-left transition-all duration-300 ${
                  isSelected
                    ? "border-blue-600 bg-blue-600 text-white shadow-xl shadow-blue-600/25 scale-[1.02]"
                    : "border-slate-200/90 bg-white hover:border-blue-300 hover:bg-slate-50/80 text-slate-800 shadow-2xs"
                }`}
              >
                <div
                  className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl transition-colors ${
                    isSelected
                      ? "bg-white/20 text-white font-bold"
                      : "bg-blue-50 text-blue-600 border border-blue-100"
                  }`}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className={`text-xs sm:text-sm font-bold tracking-tight ${isSelected ? "text-white" : "text-slate-900"}`}>
                    {item.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Large Featured Workflow Canvas */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="mt-6 md:mt-8 overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 md:p-10 shadow-xl shadow-slate-200/50"
          >
            {/* Top Overview & The Manual Problem */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 border-b border-slate-100 pb-8">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  Department Focus
                </span>
                <h3 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
                  {activeItem.title}
                </h3>
                <p className="mt-3 text-base text-slate-600 leading-relaxed">
                  {activeItem.shortDesc}
                </p>
              </div>

              {/* The Problem Alert Banner */}
              <div className="rounded-2xl border border-amber-200/80 bg-amber-50/60 p-5 max-w-lg shrink-0">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-amber-500 animate-ping" />
                  <span>The Manual Bottleneck</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-amber-950 font-medium">
                  {activeItem.problem}
                </p>
              </div>
            </div>

            {/* 3-Column Transformation Architecture Flow */}
            <div className="mt-8 grid gap-6 md:grid-cols-3 items-stretch">
              {/* 1. Input Sources */}
              <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/90 p-6">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-4">
                    1. Input Data Streams
                  </div>
                  <div className="space-y-2">
                    {activeItem.inputData.map((inData) => (
                      <div
                        key={inData}
                        className="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white px-3.5 py-2.5 text-xs font-medium text-slate-800 shadow-2xs"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                        <span>{inData}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/60 text-[11px] text-slate-500 font-mono">
                  Multi-channel ingestion
                </div>
              </div>

              {/* 2. HASTAVA Automated Engine */}
              <div className="flex flex-col justify-between rounded-2xl border border-blue-200 bg-blue-50/70 p-6 shadow-sm">
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-700 mb-4">
                    <Zap size={14} className="text-blue-600 animate-pulse" />
                    <span>2. HASTAVA Automated Logic</span>
                  </div>
                  <div className="space-y-2">
                    {activeItem.actionSteps.map((step, idx) => (
                      <div
                        key={step}
                        className="flex items-center gap-2 rounded-xl border border-blue-200/80 bg-white px-3.5 py-2.5 text-xs font-semibold text-blue-950 shadow-2xs"
                      >
                        <span className="text-[10px] font-mono text-blue-600 font-bold">{idx + 1}.</span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mt-6 pt-4 border-t border-blue-200/60 text-xs text-blue-900 leading-relaxed font-medium">
                  {activeItem.automatedAction}
                </p>
              </div>

              {/* 3. Delivered Business Impact */}
              <div className="flex flex-col justify-between rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 shadow-sm">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-4">
                    3. Delivered Business Impact
                  </div>
                  <div className="space-y-2.5">
                    {activeItem.deliveredOutcome.map((outcome) => (
                      <div
                        key={outcome}
                        className="flex items-start gap-2 rounded-xl border border-emerald-200/80 bg-white p-3 text-xs font-semibold text-emerald-950 shadow-2xs"
                      >
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-emerald-200/60 text-[11px] font-mono text-emerald-800">
                  Deterministic & Scalable
                </div>
              </div>
            </div>

            {/* Bottom Tools & Action Bar */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">
                  Connected Tools:
                </span>
                {activeItem.exampleTools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-lg border border-slate-200/80 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-blue-600 transition-colors shrink-0"
              >
                <span>Automate This Workflow</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
