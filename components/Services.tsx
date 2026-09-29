import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

const serviceNumbers = ["01", "02", "03", "04", "05"];

export default function Services() {
  return (
    <section id="services" className="section-shell bg-background-soft">
      <div className="page-container">
        <Reveal className="max-w-3xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-brand lg:text-[13px]">Dịch vụ</p>
          <h2 className="mt-4 max-w-[18ch] text-[30px] font-bold leading-[1.18] tracking-[-0.03em] text-text-primary md:text-[34px] lg:text-[40px] min-[1440px]:text-[42px]">Từ giao diện Figma đến website có thể sử dụng.</h2>
          <p className="mt-5 max-w-[44rem] text-[15px] leading-[1.7] text-text-secondary md:text-base lg:text-[17px] min-[1440px]:text-[17px]">
            Không phải khách hàng nào cũng bắt đầu với một bản yêu cầu đầy đủ. Có người chỉ có ý tưởng, có người đã có nội dung, có người có sẵn Figma nhưng chưa biết triển khai giao diện. Flash Honner có thể tham gia từ giai đoạn phù hợp.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5">
          {site.services.map((service, index) => (
            <Reveal key={service.id} delay={index * 70} className="h-full">
              <article className="h-full rounded-2xl border border-border bg-white p-5 shadow-[var(--shadow-soft)] transition duration-200 ease-out hover:-translate-y-[3px] hover:border-brand-border hover:shadow-[var(--shadow-card-hover)] sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-sm font-bold text-brand" aria-hidden="true">{serviceNumbers[index]}</span>
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-text-muted">Flash Honner</span>
              </div>
              <h3 className="mt-6 text-[18px] font-bold leading-[1.3] text-text-primary lg:text-[20px] min-[1440px]:text-[21px]">{service.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-text-secondary md:text-base min-[1440px]:text-[17px]">{service.description}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2 text-sm leading-6 text-text-muted md:text-[15px]">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
