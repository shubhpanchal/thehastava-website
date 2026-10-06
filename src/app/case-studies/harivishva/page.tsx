import Link from "next/link";
import { Container } from "@/components/shared/container";

export default function HarivishvaCaseStudy() {
  return (
    <div>
      <section className="bg-[#061326] py-24 text-white md:py-32">
        <Container>
          <span className="section-eyebrow section-eyebrow-dark">Case Study</span>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-.04em] md:text-6xl">Harivishva</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">A focused business application that brings property operations, customer workflows, bookings, and reporting into one system.</p>
        </Container>
      </section>
      <section className="bg-white py-20 md:py-28">
        <Container className="grid gap-8 md:grid-cols-3">
          {[["Challenge","Property operations were spread across manual processes, scattered information, and multiple coordination points."],["Solution","A role-aware operating platform with centralized data, dashboards, workflow actions, and reporting."],["Status","Current build is a demonstration showcase. Verified production outcomes will be added only when available."]].map(([title,text]) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-7">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">{title}</div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </Container>
      </section>
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="max-w-2xl">
            <span className="section-eyebrow">Workflow</span>
            <h2 className="section-title mt-3">One system, multiple operating layers.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {["Portfolio & properties","Customers & bookings","Operational actions","Reports & dashboards"].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="h-2 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
                <h3 className="mt-5 text-lg font-semibold text-slate-950">{item}</h3>
              </div>
            ))}
          </div>
          <div className="mt-10"><Link href="/contact" className="inline-flex rounded-xl bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 px-6 py-3.5 font-semibold text-white">Discuss a similar workflow →</Link></div>
        </Container>
      </section>
    </div>
  );
}