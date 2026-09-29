import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Deliverables() {
  return (
    <section className="section-shell bg-background-soft">
      <div className="page-container">
        <Reveal className="max-w-3xl">
          <h2 className="max-w-[18ch] text-[24px] font-bold leading-[1.2] tracking-[-0.03em] text-text-primary md:text-[27px] lg:text-[30px] min-[1440px]:text-[32px]">Bạn nhận được gì?</h2>
        </Reveal>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:mt-8 lg:grid-cols-4 lg:gap-4 xl:gap-5">
          {site.deliverables.map((deliverable, index) => (
            <Reveal key={deliverable.id} delay={index * 60}>
              <article className="rounded-2xl border border-border bg-white p-4 shadow-[var(--shadow-soft)] sm:p-5">
                <span className="text-[12px] font-bold tracking-[0.08em] text-brand">0{index + 1}</span>
                <h3 className="mt-3 text-[16px] font-bold leading-[1.3] text-text-primary lg:text-[17px]">{deliverable.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-text-secondary">{deliverable.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
