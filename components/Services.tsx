import { site } from "@/data/site";
import Reveal from "@/components/Reveal";
import ZaloCtaButton from "@/components/ZaloCtaButton";

function ServiceFlow({ steps }: { steps: readonly string[] }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 text-[13px] font-semibold text-text-primary">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-2">
          <span className="rounded-full bg-background-soft px-3 py-1.5">{step}</span>
          {index < steps.length - 1 ? <span aria-hidden="true" className="text-brand">→</span> : null}
        </div>
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="section-shell bg-background-soft">
      <div className="page-container">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand">DỊCH VỤ</p>
          <h2 id="services-heading" className="mt-2 text-[28px] font-bold leading-[1.18] tracking-[-0.03em] text-text-primary md:text-[34px] lg:text-[40px]">Bạn đang ở bước nào?</h2>
          <p className="mt-4 max-w-xl text-[15px] leading-[1.65] text-text-secondary md:text-[16px]">Chọn hướng phù hợp với tình trạng hiện tại của bạn để bắt đầu trao đổi rõ ràng hơn.</p>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {site.servicePaths.map((path, index) => (
            <Reveal key={path.id} delay={index * 80} className="flex h-full flex-col rounded-2xl border border-border bg-white p-5 shadow-[var(--shadow-soft)] sm:p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand">{path.label}</p>
              <h3 className="mt-3 max-w-[24ch] text-[21px] font-bold leading-[1.28] tracking-[-0.02em] text-text-primary md:text-[24px]">{path.title}</h3>
              <p className="mt-3 max-w-xl text-[14px] leading-[1.65] text-text-secondary md:text-[15px]">{path.description}</p>

              <ServiceFlow steps={path.steps} />

              <ul className="mt-6 grid gap-3 border-t border-border pt-5 text-[14px] leading-[1.55] text-text-secondary sm:grid-cols-2 sm:gap-x-5">
                {path.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <ZaloCtaButton className="mt-7 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-brand px-5 text-[15px] font-semibold text-white transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-[var(--shadow-brand-hover)] active:translate-y-0 sm:w-fit">
                {path.ctaLabel}
                <span aria-hidden="true" className="ml-2">→</span>
              </ZaloCtaButton>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
