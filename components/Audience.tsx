import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Audience() {
  return (
    <section aria-labelledby="deliverables-heading" className="section-shell bg-background-soft">
      <div className="page-container">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand">PHẠM VI BÀN GIAO</p>
          <h2 id="deliverables-heading" className="mt-2 text-[28px] font-bold leading-[1.18] tracking-[-0.03em] text-text-primary md:text-[34px] lg:text-[40px]">Bạn nhận được gì?</h2>
        </Reveal>

        <div className="mt-8 grid border-y border-border sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border">
          {site.deliverables.map((deliverable, index) => (
            <Reveal key={deliverable.id} delay={index * 60} className="border-b border-border px-0 py-5 last:border-b-0 sm:px-5 lg:border-b-0 lg:py-2 lg:first:pl-0 lg:last:pr-0">
              <article>
                <span className="text-[12px] font-bold tracking-[0.12em] text-brand">{deliverable.label}</span>
                <h3 className="mt-3 text-[17px] font-bold leading-[1.3] text-text-primary">{deliverable.title}</h3>
                <p className="mt-2 max-w-[18rem] text-[14px] leading-[1.6] text-text-secondary">{deliverable.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
