import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "HASTAVA | Authentic Indian Handicrafts Sourced with Integrity",
  description: "HASTAVA connects global buyers with India's finest artisan communities and GI-tagged handicrafts. Sourcing, quality, and trust, delivered globally.",
  keywords: [
    "Indian handicrafts Sourcing",
    "GI-tagged handicrafts India",
    "B2B artisan networks",
    "Custom private label products",
    "Fair trade wood carvings",
    "Jaipur blue pottery wholesale",
    "Dhokra art exports",
    "Indian weaver cooperatives"
  ],
  openGraph: {
    title: "HASTAVA | Authentic Indian Handicrafts Sourced with Integrity",
    description: "Direct-to-artisan sourcing for wholesalers and international brands. Authenticity, quality, and logistics, simplified.",
    url: "https://hastava.com",
    siteName: "HASTAVA",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HASTAVA | Authentic Indian Handicrafts Sourced with Integrity",
    description: "Direct-to-artisan sourcing for wholesalers and international brands. Sourcing, quality, and trust.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jakarta.variable} ${cormorant.variable} font-sans bg-ivory text-slate antialiased flex flex-col min-h-screen`}
      >
        {/* Skip to Content Accessibility Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gold text-navy px-4 py-2 z-[100] font-semibold rounded-xs shadow-luxury outline-none focus:ring-1 focus:ring-navy"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-grow focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
