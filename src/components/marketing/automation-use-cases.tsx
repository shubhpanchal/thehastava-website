"use client";

import React, { useState } from "react";
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
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/ui/reveal";

interface UseCaseItem {
  id: string;
  title: string;
  shortDesc: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  inputData: string[];
  automatedAction: string;
  deliveredOutcome: string[];
  exampleTools: string[];
}

const USE_CASES_DATA: UseCaseItem[] = [
  {
    id: "sales",
    title: "Sales & Inquiries",
    shortDesc: "Automate inquiry capture, RFQ routing, and CRM synchronization.",
    icon: Users,
    inputData: ["Inbound Webforms", "Email RFQs", "LinkedIn Leads"],
    automatedAction: "AI parses lead details, scores urgency, extracts line items, and creates deals in CRM.",
    deliveredOutcome: ["Instant 60-second response", "Zero missed RFQs", "Automated rep assignment"],
    exampleTools: ["HubSpot / Salesforce", "Gmail / Outlook", "WhatsApp API"],
  },
  {
    id: "operations",
    title: "Operations & Logistics",
    shortDesc: "Eliminate repetitive manual data entry, handoffs, and status checking.",
    icon: Workflow,
    inputData: ["Vendor Packing Slips", "Dispatch Sheets", "Warehouse Logs"],
    automatedAction: "Real-time parsing of dispatch data, automated stock matching, and multi-system updates.",
    deliveredOutcome: ["Zero double-entry errors", "Live dispatch visibility", "Automated exception alerts"],
    exampleTools: ["Custom ERP", "Google Sheets", "Inventory Systems"],
  },
  {
    id: "finance",
    title: "Finance & Accounting",
    shortDesc: "Extract invoice data, validate line items, and sync accounting records.",
    icon: FileCheck,
    inputData: ["Supplier PDFs", "Bank Statements", "Expense Receipts"],
    automatedAction: "OCR + LLM extraction, PO matching, tax calculation, and automated ledger drafting.",
    deliveredOutcome: ["90% faster reconciliation", "Audit-ready records", "Elimination of invoice backlog"],
    exampleTools: ["QuickBooks / Xero", "Tally ERP", "Banking Portals"],
  },
  {
    id: "customer-service",
    title: "Customer Support",
    shortDesc: "Auto-classify requests, draft replies, and route complex tickets.",
    icon: MessageSquare,
    inputData: ["Support Inboxes", "Portal Tickets", "Customer Chat"],
    automatedAction: "Categorize intent, fetch user history, draft contextual resolution, and route to specialist.",
    deliveredOutcome: ["Instant triage", "Reduced first-reply time", "Automated FAQ resolution"],
    exampleTools: ["Zendesk / Freshdesk", "Intercom", "Internal Knowledge Base"],
  },
  {
    id: "management",
    title: "Executive & Management",
    shortDesc: "Aggregate operational metrics into consolidated real-time dashboards.",
    icon: BarChart3,
    inputData: ["Sales Pipelining", "Operational Delays", "Financial P&L"],
    automatedAction: "Nightly automated data synchronization and AI summary generation delivered via email/Slack.",
    deliveredOutcome: ["Unified visibility", "Automated daily briefing", "Actionable bottleneck alerts"],
    exampleTools: ["Looker Studio / Metabase", "Slack / Teams", "Executive Portal"],
  },
];

export function AutomationUseCases() {
  const [selectedCase, setSelectedCase] = useState<string>("sales");
  const activeItem = USE_CASES_DATA.find((c) => c.id === selectedCase) || USE_CASES_DATA[0];

  return (
    <section className="relative bg-[#08172e] py-24 md:py-32 text-white overflow-hidden border-t border-white/5">
      {/* Dynamic Ambient Background Glows */}
      <div
        className="absolute top-1/2 -right-40 h-[450px] w-[450px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
            <Sparkles size={13} className="text-cyan-400" />
            <span>Operational Solutions</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
            What Can We Automate?
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Target the repetitive, friction-heavy workflows that cost your teams hours every week.
          </p>
        </Reveal>

        {/* Dynamic Department Tabs / Switcher */}
        <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-5">
          {USE_CASES_DATA.map((item) => {
            const Icon = item.icon;
            const isSelected = selectedCase === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedCase(item.id)}
                className={`flex flex-col items-center sm:items-start gap-2.5 rounded-2xl border p-4 text-left transition-all duration-300 ${
                  isSelected
                    ? "border-cyan-400 bg-[#0c2447] shadow-[0_10px_30px_rgba(6,182,212,0.18)]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                }`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                    isSelected
                      ? "bg-cyan-400 text-slate-950 font-bold"
                      : "bg-blue-500/15 text-cyan-300"
                  }`}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-tight">{item.title}</h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Detail Canvas */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-8 overflow-hidden rounded-3xl border border-white/15 bg-[#0a1e3b]/80 p-6 md:p-8 backdrop-blur-xl shadow-2xl"
          >
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left Overview */}
              <div className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  Target Automation Area
                </span>
                <h3 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-white">
                  {activeItem.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {activeItem.shortDesc}
                </p>

                <div className="mt-6 space-y-2 border-t border-white/10 pt-5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Common Connected Tools
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeItem.exampleTools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-lg border border-white/10 bg-slate-900/60 px-2.5 py-1 text-xs font-medium text-cyan-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Workflow Transformation Architecture */}
              <div className="lg:col-span-7 space-y-4">
                {/* 1. Input */}
                <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Input Data Streams
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {activeItem.inputData.map((inData) => (
                      <span
                        key={inData}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200"
                      >
                        {inData}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2. Automated Action */}
                <div className="rounded-xl border border-cyan-400/40 bg-cyan-950/30 p-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-cyan-300">
                    <Zap size={13} className="text-cyan-400 animate-pulse" />
                    <span>HASTAVA Intelligence Transformation</span>
                  </div>
                  <p className="mt-1.5 text-xs md:text-sm font-medium leading-relaxed text-cyan-100">
                    {activeItem.automatedAction}
                  </p>
                </div>

                {/* 3. Delivered Outcome */}
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                    Delivered Business Outcomes
                  </div>
                  <div className="mt-2 grid gap-1.5 sm:grid-cols-3">
                    {activeItem.deliveredOutcome.map((outcome) => (
                      <div
                        key={outcome}
                        className="flex items-center gap-1.5 text-xs font-medium text-emerald-200"
                      >
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                        <span className="truncate">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
