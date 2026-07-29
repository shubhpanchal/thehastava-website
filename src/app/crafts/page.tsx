import React from "react";
import Image from "next/image";
import { Container } from "@/components/shared/container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardMedia } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IMAGE_MANIFEST } from "@/config/images";

export const metadata = {
  title: "Our Crafts | HASTAVA Sourcing Catalog",
  description: "Browse HASTAVA's collection of authentic Indian handicrafts, including Jaipur Blue Pottery, Bastar Dhokra Art, Kashmiri Pashmina, Saharanpur Wood Carving, and Banarasi Silk.",
};

interface Craft {
  title: string;
  category: string;
  origin: string;
  description: string;
  manifestKey: keyof typeof IMAGE_MANIFEST;
}

const CRAFT_CATALOG: Craft[] = [
  {
    title: "Jaipur Blue Pottery",
    category: "Ceramics & Pottery",
    origin: "Jaipur, Rajasthan",
    description: "Distinctive cobalt-blue glazed pottery crafted from a unique mix of quartz, raw glaze, and sodium sulphates. Every vase, plate, and tile is hand-formed and painted with delicate floral motifs.",
    manifestKey: "bluePottery",
  },
  {
    title: "Bastar Dhokra Art",
    category: "Metal Castings",
    origin: "Bastar, Chhattisgarh",
    description: "Ancient non-ferrous lost-wax metal castings dating back over 4,000 years. Artisans craft highly detailed tribal motifs, animal figurines, and bells with a characteristic wire-work finish.",
    manifestKey: "dhokraArt",
  },
  {
    title: "Kashmiri Pashmina & Textiles",
    category: "Textiles & Handlooms",
    origin: "Srinagar, Jammu & Kashmir",
    description: "Ultra-fine cashmere wool hand-spun and woven by master artisans on traditional looms. Famous for its light weight, natural warmth, and exquisite hand-embroidered borders.",
    manifestKey: "banarasiSilk",
  },
  {
    title: "Saharanpur Wood Carvings",
    category: "Furniture & Decor",
    origin: "Saharanpur, Uttar Pradesh",
    description: "Intricately carved sheesham, teak, and mango wood block prints, panels, and tableware. Master woodcarvers use hand chisels to render detailed geometric and vine-like carvings.",
    manifestKey: "woodCarving",
  },
  {
    title: "Moradabad Brassware",
    category: "Metalware & Utilities",
    origin: "Moradabad, Uttar Pradesh",
    description: "Premium sheet metal and cast brass serving platters, urns, and luxury home decor. Featuring elaborate hand-engravings, polishing treatments, and lacquer seals.",
    manifestKey: "dhokraArt",
  },
  {
    title: "Kutch Handloom Embroidery",
    category: "Textiles & Apparels",
    origin: "Kutch, Gujarat",
    description: "Traditional mirror-work and heavy cotton thread embroidery passed down through generations. Brightly dyed fabrics detailed with intricate geometric patterns.",
    manifestKey: "kutchEmbroidery",
  },
];

export default function CraftsPage() {
  return (
    <div className="bg-ivory py-16 sm:py-24">
      {/* Page Header */}
      <Container className="max-w-4xl text-center flex flex-col gap-4 mb-16 sm:mb-20">
        <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold">
          Sourcing Catalog
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-navy leading-[1.1] tracking-tight">
          Handcrafted Traditions
        </h1>
        <div className="h-0.5 w-16 bg-gold/50 mx-auto mt-2" />
        <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed max-w-xl mx-auto mt-2">
          Explore our certified range of B2B handicraft lines. All products support custom packaging, sizing requests, and direct trade verification.
        </p>
      </Container>

      {/* Catalog Grid */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CRAFT_CATALOG.map((craft) => {
            const asset = IMAGE_MANIFEST[craft.manifestKey];
            return (
              <Card key={craft.title} variant="bordered" hoverable={true} className="h-full">
                <CardMedia className="aspect-[4/3] bg-ivory-dark/15">
                  <Image
                    src={asset.src}
                    alt={asset.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </CardMedia>
                <CardHeader className="gap-1.5">
                  <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-wider font-sans font-bold text-gold">
                    <span>{craft.category}</span>
                    <span className="text-navy">{craft.origin}</span>
                  </div>
                  <CardTitle className="text-lg font-serif text-navy font-semibold mt-1">
                    {craft.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-muted text-xs leading-relaxed">
                    {craft.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Catalog CTA */}
        <div className="text-center mt-16">
          <Button href="/contact" variant="primary" size="lg">
            Request Custom Catalog
          </Button>
        </div>
      </Container>
    </div>
  );
}
