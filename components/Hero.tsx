import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section id="home" className="relative section-shell overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_78%_16%,rgba(249,115,22,0.10),transparent_34%)]" />

      <div className="page-container relative grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div className="min-w-0 max-w-3xl">
          <Reveal>
            <p className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.08em] text-brand lg:text-[12px]">
              <span aria-hidden="true" className="h-px w-8 bg-brand" />
              <span>{site.heroEyebrow}</span>
            </p>
          </Reveal>
          <Reveal delay={70}>
            <h1 className="max-w-[19ch] text-[34px] font-bold leading-[1.1] tracking-[-0.04em] text-text-primary md:text-[40px] lg:max-w-[18ch] lg:text-[46px] min-[1440px]:text-[48px] min-[1920px]:max-w-[19ch]">
              {site.heroHeadline}
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-[41rem] text-[14px] leading-[1.65] text-text-secondary md:text-[15px] lg:text-[15px] min-[1440px]:text-base">{site.heroDescription}</p>
          </Reveal>
          <Reveal delay={210}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap rounded-xl bg-brand px-5 text-center text-[14px] font-semibold text-white shadow-[var(--shadow-soft)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-[var(--shadow-brand-hover)] active:translate-y-0 active:bg-brand-active focus-visible:bg-brand-hover sm:w-auto lg:min-h-[50px] lg:text-[15px] min-[1440px]:min-h-[52px]"
              >
                Trao đổi dự án
                <span aria-hidden="true" className="ml-2">→</span>
              </a>
              <a
                href="#workflow"
                className="inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap rounded-xl border border-border-strong bg-white px-5 text-center text-[14px] font-semibold text-text-primary transition duration-200 ease-out hover:-translate-y-0.5 hover:border-brand-border hover:bg-brand-soft hover:text-brand active:translate-y-0 sm:w-auto lg:min-h-[50px] lg:text-[15px] min-[1440px]:min-h-[52px]"
              >
                Xem quy trình
              </a>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-5 flex max-w-[34rem] items-start gap-3 text-[14px] leading-6 text-text-muted md:text-[15px]">
              <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-brand" />
              <span>{site.heroNote}</span>
            </p>
          </Reveal>
        </div>

        <Reveal delay={360} className="min-w-0">
          <div aria-hidden="true" className="relative min-w-0 overflow-hidden rounded-[24px] border border-border bg-background-soft p-5 shadow-[var(--shadow-soft)] sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-brand-soft/80 blur-3xl" />
            <div className="relative rounded-[20px] border border-border bg-white p-5 sm:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
                <span className="h-3 w-32 rounded-full bg-brand/80" />
                <span className="size-10 rounded-xl bg-brand-soft" />
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {["w-3/4", "w-2/3", "w-4/5"].map((width) => (
                  <div key={width} className="rounded-2xl border border-border bg-background-soft p-4">
                    <span className="block h-2 w-8 rounded-full bg-brand/70" />
                    <span className={`mt-5 block h-3 rounded-full bg-text-primary/15 ${width}`} />
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-dark p-5">
                <span className="block h-2 w-20 rounded-full bg-white/50" />
                <span className="mt-3 block h-3 w-3/4 rounded-full bg-white/80" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
