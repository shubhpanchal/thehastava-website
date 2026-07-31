import React from "react";
import Image from "next/image";
import { Container } from "../shared/container";
import { CraftDetail } from "@/config/crafts";

interface CraftGalleryProps {
  craft: CraftDetail;
}

export function CraftGallery({ craft }: CraftGalleryProps) {
  // If there are no gallery images, fallback to hero image
  const images = craft.gallery.length > 0 ? craft.gallery : [craft.heroImage];

  return (
    <section className="bg-ivory py-20 lg:py-28 border-b border-ivory-dark/45">
      <Container className="flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Visual Portfolio
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-navy">
            Production & Detail Gallery
          </h2>
          <div className="h-0.5 w-12 bg-gold/50 mt-1" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {images.map((img, idx) => (
            <div 
              key={img.src + idx} 
              className="relative aspect-video sm:aspect-4/3 w-full overflow-hidden rounded-sm border border-ivory-dark bg-ivory-dark/10 shadow-premium group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="font-sans text-xs text-white font-medium tracking-wide">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
