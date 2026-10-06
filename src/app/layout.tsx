import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { siteConfig } from "@/config/site";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "HASTAVA | AI, Data & Automation for Businesses",
  description: "Hastava helps businesses automate repetitive work, improve data workflows, and build focused internal systems.",
  keywords: ["AI automation", "business automation", "data engineering", "document intelligence", "workflow automation", "Hastava"],
  openGraph: {
    title: "HASTAVA | Turn Manual Work Into Growth",
    description: "AI, data, and automation solutions for modern businesses.",
    url: siteConfig.website,
    siteName: siteConfig.companyName,
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={manrope.variable + " font-sans bg-white text-slate-900 antialiased"}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-xl">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
