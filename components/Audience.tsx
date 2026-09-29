import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Audience() {
  return (
    <section id="audience" className="section-shell bg-white">
      <div className="page-container">
        <Reveal className="max-w-3xl">
          <h2 className="max-w-[18ch] text-[24px] font-bold leading-[1.2] tracking-[-0.03em] text-text-primary md:text-[27px] lg:text-[30px] min-[1440px]:text-[32px]">Phù hợp với ai?</h2>
        </Reveal>

        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:mt-8 lg:gap-4 xl:grid-cols-4 xl:gap-5">
          {site.audiences.map((audience, index) => (
            <Reveal key={audience.id} delay={index * 60}>
              <article className="rounded-2xl border border-border bg-background-soft p-4 sm:p-5">
              <span className="text-[12px] font-bold text-brand">0{index + 1}</span>
              <h3 className="mt-4 text-[16px] font-bold leading-[1.3] text-text-primary lg:text-[17px]">{audience.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-text-secondary md:text-[15px]">{audience.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
