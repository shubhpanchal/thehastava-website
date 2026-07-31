import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../shared/container";
import { Card, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { IMAGE_MANIFEST } from "@/config/images";

interface CraftItem {
  name: string;
  location: string;
  imageKey: string;
  slug?: string;
}

const CRAFT_ITEMS: CraftItem[] = [
  {
    name: "Dhokra Art",
    location: "Bastar, CG",
    imageKey: "giDhokraArt",
    slug: "bastar-dhokra-art",
  },
  {
    name: "Banarasi Sarees",
    location: "Varanasi, UP",
    imageKey: "giBanarasiSaree",
    slug: "banarasi-silk-sarees",
  },
  {
    name: "Kutch Embroidery",
    location: "Kutch, GJ",
    imageKey: "giKutchEmbroidery",
    slug: "kutch-handloom-embroidery",
  },
  {
    name: "Blue Pottery",
    location: "Jaipur, RJ",
    imageKey: "giBluePottery",
    slug: "jaipur-blue-pottery",
  },
  {
    name: "Madhubani Painting",
    location: "Mithila, BR",
    imageKey: "giMadhubaniPainting",
  },
  {
    name: "Pashmina",
    location: "Kashmir, JK",
    imageKey: "giPashmina",
    slug: "kashmiri-pashmina",
  },
  {
    name: "Pochampally Ikat",
    location: "Yadadri, TS",
    imageKey: "giPochampallyIkat",
  },
  {
    name: "Channapatna Toys",
    location: "Ramanagara, KA",
    imageKey: "giChannapatnaToys",
  },
  {
    name: "Bidriware",
    location: "Bidar, KA",
    imageKey: "giBidriware",
  },
  {
    name: "Kondapalli Toys",
    location: "Krishna, AP",
    imageKey: "giKondapalliToys",
  },
];

export function GiShowcase() {
  return (
    <section className="bg-navy-dark text-ivory py-24 lg:py-32 relative overflow-hidden">
      
      {/* Decorative Heritage Backdrop Lines */}
      <div className="absolute right-0 bottom-0 w-96 h-96 opacity-5 pointer-events-none translate-x-12 translate-y-12">
        <svg viewBox="0 0 100 100" fill="none" stroke="var(--color-gold)" strokeWidth="0.5">
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="35" />
          <circle cx="50" cy="50" r="25" />
          <path d="M50 0v100M0 50h100M15 15l70 70M15 85l70-70" />
        </svg>
      </div>

      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Sourcing Narrative */}
        <div className="lg:col-span-4 flex flex-col gap-5 lg:gap-6">
          <span className="font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Authentic. Verified. GI Tagged.
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white leading-tight">
            India&apos;s GI-Tagged Crafts, Sourced with Integrity
          </h2>
          <p className="font-sans text-xs sm:text-sm text-ivory/60 leading-relaxed">
            Geographical Indication (GI) tags protect regional heritage. We work directly with certified artisan cooperatives and weaver communities to bring you verified products that guarantee historical accuracy, genuine craftsmanship, and fair wage distribution.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="outline-gold" size="md">
              Request Export Consultation
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Right Column: Data-Driven Responsive Grid */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
            {CRAFT_ITEMS.map((item) => {
              const imgData = IMAGE_MANIFEST[item.imageKey];
              const cardContent = (
                <>
                  {/* Product Image Area */}
                  <div className="flex-grow relative w-full h-32 sm:h-40 overflow-hidden mb-2 rounded-xs bg-navy-dark/40">
                    <Image
                      src={imgData.src}
                      alt={imgData.alt}
                      fill
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 15vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  {/* Craft metadata details */}
                  <div className="flex flex-col gap-0.5">
                    <CardTitle className="text-sm font-serif text-ivory tracking-wide group-hover:text-gold transition-colors truncate">
                      {item.name}
                    </CardTitle>
                    <span className="font-sans text-[0.6rem] uppercase tracking-widest text-gold/60 font-semibold truncate">
                      {imgData.origin || item.location}
                    </span>
                  </div>
                </>
              );

              if (item.slug) {
                return (
                  <Link key={item.name} href={`/crafts/${item.slug}`} className="contents">
                    <Card
                      variant="bordered"
                      hoverable={true}
                      className="bg-navy-light/10 border-navy-light/40 hover:border-gold/40 hover:bg-navy-light/20 cursor-pointer group p-2.5 flex flex-col justify-between text-left aspect-[4/5] h-full transition-all duration-300"
                    >
                      {cardContent}
                    </Card>
                  </Link>
                );
              }

              return (
                <Card
                  key={item.name}
                  variant="bordered"
                  className="bg-navy-light/10 border-navy-light/40 p-2.5 flex flex-col justify-between text-left aspect-[4/5] h-full"
                >
                  {cardContent}
                </Card>
              );
            })}
          </div>
          
          <div className="text-right">
            <span className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold/40 font-bold">
              ... and many more craft clusters across India.
            </span>
          </div>
        </div>

      </Container>
    </section>
  );
}
