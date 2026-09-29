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
                href="#requirements"
                className="inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap rounded-xl bg-brand px-5 text-center text-[14px] font-semibold text-white shadow-[var(--shadow-soft)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-[var(--shadow-brand-hover)] active:translate-y-0 active:bg-brand-active focus-visible:bg-brand-hover sm:w-auto lg:min-h-[50px] lg:text-[15px] min-[1440px]:min-h-[52px]"
              >
                Gửi yêu cầu của bạn
                <span aria-hidden="true" className="ml-2">→</span>
              </a>
              <a
                href="#process"
                className="inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap rounded-xl border border-border-strong bg-white px-5 text-center text-[14px] font-semibold text-text-primary transition duration-200 ease-out hover:-translate-y-0.5 hover:border-brand-border hover:bg-brand-soft hover:text-brand active:translate-y-0 sm:w-auto lg:min-h-[50px] lg:text-[15px] min-[1440px]:min-h-[52px]"
              >
                Xem cách nhóm làm việc
              </a>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <ul aria-label="Năng lực chính" className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold text-text-secondary md:text-[15px]">
              <li>Thiết kế Figma</li>
              <li aria-hidden="true" className="text-brand">•</li>
              <li>Code giao diện thủ công</li>
              <li aria-hidden="true" className="text-brand">•</li>
              <li>Phát triển theo yêu cầu</li>
            </ul>
          </Reveal>
          <Reveal delay={340}>
            <p className="mt-5 flex max-w-[34rem] items-start gap-3 text-[14px] leading-6 text-text-muted md:text-[15px]">
              <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-brand" />
              <span>{site.heroNote}</span>
            </p>
          </Reveal>
        </div>

        <Reveal delay={360} className="min-w-0">
          <div className="relative min-w-0 overflow-hidden rounded-[24px] border border-border bg-background-soft p-5 shadow-[var(--shadow-soft)] sm:p-8 lg:p-10">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-brand-soft/80 blur-3xl" />
          <div className="relative rounded-[20px] border border-border bg-white p-5 sm:p-7">
            <div className="flex items-start justify-between gap-4 border-b border-border pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand">Flash Honner</p>
                <p className="mt-2 text-[17px] font-bold text-text-primary md:text-[19px]">Một dự án rõ ràng từ đầu</p>
              </div>
              <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-xl font-bold text-brand">FH</span>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                ["01", "Làm rõ", "Mục tiêu & phạm vi"],
                ["02", "Thiết kế", "Figma & cấu trúc"],
                ["03", "Phát triển", "Website có thể dùng"],
              ].map(([number, title, description]) => (
                <div key={number} className="rounded-2xl border border-border bg-background-soft p-4">
                  <span className="text-sm font-bold text-brand">{number}</span>
                  <p className="mt-4 text-[15px] font-bold text-text-primary">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-text-muted">{description}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-dark p-5 text-white">
              <p className="text-sm font-semibold text-white/60">Cách bắt đầu</p>
              <p className="mt-2 text-[15px] font-semibold leading-7">Chỉ cần gửi mục tiêu và những gì bạn đang cần làm rõ.</p>
            </div>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
