import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function FAQ() {
  return (
    <section id="faq" className="section-shell bg-background-soft">
      <div className="page-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-brand lg:text-[13px]">FAQ</p>
          <h2 className="mt-4 max-w-[15ch] text-[30px] font-bold leading-[1.18] tracking-[-0.03em] text-text-primary md:text-[34px] lg:text-[40px] min-[1440px]:text-[42px]">Những câu hỏi thường được trao đổi trước khi bắt đầu.</h2>
          <p className="mt-5 max-w-[38rem] text-[15px] leading-[1.7] text-text-secondary md:text-base lg:text-[17px] min-[1440px]:text-[17px]">Nếu câu hỏi của bạn chưa có ở đây, hãy gửi yêu cầu theo cách đơn giản nhất. Nhóm sẽ cùng bạn làm rõ từng phần.</p>
        </Reveal>

        <div className="space-y-3">
          {site.faq.map((item, index) => (
            <Reveal key={item.question} delay={index * 60}>
              <details className="group rounded-2xl border border-border bg-white p-5 shadow-[var(--shadow-soft)] open:border-brand-border sm:p-6">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-5 text-base font-bold text-text-primary marker:hidden md:text-[17px] [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span aria-hidden="true" className="text-2xl font-normal leading-none text-brand transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-[46rem] pt-4 text-[15px] leading-[1.7] text-text-secondary md:text-base">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
