import Link from "next/link";
import { ArrowUpRight, Bot, Database, FileText, Workflow } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/ui/reveal";

const services = [
  ["AI Automation", "Automate repetitive workflows with practical AI.", Bot],
  ["Data & Analytics", "Turn scattered data into reliable reporting and insights.", Database],
  ["Document Intelligence", "Extract and route information from PDFs, emails, and forms.", FileText],
  ["Business Systems", "Build focused internal tools and integrations.", Workflow],
];
const useCases = [
  ["Sales", "Incoming inquiries & RFQs"],
  ["Operations", "Data entry & repetitive workflows"],
  ["Finance", "Invoices & document processing"],
  ["Customer Service", "Classification & routing"],
  ["Management", "Reporting & dashboards"],
];
const principles = [
  ["Business-first", "Start with the process, not the technology."],
  ["Practical AI", "Build solutions that deliver operational value."],
  ["Data expertise", "Reliable automation starts with reliable data."],
  ["Built for you", "Focused solutions without unnecessary complexity."],
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative bg-[#061326] text-white">
        <div className="hero-grid absolute inset-0 opacity-50" />
        <div className="absolute -right-24 top-12 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <Container className="relative py-20 md:py-28 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
            <Reveal className="max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,.8)]" />
                AI • DATA • AUTOMATION
              </div>
              <h1 className="text-balance text-5xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-[4.7rem] lg:leading-[1.02]">
                Turn Manual Work
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">Into Growth.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                AI, data, and automation solutions that eliminate repetitive work, connect your systems, and help your business operate faster.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/contact" className="group inline-flex items-center rounded-xl bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 px-6 py-3.5 font-semibold shadow-[0_16px_40px_rgba(37,99,235,.28)] transition duration-300 hover:-translate-y-0.5">
                  Book a Discovery Call <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <a href="#solutions" className="inline-flex items-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold transition hover:bg-white/10">
                  See What We Automate
                </a>
              </div>
              <div className="mt-11 grid max-w-2xl gap-4 sm:grid-cols-3">
                {[["01","Automate repetitive work"],["02","Reduce operational friction"],["03","Give teams time back"]].map(([n,t]) => (
                  <div key={n} className="border-l border-blue-400/30 pl-4">
                    <div className="text-[11px] font-bold tracking-[0.2em] text-blue-300">{n}</div>
                    <div className="mt-1 text-sm text-slate-200">{t}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.15} className="mx-auto w-full max-w-xl">
              <div className="float-slow rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_35px_100px_rgba(0,0,0,.38)] backdrop-blur-xl">
                <div className="rounded-[1.5rem] border border-blue-400/20 bg-[#091a33] p-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="text-sm font-semibold">Manual process → intelligent workflow</div>
                    <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-200">Live Flow</div>
                  </div>
                  <div className="mt-5 space-y-4">
                    {[
                      ["Inputs", "PDFs · Emails · Spreadsheets · Existing systems", "↓"],
                      ["Hastava", "AI extraction · validation · orchestration", "→"],
                      ["Outputs", "Structured data · workflows · dashboards", "✓"],
                    ].map(([label,text,mark]) => (
                      <div key={label} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">{label}</span>
                          <span className="text-cyan-300">{mark}</span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="solutions" className="bg-white py-20 md:py-28">
        <Container>
          <Reveal className="max-w-2xl">
            <span className="section-eyebrow">What We Do</span>
            <h2 className="section-title mt-3">Practical AI and data solutions for modern businesses.</h2>
            <p className="section-copy mt-5">Start with one bottleneck. Automate it well. Then build from there.</p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map(([title,text,Icon],i) => (
              <Reveal key={title} delay={i * 0.08} className="group rounded-[1.5rem] border border-slate-200 p-7 shadow-[0_12px_40px_rgba(15,23,42,.05)] transition duration-300 hover:-translate-y-2 hover:border-blue-200">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-cyan-50 text-blue-700"><Icon size={21} strokeWidth={1.8} /></div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">Learn more <ArrowUpRight size={15} /></div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <Container>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="reveal-up max-w-2xl">
              <span className="section-eyebrow">Real Solutions. Real Impact.</span>
              <h2 className="section-title mt-3">Harivishva: a focused business workflow brought into one system.</h2>
              <p className="section-copy mt-5">Our current showcase demonstrates how property operations can move from scattered manual coordination to centralized workflows and reporting.</p>
            </div>
            <Link href="/case-studies/harivishva" className="font-semibold text-blue-600">View case study →</Link>
          </div>
          <div className="reveal-up mt-10 grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,.08)] lg:grid-cols-[.9fr_1.1fr]">
            <div className="relative min-h-[320px] overflow-hidden bg-[#09182d] p-8">
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="absolute -bottom-16 -left-12 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Featured showcase</div>
                  <h3 className="mt-4 text-4xl font-semibold text-white">Harivishva</h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">Challenge → workflow design → unified operating view.</p>
                </div>
                <div className="mt-10 grid grid-cols-3 gap-3">
                  {[["01","Challenge"],["02","Solution"],["03","Demo"]].map(([n,t]) => (
                    <div key={n} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                      <div className="text-xs text-blue-300">{n}</div><div className="mt-1 text-xs font-semibold text-white">{t}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid gap-6 p-8 md:p-10 lg:grid-cols-2">
              <div><div className="mini-heading">Challenge</div><p className="mt-3 text-sm leading-6 text-slate-600">Manual coordination across properties, bookings, customers, and reports.</p></div>
              <div><div className="mini-heading">Solution</div><p className="mt-3 text-sm leading-6 text-slate-600">A centralized application with role-aware workflows, dashboards, and structured data.</p></div>
              <div className="lg:col-span-2 rounded-2xl bg-slate-50 p-6"><div className="text-sm font-semibold text-slate-950">Demo status</div><p className="mt-2 text-sm leading-6 text-slate-600">Showcase build. Verified production outcomes will be published separately.</p></div>
              <Link href="/case-studies/harivishva" className="inline-flex w-fit rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-blue-300 hover:text-blue-700">Explore Harivishva →</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <Reveal className="max-w-2xl">
            <span className="section-eyebrow">What Can We Automate?</span>
            <h2 className="section-title mt-3">Start with the repetitive work your team already knows.</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {useCases.map(([title,text]) => (
              <Reveal key={title} className="rounded-2xl border border-slate-200 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 font-semibold text-blue-700">✦</div>
                <h3 className="mt-5 text-base font-semibold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#061326] py-20 text-white md:py-24">
        <Container>
          <div className="reveal-up max-w-2xl">
            <span className="section-eyebrow section-eyebrow-dark">How We Work</span>
            <h2 className="section-title section-title-dark mt-3">A simple, structured approach from problem to impact.</h2>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-5">
            {[["01","Discover","Understand the process and goals."],["02","Identify","Find the highest-value opportunity."],["03","Build","Develop and integrate the solution."],["04","Deploy","Put it into production with the team."],["05","Improve","Monitor, optimize, and expand."]].map(([n,t,d]) => (
              <div key={n} className="reveal-up">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-400/40 bg-blue-500/10 text-sm font-semibold text-cyan-200">{n}</div>
                <h3 className="mt-5 text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="reveal-up max-w-2xl">
            <span className="section-eyebrow">Why Businesses Choose Hastava</span>
            <h2 className="section-title mt-3">Technology should make the business easier, not more complicated.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {principles.map(([title,text]) => (
              <div key={title} className="reveal-up rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-blue-200">
                <div className="text-sm font-semibold text-blue-700">{title}</div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-[#07172d] via-[#0a2143] to-[#0b1c39] py-20 text-white">
        <Container className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="reveal-up">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">Start with one process</div>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold md:text-4xl">Have a process that feels unnecessarily manual?</h2>
            <p className="mt-3 max-w-2xl text-slate-300">Tell us what you are doing today. We will help you identify whether it can be automated.</p>
          </div>
          <Link href="/contact" className="group shrink-0 rounded-xl bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 px-6 py-3.5 font-semibold transition hover:-translate-y-0.5">Book a Discovery Call <span className="ml-2 group-hover:translate-x-1">→</span></Link>
        </Container>
      </section>
    </div>
  );
}