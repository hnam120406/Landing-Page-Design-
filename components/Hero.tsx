import { site } from "@/data/site";
import Reveal from "@/components/Reveal";
import SectionLink from "@/components/SectionLink";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="hero-shell soft-section relative bg-transparent">
      <div className="page-container hero-container relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
        <div className="relative z-10 min-w-0 max-w-[38rem] overflow-hidden lg:pb-8">
          <Reveal>
            <p className="eyebrow mb-5 flex max-w-full flex-col items-start gap-2 text-brand sm:flex-row sm:items-center sm:gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-brand" />
              <span>{site.heroEyebrow}</span>
            </p>
          </Reveal>
          <Reveal delay={70}>
            <h1 className="w-full max-w-full break-words text-[clamp(2.45rem,10.8vw,5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-text-primary [text-wrap:balance] md:max-w-[14ch] md:text-[clamp(3rem,5.2vw,5rem)]">
              <span className="block">Có ý tưởng rồi,</span>
              <span className="block md:inline">nhưng </span>
              <span className="handwritten block text-[0.82em] text-[#d96d64] md:inline md:text-[0.92em]">giao diện</span>
              <span className="block">vẫn chưa ổn?</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-7 w-full max-w-[calc(100vw-40px)] break-words text-[16px] leading-[1.65] text-text-secondary md:max-w-[34rem] md:text-[17px]">
              Flash Honner giúp bạn thiết kế <span className="handwritten text-[1.2em] text-text-primary">Figma</span> và dựng website chạy mượt trên cả laptop lẫn điện thoại. Phù hợp với sinh viên, nhóm dự án nhỏ, CLB và người mới bắt đầu kinh doanh online.
            </p>
          </Reveal>
          <Reveal delay={210}>
            <SectionLink
              href="#projects"
              className="mt-8 inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full bg-[#FFB7B2] px-6 text-center text-[15px] font-semibold text-text-primary shadow-[var(--shadow-brand-hover)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#ffa7a1] active:translate-y-0"
            >
              Xem dự án đã làm
              <span aria-hidden="true" className="ml-2">↗</span>
            </SectionLink>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-5 flex max-w-[calc(100vw-40px)] items-start gap-3 text-[14px] leading-[1.6] text-text-muted md:max-w-[34rem]">
              <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-brand" />
              <span>{site.heroNote}</span>
            </p>
          </Reveal>
        </div>

        <Reveal delay={300} className="hero-visual min-w-0">
          <div className="hero-stage relative flex min-h-[17rem] items-center justify-center px-2 py-8 sm:min-h-[22rem] lg:min-h-[28rem] lg:px-0">
            <div aria-hidden="true" className="hero-side-visual hero-side-visual-left aspect-[0.72]">
              <Image src="/images/hero/website-design-mockup.png" alt="" fill sizes="180px" className="object-cover opacity-35 saturate-50" />
            </div>
            <div aria-hidden="true" className="hero-side-visual hero-side-visual-right aspect-[0.72]">
              <Image src="/images/hero/website-design-mockup.png" alt="" fill sizes="180px" className="object-cover opacity-35 saturate-50" />
            </div>
            <div aria-hidden="true" className="pointer-events-none absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(255,183,178,0.35),transparent_68%)] blur-3xl" />
            <Image
              src="/images/hero/website-design-mockup.png"
              alt="Minh họa thiết kế website responsive trên laptop và điện thoại"
              width={1596}
              height={986}
              priority
              sizes="(min-width: 1024px) 58vw, (min-width: 768px) 75vw, 100vw"
              className="hero-mockup relative z-10 h-auto w-full max-w-[720px] object-contain drop-shadow-[0_18px_28px_rgba(41,37,36,0.10)]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
