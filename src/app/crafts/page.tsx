import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardMedia } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CRAFT_DATABASE } from "@/config/crafts";

export const metadata = {
  title: "Our Crafts | HASTAVA Sourcing Catalog",
  description: "Browse HASTAVA's collection of authentic Indian handicrafts, including Jaipur Blue Pottery, Bastar Dhokra Art, Kashmiri Pashmina, Saharanpur Wood Carving, and Banarasi Silk.",
};

export default function CraftsPage() {
  const crafts = Object.values(CRAFT_DATABASE);

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
          {crafts.map((craft) => {
            return (
              <Card key={craft.slug} variant="bordered" hoverable={true} className="h-full flex flex-col justify-between">
                <div>
                  <CardMedia className="aspect-[4/3] bg-ivory-dark/15">
                    <Link href={`/crafts/${craft.slug}`}>
                      <Image
                        src={craft.heroImage.src}
                        alt={craft.heroImage.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
                        className="object-cover cursor-pointer"
                        loading="lazy"
                      />
                    </Link>
                  </CardMedia>
                  <CardHeader className="gap-1.5">
                    <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-wider font-sans font-bold text-gold">
                      <span>{craft.subtitle}</span>
                      <span className="text-navy">{craft.origin}, {craft.state}</span>
                    </div>
                    <CardTitle className="text-lg font-serif text-navy font-semibold mt-1">
                      <Link href={`/crafts/${craft.slug}`} className="hover:text-gold transition-colors">
                        {craft.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-muted text-xs leading-relaxed">
                      {craft.shortDescription}
                    </CardDescription>
                  </CardContent>
                </div>
                <CardContent className="pt-0 pb-6">
                  <div className="pt-4 border-t border-ivory-dark/40">
                    <Link 
                      href={`/crafts/${craft.slug}`}
                      className="font-sans text-xs font-bold uppercase tracking-wider text-gold hover:text-navy transition-colors duration-200 flex items-center gap-1"
                    >
                      Explore Sourcing Line &rarr;
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Catalog CTA */}
        <div className="text-center mt-16">
          <Button href="/contact" variant="primary" size="lg">
            Request Wholesale Catalog
          </Button>
        </div>
      </Container>
    </div>
  );
}
