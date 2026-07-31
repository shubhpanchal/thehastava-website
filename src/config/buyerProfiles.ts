export interface BuyerProfile {
  id: string;
  title: string;
  description: string;
  targetCrafts: string[]; // Craft names or slugs
  targetServices: string[]; // Service names or slugs
  keyBenefit: string;
  moqGuideline: string;
}

export const BUYER_PROFILES: BuyerProfile[] = [
  {
    id: "importer",
    title: "Global Importer",
    description: "High-volume trade organizations managing customs clearances, warehouse logistics, and multi-port ocean distribution.",
    targetCrafts: ["jaipur-blue-pottery", "bastar-dhokra-art", "saharanpur-wood-carvings"],
    targetServices: ["logistics-coordination", "export-documentation", "quality-assurance"],
    keyBenefit: "Freight consolidation and AQL 2.5 quality inspections to lower transit defect risks.",
    moqGuideline: "Full Container Load (FCL) batches with flexible mixed-craft container options."
  },
  {
    id: "distributor",
    title: "Regional Wholesaler",
    description: "Supplying regional retailers, boutique chains, and localized design firms with stock inventories.",
    targetCrafts: ["jaipur-blue-pottery", "kashmiri-pashmina", "kutch-handloom-embroidery"],
    targetServices: ["sourcing-support", "packaging", "quality-assurance"],
    keyBenefit: "Drop-tested packaging and standardized product batches for downstream warehousing.",
    moqGuideline: "100+ units per item with scheduled monthly contract delivery runs."
  },
  {
    id: "retail-chain",
    title: "Retail Chain Buyer",
    description: "Sourcing consumer decor and apparel lines for department store chains and large retail brands.",
    targetCrafts: ["jaipur-blue-pottery", "banarasi-silk-sarees", "kutch-handloom-embroidery"],
    targetServices: ["private-label", "vendor-verification", "quality-assurance"],
    keyBenefit: "Rigorous compliance checks (child labor audits, Vriksh logs) and custom retail labeling.",
    moqGuideline: "Standard retail batch sizes with custom barcode labeling."
  },
  {
    id: "interior-designer",
    title: "Interior Designer",
    description: "Sourcing unique accent statement items, carved partition panels, and luxury textiles for high-end clients.",
    targetCrafts: ["saharanpur-wood-carvings", "kutch-handloom-embroidery", "bastar-dhokra-art"],
    targetServices: ["product-development", "private-label", "sourcing-support"],
    keyBenefit: "Direct artisan custom prototyping, supporting unique dimensions and colors.",
    moqGuideline: "Low custom-order MOQs (20+ units for furniture, 10+ for custom brass castings)."
  },
  {
    id: "hospitality",
    title: "Hotel & Hospitality",
    description: "Sourcing architectural partition screens, customized dining tableware, and decor accents for luxury resorts.",
    targetCrafts: ["saharanpur-wood-carvings", "jaipur-blue-pottery", "bastar-dhokra-art"],
    targetServices: ["oem-manufacturing", "quality-assurance", "logistics-coordination"],
    keyBenefit: "Intellectual property NDAs, custom mold fabrication, and on-site stress and moisture audits.",
    moqGuideline: "Volume batch runs supporting large hotel fit-out timetables."
  },
  {
    id: "corporate-gifts",
    title: "Corporate Gifting",
    description: "Procuring heritage brass sculptures, custom diary boxes, and wool shawls for high-end corporate programs.",
    targetCrafts: ["bastar-dhokra-art", "kashmiri-pashmina", "saharanpur-wood-carvings"],
    targetServices: ["private-label", "packaging", "sourcing-support"],
    keyBenefit: "Engraved corporate logos, premium gift presentation boxes, and worldwide delivery.",
    moqGuideline: "50+ units with branded presentation boxing options."
  },
  {
    id: "marketplace-seller",
    title: "Marketplace Seller",
    description: "E-commerce brands selling unique handcrafted products on international platforms.",
    targetCrafts: ["jaipur-blue-pottery", "kutch-handloom-embroidery", "bastar-dhokra-art"],
    targetServices: ["packaging", "private-label", "quality-assurance"],
    keyBenefit: "FBA-ready drop-tested inner packaging and direct moisture control desiccants.",
    moqGuideline: "Flexible first-run MOQs starting at 50 units."
  },
  {
    id: "brand-owner",
    title: "Direct-to-Consumer Brand",
    description: "Scaling unique, high-margin handicraft lines under proprietary brand identities.",
    targetCrafts: ["kashmiri-pashmina", "jaipur-blue-pottery", "saharanpur-wood-carvings"],
    targetServices: ["private-label", "oem-manufacturing", "product-development"],
    keyBenefit: "Counter-sampling, prototyping, and exclusive manufacturing stencils.",
    moqGuideline: "Standard product development guidelines apply prior to bulk contract commitment."
  }
];
