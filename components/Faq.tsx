import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="section-shell bg-white">
      <div className="page-container grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <Reveal className="max-w-sm">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand">HỎI ĐÁP</p>
          <h2 id="faq-heading" className="mt-2 text-[28px] font-bold leading-[1.18] tracking-[-0.03em] text-text-primary md:text-[34px] lg:text-[40px]">Câu hỏi thường gặp</h2>
          <p className="mt-4 max-w-sm text-[15px] leading-[1.65] text-text-secondary">Một vài điều bạn có thể muốn biết trước khi gửi yêu cầu.</p>
        </Reveal>

        <div className="divide-y divide-border border-y border-border">
          {site.faq.map((item, index) => (
            <Reveal key={item.id} delay={index * 45}>
              <details className="group py-1">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 py-4 text-[15px] font-semibold leading-[1.45] text-text-primary marker:hidden [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <span aria-hidden="true" className="shrink-0 text-xl font-normal text-brand transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-2xl pb-5 pr-8 text-[14px] leading-[1.7] text-text-secondary">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
