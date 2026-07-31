import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../shared/container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardMedia } from "../ui/card";
import { Button } from "../ui/button";
import { CRAFT_DATABASE } from "@/config/crafts";

export function FeaturedCrafts() {
  // Show top 3 featured crafts on homepage from database
  const featured = Object.values(CRAFT_DATABASE).slice(0, 3);

  return (
    <section className="bg-ivory py-24 lg:py-32 border-t border-ivory-dark/40">
      <Container className="flex flex-col gap-12 sm:gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
          <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Featured Sourcing Lines
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-navy">
            Our Heritage Craft Catalog
          </h2>
          <div className="h-0.5 w-12 bg-gold/50 mt-1" />
          <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed max-w-xl mx-auto mt-2">
            Discover our certified range of B2B handicraft lines, each verified for origin and quality and ready for custom branding and packaging.
          </p>
        </div>

        {/* Crafts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((craft) => {
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
                    <CardDescription className="text-slate-muted text-xs leading-relaxed line-clamp-3">
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

        {/* View All CTA */}
        <div className="text-center mt-4">
          <Button href="/crafts" variant="primary" size="lg">
            Request Wholesale Catalog
          </Button>
        </div>
      </Container>
    </section>
  );
}
