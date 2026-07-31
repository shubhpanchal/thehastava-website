import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SERVICE_DATABASE } from "@/config/services";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceDeliverables } from "@/components/services/ServiceDeliverables";
import { IndustriesServed } from "@/components/services/IndustriesServed";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { RelatedServices } from "@/components/services/RelatedServices";
import { RequestConsultationCTA } from "@/components/services/RequestConsultationCTA";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(SERVICE_DATABASE).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_DATABASE[slug];

  if (!service) {
    return {
      title: "Service Not Found | HASTAVA Sourcing Partner",
    };
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: {
      canonical: `https://www.thehastava.com/services/${slug}`,
    },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: `https://www.thehastava.com/services/${slug}`,
      type: "website",
      images: [
        {
          url: `https://www.thehastava.com/images/${slug}.webp`,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seo.title,
      description: service.seo.description,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICE_DATABASE[slug];

  if (!service) {
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
        "name": "Services",
        "item": "https://www.thehastava.com/contact"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://www.thehastava.com/services/${slug}`
      }
    ]
  };

  const faqSchema = service.faq && service.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faq.map((item) => ({
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
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
      <ServiceProcess service={service} />
      <ServiceDeliverables service={service} />
      <IndustriesServed service={service} />
      <ServiceFAQ service={service} />
      <RelatedServices service={service} />
      <RequestConsultationCTA service={service} />
    </>
  );
}
