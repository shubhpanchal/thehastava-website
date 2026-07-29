export interface ManifestImage {
  src: string;
  alt: string;
  title: string;
  category: string;
  origin?: string;
}

export const IMAGE_MANIFEST: Record<string, ManifestImage> = {
  bluePottery: {
    src: "/images/blue-pottery.jpg.png",
    alt: "Handpainted cobalt-blue glazed ceramic pottery from Jaipur, Rajasthan",
    title: "Jaipur Blue Pottery",
    category: "Ceramics",
    origin: "Jaipur, Rajasthan",
  },
  dhokraArt: {
    src: "/images/dhokra-art.jpg.png",
    alt: "Lost-wax brass cast tribal sculpture detail showing wire-work texture",
    title: "Bastar Dhokra Art",
    category: "Metal Castings",
    origin: "Bastar, Chhattisgarh",
  },
  woodCarving: {
    src: "/images/wood-carving.jpg.png",
    alt: "Hand-chiselled floral and geometric reliefs on rosewood block",
    title: "Saharanpur Wood Carving",
    category: "Woodware",
    origin: "Saharanpur, Uttar Pradesh",
  },
  artisanHands: {
    src: "/images/artisan-hands.jpg.png",
    alt: "Master craftsman hands detailing raw clay on potter wheel",
    title: "Potter at Work",
    category: "Artisan",
  },
  handWeaving: {
    src: "/images/hand-weaving.jpg.png",
    alt: "Artisan weaver adjusting warp tension on traditional handloom structure",
    title: "Handloom Weaving",
    category: "Textiles",
  },
  banarasiSilk: {
    src: "/images/banarasi-silk.jpg.png",
    alt: "Intricate gold brocade and silk threads of a Banarasi Saree",
    title: "Banarasi Silk Weaving",
    category: "Textiles",
    origin: "Varanasi, Uttar Pradesh",
  },
  kutchEmbroidery: {
    src: "/images/kutch-embroidery.jpg.png",
    alt: "Traditional mirror-work and geometric stitching of Kutch hand embroidery",
    title: "Kutch Embroidery",
    category: "Textiles",
    origin: "Kutch, Gujarat",
  },
  exportLogistics: {
    src: "/images/export-logistics.svg",
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
