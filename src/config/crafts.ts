import { IMAGE_MANIFEST } from "./images";

export interface CraftFAQ {
  q: string;
  a: string;
}

export interface CraftDetail {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  origin: string;
  state: string;
  district: string;
  giStatus: string;
  history: string;
  materials: string[];
  techniques: string[];
  applications: string[];
  moq: string;
  leadTime: string;
  packaging: string;
  customization: string;
  exportMarkets: string[];
  containerInformation: string;
  sustainability: string;
  heroImage: {
    src: string;
    alt: string;
  };
  gallery: {
    src: string;
    alt: string;
  }[];
  relatedCrafts: string[]; // Slugs of related crafts
  faq: CraftFAQ[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const CRAFT_DATABASE: Record<string, CraftDetail> = {
  "jaipur-blue-pottery": {
    slug: "jaipur-blue-pottery",
    title: "Jaipur Blue Pottery",
    subtitle: "Cobalt Glazed Premium Ceramics",
    shortDescription: "Distinctive cobalt-blue glazed pottery crafted from a unique mix of quartz, raw glaze, and sodium sulphates. Every vase, plate, and tile is hand-formed and painted with delicate floral motifs.",
    fullDescription: "Jaipur Blue Pottery is a unique craft tradition that differs from conventional clay ceramics. It is prepared without using clay, instead relying on a paste made of quartz powder, glass frit, soda, and gum. This ensures that the pottery remains exceptionally clean and translucent. Every piece is hand-molded, glazed, and painted with intricate Persian-influenced floral patterns by master craftsmen. The signature deep cobalt blue is extracted from cobalt oxide, while the vibrant green is derived from copper oxide.",
    origin: "Jaipur",
    state: "Rajasthan",
    district: "Jaipur",
    giStatus: "Registered (GI Tag No. 43)",
    history: "Introduced to Jaipur during the 19th-century reign of Maharaja Sawai Ram Singh II, who sent local artisans to Delhi to learn Persian glazing methods and fuse them with traditional Indian motifs.",
    materials: [
      "Quartz Powder (Base matrix)",
      "Glass Frit (Fusing agent)",
      "Sajji (Natural Soda)",
      "Katira Gum (Binder)",
      "Multani Mitti (Fuller's earth for finishing)",
      "Cobalt Oxide (Signature blue pigment)",
      "Copper Oxide (Green pigment)"
    ],
    techniques: [
      "Clay-free paste preparation and kneading",
      "Manual plaster molding and casting",
      "Hand smoothing using fine abrasive stones",
      "Traditional squirrel-hair brush painting",
      "Lead-free borax glazing dip",
      "Single-firing in low-temperature wood kilns (800-850°C)"
    ],
    applications: [
      "Decorative vases and urns",
      "Hand-painted architectural tiles",
      "Coasters, platters, and serving bowls",
      "Cabinet knobs and wall hooks",
      "Luxury bath accessory sets"
    ],
    moq: "100 Units per design line",
    leadTime: "45 - 60 Business Days",
    packaging: "Each item is wrapped in eco-friendly honeycomb paper, nested in drop-tested custom fit corrugated cartons, and packed in reinforced master cartons.",
    customization: "Full OEM/ODM support for custom dimensions, custom floral color palettes, and custom logo engravings on tile backs.",
    exportMarkets: ["United States", "European Union", "United Kingdom", "Japan", "Australia"],
    containerInformation: "Fits approximately 8,500 standard vases per 20ft container (FCL). Supports consolidated LCL pallet loading.",
    sustainability: "100% natural raw mineral paste, lead-free glazes, zero toxic runoff, and sourced directly from rural craft circles.",
    heroImage: {
      src: IMAGE_MANIFEST.bluePottery.src,
      alt: IMAGE_MANIFEST.bluePottery.alt,
    },
    gallery: [
      { src: "/images/gi-blue-pottery.webp.png", alt: "Jaipur Blue Pottery hand-painting process detail" },
      { src: "/images/blue-pottery.jpg.png", alt: "Finished Jaipur Blue Pottery cobalt-blue vase" },
    ],
    relatedCrafts: ["bastar-dhokra-art", "saharanpur-wood-carvings"],
    faq: [
      {
        q: "Is your Jaipur Blue Pottery lead-free and food safe?",
        a: "Yes. All of our kitchenware, tableware, and serving platters use lead-free glazes and are certified food-safe under international regulatory standards."
      },
      {
        q: "Can we order custom tile dimensions for architectural projects?",
        a: "Absolutely. We customize tile sizes and patterns for commercial architecture, luxury hotels, and private designs, starting at a minimum order of 500 units."
      },
      {
        q: "Is the pottery dishwasher or microwave safe?",
        a: "Due to the low-temperature firing process, we recommend hand washing and avoiding microwave use to preserve the glass glaze over time."
      }
    ],
    seo: {
      title: "Jaipur Blue Pottery Wholesale | Certified B2B Indian Ceramics",
      description: "Source authentic, government-certified GI-tagged Jaipur Blue Pottery. Premium lead-free glazed ceramics, tiles, and tableware directly from artisan cooperatives.",
      keywords: ["Jaipur Blue Pottery", "wholesale glazed ceramics", "Indian pottery exporters", "hand-painted tiles", "GI-tagged ceramics"]
    }
  },
  "bastar-dhokra-art": {
    slug: "bastar-dhokra-art",
    title: "Bastar Dhokra Art",
    subtitle: "Ancient Lost-Wax Metal Castings",
    shortDescription: "Ancient non-ferrous lost-wax metal castings dating back over 4,000 years. Artisans craft highly detailed tribal motifs, animal figurines, and bells with a characteristic wire-work finish.",
    fullDescription: "Bastar Dhokra Art represents an unbroken metallurgical tradition dating back to the Indus Valley Civilization. Using the intricate lost-wax casting technique (Cire Perdue), master metalsmiths of the Gadwa community create highly detailed non-ferrous metal artifacts. Each item is constructed from a unique clay core, wound with hand-drawn beeswax threads to form fine detailed patterns, covered in protective clay layers, and heated. The wax melts out, leaving a channel for molten brass alloy to take its exact shape. Because the mold is broken to retrieve the metal, no two Dhokra castings are identical.",
    origin: "Bastar",
    state: "Chhattisgarh",
    district: "Kondagaon",
    giStatus: "Registered (GI Tag No. 83)",
    history: "Associated with the nomadic Gadwa tribe of Central India, this craft has preserved ancient metallurgic cast processes for over four millennia, serving as ritual metal objects and tribal representations.",
    materials: [
      "Recycled Brass Scrap (Base alloy)",
      "Pure Beeswax (For pattern threads)",
      "Damar Kemikal (Sal tree resin binder)",
      "Riverbed clay and red soil mix",
      "Mustard Oil (Mold release)"
    ],
    techniques: [
      "Clay core sculpting and drying",
      "Manual wax thread extrusion using press tool",
      "Intricate wax thread winding on clay core",
      "Multi-layered clay shell application",
      "Wood-charcoal firing and metal melting (1100°C)",
      "Mold breaking and final brass polish"
    ],
    applications: [
      "Tribal figurines and deity sculptures",
      "Traditional bells and hollow windchimes",
      "Commercial door handles and cabinet hardware",
      "Decorative tea-light holders",
      "Wall plaques and frames"
    ],
    moq: "50 Units per model",
    leadTime: "60 - 75 Business Days",
    packaging: "Wrapped in heavy bubble wrap or honeycomb sheets, double-boxed in high-density shockproof shipping crates to prevent fragile alloy breakage.",
    customization: "OEM support for custom tribal figurine designs from client sketches or corporate commemorative designs.",
    exportMarkets: ["United States", "Germany", "Australia", "United Kingdom", "France"],
    containerInformation: "Packed in custom wood crates for ocean freight. Supports LCL pallet consolidation out of Mumbai port.",
    sustainability: "100% recycled scrap metals, organic clay and beeswax, minimal carbon footprint, supporting indigenous tribal artisans.",
    heroImage: {
      src: IMAGE_MANIFEST.dhokraArt.src,
      alt: IMAGE_MANIFEST.dhokraArt.alt,
    },
    gallery: [
      { src: "/images/gi-dhokra-art.webp.png", alt: "Artisan wrapping wax threads onto clay mold" },
      { src: "/images/dhokra-art.jpg.png", alt: "Finished Bastar Dhokra brass horse sculpture" },
    ],
    relatedCrafts: ["saharanpur-wood-carvings", "jaipur-blue-pottery"],
    faq: [
      {
        q: "What metals are used in Dhokra castings?",
        a: "We use a non-ferrous brass alloy consisting primarily of recycled copper and zinc scrap, sourced from regional copper utensils."
      },
      {
        q: "How do you clean and maintain Dhokra metal crafts?",
        a: "Clean only with a soft dry cloth. Do not use chemical brass cleaners. If needed, apply a thin coat of natural microcrystalline wax to protect the antique golden finish from moisture."
      }
    ],
    seo: {
      title: "Bastar Dhokra Art Exporters | Lost-Wax Brass Casting Wholesale",
      description: "Source certified Bastar Dhokra metal crafts from India. Genuine lost-wax tribal figurines, bells, and hardware direct from Kondagaon artisan clusters.",
      keywords: ["Bastar Dhokra Art", "lost-wax casting wholesale", "brass tribal sculptures", "Indian handicraft exports", "antique brass hardware"]
    }
  },
  "kashmiri-pashmina": {
    slug: "kashmiri-pashmina",
    title: "Kashmiri Pashmina",
    subtitle: "Ultra-Fine Cashmere Handlooms",
    shortDescription: "Ultra-fine cashmere wool hand-spun and woven by master artisans on traditional looms. Famous for its light weight, natural warmth, and exquisite hand-embroidered borders.",
    fullDescription: "Kashmiri Pashmina represents the zenith of textile weaving. Sourced from the winter undercoat of the Changthangi goat roaming the high altitudes of Ladakh (over 14,000 feet), this fiber has a diameter of just 12-15 microns (four times thinner than human hair). The delicate fiber cannot survive mechanical stress, requiring entirely manual processing: hand-combing, hand-spinning on traditional wooden charkhas, and weaving on wood handlooms in Kashmir. Known as 'soft gold', Pashmina shawls offer natural warmth, a cloud-like texture, and timeless elegance.",
    origin: "Srinagar",
    state: "Jammu & Kashmir",
    district: "Srinagar",
    giStatus: "Registered (GI Tag No. 46)",
    history: "Patronized during the 15th century by Sultan Zain-ul-Abidin, who introduced Persian weaving masters to Kashmir, establishing the luxury hand-embroidered Kani shawl industry.",
    materials: [
      "Changthangi Cashmere wool (Ladakh)",
      "Organic dyes (Derived from walnut, saffron, madder root)",
      "Fine cotton threads (For border stitching)"
    ],
    techniques: [
      "Manual raw fiber sorting and de-hairing",
      "Traditional wooden charkha hand-spinning",
      "Hand-warping and loom setup",
      "Manual wooden shuttle weaving (Weft and Warp)",
      "Sozni (Fine needlework hand embroidery)",
      "Natural spring-water washing and blocking"
    ],
    applications: [
      "Luxury shawls and stoles",
      "Exquisite winter scarves",
      "Throws and home blankets",
      "Embroidered dress fabrics",
      "Premium pocket squares"
    ],
    moq: "30 Pieces per weave pattern",
    leadTime: "60 - 90 Business Days (dependent on embroidery detail)",
    packaging: "Wrapped in protective acid-free butter paper, nested in branded cedarwood gift boxes, and shipped in moisture-sealed master export cartons.",
    customization: "Custom embroidery patterns, Pantone dye matching, and private label custom fabric tag stitching.",
    exportMarkets: ["European Union", "United States", "United Kingdom", "Middle East", "Singapore"],
    containerInformation: "Shipped primarily via air freight due to high value-to-weight ratio. Moisture-sealed master boxes protect items in transit.",
    sustainability: "Cruelty-free hand combing of winter goat undercoats, chemical-free processing, 100% natural dyes, supporting Srinagar weaver cooperatives.",
    heroImage: {
      src: IMAGE_MANIFEST.handWeaving.src,
      alt: IMAGE_MANIFEST.handWeaving.alt,
    },
    gallery: [
      { src: "/images/gi-pashmina.webp.png", alt: "Artisan spinning raw Pashmina cashmere thread" },
      { src: "/images/hand-weaving.jpg.png", alt: "Master weaver working on Kashmiri Pashmina handloom" },
    ],
    relatedCrafts: ["banarasi-silk-sarees", "kutch-handloom-embroidery"],
    faq: [
      {
        q: "How can we identify authentic Kashmiri Pashmina?",
        a: "Authentic Kashmiri Pashmina is exceptionally soft, has slight weave irregularities under magnification, passes the ring test, and carries the official GI label showing the handloom weaver registry number."
      },
      {
        q: "Are the shawls dry clean only?",
        a: "Yes. Due to the ultra-fine cashmere fiber, we recommend professional dry cleaning. Alternatively, hand wash in lukewarm water with wool detergent and dry flat."
      }
    ],
    seo: {
      title: "Kashmiri Pashmina Wholesale | Premium Cashmere Shawls Exporter",
      description: "Source genuine, GI-certified Kashmiri Pashmina shawls and scarves. Hand-spun and woven on traditional looms in Srinagar. Global shipping, private label.",
      keywords: ["Kashmiri Pashmina", "wholesale cashmere shawls", "authentic pashmina scarves", "handwoven shawls exporter", "luxury winter textiles"]
    }
  },
  "saharanpur-wood-carvings": {
    slug: "saharanpur-wood-carvings",
    title: "Saharanpur Wood Carvings",
    subtitle: "Chiseled Hardwood Decor & Furniture",
    shortDescription: "Intricately carved sheesham, teak, and mango wood block prints, panels, and tableware. Master woodcarvers use hand chisels to render detailed geometric and vine-like carvings.",
    fullDescription: "Saharanpur Wood Carving is a renowned timber craft utilizing durable hardwoods like Sheesham (Indian Rosewood), Teak, and Mango. Master artisans use simple hand tools—chisels and wooden mallets—to render deep relief carvings, geometric screens (Jali work), and brass inlay wire patterns. The timber is dried to below 12% moisture content to prevent cracking in colder export climates. The carvings range from classic vine patterns (Anguri work) to modern minimalist geometry, creating timeless pieces of B2B decor.",
    origin: "Saharanpur",
    state: "Uttar Pradesh",
    district: "Saharanpur",
    giStatus: "Registered (GI Tag No. 423)",
    history: "Developed during the Mughal era when Kashmiri woodcarvers migrated to Saharanpur, blending Persian floral designs with local Indian hardwood varieties.",
    materials: [
      "Sheesham / Rosewood (Premium hardwood)",
      "Teak Wood (Weather resistant)",
      "Mango Wood (Fast growing, sustainable)",
      "Brass wire (For inlay detailing)",
      "Natural wax and oils (For finishing)"
    ],
    techniques: [
      "Chamber kiln timber drying (Moisture < 12%)",
      "Stenciling and layout marking on wood boards",
      "Hand carving using custom gouges and chisels",
      "Intricate brass wire inlay tapping",
      "Manual sanding and grain pore filling",
      "Natural beeswax/oil polish or matte PU seal"
    ],
    applications: [
      "Carved wooden block prints (for textile designers)",
      "Architectural wall panels and divider screens",
      "Tableware, salad bowls, and coasters",
      "Small accent furniture and stools",
      "Corporate gift items and jewelry boxes"
    ],
    moq: "50 Units (decor) / 20 Units (furniture)",
    leadTime: "45 - 60 Business Days",
    packaging: "Wrapped in shock-absorbent foam sheets, corner guards applied, nested in double-walled export cartons, and loaded onto fumigated wooden pallets.",
    customization: "Custom dimension molding, wood type selection, bespoke pattern engravings, and custom branding stamps.",
    exportMarkets: ["United States", "European Union", "Australia", "Middle East"],
    containerInformation: "Fits 650 standard divider screens per 20ft container (FCL). Fully supports fumigated pallet ocean container shipping.",
    sustainability: "Sourced from government-monitored sustainable timber auctions. Uses natural oils and non-toxic water-based clear coats.",
    heroImage: {
      src: IMAGE_MANIFEST.woodCarving.src,
      alt: IMAGE_MANIFEST.woodCarving.alt,
    },
    gallery: [
      { src: "/images/gi-wood-carving.webp.png", alt: "Artisan chiseling detailed relief on sheesham wood" },
      { src: "/images/wood-carving.jpg.png", alt: "Intricately carved Saharanpur wood printing block" },
    ],
    relatedCrafts: ["bastar-dhokra-art", "jaipur-blue-pottery"],
    faq: [
      {
        q: "Do you kiln-dry the wood to prevent warping in our climate?",
        a: "Yes. All our timber is kiln-seasoned to a moisture level between 8% and 12%, ensuring the wood remains stable and crack-free in low-humidity export markets."
      },
      {
        q: "Do you supply ISPM 15 fumigated wooden pallets?",
        a: "Absolutely. All our wood packaging and shipping pallets are heat-treated or fumigated in compliance with ISPM 15 international customs protocols."
      }
    ],
    seo: {
      title: "Saharanpur Wood Carving Wholesale | B2B Furniture Exporter",
      description: "Source authentic Saharanpur wood carvings and carved furniture. Government-certified GI products. Kiln-dried hardwoods, brass inlay. Custom OEM support.",
      keywords: ["Saharanpur wood carving", "carved wood panels wholesale", "sheesham wood furniture", "Indian block print manufacturer", "sustainable wood crafts"]
    }
  },
  "banarasi-silk-sarees": {
    slug: "banarasi-silk-sarees",
    title: "Banarasi Silk Sarees",
    subtitle: "Luxury Brocade Handwoven Silks",
    shortDescription: "Exquisite hand-woven Banarasi sarees featuring luxury silk weaves with metallic gold and silver brocade (Zari) patterns. Hand-loomed in traditional Varanasi weaver cooperatives.",
    fullDescription: "Banarasi Silk Sarees are the crown jewels of Indian textiles. Woven in the historic city of Varanasi, these sarees are made of fine mulberry silk yarns interweaved with metallic gold and silver threads (Zari). The complex brocade weaves are performed on traditional handlooms utilizing punch card systems (Jacquard setups). Woven by a team of three weavers, a single saree can take from 15 days to 6 months to complete. Famous for their heavy gold brocades, floral motifs (Kalga and Bel), and rich fabric textures.",
    origin: "Varanasi",
    state: "Uttar Pradesh",
    district: "Varanasi",
    giStatus: "Registered (GI Tag No. 99)",
    history: "Mentioned in the Mahabharata, the craft evolved during the 16th century Mughal era under Emperor Akbar, who popularized Persian floral weaves with gold thread brocades.",
    materials: [
      "Pure Mulberry Silk (Base fiber)",
      "Gold and Silver Zari (Metallic thread wrap)",
      "Natural sizing starches"
    ],
    techniques: [
      "Silk thread twisting and skein dyeing",
      "Jacquard loom punch-card design carving",
      "Warp and Weft beam loom setup",
      "Manual shuttle brocade interweaving",
      "Hand trimming of reverse floats",
      "Soft rolling and calendar pressing"
    ],
    applications: [
      "Luxury bridal sarees",
      "Premium silk stoles and dupattas",
      "Bespoke apparel fabrics (brocades)",
      "High-end upholstery and cushion covers",
      "Designer evening bags"
    ],
    moq: "20 Pieces",
    leadTime: "60 - 90 Business Days",
    packaging: "Wrapped in acid-free tissue paper, nested in premium custom velvet-lined presentation boxes, and shipped in reinforced shipping boxes.",
    customization: "Custom Zari patterns, bespoke color dye pairings, and custom brand label embroidery stitching.",
    exportMarkets: ["European Union", "United States", "Middle East", "Singapore", "Canada"],
    containerInformation: "Shipped via air freight. Moisture-sealed master boxes protect luxury silks from sea humidity.",
    sustainability: "Handloomed with zero electricity, natural bio-degradable fibers, supporting historic weaving communities in Varanasi.",
    heroImage: {
      src: IMAGE_MANIFEST.banarasiSilk.src,
      alt: IMAGE_MANIFEST.banarasiSilk.alt,
    },
    gallery: [
      { src: "/images/gi-banarasi-saree.webp.png", alt: "Artisan weaving metallic Zari brocade on Banarasi loom" },
      { src: "/images/banarasi-silk.jpg.png", alt: "Detail of Banarasi silk saree gold brocade borders" },
    ],
    relatedCrafts: ["kashmiri-pashmina", "kutch-handloom-embroidery"],
    faq: [
      {
        q: "Is the Zari used in the sarees made of real silver?",
        a: "We offer two grades of Zari: high-quality imitation metallic Zari for standard commercial lines, and certified Tested/Pure Zari (silver alloy base with gold plating) for premium luxury collections."
      },
      {
        q: "How do you care for Banarasi brocades?",
        a: "Dry clean only. Store wrapped in soft muslin cloth to prevent the metallic Zari threads from oxidizing. Avoid folding on sharp lines."
      }
    ],
    seo: {
      title: "Banarasi Silk Saree Manufacturer | B2B Luxury Brocade Fabrics",
      description: "Source authentic GI-tagged Banarasi silk sarees and brocades. Woven on traditional handlooms in Varanasi. Air shipping, custom designs.",
      keywords: ["Banarasi silk sarees", "Varanasi silk brocades", "wholesale bridal sarees", "handloom zari weaving", "luxury Indian fabrics"]
    }
  },
  "kutch-handloom-embroidery": {
    slug: "kutch-handloom-embroidery",
    title: "Kutch Handloom Embroidery",
    subtitle: "Vibrant Mirror-Stitched Textiles",
    shortDescription: "Traditional mirror-work and heavy cotton thread embroidery passed down through generations. Brightly dyed fabrics detailed with intricate geometric patterns.",
    fullDescription: "Kutch Handloom Embroidery is a spectacular textile art characterized by vibrant thread combinations, micro-mirror inclusions (Abhla work), and complex geometric stitching. Hand-embroidered by artisan women of tribal communities (Rabari, Suf, and Mutwa), each pattern is stitched from memory, representing regional flora, fauna, and geometric symbols. The base fabrics are hand-spun cotton or wool. The insertion of reflective mirrors creates a shimmering texture, making it highly valued for luxury apparel, bohemian fashion, and premium interior home furnishings.",
    origin: "Bhuj",
    state: "Gujarat",
    district: "Kutch",
    giStatus: "Registered (GI Tag No. 394)",
    history: "Brought to Kutch by migrating craft communities from Sindh and Balochistan centuries ago, developing into distinct embroidery styles identified with tribal communities.",
    materials: [
      "Hand-spun Cotton / Wool base fabric",
      "Brightly dyed cotton/silk threads",
      "Miniature convex mirrors (Abhla)",
      "Natural indigo and vegetable dyes"
    ],
    techniques: [
      "Base fabric dye and grid marking",
      "Chain stitching (Sankli) and herringbone work",
      "Manual micro-mirror overlay and securing",
      "Suf triangle geometric counting embroidery",
      "Damp pressing and border framing"
    ],
    applications: [
      "Designer cushion covers and throws",
      "Embellished jackets and apparel yokes",
      "Bohemian tote bags and clutch bags",
      "Wall hangings and tapestries",
      "Hand-embroidered footwear panels"
    ],
    moq: "40 Pieces per style",
    leadTime: "60 - 75 Business Days",
    packaging: "Individually wrapped in recycled polybags, layered with moisture silica packets, and packed in heavy double-walled export cartons.",
    customization: "Custom dimensions for cushion panels, custom backing fabrics, and private labeling options.",
    exportMarkets: ["United States", "European Union", "Australia", "United Kingdom"],
    containerInformation: "Consolidated into standard shipping cartons. Palletized and shipped via LCL/FCL ocean freight out of Mundra port.",
    sustainability: "Sourced through women-led rural cooperatives, supporting home-based female artisans, 100% natural fibers, circular production.",
    heroImage: {
      src: IMAGE_MANIFEST.kutchEmbroidery.src,
      alt: IMAGE_MANIFEST.kutchEmbroidery.alt,
    },
    gallery: [
      { src: "/images/gi-kutch-embroidery.webp.png", alt: "Artisan stitching mirrors onto cotton fabric in Kutch" },
      { src: "/images/kutch-embroidery.jpg.png", alt: "Close-up of vibrant Kutch geometric embroidery and mirrors" },
    ],
    relatedCrafts: ["kashmiri-pashmina", "banarasi-silk-sarees"],
    faq: [
      {
        q: "Are the mirrors securely stitched?",
        a: "Yes. The miniature convex mirrors are bound tightly using close herringbone blanket stitches, ensuring they remain firmly attached during transit and commercial wear."
      },
      {
        q: "What embroidery styles are available?",
        a: "We offer several traditional styles including Rabari chain stitch, Suf geometric counted stitch, and Abhla mirror embroidery, depending on your project needs."
      }
    ],
    seo: {
      title: "Kutch Mirror Work Embroidery Wholesale | B2B Cushions Exporter",
      description: "Source authentic GI-certified Kutch embroidery and mirror work cushion covers, fabrics, and bags. Handcrafted by women cooperatives in Gujarat. Global LCL shipping.",
      keywords: ["Kutch handloom embroidery", "mirror work cushions wholesale", "Indian hand embroidered fabrics", "abhla work manufacturer", "rabari embroidery exporter"]
    }
  }
};


