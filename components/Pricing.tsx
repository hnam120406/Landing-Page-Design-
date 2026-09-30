import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="section-shell bg-background-soft">
      <div className="page-container">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand">BẢNG GIÁ</p>
          <h2 id="pricing-heading" className="mt-2 text-[28px] font-bold leading-[1.18] tracking-[-0.03em] text-text-primary md:text-[34px] lg:text-[40px]">Giá tham khảo</h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.65] text-text-secondary md:text-[16px]">
            Giá cuối cùng phụ thuộc số màn hình, độ phức tạp và thời hạn. Tụi mình báo giá cụ thể sau khi xem yêu cầu, và không bắt đầu khi bạn chưa đồng ý.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {site.pricingPlans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 60} className="flex h-full flex-col rounded-2xl border border-border bg-white p-5 shadow-[var(--shadow-soft)] sm:p-6">
              <h3 className="text-[18px] font-bold leading-[1.35] text-text-primary">{plan.name}</h3>
              <dl className="mt-5 grid gap-4 text-[14px] leading-[1.6]">
                <div>
                  <dt className="font-semibold text-text-primary">Bao gồm</dt>
                  <dd className="mt-1 text-text-secondary">{plan.includes}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-text-primary">Thời gian dự kiến</dt>
                  <dd className="mt-1 text-text-secondary">{plan.timeline}</dd>
                </div>
              </dl>
              <p className="mt-auto border-t border-border pt-4 text-[14px] font-semibold text-brand">{plan.price}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
