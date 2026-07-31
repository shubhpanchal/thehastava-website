import React from "react";
import Image from "next/image";
import { Container } from "../shared/container";
import { CraftDetail, CRAFT_DATABASE } from "@/config/crafts";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardMedia } from "../ui/card";

interface RelatedCraftsProps {
  craft: CraftDetail;
}

export function RelatedCrafts({ craft }: RelatedCraftsProps) {
  // Resolve related craft details from slugs
  const related = craft.relatedCrafts
    .map((slug) => CRAFT_DATABASE[slug])
    .filter((item): item is CraftDetail => !!item)
    .slice(0, 3); // Limit to 3 items max

  if (related.length === 0) return null;

  return (
    <section className="bg-ivory py-20 lg:py-28 border-b border-ivory-dark/45">
      <Container className="flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Catalog Collections
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-navy">
            Related Sourcing Lines
          </h2>
          <div className="h-0.5 w-12 bg-gold/50 mt-1" />
        </div>

        {/* Related Crafts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {related.map((item) => (
            <Card key={item.slug} variant="bordered" hoverable={true} className="h-full">
              <CardMedia className="aspect-[4/3] bg-ivory-dark/15">
                <Image
                  src={item.heroImage.src}
                  alt={item.heroImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
                  className="object-cover"
                  loading="lazy"
                />
              </CardMedia>
              <CardHeader className="gap-1.5">
                <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-wider font-sans font-bold text-gold">
                  <span>{item.district}, {item.state}</span>
                </div>
                <CardTitle className="text-lg font-serif text-navy font-semibold mt-1">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-muted text-xs leading-relaxed line-clamp-3">
                  {item.shortDescription}
                </CardDescription>
                <div className="mt-4">
                  <a 
                    href={`/crafts/${item.slug}`} 
                    className="font-sans text-xs font-bold uppercase tracking-wider text-gold hover:text-navy transition-colors duration-200"
                  >
                    Explore Line &rarr;
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </Container>
    </section>
  );
}
