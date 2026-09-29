import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Audience() {
  return (
    <section id="audience" className="section-shell bg-white">
      <div className="page-container">
        <Reveal className="max-w-3xl">
          <h2 className="max-w-[18ch] text-[28px] font-bold leading-[1.18] tracking-[-0.03em] text-text-primary md:text-[30px] lg:text-[34px] min-[1440px]:text-[36px]">Phù hợp với ai?</h2>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-5">
          {site.audiences.map((audience, index) => (
            <Reveal key={audience.id} delay={index * 70} className="h-full">
              <article className="h-full rounded-2xl border border-border bg-background-soft p-5 sm:p-6">
              <span className="text-sm font-bold text-brand">0{index + 1}</span>
              <h3 className="mt-5 text-[17px] font-bold text-text-primary lg:text-[18px] min-[1440px]:text-[19px]">{audience.title}</h3>
              <p className="mt-3 text-[14px] leading-[1.65] text-text-secondary md:text-[15px] min-[1440px]:text-base">{audience.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
