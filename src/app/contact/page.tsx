import { Container } from "@/components/shared/container";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  return (
    <div>
      <section className="bg-[#061326] py-24 text-white md:py-32">
        <Container>
          <span className="section-eyebrow section-eyebrow-dark">Start a conversation</span>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-.04em] md:text-6xl">Have a process that feels unnecessarily manual?</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Tell us what happens today. We will help you identify where automation may create the most value.</p>
        </Container>
      </section>
      <section className="bg-white py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <span className="section-eyebrow">Talk to Hastava</span>
            <h2 className="section-title mt-3 text-4xl">A 20-minute discovery conversation.</h2>
            <div className="mt-7 space-y-3 text-sm leading-6 text-slate-600">
              <p><strong className="text-slate-950">Email:</strong> <a className="text-blue-600" href={"mailto:" + siteConfig.email}>{siteConfig.email}</a></p>
              <p><strong className="text-slate-950">Phone:</strong> <a className="text-blue-600" href={"tel:" + siteConfig.phoneClean}>{siteConfig.phone}</a></p>
              <p><strong className="text-slate-950">Location:</strong> {siteConfig.address.full}</p>
            </div>
          </div>
          <form className="grid gap-5 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm font-semibold text-slate-800">Name<input name="name" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500" placeholder="Your name" /></label>
              <label className="text-sm font-semibold text-slate-800">Work email<input name="email" type="email" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500" placeholder="you@company.com" /></label>
            </div>
            <label className="text-sm font-semibold text-slate-800">Company<input name="company" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500" placeholder="Company name" /></label>
            <label className="text-sm font-semibold text-slate-800">What would you like to automate?<textarea name="message" rows={6} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500" placeholder="Describe the current process, the volume, or the problem." /></label>
            <button type="submit" className="w-fit rounded-xl bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5">Send inquiry →</button>
            <p className="text-xs text-slate-500">This demo form is not connected to a backend yet.</p>
          </form>
        </Container>
      </section>
    </div>
  );
}