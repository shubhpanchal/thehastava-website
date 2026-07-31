export interface ResourceSection {
  heading: string;
  body: string;
  bulletPoints?: string[];
}

export interface ResourceDetail {
  slug: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  readTime: string;
  overview: string;
  sections: ResourceSection[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const RESOURCE_DATABASE: Record<string, ResourceDetail> = {
  "import-guide": {
    slug: "import-guide",
    title: "Handicrafts Import Guide",
    subtitle: "A step-by-step handbook on importing artisanal crafts from India",
    lastUpdated: "July 2026",
    readTime: "8 min read",
    overview: "Importing handmade items from India involves a series of regulatory steps, logistics decisions, and quality verification audits. This handbook outlines the B2B importing pipeline from selecting artisan cooperatives to port logistics clearance.",
    sections: [
      {
        heading: "1. Identifying and Verifying Artisan Partners",
        body: "Begin by identifying registered weaver or metal smith cooperatives. Ensure they have legal registration certificates and check credentials to verify ethical labor practices and raw material sourcing legitimacy.",
        bulletPoints: [
          "Request government-registered artisan cards",
          "Ensure Vriksh or FSC certification for wood products",
          "Verify the cooperative's bank account for direct payments"
        ]
      },
      {
        heading: "2. Structuring Commercial Invoices and HS Codes",
        body: "Accurate Harmonized System (HS) codes are critical for customs declarations. In India, handicrafts fall under specific tariff chapters (e.g. Chapter 44 for woodware, Chapter 69 for ceramics, Chapter 74 for copper/brass art). Assigning the correct code ensures proper tariff calculations.",
      },
      {
        heading: "3. Logistics: Deciding Between LCL and FCL",
        body: "Logistics choices depend on volume and budget. For bulk furniture, FCL (Full Container Load) containers maximize transit safety. For smaller ceramic or textile shipments, LCL (Less than Container Load) consolidation at port warehouses is more cost-effective.",
        bulletPoints: [
          "LCL: Best for test orders or high-value items (< 15 CBM)",
          "FCL: Best for volume orders (20ft holds ~28 CBM, 40ft holds ~58 CBM)"
        ]
      }
    ],
    seo: {
      title: "Handicrafts Import Guide | How to Sourced from India B2B",
      description: "Learn how to import authentic handicrafts from India. Read our B2B guide covering verification, customs HS codes, and container logistics.",
      keywords: ["import handicrafts India", "B2B handicraft customs", "handicraft HS codes", "importing Indian crafts"]
    }
  },
  "moq-guide": {
    slug: "moq-guide",
    title: "Understanding Sourcing MOQs",
    subtitle: "How Minimum Order Quantities support handmade production",
    lastUpdated: "July 2026",
    readTime: "6 min read",
    overview: "Minimum Order Quantities (MOQs) protect artisan communities from high production setup costs. Unlike automated factories, setting up pottery kilns, yarn dye vats, or metal casting pits requires specific minimum volumes to remain financially sustainable.",
    sections: [
      {
        heading: "1. Why Handmade Production Requires MOQs",
        body: "Every handmade craft line requires a setup phase. For Jaipur ceramics, firing a wood kiln consumes specific fuel costs regardless of whether it holds 10 or 100 pots. MOQs distribute these overhead costs fairly, protecting artisan wages.",
      },
      {
        heading: "2. Standard Craft MOQs",
        body: "Hastava coordinates with local cooperative loops to maintain flexible, low MOQs for first-time importers while supporting artisan production costs.",
        bulletPoints: [
          "Jaipur Blue Pottery (Ceramics): 100 Units per design line",
          "Bastar Dhokra Art (Brass Casting): 50 Units per model",
          "Saharanpur Wood Carving (Furniture): 20 Units per design",
          "Kashmiri Pashmina (Luxury Textiles): 30 Pieces per weave"
        ]
      },
      {
        heading: "3. Sample Run Exemptions",
        body: "We support pre-production prototyping. Prototyping and counter-sampling are exempt from standard MOQs, though they require a sample setup fee which is fully credited back upon bulk contract confirmation.",
      }
    ],
    seo: {
      title: "Sourcing MOQ Guide | Indian Handicrafts wholesale",
      description: "Understand Minimum Order Quantities (MOQs) for Indian handicrafts. Learn why artisans use MOQs and how sample runs are structured.",
      keywords: ["handicrafts MOQ guide", "wholesale handicraft quantities", "pottery MOQ wholesale", "sample run MOQ exemptions"]
    }
  },
  "packaging-guide": {
    slug: "packaging-guide",
    title: "Handicraft Packaging Guide",
    subtitle: "Export-grade packaging standards for fragile cargo",
    lastUpdated: "July 2026",
    readTime: "5 min read",
    overview: "Exporting fragile ceramics, metal castings, and woodware globally requires double-layered shock insulation. This guide describes Hastava's packaging standards designed to eliminate breakage during ocean transit.",
    sections: [
      {
        heading: "1. Double-Walled Outer Cartons",
        body: "We package wholesale lots in double-walled corrugated cardboard boxes (5-ply or 7-ply cartons) that provide high crush-resistance, protecting cargo from forklift handling stress.",
      },
      {
        heading: "2. Customized Styrofoam and Honeycomb Contours",
        body: "Fragile ceramics and pottery pieces are individually wrapped in honeycomb paper or nested in custom-fit styrofoam contours. This prevents movement and absorbs impact.",
        bulletPoints: [
          "Honeycomb Kraft wrap: Biodegradable and protective",
          "Custom molds: Holds items firmly in drop tests"
        ]
      },
      {
        heading: "3. Moisture Control & Silica Desiccants",
        body: "Ocean transit exposes cargo to high relative humidity. To prevent moisture absorption and timber swelling in wood carvings, we seal packages with silica gel packets.",
      }
    ],
    seo: {
      title: "Handicraft Export Packaging Guide | B2B Transit Standards",
      description: "Explore export packaging guidelines for fragile handicrafts. Double-walled cartons, custom shock contours, and moisture control systems.",
      keywords: ["export packaging standards", "fragile handicraft shipping", "corrugated carton drop test", "silica desiccant packing"]
    }
  },
  "gi-products-guide": {
    slug: "gi-products-guide",
    title: "Geographical Indication (GI) Guide",
    subtitle: "Understanding the B2B value of certified heritage crafts",
    lastUpdated: "July 2026",
    readTime: "7 min read",
    overview: "A Geographical Indication (GI) is a government-issued seal certifying that a handicraft originates from a specific regional territory and uses traditional local techniques. This guide outlines the legal and brand value of sourcing GI-tagged crafts.",
    sections: [
      {
        heading: "1. Legal Protections Against Counterfeiting",
        body: "GI tags are legally protected under international WTO agreements. This prevents factories in other regions from using the name (e.g. preventing mass-produced machine wares from being sold as authentic Jaipur Blue Pottery).",
      },
      {
        heading: "2. Elevating Premium Brand Storytelling",
        body: "Consumers seek authenticity. Sourcing certified GI-tagged products allows luxury brands and retailers to share rich, verifiable heritage stories, justifying premium retail prices.",
        bulletPoints: [
          "Verifiable origin coordinates",
          "Official cooperative weaver details",
          "Guaranteed traditional techniques"
        ]
      },
      {
        heading: "3. Tariff and Customs Benefits",
        body: "Customs authorities recognize GI certificates as proof of regional origin, often required to claim preferential import tariffs under trade agreements.",
      }
    ],
    seo: {
      title: "Geographical Indication (GI) Guide | B2B Sourcing Value",
      description: "Learn about the B2B value of government-registered Geographical Indication (GI) tags. Protect your brand and verify authentic craftsmanship.",
      keywords: ["GI tag handicrafts", "Geographical Indication B2B", "authentic craft certificates", "tariffs GI registry"]
    }
  },
  "export-documentation-guide": {
    slug: "export-documentation-guide",
    title: "Customs & Export Documentation",
    subtitle: "A reference guide to mandatory export paperwork in India",
    lastUpdated: "July 2026",
    readTime: "9 min read",
    overview: "Navigating international customs borders requires complete documentation. This guide details the essential regulatory certificates, shipping manifests, and clearances required to export handicrafts out of India.",
    sections: [
      {
        heading: "1. Certificate of Origin (CoO)",
        body: "Issued by the Chamber of Commerce, this certificate proves that the goods were manufactured in India, allowing importers to claim duty concessions.",
      },
      {
        heading: "2. ISPM 15 Fumigation & Heat Treatment",
        body: "All wood packaging materials (crates, pallets) must be heat-treated or fumigated with methyl bromide in compliance with ISPM 15 standards to prevent pest transfer, with official stamps applied.",
        bulletPoints: [
          "Mandatory for all wooden crates and pallets",
          "Official certificate presented to port customs authorities",
          "Ensures compliance with international quarantine laws"
        ]
      },
      {
        heading: "3. Phytosanitary Clearance Certificates",
        body: "Required for natural raw plant fibers or wood products, proving that the agricultural goods have been inspected and are free from pests and diseases.",
      }
    ],
    seo: {
      title: "Customs & Export Documentation Guide | Indian Craft Shipping",
      description: "Read our B2B customs reference guide for Indian export documentation. Certificates of Origin, ISPM 15 wood fumigation, and Phytosanitary approvals.",
      keywords: ["export documents guide", "Certificate of Origin India", "ISPM 15 fumigation stamp", "Phytosanitary certificate B2B"]
    }
  },
  "quality-guide": {
    slug: "quality-guide",
    title: "Quality Assurance Guide",
    subtitle: "Our on-site inspection protocols and defect limits",
    lastUpdated: "July 2026",
    readTime: "7 min read",
    overview: "Quality consistency is the biggest challenge in handmade manufacturing. This guide explains Hastava's three-stage on-site auditing protocol designed to maintain strict B2B export standards.",
    sections: [
      {
        heading: "1. Raw Materials Inspection",
        body: "Inspection begins before production. We test clay mineral compositions, audit base brass recycling purity, and measure timber moisture levels using calibrated pin meters to guarantee structural integrity.",
      },
      {
        heading: "2. Mid-Production Audits",
        body: "Our inspectors conduct on-site audits at workshops during assembly or firing. We check dimensional tolerance limits (e.g. +/- 3mm variance for furniture panels) to catch issues early.",
        bulletPoints: [
          "Dimensional variance checks",
          "Color tone and glazing uniformity audits",
          "Design detailing and alignment checks"
        ]
      },
      {
        heading: "3. Pre-Shipment Inspection (PSI)",
        body: "Prior to container stuffing, our quality controllers conduct a final random audit using international AQL (Acceptance Quality Limit) 2.5 standards to ensure defect-free lots.",
      }
    ],
    seo: {
      title: "Handicrafts Quality Assurance Guide | AQL Inspection",
      description: "Learn about quality control standards for handicraft sourcing. Read our guide on AQL 2.5 checks, timber moisture limits, and audit protocols.",
      keywords: ["handicraft quality guide", "AQL 2.5 standards", "pre-shipment audit", "wood moisture testing"]
    }
  }
};
