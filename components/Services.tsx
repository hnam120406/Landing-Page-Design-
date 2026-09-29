import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

const serviceNumbers = ["01", "02", "03", "04"];

export default function Services() {
  return (
    <section id="services" className="section-shell bg-background-soft">
      <div className="page-container">
        <Reveal className="max-w-3xl">
          <h2 className="max-w-[18ch] text-[24px] font-bold leading-[1.2] tracking-[-0.03em] text-text-primary md:text-[27px] lg:text-[30px] min-[1440px]:text-[32px]">Dịch vụ chính</h2>
        </Reveal>

        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:mt-8 lg:gap-4 xl:grid-cols-4 xl:gap-5">
          {site.services.map((service, index) => (
            <Reveal key={service.id} delay={index * 60}>
              <article className="rounded-2xl border border-border bg-white p-4 shadow-[var(--shadow-soft)] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-brand-border hover:shadow-[var(--shadow-card-hover)] sm:p-5">
              <div className="flex items-center gap-4">
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand-soft text-[12px] font-bold text-brand" aria-hidden="true">{serviceNumbers[index]}</span>
              </div>
              <h3 className="mt-4 text-[16px] font-bold leading-[1.3] text-text-primary lg:text-[17px]">{service.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-text-secondary md:text-[15px]">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
