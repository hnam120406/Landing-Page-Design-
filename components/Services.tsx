import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

const serviceNumbers = ["01", "02", "03", "04"];

export default function Services() {
  return (
    <section id="services" className="section-shell bg-background-soft">
      <div className="page-container">
        <Reveal className="max-w-3xl">
          <h2 className="max-w-[18ch] text-[28px] font-bold leading-[1.18] tracking-[-0.03em] text-text-primary md:text-[30px] lg:text-[34px] min-[1440px]:text-[36px]">Dịch vụ chính</h2>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-5">
          {site.services.map((service, index) => (
            <Reveal key={service.id} delay={index * 70} className="h-full">
              <article className="h-full rounded-2xl border border-border bg-white p-5 shadow-[var(--shadow-soft)] transition duration-200 ease-out hover:-translate-y-[3px] hover:border-brand-border hover:shadow-[var(--shadow-card-hover)] sm:p-6">
              <div className="flex items-center gap-4">
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-sm font-bold text-brand" aria-hidden="true">{serviceNumbers[index]}</span>
              </div>
              <h3 className="mt-6 text-[17px] font-bold leading-[1.3] text-text-primary lg:text-[18px] min-[1440px]:text-[19px]">{service.title}</h3>
              <p className="mt-3 text-[14px] leading-[1.65] text-text-secondary md:text-[15px] min-[1440px]:text-base">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
