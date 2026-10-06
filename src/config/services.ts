import React from "react";
import { Bot, Database, FileText, Workflow } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  tags: string[];
  gradientGlow: string;
  accentColor: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ai-automation",
    title: "AI Automation",
    description:
      "Automate repetitive workflows, decision routing, and communications with practical, highly accurate AI.",
    icon: Bot,
    tags: ["Workflow Automation", "Decision Routing", "Task Execution"],
    gradientGlow: "from-blue-600/20 via-cyan-500/10 to-transparent",
    accentColor: "text-blue-600",
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    description:
      "Turn scattered spreadsheets and systems into reliable single sources of truth, automated pipelines, and actionable reporting.",
    icon: Database,
    tags: ["Single Source of Truth", "Custom Dashboards", "Data Pipelines"],
    gradientGlow: "from-cyan-600/20 via-blue-500/10 to-transparent",
    accentColor: "text-cyan-600",
  },
  {
    id: "document-intelligence",
    title: "Document Intelligence",
    description:
      "Extract, validate, and route unstructured information from PDFs, invoices, forms, and emails directly into your core systems.",
    icon: FileText,
    tags: ["PDF & Invoice Parsing", "Form Extraction", "Validation Rules"],
    gradientGlow: "from-indigo-600/20 via-blue-500/10 to-transparent",
    accentColor: "text-indigo-600",
  },
  {
    id: "business-systems",
    title: "Business Systems",
    description:
      "Build focused internal tools, custom portals, and secure API integrations connecting your existing software stack.",
    icon: Workflow,
    tags: ["Internal Tools", "Custom Portals", "API Integrations"],
    gradientGlow: "from-purple-600/20 via-cyan-500/10 to-transparent",
    accentColor: "text-purple-600",
  },
];
