export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  businessValue: string;
  process: string[];
  deliverables: string[];
  industriesServed: string[];
  faq: ServiceFAQ[];
  heroImage: {
    src: string;
    alt: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const SERVICE_DATABASE: Record<string, ServiceDetail> = {
  "sourcing-support": {
    slug: "sourcing-support",
    title: "Direct Sourcing Support",
    subtitle: "On-the-ground artisan and workshop coordination",
    overview: "Connecting global buyers directly with certified rural weaver clusters, metal smiths, and wood carving workshops in India. We manage direct-to-artisan relationships to eliminate middle-tier brokers, lower costs, and ensure full transparency.",
    businessValue: "Reduces procurement cost by 25-30% compared to traditional trading brokers, while guaranteeing direct traceability of crafts and ethical work conditions.",
    process: [
      "Requirement mapping (dimensions, materials, aesthetic parameters)",
      "Cooperative matching & artisan verification",
      "Sourcing audits & baseline sampling supervision",
      "Production timeline scheduling and tracking"
    ],
    deliverables: [
      "Artisan cooperative registration certificates",
      "Direct trade pricing transparency worksheets",
      "Monthly production milestone status sheets"
    ],
    industriesServed: ["Luxury Home Decor", "Boutique Retail Chains", "Interior Design Firms", "Hospitality Sourcing Managers"],
    faq: [
      { q: "How do you coordinate with remote artisan communities?", a: "We maintain regional sourcing offices near core clusters (Jaipur, Bastar, Srinagar) staffed with local managers speaking regional dialects." },
      { q: "Do you guarantee fair wages for artisans?", a: "Yes. All coordinates follow fair-trade principles. Payments are disbursed directly to registered cooperative bank accounts." }
    ],
    heroImage: { src: "/images/artisan-network.webp", alt: "Indian artisans working at handloom" },
    seo: {
      title: "Direct Sourcing Support India | B2B Handicraft Sourcing Partner",
      description: "Direct-to-artisan sourcing support in India. Eliminate trading brokers, verify fair-trade credentials, and coordinate with master craft clusters.",
      keywords: ["handicraft sourcing support", "direct trade India", "artisan cooperative sourcing", "B2B handicraft procurement"]
    }
  },
  "private-label": {
    slug: "private-label",
    title: "Private Label Support",
    subtitle: "Custom branding, engraving, and tags",
    overview: "Integrate your proprietary brand identity directly onto artisan-made items. We coordinate custom brand tags, stamped logos, custom wooden engravings, and branded inner boxes to deliver retail-ready products.",
    businessValue: "Establishes brand equity, improves premium retail presentation, and allows catalog customization without local manufacturing setup.",
    process: [
      "Vector artwork guidelines review (AI/EPS templates)",
      "Material engraving tests (heat stamping, laser, engraving)",
      "Prototype tagging and photo approval",
      "Production batch integration and inspection"
    ],
    deliverables: [
      "Approved packaging layout blueprints",
      "Sample brand stamping test sheets",
      "Compliance label placement diagrams"
    ],
    industriesServed: ["E-Commerce Brands", "Luxury Boutiques", "Department Stores", "Corporate Gifting Agencies"],
    faq: [
      { q: "Can you laser engrave logos on wooden products?", a: "Yes. We support precise laser engraving or traditional hot-iron branding on sheesham and mango wood decor." },
      { q: "What tag materials are available?", a: "We provide recycled kraft paper tags, cotton fabric labels, and copper/brass wire tags." }
    ],
    heroImage: { src: "/images/quality-certification.webp", alt: "Brand tag being stitched onto handloom fabric" },
    seo: {
      title: "Private Label Sourcing India | Custom Branding Handicrafts",
      description: "Custom branding and private label support for Indian handicrafts. Laser engraving, custom swing tags, and branded carton packaging.",
      keywords: ["private label handicrafts", "custom branding woodware", "handicraft packaging design", "OEM handicraft brands"]
    }
  },
  "oem-manufacturing": {
    slug: "oem-manufacturing",
    title: "OEM Manufacturing",
    subtitle: "Proprietary design fabrication from sketches",
    overview: "Scale production using your exact design blueprints, technical drawings, or reference samples. We protect your intellectual property with strict NDAs and oversee custom clay molds, wooden casting contours, and textile loom punch card changes.",
    businessValue: "Allows you to launch proprietary, market-differentiating handicraft lines with guaranteed product exclusivity.",
    process: [
      "NDA signoff and blueprint feasibility analysis",
      "Mold fabrication (clay contours, sand casts, or wood stencils)",
      "Counter-sample creation and physical review",
      "Trial run optimization and full scale batch production"
    ],
    deliverables: [
      "Detailed CAD conversion sheets",
      "Sample approval logs",
      "Exclusivity contract declarations"
    ],
    industriesServed: ["Commercial Decor Designers", "Global Furniture Retailers", "High-End Ceramic Brands"],
    faq: [
      { q: "Do you sign Non-Disclosure Agreements (NDAs)?", a: "Yes. All OEM projects require a bilateral NDA before design files are shared with our artisan workshop managers." },
      { q: "Who owns the manufacturing molds?", a: "The client owns 100% of custom molds and pattern stencils. Molds are archived securely at our regional consolidation offices." }
    ],
    heroImage: { src: "/images/sample-development.webp", alt: "Designer reviewing CAD model of ceramic vase" },
    seo: {
      title: "OEM Handicraft Manufacturing India | Custom Pottery & Woodware",
      description: "OEM contract manufacturing for Indian handicrafts. Custom molds, sand casting, and wood framing from your exact technical designs.",
      keywords: ["OEM handicraft manufacturing", "contract handicraft factory", "custom mold ceramics", "brass custom cast"]
    }
  },
  "quality-assurance": {
    slug: "quality-assurance",
    title: "Quality Assurance & Audits",
    subtitle: "Multi-phase inspection at the workshops",
    overview: "Verify quality metrics at source. Our trained quality inspectors conduct audits on-site at three stages: raw materials checks (moisture, purity), mid-term production inspections, and final pre-shipment inspections following standard AQL guidelines.",
    businessValue: "Reduces product defect rates below 1.5%, eliminating transit damage and claims while guaranteeing compliance with international import standards.",
    process: [
      "Quality control protocol definition (acceptable defects list)",
      "Raw material verification (calipers, moisture meters, fiber tests)",
      "Mid-line inspection and sizing tolerances check",
      "Final AQL 2.5 random batch inspection"
    ],
    deliverables: [
      "Raw material moisture test logs (< 12%)",
      "Detailed Pre-Shipment Inspection (PSI) reports with photos",
      "Defect classification worksheets"
    ],
    industriesServed: ["Wholesale Importers", "B2B Sourcing Agencies", "High-End Furniture Retailers"],
    faq: [
      { q: "What is your moisture standard for woodcarving?", a: "We enforce a strict wood moisture standard between 8% and 12% to prevent warping and cracking in dry destination climates." },
      { q: "Can we appoint third-party inspectors like SGS?", a: "Yes. We assist and welcome external auditors (SGS, Intertek, Bureau Veritas) at our cargo consolidation hubs." }
    ],
    heroImage: { src: "/images/quality-inspection.webp", alt: "Quality inspector measuring wood moisture" },
    seo: {
      title: "Handicraft Quality Control India | AQL Inspection Sourcing",
      description: "Rigorous quality control and AQL inspections for Indian handicrafts. On-site checks, moisture logging, and third-party inspection assist.",
      keywords: ["handicraft quality inspection", "wood moisture control", "pre-shipment audit India", "AQL 2.5 inspection"]
    }
  },
  "export-documentation": {
    slug: "export-documentation",
    title: "Export Documentation Support",
    subtitle: "Customs, clearances, and regulatory certificates",
    overview: "Flawless customs clearance. We handle the preparation, stamping, and filing of all regulatory export documentation, including Certificates of Origin, Fumigation (ISPM 15) tags, Phytosanitary clearances, and precise HS coding.",
    businessValue: "Avoids costly customs clearance delays, demurrage fines, and quarantine delays at destination ports.",
    process: [
      "HS Code identification and validation",
      "Certificate of Origin filing (Indian Chamber of Commerce)",
      "Fumigation coordinating (ISPM 15 standards)",
      "Export customs billing and shipping manifest prep"
    ],
    deliverables: [
      "Official Certificate of Origin",
      "Fumigation & Phytosanitary Certificates",
      "Certified Commercial Invoice & Packing List"
    ],
    industriesServed: ["Global Freight Forwarders", "Importers", "Logistics Directors"],
    faq: [
      { q: "Do you supply ISPM 15 fumigation certificates?", a: "Yes. All wood containers and packaging pallets undergo certified fumigation, with stamped documentation provided for customs clearance." },
      { q: "What are Certificates of Origin?", a: "It is an official document proving that the handicrafts were produced in India, often required to claim preferential import tariffs." }
    ],
    heroImage: { src: "/images/export-documents.webp", alt: "Export certificates and customs clearance stamps" },
    seo: {
      title: "Export Customs Documentation India | B2B Handicraft Certificates",
      description: "Manage customs certificates and export paperwork in India. Certificates of Origin, ISPM 15 fumigation, and Phytosanitary approvals.",
      keywords: ["export documentation India", "Certificate of Origin handicrafts", "ISPM 15 fumigation", "customs clearance HS code"]
    }
  },
  "packaging": {
    slug: "packaging",
    title: "Export Packaging Support",
    subtitle: "Drop-tested packaging for fragile cargo",
    overview: "Protect fragile heritage items during transit. We implement double-walled corrugated carton standards, customized styrofoam edge contours, eco-friendly honeycomb paper cushioning, and silica desiccant moisture controls.",
    businessValue: "Virtually eliminates transit damage (< 0.5% break rate) for fragile glazed ceramics, pottery, and mirror-work items.",
    process: [
      "Fragility indexing and volume dimension checks",
      "Custom inner carton sizing and foam contour mockups",
      "ISTA 1A product drop-testing simulation",
      "Humidity protection and silica calculations"
    ],
    deliverables: [
      "Packaging drop-test results logs",
      "Container load plan spacing grids",
      "Carton labeling layout blueprints"
    ],
    industriesServed: ["Online Retailers", "Ceramic Distributors", "Fragile Decor Importers"],
    faq: [
      { q: "What is your standard drop-test protocol?", a: "We follow ISTA 1A drop-testing guidelines for fragile pottery, dropping samples from heights of 30 inches to test carton structural strength." },
      { q: "Do you use eco-friendly packaging?", a: "Yes, we support honeycomb Kraft paper and biodegradable starch packaging as alternatives to foam." }
    ],
    heroImage: { src: "/images/export-packaging.webp", alt: "Ceramic vase nested in protective honeycomb paper inside carton" },
    seo: {
      title: "Handicraft Export Packaging India | Fragile Sourcing Logistics",
      description: "Drop-tested B2B packaging for fragile handicrafts. Double-walled cartons, honeycomb paper inserts, and moisture-controlled packaging.",
      keywords: ["fragile export packaging", "handicraft carton packing", "drop test ISTA 1A", "desiccant moisture control"]
    }
  },
  "logistics-coordination": {
    slug: "logistics-coordination",
    title: "Logistics & Freight Coordination",
    subtitle: "Freight forwarding, LCL, FCL, and port logistics",
    overview: "Seamless maritime and air logistics. We coordinate cargo shipping with global freight forwarders out of Mundra, Nhava Sheva (Mumbai), and Delhi ports. We support FCL container loading, LCL pallet consolidation, and cargo insurance.",
    businessValue: "Lowers shipping expenses by combining multiple craft categories into single consolidated cargo containers.",
    process: [
      "Volume estimation and container sizing (20ft, 40ft, HQ)",
      "LCL palletized consolidation at regional warehouses",
      "Customs broker coordination at Indian exit ports",
      "Freight booking and marine insurance filing"
    ],
    deliverables: [
      "Master Bill of Lading (BOL)",
      "Container stuffing logs with photographic records",
      "Cargo insurance coverage certificates"
    ],
    industriesServed: ["B2B Importers", "Global Supply Chain Directors", "Handicraft Retail Giants"],
    faq: [
      { q: "What ports do you ship out of?", a: "Our primary ocean freight exits out of Mundra (Gujarat) and Nhava Sheva (Mumbai). Air cargo exits out of Delhi (IGI)." },
      { q: "Can we consolidate different crafts in one container?", a: "Yes. This is our core strength. We consolidate Jaipur pottery, Bastar metalware, and Saharanpur woodware into a single container." }
    ],
    heroImage: { src: "/images/warehouse.webp", alt: "Boxes loaded on pallets in organized logistics warehouse" },
    seo: {
      title: "Handicraft Freight Forwarding India | LCL Container Consolidation",
      description: "Ocean and air freight logistics coordination for Indian handicraft exports. FCL container loading and LCL pallet consolidation.",
      keywords: ["handicraft freight forwarding", "LCL container consolidation", "FCL container loading", "Mundra port exporter"]
    }
  },
  "vendor-verification": {
    slug: "vendor-verification",
    title: "Vendor Verification",
    subtitle: "Artisan cooperative audits & credential checks",
    overview: "Mitigate operational risks. We perform on-site vendor verification and cooperative compliance audits, checking registered artisan counts, labor standards, raw material sourcing legality, and registry details.",
    businessValue: "Protects your brand from ESG violations, guaranteeing compliance with modern slavery laws, child-free labor, and legal timber harvesting regulations.",
    process: [
      "Vendor verification protocol definition (labor, raw materials)",
      "On-site workshop audit and photos documentation",
      "Government database registration matching",
      "Audit rating report compilation"
    ],
    deliverables: [
      "Vendor verification audit report",
      "Labor safety compliance photographs",
      "Vriksh Timber Legality Registry checks (for woodware)"
    ],
    industriesServed: ["Corporate Ethical Compliance Managers", "Department Store Chains", "ESG Conscious Brands"],
    faq: [
      { q: "How do you verify timber legality?", a: "For wooden products, we verify that vendors carry active Vriksh Timber Legality certificates to prove wood is sourced from sustainable forests." },
      { q: "Do you audit for child labor?", a: "We maintain a zero-tolerance policy. Regular unannounced inspections are conducted to verify child-free artisan workspaces." }
    ],
    heroImage: { src: "/images/buyer-meeting.webp", alt: "Audit team reviewing vendor certificates inside workspace" },
    seo: {
      title: "Vendor Auditing India | Ethical Sourcing Compliance",
      description: "Artisan vendor verification and ethical compliance audits in India. Safeguard against child labor and verify sustainable wood sourcing.",
      keywords: ["vendor verification India", "ethical sourcing audit", "Vriksh timber certificate", "ESG compliance handicraft"]
    }
  },
  "product-development": {
    slug: "product-development",
    title: "Product Development",
    subtitle: "Artisan prototyping and counter-sampling",
    overview: "Bridge design and production. We translate your sketches, CAD models, or reference photos into physical samples using traditional craft materials. We coordinate fine refinements directly with master artisans to perfect designs before bulk production.",
    businessValue: "Accelerates your time-to-market while ensuring sample structural integrity and design accuracy before committing capital to bulk runs.",
    process: [
      "Design sketch translation and material selection",
      "Artisan prototyping and sample molding",
      "Dimensional and weight validation",
      "Final sample photography, video call review, and dispatch"
    ],
    deliverables: [
      "Pre-production counter-sample",
      "Dimensional adjustment report logs",
      "Production design reference cards"
    ],
    industriesServed: ["Interior Decor Brands", "Premium Retail Buyers", "Product Designers"],
    faq: [
      { q: "How long does it take to develop a sample?", a: "Samples typically take 15 to 30 days depending on the craft complexity (e.g. ceramic mold vs. hand-spun embroidery)." },
      { q: "Do you charge sample development fees?", a: "Yes. Prototyping costs are charged upfront and are fully credited back to the client upon bulk production order confirmation." }
    ],
    heroImage: { src: "/images/container-loading.webp", alt: "Drafting layout and prototype sample on workshop table" },
    seo: {
      title: "Handicraft Prototyping India | Custom Counter-Sampling B2B",
      description: "Artisan prototyping and product development services in India. Custom counter-samples, design adjustments, and dimensional styling before production.",
      keywords: ["handicraft prototyping India", "custom counter sample", "handicraft sample development", "pottery prototype mold"]
    }
  }
};
