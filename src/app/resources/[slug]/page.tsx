import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { RESOURCE_DATABASE } from "@/config/resources";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(RESOURCE_DATABASE).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = RESOURCE_DATABASE[slug];

  if (!resource) {
    return {
      title: "Resource Not Found | HASTAVA Sourcing Partner",
    };
  }

  return {
    title: resource.seo.title,
    description: resource.seo.description,
    keywords: resource.seo.keywords,
    alternates: {
      canonical: `https://www.thehastava.com/resources/${slug}`,
    },
    openGraph: {
      title: resource.seo.title,
      description: resource.seo.description,
      url: `https://www.thehastava.com/resources/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: resource.seo.title,
      description: resource.seo.description,
    },
  };
}

export default async function ResourcePage({ params }: PageProps) {
  const { slug } = await params;
  const resource = RESOURCE_DATABASE[slug];

  if (!resource) {
    notFound();
  }

  // Generate Breadcrumb schema
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
        "name": "Resource Center",
        "item": "https://www.thehastava.com/contact"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": resource.title,
        "item": `https://www.thehastava.com/resources/${slug}`
      }
    ]
  };

  return (
    <article className="bg-ivory py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Article Header */}
      <Container className="max-w-3xl text-center flex flex-col gap-4 mb-16">
        <div className="flex justify-center gap-4 text-[0.65rem] uppercase tracking-wider font-sans font-bold text-gold">
          <span>{resource.lastUpdated}</span>
          <span>•</span>
          <span>{resource.readTime}</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-medium text-navy leading-[1.1] tracking-tight mt-1">
          {resource.title}
        </h1>
        <p className="font-sans text-base sm:text-lg text-slate-muted leading-relaxed italic max-w-xl mx-auto mt-2">
          {resource.subtitle}
        </p>
        <div className="h-0.5 w-16 bg-gold/50 mx-auto mt-2" />
      </Container>

      {/* Article Body */}
      <Container className="max-w-2xl flex flex-col gap-12 font-sans text-sm sm:text-base text-slate-muted leading-relaxed">
        
        {/* Overview */}
        <div className="p-6 bg-ivory-light border border-ivory-dark rounded-xs italic">
          {resource.overview}
        </div>

        {/* Sections */}
        {resource.sections.map((sec) => (
          <div key={sec.heading} className="flex flex-col gap-4">
            <h2 className="font-serif text-xl sm:text-2xl text-navy font-semibold mt-4">
              {sec.heading}
            </h2>
            <p>{sec.body}</p>
            
            {sec.bulletPoints && sec.bulletPoints.length > 0 && (
              <ul className="flex flex-col gap-2.5 pl-4 mt-2">
                {sec.bulletPoints.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5">
                    <span className="text-gold font-bold mr-1">&bull;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Conversion CTA Block */}
        <div className="border border-ivory-dark bg-navy-dark text-white p-8 rounded-sm text-center flex flex-col items-center gap-6 mt-8 shadow-premium">
          <span className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold font-bold">
            Sourcing Assistance Desk
          </span>
          <h3 className="font-serif text-2xl text-white leading-snug">
            Need Direct Sourcing & Compliance Support?
          </h3>
          <p className="font-sans text-xs text-ivory/70 max-w-md leading-relaxed">
            Hastava coordinates ethical artisan networks, ISPM 15 fumigation, custom samplings, and container logistics out of India.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Talk to a Sourcing Expert
          </Button>
        </div>

      </Container>
    </article>
  );
}
