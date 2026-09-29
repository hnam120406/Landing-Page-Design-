import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Audience() {
  return (
    <section id="audience" className="section-shell bg-[#fffaf5]">
      <div className="page-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="max-w-sm">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand">ĐỐI TƯỢNG</p>
          <h2 className="mt-2 max-w-[16ch] text-[25px] font-bold leading-[1.15] tracking-[-0.03em] text-text-primary md:text-[28px] lg:text-[30px]">Phù hợp với nhiều nhu cầu khác nhau.</h2>
        </Reveal>

        <div className="grid border-t border-border sm:grid-cols-2 sm:gap-x-8">
          {site.audiences.map((audience, index) => (
            <Reveal key={audience.id} delay={index * 60} className="border-b border-border py-5 sm:py-6">
              <article>
                <span aria-hidden="true" className="mb-4 block size-2 rounded-full bg-brand" />
                <h3 className="text-[17px] font-bold leading-[1.3] text-text-primary">{audience.title}</h3>
                <p className="mt-2 max-w-sm text-[14px] leading-[1.6] text-text-secondary md:text-[15px]">{audience.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
