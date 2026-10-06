import { Container } from "@/components/shared/container";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <div>
      <section className="bg-[#061326] py-24 text-white md:py-32">
        <Container>
          <span className="section-eyebrow section-eyebrow-dark">About Hastava</span>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-.04em] md:text-6xl">We build systems that remove manual work.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Hastava helps businesses turn repetitive processes into practical AI, data, and automation workflows.</p>
        </Container>
      </section>
      <section className="bg-white py-20 md:py-28">
        <Container className="grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="section-eyebrow">Our approach</span>
            <h2 className="section-title mt-3">Start with the business problem. Then choose the technology.</h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-slate-600">
            <p>We focus on practical problems such as document processing, operational reporting, internal workflows, customer inquiries, and data movement between systems.</p>
            <p>Rather than forcing a large transformation project, we look for one high-value process, design a focused solution, deploy it with the team, and improve it over time.</p>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm font-semibold text-slate-950">Founder</div>
              <div className="mt-2 text-lg font-semibold text-blue-700">{siteConfig.founderName}</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">Data engineering, AI, automation, and business systems.</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}