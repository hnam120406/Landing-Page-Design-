import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Services() {
  const [primaryService, ...supportingServices] = site.services;

  return (
    <section id="services" className="section-shell bg-background-soft">
      <div className="page-container">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-12">
          <Reveal className="max-w-md">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand">DỊCH VỤ</p>
            <h2 className="mt-2 max-w-[16ch] text-[25px] font-bold leading-[1.15] tracking-[-0.03em] text-text-primary md:text-[28px] lg:text-[30px]">Chúng tôi có thể làm gì cho bạn?</h2>
            <p className="mt-3 max-w-sm text-[14px] leading-[1.6] text-text-secondary md:text-[15px]">Từ giao diện ban đầu đến website có thể sử dụng.</p>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
            <Reveal delay={60} className="border-y border-l-2 border-brand bg-white px-5 py-6 sm:px-7 sm:py-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand">{primaryService.label}</p>
              <h3 className="mt-3 text-[21px] font-bold leading-[1.25] tracking-[-0.02em] text-text-primary md:text-[23px]">{primaryService.title}</h3>
              <p className="mt-3 max-w-sm text-[14px] leading-[1.65] text-text-secondary md:text-[15px]">{primaryService.description}</p>
            </Reveal>

            <div className="divide-y divide-border border-y border-border">
              {supportingServices.map((service, index) => (
                <Reveal key={service.id} delay={(index + 1) * 60} className="py-5 first:pt-4 last:pb-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand">{service.label}</p>
                  <h3 className="mt-2 text-[17px] font-bold leading-[1.3] text-text-primary">{service.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-[1.6] text-text-secondary">{service.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
