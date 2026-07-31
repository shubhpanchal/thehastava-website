export interface CountryIntelligence {
  id: string;
  name: string;
  shippingModes: string[];
  transitTime: string;
  documentationRequired: string[];
  importDutyGuideline: string;
  customsNotes: string;
  recommendations: string[];
}

export const COUNTRIES_INTELLIGENCE: CountryIntelligence[] = [
  {
    id: "us",
    name: "United States",
    shippingModes: ["Ocean Freight (Mundra to NY/LA)", "Air Cargo (Delhi to JFK/LAX)"],
    transitTime: "Ocean: 28-35 days | Air: 5-7 days",
    documentationRequired: ["Commercial Invoice", "Detailed Packing List", "Lacey Act Declaration (for woodware)", "ISPM 15 Fumigation Certificate (for wood pallets)"],
    importDutyGuideline: "Handicrafts are mostly eligible for low/duty-free entry under GSP or specific HS codes, subject to Lacey Act checks.",
    customsNotes: "The Lacey Act requires detailed species declarations for all wooden items. We verify all Saharanpur timber species (e.g., Dalbergia sissoo) under legal registry records.",
    recommendations: ["Appoint a customs broker in NY or LA ports", "Palletize using heat-treated ISPM 15 stamped pallets", "Allow 3-5 days for US Customs and Border Protection (CBP) inspections"]
  },
  {
    id: "uk",
    name: "United Kingdom",
    shippingModes: ["Ocean Freight (Nhava Sheva to London Gateway)", "Air Cargo (Delhi to London Heathrow)"],
    transitTime: "Ocean: 24-30 days | Air: 4-6 days",
    documentationRequired: ["Commercial Invoice", "GSP Form A (Certificate of Origin)", "Packing List", "ISPM 15 Fumigation log"],
    importDutyGuideline: "Eligible for preferential GSP tariffs. Standard UK VAT (20%) applies at import clearance.",
    customsNotes: "Post-Brexit rules require direct filing in the CDS (Customs Declaration Service). Sourcing documents must list exact cooperative registrations.",
    recommendations: ["Ensure EORI registration is active before cargo dispatch", "Verify GSP tariff eligibility for handlooms", "Consolidate cargo under LCL to reduce port costs"]
  },
  {
    id: "de",
    name: "Germany (Europe)",
    shippingModes: ["Ocean Freight (Mundra to Hamburg)", "Air Cargo (Delhi to Frankfurt)"],
    transitTime: "Ocean: 26-32 days | Air: 5-7 days",
    documentationRequired: ["Commercial Invoice", "EUR.1 Certificate of Origin", "ISPM 15 Packing Stamp", "FSC/Timber Legality logs (for woodware)"],
    importDutyGuideline: "Duty-free entry for certified Geographical Indication (GI) items under EU agreements. Standard import VAT applies.",
    customsNotes: "Strict compliance with EU timber regulations (EUTR). Sourcing logs must prove sustainable wood farming practices.",
    recommendations: ["Provide Vriksh/FSC wood compliance documents", "Appoint German customs agent in Hamburg", "Declare Geographical Indication tags on shipping manifests"]
  },
  {
    id: "au",
    name: "Australia",
    shippingModes: ["Ocean Freight (Nhava Sheva to Melbourne/Sydney)", "Air Cargo (Delhi to Sydney Kingsford Smith)"],
    transitTime: "Ocean: 20-25 days | Air: 4-6 days",
    documentationRequired: ["Commercial Invoice", "Australian Customs Declaration", "Biosecurity Import Permit", "ISPM 15 Certified Fumigation Certificate"],
    importDutyGuideline: "Subject to strict biosecurity import inspections. Tariffs are mostly under 5% under trade agreements.",
    customsNotes: "Highly strict Department of Agriculture, Fisheries and Forestry (DAFF) biosecurity checks. Any organic fiber or wood must undergo mandatory fumigation.",
    recommendations: ["Provide clean, certified methyl bromide fumigation certificates", "Ensure all straw, seagrass, or cotton packaging inserts are completely clean and insect-free", "Appoint an experienced biosecurity customs agent"]
  },
  {
    id: "ae",
    name: "United Arab Emirates (UAE)",
    shippingModes: ["Ocean Freight (Mundra to Jebel Ali, Dubai)", "Air Cargo (Delhi to Dubai International)"],
    transitTime: "Ocean: 4-6 days | Air: 2-3 days",
    documentationRequired: ["Commercial Invoice", "Certificate of Origin legalized by UAE Embassy", "Detailed Packing List", "Delivery Order"],
    importDutyGuideline: "5% standard customs duty, or duty-free under CEPA (Comprehensive Economic Partnership Agreement) certificates.",
    customsNotes: "Super fast transit. Invoices and Certificates of Origin must list exact Indian exporter credentials.",
    recommendations: ["Leverage India-UAE CEPA certificates to bypass the 5% import tariff", "Use LCL or direct FCL shipping out of Mundra to Jebel Ali", "Ensure Arabic labels are attached where required"]
  },
  {
    id: "jp",
    name: "Japan",
    shippingModes: ["Ocean Freight (Mundra to Tokyo/Osaka)", "Air Cargo (Delhi to Narita)"],
    transitTime: "Ocean: 18-22 days | Air: 4-6 days",
    documentationRequired: ["Commercial Invoice", "Preferential Certificate of Origin (AJCEP)", "Packing List", "Phytosanitary clearances for plant fibers"],
    importDutyGuideline: "Duty-free entry under preferential trade agreements for handloom and GI-tagged pottery.",
    customsNotes: "Strict attention to detail on product labeling and sizes. Product specifications must match commercial invoice values precisely.",
    recommendations: ["Ensure exact sizing descriptions on shipping documents", "Attach Japanese language care tags inside textile items", "Appoint a local clearing agent in Tokyo Port"]
  }
];
