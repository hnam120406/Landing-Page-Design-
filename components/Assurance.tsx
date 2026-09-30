import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Assurance() {
  return (
    <section aria-labelledby="assurance-heading" className="section-shell bg-background-soft">
      <div className="page-container">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand">RÕ RÀNG NGAY TỪ ĐẦU</p>
          <h2 id="assurance-heading" className="mt-2 text-[28px] font-bold leading-[1.18] tracking-[-0.03em] text-text-primary md:text-[34px] lg:text-[40px]">Trước khi bắt đầu</h2>
        </Reveal>

        <div className="mt-8 grid border-y border-border md:grid-cols-3 md:divide-x md:divide-border">
          {site.assurancePoints.map((point, index) => (
            <Reveal key={point.label} delay={index * 60} className="border-b border-border py-5 last:border-b-0 md:border-b-0 md:px-6 md:py-2 md:first:pl-0 md:last:pr-0">
              <h3 className="text-[12px] font-bold tracking-[0.12em] text-brand">{point.label}</h3>
              <p className="mt-2 max-w-sm text-[14px] leading-[1.65] text-text-secondary md:text-[15px]">{point.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
