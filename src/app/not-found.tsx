import Link from "next/link";
import Image from "next/image";
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
          <div className="mb-8 inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-md shadow-inner shadow-blue-500/10">
            <Image
              src="/brand/hastava-mark-transparent.png"
              alt="HASTAVA"
              width={456}
              height={546}
              priority
              className="h-12 w-auto object-contain"
            />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Error 404</span>
          </div>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">This workflow went somewhere else.</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">The page you are looking for does not exist or has moved during the HASTAVA website rebuild.</p>
          <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5">
            <ArrowLeft size={17} /> Return to HASTAVA
          </Link>
        </div>
      </Container>
    </div>
  );
}
