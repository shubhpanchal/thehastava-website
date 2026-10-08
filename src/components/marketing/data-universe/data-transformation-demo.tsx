"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FileText,
  Users,
  Mail,
  Sparkles,
  CheckCircle2,
  Cpu,
} from "lucide-react";

interface TransformationExample {
  id: string;
  title: string;
  sourceType: string;
  icon: typeof FileText;
  rawInput: {
    title: string;
    snippet: string;
    friction: string;
  };
  stages: {
    label: string;
    sublabel: string;
  }[];
  structuredResult: {
    entity: string;
    fields: { label: string; value: string }[];
    reconciledWith: string;
  };
}

const EXAMPLES: TransformationExample[] = [
  {
    id: "invoice",
    title: "PDF Invoice → Structured Ledger",
    sourceType: "DOCUMENTS",
    icon: FileText,
    rawInput: {
      title: "Vendor_Invoice_Q3_9941.pdf",
      snippet: "INVOICE #9941 \nVENDOR: Apex Precision Tooling \nDATE: 12-Oct-2026 \nTERMS: Net 30 \nTOTAL DUE: $34,800.00 \nTAX ID: 88-10928-US",
      friction: "Unstructured 4-page PDF with 18 manual line-items",
    },
    stages: [
      { label: "Document AI", sublabel: "OCR & Table Extraction" },
      { label: "Entity Resolution", sublabel: "Vendor & Tax ID Matching" },
      { label: "Ledger Reconciliation", sublabel: "PO-4091 Cross-Verification" },
    ],
    structuredResult: {
      entity: "Verified Accounts Payable Entity [AP-9941]",
      fields: [
        { label: "Vendor Entity", value: "Apex Precision (Verified Master #402)" },
        { label: "Amount Due", value: "$34,800.00 USD" },
        { label: "Payment Due Date", value: "Nov 11, 2026 (Net-30)" },
        { label: "Status", value: "PO Matched & Approved" },
      ],
      reconciledWith: "Linked with ERP Purchase Order #4091 & QuickBooks Ledger",
    },
  },
  {
    id: "lead",
    title: "CRM Lead → Enriched Account Context",
    sourceType: "CRM & WEB",
    icon: Users,
    rawInput: {
      title: "Inbound Form Submission #712",
      snippet: "Name: Marcus Vance \nEmail: mvance@nexusglobal.io \nNote: Looking to automate our 50-person ops team workflows.",
      friction: "Unqualified inbound email without revenue or tech stack info",
    },
    stages: [
      { label: "Domain Enrichment", sublabel: "Revenue & Tech Profiling" },
      { label: "Intent Scoring", sublabel: "NLP Urgency & Scope Analysis" },
      { label: "CRM Synthesis", sublabel: "HubSpot / Salesforce Account Node" },
    ],
    structuredResult: {
      entity: "Enterprise Opportunity [Nexus Global]",
      fields: [
        { label: "Company Profile", value: "Nexus Global Logistics ($45M ARR, 220 FTE)" },
        { label: "Buying Intent", value: "96/100 (Immediate Need)" },
        { label: "Decision Maker", value: "Marcus Vance (VP Operations)" },
        { label: "Priority Tier", value: "Tier 1 Enterprise" },
      ],
      reconciledWith: "Auto-synced with CRM pipeline and executive calendar invite",
    },
  },
  {
    id: "email",
    title: "Customer Email → Actionable Task",
    sourceType: "EMAIL & INBOX",
    icon: Mail,
    rawInput: {
      title: "Thread: Urgent expedited shipment request",
      snippet: "From: logistics@acme.com \n'Can we expedite delivery of order PO-8120 from Friday to Wednesday? We will cover express freight.'",
      friction: "Buried in shared email inbox with no automatic ticket linking",
    },
    stages: [
      { label: "Intent Classification", sublabel: "Urgent Expedite Request" },
      { label: "PO Extraction", sublabel: "Matched PO-8120 in ERP" },
      { label: "Contextual Assembly", sublabel: "Carrier Rate Calculated" },
    ],
    structuredResult: {
      entity: "Expedite Action Node [PO-8120]",
      fields: [
        { label: "Request Type", value: "Delivery Expedite (-48 Hours)" },
        { label: "Target PO", value: "PO-8120 ($82,400 shipment)" },
        { label: "Carrier Fee", value: "+$420 Express Freight (Pre-Authorized)" },
        { label: "Action Status", value: "Ready for Auto-Approval" },
      ],
      reconciledWith: "Linked to Warehouse WMS, ERP Order & Customer Account",
    },
  },
];

interface DataTransformationDemoProps {
  className?: string;
}

export function DataTransformationDemo({ className = "" }: DataTransformationDemoProps) {
  const [selectedExampleId, setSelectedExampleId] = useState<string>("invoice");
  const example = EXAMPLES.find((e) => e.id === selectedExampleId) || EXAMPLES[0];
  const Icon = example.icon;

  return (
    <div
      className={`w-full rounded-3xl bg-[#040A18] border border-cyan-500/20 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_0_80px_rgba(6,182,212,0.12)] ${className}`}
    >
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-cyan-300 uppercase tracking-wider mb-1">
            <Sparkles size={13} className="text-cyan-400" />
            <span>TANGIBLE TRANSFORMATION ARCHITECTURE</span>
          </div>
          <h4 className="font-display text-lg sm:text-2xl font-bold text-white tracking-tight">
            How Raw Business Information Becomes Structured Understanding
          </h4>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10 self-start">
          {EXAMPLES.map((ex) => {
            const isSelected = ex.id === selectedExampleId;
            return (
              <button
                key={ex.id}
                type="button"
                onClick={() => setSelectedExampleId(ex.id)}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all cursor-pointer ${
                  isSelected
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 font-bold shadow-xs"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {ex.title.split("→")[0].trim()}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3-Column Visual Pipeline */}
      <AnimatePresence mode="wait">
        <motion.div
          key={example.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-6 items-stretch"
        >
          {/* 1. Raw Input Card */}
          <div className="p-5 rounded-2xl bg-black/50 border border-white/10 flex flex-col justify-between space-y-3">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-amber-400 font-bold uppercase">
                  01. RAW UNSTRUCTURED INPUT
                </span>
                <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-500/30">
                  {example.sourceType}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5 font-mono text-[11px] text-slate-300 whitespace-pre-line leading-relaxed">
                <div className="text-cyan-300 font-bold mb-1.5 pb-1 border-b border-white/10 flex items-center gap-1.5">
                  <Icon size={14} />
                  <span>{example.rawInput.title}</span>
                </div>
                {example.rawInput.snippet}
              </div>
            </div>

            <div className="text-[11px] text-slate-400 font-mono pt-1">
              <span className="text-rose-400 font-bold">Friction:</span> {example.rawInput.friction}
            </div>
          </div>

          {/* 2. Middle Connector / Engine */}
          <div className="flex flex-col items-center justify-between p-5 rounded-2xl bg-blue-950/30 border border-blue-500/30 text-center space-y-3">
            <div className="space-y-2 w-full flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center border border-cyan-400/40 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                <Cpu size={18} />
              </div>
              <div className="font-mono text-[11px] font-bold text-cyan-300 uppercase tracking-wider">
                HASTAVA INTELLIGENCE
              </div>
            </div>

            <div className="space-y-2 w-full my-auto">
              {example.stages.map((stage, idx) => (
                <div
                  key={stage.label}
                  className="p-2 rounded-xl bg-black/40 border border-white/5 font-mono text-[10px] text-slate-300 text-left flex items-center gap-2.5"
                >
                  <span className="text-cyan-400 font-bold text-xs">{idx + 1}.</span>
                  <div>
                    <div className="font-semibold text-white text-xs">{stage.label}</div>
                    <div className="text-[9px] text-slate-400">{stage.sublabel}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="font-mono text-[9px] text-cyan-400/80 uppercase tracking-wider pt-1">
              Auto-Reconciliation Active
            </div>
          </div>

          {/* 3. Structured Result Card */}
          <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/40 flex flex-col justify-between space-y-3">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase">
                  02. STRUCTURED INTELLIGENCE NODE
                </span>
                <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                  <CheckCircle2 size={10} />
                  READY FOR ACTION
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-black/60 border border-emerald-500/30">
                <div className="font-mono text-xs font-bold text-white mb-2 pb-1.5 border-b border-white/10">
                  {example.structuredResult.entity}
                </div>

                <div className="space-y-1.5 font-mono text-[10px]">
                  {example.structuredResult.fields.map((f) => (
                    <div key={f.label} className="flex items-center justify-between gap-2">
                      <span className="text-slate-400">{f.label}:</span>
                      <span className="text-cyan-200 font-semibold text-right">{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-[11px] text-emerald-300/90 font-mono bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-500/20">
              <span className="font-bold">Reconciled:</span> {example.structuredResult.reconciledWith}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
