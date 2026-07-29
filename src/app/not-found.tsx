import React from "react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "404 - Page Not Found | HASTAVA",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <div className="bg-ivory flex items-center justify-center py-24 sm:py-32">
      <Container className="max-w-md text-center flex flex-col items-center gap-6">
        <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold">
          Error 404
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-navy">
          Heritage Lost
        </h1>
        <div className="h-0.5 w-12 bg-gold/50 my-1" />
        <p className="font-sans text-xs sm:text-sm text-slate-muted leading-relaxed">
          The trade page or resource document you are looking for has been relocated, renamed, or does not exist.
        </p>
        <div className="pt-2">
          <Button href="/" variant="primary" size="lg">
            Return to Homepage
          </Button>
        </div>
      </Container>
    </div>
  );
}
