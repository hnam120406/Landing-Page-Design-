import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="section-shell soft-section bg-transparent">
      <div className="page-container">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-brand">BẢNG GIÁ</p>
          <h2 id="pricing-heading" className="mt-3 max-w-[14ch] text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-text-primary">Giá tham khảo</h2>
          <p className="mt-5 max-w-2xl text-[16px] leading-[1.65] text-text-secondary">Giá cuối cùng phụ thuộc số màn hình, độ phức tạp và thời hạn. Tụi mình báo giá cụ thể sau khi xem yêu cầu, và không bắt đầu khi bạn chưa đồng ý.</p>
        </Reveal>

        <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {site.pricingPlans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 60} className="editorial-panel flex h-full flex-col bg-white/70 p-5 sm:p-6">
              <h3 className="text-[1.1rem] font-semibold leading-[1.3] tracking-[-0.02em] text-text-primary">{plan.name}</h3>
              <dl className="mt-6 grid gap-4 text-[14px] leading-[1.6]">
                <div>
                  <dt className="font-semibold text-text-primary">Bao gồm</dt>
                  <dd className="mt-1 text-text-secondary">{plan.includes}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-text-primary">Thời gian dự kiến</dt>
                  <dd className="mt-1 text-text-secondary">{plan.timeline}</dd>
                </div>
              </dl>
              <p className="mt-auto border-t border-[rgba(41,37,36,0.1)] pt-4 text-[14px] font-semibold text-brand">{plan.price}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
