import { site } from "@/data/site";
import Reveal from "@/components/Reveal";
import SectionLink from "@/components/SectionLink";

function ServiceFlow({ steps }: { steps: readonly string[] }) {
  return (
    <div className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-2 text-[13px] font-semibold text-text-primary">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-2">
          <span className="rounded-full bg-white/70 px-3 py-1.5">{step}</span>
          {index < steps.length - 1 ? <span aria-hidden="true" className="text-brand">→</span> : null}
        </div>
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="section-shell soft-section bg-transparent">
      <div className="page-container">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-brand">DỊCH VỤ</p>
          <h2 id="services-heading" className="mt-3 max-w-[14ch] text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-text-primary">Bạn đang ở bước nào?</h2>
          <p className="mt-5 max-w-xl text-[16px] leading-[1.65] text-text-secondary">Chọn hướng phù hợp với tình trạng hiện tại của bạn để bắt đầu trao đổi rõ ràng hơn.</p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.04fr_0.96fr] lg:gap-7">
          {site.servicePaths.slice(0, 2).map((path, index) => (
            <Reveal key={path.id} delay={index * 90} className={`editorial-panel flex h-full flex-col p-6 sm:p-8 lg:p-10 ${index === 0 ? "bg-[#E8EFE8]" : "bg-[#EFEDF4]"}`}>
              <p className="eyebrow text-brand">{path.label}</p>
              <h3 className="mt-4 max-w-[22ch] text-[clamp(1.45rem,2.5vw,2rem)] font-semibold leading-[1.12] tracking-[-0.035em] text-text-primary">{path.title}</h3>
              <p className="mt-4 max-w-xl text-[15px] leading-[1.65] text-text-secondary">{path.description}</p>

              <ServiceFlow steps={path.steps} />

              <ul className="mt-7 grid gap-3 border-t border-[rgba(41,37,36,0.1)] pt-6 text-[14px] leading-[1.55] text-text-secondary sm:grid-cols-2 sm:gap-x-5">
                {path.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <SectionLink href="#workflow" className="mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[rgba(41,37,36,0.12)] bg-white/65 px-5 text-[15px] font-semibold text-text-primary transition duration-300 ease-out hover:-translate-y-0.5 hover:border-brand-border hover:bg-white hover:text-brand active:translate-y-0 sm:w-fit">
                {path.ctaLabel}
                <span aria-hidden="true" className="ml-2">↗</span>
              </SectionLink>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
