import Link from "next/link";
import { Container } from "@/components/shared/container";

export default function CaseStudiesPage() {
  return (
    <div>
      <section className="bg-[#061326] py-24 text-white md:py-32">
        <Container>
          <span className="section-eyebrow section-eyebrow-dark">Case Studies</span>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-.04em] md:text-6xl">Real workflows. Focused automation.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">A growing library of the business problems, systems, and solutions we build.</p>
        </Container>
      </section>
      <section className="bg-slate-50 py-20 md:py-28">
        <Container>
          <Link href="/case-studies/harivishva" className="group block overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,.08)] transition hover:-translate-y-1">
            <div className="grid lg:grid-cols-[.85fr_1.15fr]">
              <div className="min-h-[320px] bg-[#09182d] p-8">
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Featured showcase</div>
                <div className="mt-5 text-4xl font-semibold text-white">Harivishva</div>
                <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">A unified operating experience for property workflows, customer operations, bookings, and reporting.</p>
              </div>
              <div className="p-8 md:p-10">
                <div className="text-sm font-semibold text-blue-600">Business workflow platform</div>
                <h2 className="mt-3 text-3xl font-semibold text-slate-950">From fragmented operations to one operating view.</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">Explore the demo, the workflow design, and how the system is structured.</p>
                <div className="mt-7 font-semibold text-blue-600 group-hover:translate-x-1 transition">Open case study →</div>
              </div>
            </div>
          </Link>
        </Container>
      </section>
    </div>
  );
}