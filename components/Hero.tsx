import { site } from "@/data/site";
import Reveal from "@/components/Reveal";
import SectionLink from "@/components/SectionLink";
import ZaloCtaButton from "@/components/ZaloCtaButton";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative section-shell overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_78%_16%,rgba(249,115,22,0.10),transparent_34%)]" />

      <div className="page-container hero-container relative grid items-center gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:gap-10 min-[1440px]:gap-12">
        <div className="min-w-0 max-w-[38rem]">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.08em] text-brand lg:text-[12px]">
              <span aria-hidden="true" className="h-px w-8 bg-brand" />
              <span>{site.heroEyebrow}</span>
            </p>
          </Reveal>
          <Reveal delay={70}>
            <h1 className="max-w-[20ch] text-[30px] font-bold leading-[1.1] tracking-[-0.04em] text-text-primary md:text-[36px] lg:max-w-[19ch] lg:text-[40px] min-[1440px]:text-[44px]">
              {site.heroHeadline}
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-[38rem] text-[14px] leading-[1.6] text-text-secondary md:text-[15px]">{site.heroDescription}</p>
          </Reveal>
          <Reveal delay={210}>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <ZaloCtaButton className="inline-flex min-h-11 w-full items-center justify-center whitespace-nowrap rounded-xl bg-brand px-5 text-center text-[14px] font-semibold text-white shadow-[var(--shadow-brand-hover)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-brand-hover active:translate-y-0 sm:w-auto lg:min-h-12 lg:text-[15px]">
                Nhắn Zalo
                <span aria-hidden="true" className="ml-2">→</span>
              </ZaloCtaButton>
              <SectionLink
                href="#projects"
                className="inline-flex min-h-11 w-full items-center justify-center whitespace-nowrap rounded-xl border border-border-strong bg-white px-4 text-center text-[14px] font-semibold text-text-primary transition duration-200 ease-out hover:-translate-y-0.5 hover:border-brand-border hover:bg-brand-soft hover:text-brand active:translate-y-0 sm:w-auto lg:min-h-12 lg:text-[15px]"
              >
                Xem giao diện
              </SectionLink>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-4 flex max-w-[34rem] items-start gap-3 text-[14px] leading-[1.6] text-text-muted md:text-[15px]">
              <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-brand" />
              <span>{site.heroNote}</span>
            </p>
          </Reveal>
        </div>

        <Reveal delay={360} className="hero-visual min-w-0">
          <div className="relative flex min-w-0 items-center justify-center lg:justify-end">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-[12%] top-[16%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.12),transparent_68%)] blur-2xl" />
            <Image
              src="/images/hero/website-design-mockup.png"
              alt="Minh họa thiết kế website responsive trên laptop và điện thoại"
              width={1596}
              height={986}
              priority
              sizes="(min-width: 1024px) min(720px, 50vw), (min-width: 768px) 720px, min(100vw - 32px, 600px)"
              className="hero-mockup relative h-auto w-full max-w-[720px] object-contain drop-shadow-[0_18px_28px_rgba(15,23,42,0.10)]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
