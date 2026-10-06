import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/shared/container";

export const metadata = {
  title: "404 - Page Not Found | HASTAVA",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center bg-[#061326] text-white">
      <Container className="py-24 sm:py-32">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Error 404</span>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">This workflow went somewhere else.</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">The page you are looking for does not exist or has moved during the HASTAVA website rebuild.</p>
          <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5">
            <ArrowLeft size={17} /> Return to HASTAVA
          </Link>
        </div>
      </Container>
    </div>
  );
}
