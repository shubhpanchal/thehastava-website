import React from "react";
import Image from "next/image";
import { Container } from "@/components/shared/container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardMedia } from "@/components/ui/card";
import { IMAGE_MANIFEST } from "@/config/images";

export const metadata = {
  title: "B2B Trade Blog | HASTAVA Sourcing Insights",
  description: "Read realistic trade insights, market trends, compliance guidelines, and heritage craft histories curated for international buyers and home decor importers.",
};

interface Article {
  title: string;
  category: string;
  readTime: string;
  summary: string;
  author: string;
  date: string;
  manifestKey: keyof typeof IMAGE_MANIFEST;
}

const ARTICLES: Article[] = [
  {
    title: "Navigating Customs: Sourcing Wooden Handicrafts from India",
    category: "Trade & Compliance",
    readTime: "6 min read",
    summary: "A practical guide to the mandatory fumigation process, quarantine certifications, and ISPM 15 packaging guidelines required for importing sheesham and mango wood decor into US and EU ports.",
    author: "Amit Sharma, Trade Consultant",
    date: "July 24, 2026",
    manifestKey: "woodCarving",
  },
  {
    title: "Understanding Geographical Indication (GI) Tags in Global Retail",
    category: "Heritage & Legal",
    readTime: "4 min read",
    summary: "Why certified origin matters for luxury consumer brands. Learn how GI tags guarantee authenticity, fight counterfeit markets, and justify premium pricing on luxury artisan goods.",
    author: "Priya Nair, Legal Analyst",
    date: "June 18, 2026",
    manifestKey: "dhokraArt",
  },
  {
    title: "Optimizing B2B Packaging for Fragile Ceramic Sourcing",
    category: "Logistics",
    readTime: "5 min read",
    summary: "An inside look at HASTAVA's drop-tested packaging protocols. Learn how customized foam inserts and humidity controls reduce transit breakage rates for blue pottery shipments to less than 1.5%.",
    author: "Rajesh Gupta, Logistics Lead",
    date: "May 12, 2026",
    manifestKey: "bluePottery",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-ivory py-16 sm:py-24">
      {/* Page Header */}
      <Container className="max-w-4xl text-center flex flex-col gap-4 mb-16 sm:mb-20">
        <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold">
          Sourcing & Trade Journal
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-navy leading-[1.1] tracking-tight">
          Hastava Insights
        </h1>
        <div className="h-0.5 w-16 bg-gold/50 mx-auto mt-2" />
        <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed max-w-xl mx-auto mt-2">
          B2B market reports, compliance deep-dives, and cultural heritage histories for the international sourcing community.
        </p>
      </Container>

      {/* Articles Grid */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article) => {
            const asset = IMAGE_MANIFEST[article.manifestKey];
            return (
              <Card key={article.title} variant="bordered" hoverable={true} className="h-full">
                <CardMedia className="aspect-video bg-ivory-dark/15">
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
                    <span>{article.category}</span>
                    <span className="text-slate-muted font-normal">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-base font-serif text-navy font-semibold mt-1 leading-snug">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 justify-between flex-grow">
                  <CardDescription className="text-slate-muted text-xs leading-relaxed">
                    {article.summary}
                  </CardDescription>
                  <div className="flex flex-col gap-0.5 border-t border-ivory-dark/40 pt-3">
                    <span className="font-sans text-[0.65rem] font-bold text-navy">{article.author}</span>
                    <span className="font-sans text-[0.6rem] text-slate-muted">{article.date}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
