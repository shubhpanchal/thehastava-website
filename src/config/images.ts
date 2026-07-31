export interface ManifestImage {
  src: string;
  alt: string;
  title: string;
  category: string;
  origin?: string;
}

export const IMAGE_MANIFEST: Record<string, ManifestImage> = {
  bluePottery: {
    src: "/images/blue-pottery.webp",
    alt: "Handpainted cobalt-blue glazed ceramic pottery from Jaipur, Rajasthan",
    title: "Jaipur Blue Pottery",
    category: "Ceramics",
    origin: "Jaipur, Rajasthan",
  },
  dhokraArt: {
    src: "/images/dhokra-art.webp",
    alt: "Lost-wax brass cast tribal sculpture detail showing wire-work texture",
    title: "Bastar Dhokra Art",
    category: "Metal Castings",
    origin: "Bastar, Chhattisgarh",
  },
  woodCarving: {
    src: "/images/wood-carving.webp",
    alt: "Hand-chiselled floral and geometric reliefs on rosewood block",
    title: "Saharanpur Wood Carving",
    category: "Woodware",
    origin: "Saharanpur, Uttar Pradesh",
  },
  artisanHands: {
    src: "/images/artisan-hands.webp",
    alt: "Master craftsman hands detailing raw clay on potter wheel",
    title: "Potter at Work",
    category: "Artisan",
  },
  handWeaving: {
    src: "/images/hand-weaving.webp",
    alt: "Artisan weaver adjusting warp tension on traditional handloom structure",
    title: "Handloom Weaving",
    category: "Textiles",
  },
  banarasiSilk: {
    src: "/images/banarasi-silk.webp",
    alt: "Intricate gold brocade and silk threads of a Banarasi Saree",
    title: "Banarasi Silk Weaving",
    category: "Textiles",
    origin: "Varanasi, Uttar Pradesh",
  },
  kutchEmbroidery: {
    src: "/images/kutch-embroidery.webp",
    alt: "Traditional mirror-work and geometric stitching of Kutch hand embroidery",
    title: "Kutch Embroidery",
    category: "Textiles",
    origin: "Kutch, Gujarat",
  },
  exportLogistics: {
    src: "/images/export-logistics.webp",
    alt: "Consolidated, reinforced cardboard crates stacked inside secure export warehouse",
    title: "Sourcing Logistics",
    category: "Logistics",
  },
  cargoShipping: {
    src: "/images/cargo-shipping.svg",
    alt: "Commercial container vessel ready for oceanic export transport at shipping dock",
    title: "Global Export Shipping",
    category: "Logistics",
  },
  giDhokraArt: {
    src: "/images/gi-dhokra-art.webp",
    alt: "Authentic Bastar Dhokra lost-wax cast brass tribal sculpture showing signature clay-thread lines",
    title: "Dhokra Art",
    category: "Metal Castings",
    origin: "Bastar, Chhattisgarh",
  },
  giBanarasiSaree: {
    src: "/images/gi-banarasi-saree.webp",
    alt: "Handwoven Banarasi Silk Saree fabric showing dense gold brocade Zari patterns",
    title: "Banarasi Sarees",
    category: "Textiles",
    origin: "Varanasi, Uttar Pradesh",
  },
  giKutchEmbroidery: {
    src: "/images/gi-kutch-embroidery.webp",
    alt: "Traditional mirror-work and chain stitching Kutch hand embroidery detail",
    title: "Kutch Embroidery",
    category: "Textiles",
    origin: "Kutch, Gujarat",
  },
  giBluePottery: {
    src: "/images/gi-blue-pottery.webp",
    alt: "Hand-glazed cobalt-blue ceramic pottery showing traditional floral patterns from Jaipur",
    title: "Blue Pottery",
    category: "Ceramics",
    origin: "Jaipur, Rajasthan",
  },
  giMadhubaniPainting: {
    src: "/images/gi-madhubani-painting.webp",
    alt: "Traditional hand-painted Madhubani fine art showing organic dyes and geometric borders",
    title: "Madhubani Painting",
    category: "Paintings",
    origin: "Mithila, Bihar",
  },
  giPashmina: {
    src: "/images/gi-pashmina.webp",
    alt: "Ultra-fine handwoven Kashmiri Pashmina cashmere shawl displaying soft texture detail",
    title: "Pashmina",
    category: "Textiles",
    origin: "Kashmir, Jammu & Kashmir",
  },
  giPochampallyIkat: {
    src: "/images/gi-pochampally-ikat.webp",
    alt: "Geometric tie-and-dye weaving pattern of a Pochampally Ikat silk fabric",
    title: "Pochampally Ikat",
    category: "Textiles",
    origin: "Yadadri, Telangana",
  },
  giChannapatnaToys: {
    src: "/images/gi-channapatna-toys.webp",
    alt: "Lathe-turned wooden toys with smooth lacquer finish colored with natural shellac dyes",
    title: "Channapatna Toys",
    category: "Woodware",
    origin: "Ramanagara, Karnataka",
  },
  giBidriware: {
    src: "/images/gi-bidriware.webp",
    alt: "Blackened zinc-copper alloy craft inlaid with pure silver wire patterns from Bidar",
    title: "Bidriware",
    category: "Metalware",
    origin: "Bidar, Karnataka",
  },
  giKondapalliToys: {
    src: "/images/gi-kondapalli-toys.webp",
    alt: "Hand-carved soft wood Kondapalli toy painted with organic pigments depicting village life",
    title: "Kondapalli Toys",
    category: "Woodware",
    origin: "Krishna, Andhra Pradesh",
  },
};

// Backward-compatible shortcut bindings for any untouched components
export const IMAGES = {
  heroWoodCarving: IMAGE_MANIFEST.woodCarving.src,
  heroBluePottery: IMAGE_MANIFEST.bluePottery.src,
  heroArtisanHands: IMAGE_MANIFEST.artisanHands.src,
  heroLobbyAccent: "/images/lobby-accent.jpg",
  sareeTextile: IMAGE_MANIFEST.banarasiSilk.src,
  embroideryDetail: IMAGE_MANIFEST.kutchEmbroidery.src,
  brassOrnament: IMAGE_MANIFEST.dhokraArt.src,
  loomWeaving: IMAGE_MANIFEST.handWeaving.src,
  exportWarehouse: IMAGE_MANIFEST.exportLogistics.src,
  cargoShipping: IMAGE_MANIFEST.cargoShipping.src,
};
