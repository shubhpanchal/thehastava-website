import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CRAFT_DATABASE } from "@/config/crafts";
import { CraftHero } from "@/components/crafts/CraftHero";
import { CraftStory } from "@/components/crafts/CraftStory";
import { CraftSpecifications } from "@/components/crafts/CraftSpecifications";
import { CraftApplications } from "@/components/crafts/CraftApplications";
import { CraftGallery } from "@/components/crafts/CraftGallery";
import { CraftPackaging } from "@/components/crafts/CraftPackaging";
import { CraftFAQ } from "@/components/crafts/CraftFAQ";
import { RelatedCrafts } from "@/components/crafts/RelatedCrafts";
import { RequestCatalogCTA } from "@/components/crafts/RequestCatalogCTA";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(CRAFT_DATABASE).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const craft = CRAFT_DATABASE[slug];

  if (!craft) {
    return {
      title: "Craft Not Found | HASTAVA Sourcing Catalog",
    };
  }

  return {
    title: craft.seo.title,
    description: craft.seo.description,
    keywords: craft.seo.keywords,
    alternates: {
      canonical: `https://www.thehastava.com/crafts/${slug}`,
    },
    openGraph: {
      title: craft.seo.title,
      description: craft.seo.description,
      url: `https://www.thehastava.com/crafts/${slug}`,
      type: "website",
      images: [
        {
          url: craft.heroImage.src,
          alt: craft.heroImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: craft.seo.title,
      description: craft.seo.description,
    },
  };
}

export default async function CraftPage({ params }: PageProps) {
  const { slug } = await params;
  const craft = CRAFT_DATABASE[slug];

  if (!craft) {
    notFound();
  }

  // Generate Breadcrumb and FAQ JSON-LD schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.thehastava.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Crafts Sourcing Catalog",
        "item": "https://www.thehastava.com/crafts"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": craft.title,
        "item": `https://www.thehastava.com/crafts/${slug}`
      }
    ]
  };

  const faqSchema = craft.faq && craft.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": craft.faq.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <CraftHero craft={craft} />
      <CraftStory craft={craft} />
      <CraftSpecifications craft={craft} />
      <CraftApplications craft={craft} />
      <CraftGallery craft={craft} />
      <CraftPackaging craft={craft} />
      <CraftFAQ craft={craft} />
      <RelatedCrafts craft={craft} />
      <RequestCatalogCTA craft={craft} />
    </>
  );
}
