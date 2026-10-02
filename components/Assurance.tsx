import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Assurance() {
  return (
    <section aria-labelledby="assurance-heading" className="section-shell soft-section bg-transparent">
      <div className="page-container">
        <div className="rounded-[2.5rem] bg-[#E8EFE8] p-6 sm:p-9 lg:p-12">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-brand">RÕ RÀNG NGAY TỪ ĐẦU</p>
            <h2 id="assurance-heading" className="mt-3 max-w-[14ch] text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-text-primary">Trước khi bắt đầu</h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-[rgba(41,37,36,0.12)]">
            {site.assurancePoints.map((point, index) => (
              <Reveal key={point.label} delay={index * 60} className="lg:px-6 lg:first:pl-0 lg:last:pr-0">
                <h3 className="eyebrow text-brand">{point.label}</h3>
                <p className="mt-3 max-w-sm text-[14px] leading-[1.65] text-text-secondary md:text-[15px]">{point.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
