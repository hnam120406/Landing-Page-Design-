import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="section-shell soft-section bg-transparent">
      <div className="page-container grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <Reveal className="max-w-sm">
          <p className="eyebrow text-brand">HỎI ĐÁP</p>
          <h2 id="faq-heading" className="mt-3 max-w-[12ch] text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-text-primary">Câu hỏi thường gặp</h2>
          <p className="mt-5 max-w-sm text-[16px] leading-[1.65] text-text-secondary">Một vài điều bạn có thể muốn biết trước khi gửi yêu cầu.</p>
        </Reveal>

        <div className="divide-y divide-[rgba(41,37,36,0.1)] border-y border-[rgba(41,37,36,0.1)]">
          {site.faq.map((item, index) => (
            <Reveal key={item.id} delay={index * 45}>
              <details className="group py-1">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 py-4 text-[15px] font-semibold leading-[1.45] text-text-primary marker:hidden [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <span aria-hidden="true" className="shrink-0 text-xl font-normal text-brand transition-transform duration-300 group-open:rotate-45">+</span>
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
