import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/styles/globals.css";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { CursorProvider, CustomCursor } from "@/components/ui/cursor";

const fontSans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fontDisplay = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thehastava.com"),
  title: {
    default: "HASTAVA | AI, Data & Automation for Businesses",
    template: "%s | HASTAVA",
  },
  description:
    "AI, data, and automation solutions that eliminate repetitive work, connect your systems, and help your business operate faster.",
  keywords: [
    "AI automation",
    "business automation",
    "data engineering",
    "document intelligence",
    "workflow automation",
    "Hastava",
  ],
  alternates: {
    canonical: "https://www.thehastava.com",
  },
  openGraph: {
    title: "HASTAVA | Turn Manual Work Into Growth",
    description: "AI, data, and automation solutions for modern businesses.",
    url: "https://www.thehastava.com",
    siteName: "HASTAVA",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HASTAVA | Turn Manual Work Into Growth",
    description: "AI, data, and automation solutions for modern businesses.",
  },
  icons: {
    icon: [
      { url: "/brand/hastava-mark-transparent.png", type: "image/png" },
      { url: "/brand/hastava-mark.svg", type: "image/svg+xml" },
    ],
    apple: "/brand/hastava-mark-transparent.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable} font-sans bg-white text-slate-900 antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18487685875"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18487685875');
          `}
        </Script>

        <CursorProvider>
          <CustomCursor />
          
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-blue-600 focus:shadow-xl focus:ring-2 focus:ring-blue-600"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CursorProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
