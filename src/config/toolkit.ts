export interface ToolkitItem {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  tableData?: {
    headers: string[];
    rows: string[][];
  };
}

export const TOOLKIT_ITEMS: ToolkitItem[] = [
  {
    id: "moq-guide",
    title: "MOQ Guide",
    subtitle: "Understanding minimum batch requirements per craft category",
    content: "Our Minimum Order Quantities (MOQs) are structured to cover craft setup costs (dyeing vats, clay molds, kiln fuel) while remaining friendly to first-time importers. Prototyping and custom sampling are exempt from bulk MOQs.",
    tableData: {
      headers: ["Craft Category", "Standard MOQ", "Sample Run Allowance", "Lead Time"],
      rows: [
        ["Jaipur Blue Pottery", "100 Units", "1-5 Units (Prototyping)", "45-60 Days"],
        ["Bastar Dhokra Art", "50 Units", "1-3 Units (Counter-sampling)", "50-70 Days"],
        ["Saharanpur Wood Carvings", "20 Units", "1 Unit (Custom Mockup)", "60-75 Days"],
        ["Kashmiri Pashmina", "30 Pieces", "2 Pieces (Pattern Check)", "30-45 Days"],
        ["Banarasi Silk Sarees", "10 Pieces", "1 Saree (Brocade Check)", "45-60 Days"],
        ["Kutch Handloom Embroidery", "50 Pieces", "2 Pieces (Sample Swatch)", "40-60 Days"]
      ]
    }
  },
  {
    id: "packaging-guide",
    title: "Packaging Standard",
    subtitle: "Double-walled cartons and shock protection rules",
    content: "We enforce international drop-test standards (ISTA 1A) to protect fragile handicrafts during ocean freight. All wooden pallets and packaging crates undergo heat treatment and chemical fumigation.",
    tableData: {
      headers: ["Material", "Outer Packing", "Inner Cushioning", "Moisture Protection"],
      rows: [
        ["Ceramics & Pottery", "7-Ply Carton Box", "Custom Molded Styrofoam", "Silica gel desiccants"],
        ["Brass Castings", "5-Ply Kraft Carton", "Honeycomb paper wraps", "Corrugated dividers"],
        ["Wood Furniture", "Wooden Pallet Crate", "Polyethylene corner foam", "Moisture-barrier bags"],
        ["Fine Textiles", "Corrugated Carton", "Sealed polybag sleeve", "Anti-mold silica sheets"]
      ]
    }
  },
  {
    id: "container-capacity",
    title: "Container Capacity Overview",
    subtitle: "CBM estimates and container load guidelines",
    content: "Maximize container capacity to lower unit freight costs. Sourcing multiple craft categories allows you to consolidate cargo into single container loads at our warehouses.",
    tableData: {
      headers: ["Container Size", "Volume Capacity (CBM)", "Max Weight Limit", "Best For"],
      rows: [
        ["20ft Standard (GP)", "28 - 30 CBM", "21,500 kg", "Heavy cargo (woodware, cast metal)"],
        ["40ft Standard (GP)", "56 - 58 CBM", "26,500 kg", "Medium cargo volume (pottery, textiles)"],
        ["40ft High Cube (HQ)", "66 - 68 CBM", "26,500 kg", "Bulky furniture or light decor cargo"],
        ["LCL Palletized", "1 - 15 CBM", "Per pallet limits", "Test orders, high-value art pieces"]
      ]
    }
  },
  {
    id: "lead-times",
    title: "Lead Time Guide",
    subtitle: "Average production schedules by order size",
    content: "Production schedules depend on craft complexity and artisan availability. Monsoons can affect clay drying and yarn-dyeing timelines.",
    tableData: {
      headers: ["Order Volume", "Small Batch (MOQ)", "Medium Volume (LCL)", "Full Container (FCL)"],
      rows: [
        ["Jaipur Blue Pottery", "45 Days", "60 Days", "75 Days"],
        ["Bastar Dhokra Art", "50 Days", "65 Days", "80 Days"],
        ["Saharanpur Woodware", "55 Days", "70 Days", "90 Days"],
        ["Kashmiri Pashmina", "35 Days", "50 Days", "65 Days"]
      ]
    }
  },
  {
    id: "incoterms",
    title: "Incoterms Overview",
    subtitle: "Standard delivery codes for B2B global cargo",
    content: "We support standard International Commercial Terms (Incoterms). Our primary freight quotes are calculated on FOB exit ports, but we can arrange door-to-door delivery.",
    tableData: {
      headers: ["Incoterm", "Responsibility Exit", "Ocean Freight Cost", "Import Customs"],
      rows: [
        ["FOB (Free On Board)", "Indian Port Clearance", "Paid by Buyer", "Handled by Buyer"],
        ["CIF (Cost, Insurance & Freight)", "Destination Port Gate", "Paid by Seller", "Handled by Buyer"],
        ["EXW (Ex Works)", "Artisan Warehouse", "Paid by Buyer", "Handled by Buyer"],
        ["DDP (Delivered Duty Paid)", "Buyer's Warehouse", "Paid by Seller", "Handled by Seller"]
      ]
    }
  },
  {
    id: "shipping-modes",
    title: "Shipping Modes",
    subtitle: "Selecting between air, ocean, and courier transport",
    content: "Select the shipping mode that fits your timeline and volume. Ocean freight offers the lowest unit cost, while air cargo is ideal for luxury textiles and samples.",
    tableData: {
      headers: ["Mode", "Average Transit Time", "Cost Index", "Best Suited For"],
      rows: [
        ["Ocean Freight (FCL)", "20 - 35 Days", "Low ($)", "Furniture, ceramics, high-volume decor"],
        ["Ocean Freight (LCL)", "25 - 40 Days", "Medium ($$)", "Consolidated catalog batches, test orders"],
        ["Air Cargo", "5 - 7 Days", "High ($$$)", "Fine Pashmina shawls, urgent samples"],
        ["Express Courier", "3 - 5 Days", "Premium ($$$$)", "Prototyping samples, small gift sets"]
      ]
    }
  },
  {
    id: "hs-codes",
    title: "HS Code Structure",
    subtitle: "Harmonized system codes for customs declarations",
    content: "Assigning correct HS codes prevents duty processing delays. Here is a reference list of chapters for our primary Indian crafts.",
    tableData: {
      headers: ["Craft Category", "Primary HS Code", "Customs Chapter", "Duty Range (US/EU)"],
      rows: [
        ["Blue Pottery (Decor)", "6913.90.00", "Chapter 69: Ceramic Art", "0% - 6%"],
        ["Dhokra Brass Sculptures", "8306.21.00", "Chapter 83: Metal Art", "0% - 5%"],
        ["Saharanpur Furniture", "9403.60.80", "Chapter 94: Wood Furniture", "0% - 3%"],
        ["Pashmina Shawls", "6214.20.00", "Chapter 62: Shawls/Scarves", "2% - 8%"]
      ]
    }
  },
  {
    id: "export-process",
    title: "Export Process Overview",
    subtitle: "The 8-step roadmap from order to customs clearance",
    content: "We manage the entire export journey out of India, keeping you informed at every milestone.",
    tableData: {
      headers: ["Step", "Description", "Time Frame", "Deliverable Documents"],
      rows: [
        ["1. RFQ & NDA Signoff", "Verify specifications, sign NDAs", "3-5 Days", "Exclusivity Agreements"],
        ["2. Counter-Sampling", "Artisans build physical counter-samples", "15-30 Days", "Sample Approval Log"],
        ["3. Bulk Firing/Weaving", "Supervised cooperative cluster production", "30-60 Days", "Monthly status updates"],
        ["4. In-Line Quality Audit", "Inspectors test moisture and dimensions", "Mid-production", "Moisture test logs"],
        ["5. Packing & Stuffing", "Molded styrofoam wrapping and palletizing", "3-5 Days", "ISTA 1A Drop Test Check"],
        ["6. Port Customs Clearance", "Fumigation treatment and export filings", "3-5 Days", "Certificate of Origin, ISPM 15"],
        ["7. Ocean Transit", "Sailing from Mundra/Nhava Sheva ports", "15-35 Days", "Master Bill of Lading (BOL)"],
        ["8. Import Clearance", "Cargo arrives, customs cleared at destination", "3-5 Days", "Customs clearance logs"]
      ]
    }
  }
];
