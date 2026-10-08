import { LucideIcon, Users, Building2, Database, Globe, FileText, Share2, Mail, FileSpreadsheet } from "lucide-react";

export type DataSourceCategory =
  | "crm"
  | "erp"
  | "database"
  | "api"
  | "document"
  | "website"
  | "email"
  | "spreadsheet";

export type PacketStatus = "streaming" | "ingested" | "normalized" | "understood";

export interface DataPayloadField {
  key: string;
  value: string;
  type: "string" | "number" | "currency" | "date" | "status" | "entity";
}

export interface DataSourceItem {
  id: DataSourceCategory;
  name: string;
  shortLabel: string;
  category: string;
  iconName: string;
  icon: LucideIcon;
  accentColor: string;
  glowColor: string;
  gradient: string;
  description: string;
  streams: string[];
  samplePayload: {
    rawName: string;
    rawType: string;
    fields: DataPayloadField[];
    extractedEntity: string;
    transformationOutput: string;
  };
  // Spatial position on desktop canvas (percentage x, y from center: -50 to +50)
  position: {
    x: number;
    y: number;
    angle: number;
  };
  packetLabel: string;
}

export interface ScrollStage {
  id: number;
  key: "dormant" | "conduits" | "streaming" | "intelligence" | "unified";
  tag: string;
  title: string;
  subtitle: string;
  badge: string;
  centerStatus: string;
  telemetryLog: string;
}

export const DATA_SOURCES: DataSourceItem[] = [
  {
    id: "crm",
    name: "CRM & Pipelines",
    shortLabel: "CRM",
    category: "Sales & Accounts",
    iconName: "Users",
    icon: Users,
    accentColor: "#3B82F6",
    glowColor: "rgba(59, 130, 246, 0.4)",
    gradient: "from-blue-500 to-indigo-600",
    description: "Leads, customer deals, contact histories, pipeline stages, and account owner activities.",
    streams: ["Leads & Inquiries", "Opportunities", "Account Activity", "Deal Value"],
    samplePayload: {
      rawName: "deal_stage_update.json",
      rawType: "JSON / REST Webhook",
      fields: [
        { key: "company", value: "Apex Technologies", type: "string" },
        { key: "deal_val", value: "$185,000", type: "currency" },
        { key: "stage", value: "Proposal Sent", type: "status" },
        { key: "intent_score", value: "94 / 100", type: "number" },
      ],
      extractedEntity: "Enterprise Opportunity [Apex Tech]",
      transformationOutput: "Linked with CFO email thread + verified PO terms in ERP",
    },
    position: { x: -34, y: -16, angle: 195 },
    packetLabel: "LEAD // $185K",
  },
  {
    id: "erp",
    name: "ERP & Operations",
    shortLabel: "ERP",
    category: "Supply & Ledger",
    iconName: "Building2",
    icon: Building2,
    accentColor: "#6366F1",
    glowColor: "rgba(99, 102, 241, 0.4)",
    gradient: "from-indigo-500 to-purple-600",
    description: "Purchase orders, inventory levels, vendor procurement, and accounting ledger items.",
    streams: ["Purchase Orders", "Inventory SKUs", "Procurement Ledger", "Vendor Invoices"],
    samplePayload: {
      rawName: "po_ledger_batch_402.xml",
      rawType: "XML / ERP Export",
      fields: [
        { key: "po_id", value: "PO-89412", type: "string" },
        { key: "vendor", value: "Nexus Components", type: "string" },
        { key: "units", value: "1,200 units", type: "number" },
        { key: "total", value: "$64,200", type: "currency" },
      ],
      extractedEntity: "Purchase Order #89412 [Nexus]",
      transformationOutput: "Reconciled with supplier contract & payment terms",
    },
    position: { x: 34, y: -16, angle: 345 },
    packetLabel: "PO #89412",
  },
  {
    id: "database",
    name: "Databases & Warehouses",
    shortLabel: "DATABASES",
    category: "Core Persistence",
    iconName: "Database",
    icon: Database,
    accentColor: "#8B5CF6",
    glowColor: "rgba(139, 92, 246, 0.4)",
    gradient: "from-purple-500 to-indigo-600",
    description: "PostgreSQL, MySQL, BigQuery, Snowflake, and transactional record stores.",
    streams: ["Transaction Logs", "Customer Records", "Telemetry Timeseries", "Audit Trails"],
    samplePayload: {
      rawName: "tbl_customer_master",
      rawType: "SQL Record Stream",
      fields: [
        { key: "customer_id", value: "CUST-9014", type: "string" },
        { key: "total_ltv", value: "$412,000", type: "currency" },
        { key: "health_score", value: "98.4%", type: "status" },
        { key: "last_sync", value: "Just now", type: "date" },
      ],
      extractedEntity: "Unified Customer Node [CUST-9014]",
      transformationOutput: "Indexed into real-time business graph with 360° telemetry",
    },
    position: { x: -20, y: 34, angle: 120 },
    packetLabel: "SQL // CUST-9014",
  },
  {
    id: "api",
    name: "APIs & Webhooks",
    shortLabel: "APIs",
    category: "Cloud Services",
    iconName: "Share2",
    icon: Share2,
    accentColor: "#06B6D4",
    glowColor: "rgba(6, 182, 212, 0.4)",
    gradient: "from-cyan-500 to-blue-600",
    description: "Stripe payments, partner webhooks, authentication feeds, and external SaaS microservices.",
    streams: ["Payment Webhooks", "Partner Telemetry", "Third-Party Feeds", "Event Buses"],
    samplePayload: {
      rawName: "payment_intent.succeeded",
      rawType: "Cloud Webhook",
      fields: [
        { key: "event", value: "charge_success", type: "status" },
        { key: "amount", value: "$12,500.00", type: "currency" },
        { key: "method", value: "Wire / ACH", type: "string" },
        { key: "settlement", value: "Instant", type: "string" },
      ],
      extractedEntity: "Settlement Event #9812",
      transformationOutput: "Auto-matched to invoice receipt + ERP cash ledger",
    },
    position: { x: 20, y: 34, angle: 60 },
    packetLabel: "WEBHOOK // $12.5K",
  },
  {
    id: "document",
    name: "Documents & Files",
    shortLabel: "DOCUMENTS",
    category: "Unstructured Data",
    iconName: "FileText",
    icon: FileText,
    accentColor: "#EC4899",
    glowColor: "rgba(236, 72, 153, 0.4)",
    gradient: "from-pink-500 to-rose-600",
    description: "PDF contracts, scanned invoices, vendor quotes, legal terms, and spec sheets.",
    streams: ["PDF Invoices", "Master Agreements", "Vendor Quotes", "Compliance Docs"],
    samplePayload: {
      rawName: "vendor_invoice_q3_4092.pdf",
      rawType: "Unstructured PDF / 4 Pages",
      fields: [
        { key: "doc_type", value: "Supplier Invoice", type: "string" },
        { key: "total_due", value: "$28,450.00", type: "currency" },
        { key: "tax_id", value: "EU-9810442B", type: "string" },
        { key: "payment_terms", value: "Net-30 / Due Oct 24", type: "date" },
      ],
      extractedEntity: "Verified Invoice Entity #4092",
      transformationOutput: "Parsed via Document AI: 22 line-items cross-checked with PO",
    },
    position: { x: -20, y: -34, angle: 235 },
    packetLabel: "PDF // INV-4092",
  },
  {
    id: "website",
    name: "Websites & Portals",
    shortLabel: "WEBSITES",
    category: "Digital Channels",
    iconName: "Globe",
    icon: Globe,
    accentColor: "#14B8A6",
    glowColor: "rgba(20, 184, 166, 0.4)",
    gradient: "from-teal-500 to-cyan-600",
    description: "Customer web portals, catalog specs, public market data, and inbound web forms.",
    streams: ["Inbound Web Forms", "Public Pricing Feeds", "Customer Portal Logs", "Catalog Specs"],
    samplePayload: {
      rawName: "portal_submission_enterprise",
      rawType: "HTTP POST / Form Payload",
      fields: [
        { key: "client", value: "Vanguard Logistics", type: "string" },
        { key: "service_tier", value: "Enterprise AI Suite", type: "string" },
        { key: "location", value: "Global / 8 Hubs", type: "string" },
        { key: "time_in_queue", value: "0.01 sec", type: "status" },
      ],
      extractedEntity: "Portal Intake [Vanguard]",
      transformationOutput: "Normalized and routed into executive triage queue",
    },
    position: { x: 20, y: -34, angle: 305 },
    packetLabel: "FORM // VANGUARD",
  },
  {
    id: "email",
    name: "Email & Conversations",
    shortLabel: "EMAIL",
    category: "Communications",
    iconName: "Mail",
    icon: Mail,
    accentColor: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.4)",
    gradient: "from-amber-500 to-orange-600",
    description: "Inbound customer emails, thread conversations, PDF attachments, and service requests.",
    streams: ["Inbox Inquiries", "Customer Threads", "Email Attachments", "Escalation Requests"],
    samplePayload: {
      rawName: "re_service_amendment_urgent.eml",
      rawType: "MIME Email / TLS-Encrypted",
      fields: [
        { key: "sender", value: "operations@partner.com", type: "string" },
        { key: "subject", value: "Delivery Expedite Req.", type: "string" },
        { key: "sentiment", value: "High Urgency", type: "status" },
        { key: "attachment", value: "po_amendment.pdf", type: "string" },
      ],
      extractedEntity: "Priority Inquiry [Partner Ops]",
      transformationOutput: "NLP extracted intent: Delivery window moved up by 48 hrs",
    },
    position: { x: 34, y: 18, angle: 20 },
    packetLabel: "EMAIL // URGENT PO",
  },
  {
    id: "spreadsheet",
    name: "Spreadsheets & Sheets",
    shortLabel: "SHEETS",
    category: "Manual Trackers",
    iconName: "FileSpreadsheet",
    icon: FileSpreadsheet,
    accentColor: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.4)",
    gradient: "from-emerald-500 to-teal-600",
    description: "Excel models, Google Sheets, weekly tracking tables, and manual CSV team exports.",
    streams: ["Operations Excel", "Google Sheets Live", "CSV Data Dumps", "Commission Models"],
    samplePayload: {
      rawName: "operations_tracker_2026_final_v3.xlsx",
      rawType: "Workbook / 14 Tabs",
      fields: [
        { key: "sheet_tab", value: "Q3_Consolidated_Ops", type: "string" },
        { key: "rows_parsed", value: "4,820 rows", type: "number" },
        { key: "errors_cleaned", value: "42 formula anomalies", type: "status" },
        { key: "reconciliation", value: "100% Verified", type: "status" },
      ],
      extractedEntity: "Operational Timeseries Matrix",
      transformationOutput: "Normalized schema merged with warehouse master table",
    },
    position: { x: -34, y: 18, angle: 160 },
    packetLabel: "EXCEL // 4.8K ROWS",
  },
];

export const SCROLL_STAGES: ScrollStage[] = [
  {
    id: 1,
    key: "dormant",
    tag: "STAGE 01 // SILOED ASSETS",
    title: "Your business already runs on data. It's just everywhere.",
    subtitle: "Information is locked in disconnected silos — CRM, ERP, databases, spreadsheets, PDFs, and inboxes.",
    badge: "8 ISOLATED SYSTEMS",
    centerStatus: "STANDBY // DISCONNECTED",
    telemetryLog: "DETECTION: 8 DISCONNECTED REPOSITORIES FOUND",
  },
  {
    id: 2,
    key: "conduits",
    tag: "STAGE 02 // SECURE CONDUITS",
    title: "Forming the unified data matrix.",
    subtitle: "High-frequency bi-directional conduits bridge disparate protocols without replacing existing software.",
    badge: "CONDUITS ONLINE",
    centerStatus: "LINKING // CONDUIT MATRIX",
    telemetryLog: "HANDSHAKE: 8 SECURE CONDUITS INITIALIZED",
  },
  {
    id: 3,
    key: "streaming",
    tag: "STAGE 03 // CONTINUOUS STREAMS",
    title: "Data in motion. Real-time packet streaming.",
    subtitle: "Unstructured files, transactional records, and cloud webhooks stream continuously into the central hub.",
    badge: "LIVE PACKET INGESTION",
    centerStatus: "INGESTING // ACTIVE STREAMS",
    telemetryLog: "STREAM: HIGH-VELOCITY PAYLOADS IN MOTION",
  },
  {
    id: 4,
    key: "intelligence",
    tag: "STAGE 04 // HASTAVA INTELLIGENCE",
    title: "Connect → Understand → Enrich → Contextualize.",
    subtitle: "Raw business data is parsed, reconciled, and synthesized into a living, interconnected intelligence graph.",
    badge: "INTELLIGENCE SYNTHESIS",
    centerStatus: "SYNTHESIZING // LIVE GRAPH",
    telemetryLog: "SYNTHESIS: MULTI-SYSTEM CONTEXT ESTABLISHED",
  },
  {
    id: 5,
    key: "unified",
    tag: "STAGE 05 // UNIFIED INTELLIGENCE",
    title: "From fragmented data to unified intelligence.",
    subtitle: "Every system speaks the same language. Your business is understood in real time — ready for intelligent action.",
    badge: "CONNECTED SYSTEM READY",
    centerStatus: "UNIFIED INTELLIGENCE ACTIVE",
    telemetryLog: "READY: CONTEXT ESTABLISHED FOR AUTOMATION",
  },
];

export const SYNTHESIS_PILLARS = [
  {
    id: "connect",
    step: "01",
    title: "CONNECT",
    description: "Universal ingestion across APIs, databases, files, and legacy tools without altering source systems.",
    metric: "Multi-Protocol",
    accent: "text-blue-400",
    bgAccent: "border-blue-500/30 bg-blue-950/40",
  },
  {
    id: "understand",
    step: "02",
    title: "UNDERSTAND",
    description: "AI Document Intelligence & semantic NLP extract entities, numbers, and intent from raw inputs.",
    metric: "Entity Extraction",
    accent: "text-cyan-400",
    bgAccent: "border-cyan-500/30 bg-cyan-950/40",
  },
  {
    id: "enrich",
    step: "03",
    title: "ENRICH",
    description: "Cross-system reconciliation links customer records with invoices, emails, and supply ledger items.",
    metric: "Cross-System Joins",
    accent: "text-indigo-400",
    bgAccent: "border-indigo-500/30 bg-indigo-950/40",
  },
  {
    id: "contextualize",
    step: "04",
    title: "CONTEXTUALIZE",
    description: "Synthesizes a continuous, real-time Business Knowledge Graph ready for autonomous execution.",
    metric: "Unified Graph",
    accent: "text-emerald-400",
    bgAccent: "border-emerald-500/30 bg-emerald-950/40",
  },
];
