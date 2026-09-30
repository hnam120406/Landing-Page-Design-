import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function WhyFlashHonner() {
  return (
    <section aria-labelledby="why-flash-honner-heading" className="section-shell bg-white">
      <div className="page-container grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <Reveal className="max-w-sm">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand">VÌ SAO FLASH HONNER?</p>
          <h2 id="why-flash-honner-heading" className="mt-2 text-[28px] font-bold leading-[1.18] tracking-[-0.03em] text-text-primary md:text-[34px] lg:text-[40px]">Vì sao chọn FLASH HONNER?</h2>
        </Reveal>

        <div className="divide-y divide-border border-y border-border">
          {site.trustPoints.map((point, index) => (
            <Reveal key={point.id} delay={index * 60} className="grid gap-2 py-5 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-8 sm:py-6">
              <h3 className="text-[15px] font-bold leading-[1.35] tracking-[0.02em] text-text-primary">{point.title}</h3>
              <p className="max-w-xl text-[14px] leading-[1.65] text-text-secondary md:text-[15px]">{point.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
