import { site } from "@/data/site";

export default function FAQ() {
  return (
    <section id="faq" className="section-shell bg-background-soft lg:py-24 min-[1536px]:py-28">
      <div className="page-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-brand lg:text-[14px] min-[1440px]:text-[15px]">FAQ</p>
          <h2 className="mt-4 max-w-[15ch] text-[30px] font-bold leading-[1.18] tracking-[-0.03em] text-text-primary md:text-[38px] lg:text-[46px] min-[1440px]:text-[50px]">Những câu hỏi thường được trao đổi trước khi bắt đầu.</h2>
          <p className="mt-5 max-w-[34rem] text-base leading-[1.7] text-text-secondary md:text-[17px] lg:text-lg min-[1440px]:text-[19px]">Nếu câu hỏi của bạn chưa có ở đây, hãy gửi yêu cầu theo cách đơn giản nhất. Nhóm sẽ cùng bạn làm rõ từng phần.</p>
        </div>

        <div className="space-y-3">
          {site.faq.map((item) => (
            <details key={item.question} className="group rounded-2xl border border-border bg-white p-5 shadow-[var(--shadow-soft)] open:border-brand-border sm:p-6">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-5 text-base font-bold text-text-primary marker:hidden md:text-[18px] [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span aria-hidden="true" className="text-2xl font-normal leading-none text-brand transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-[46rem] pt-4 text-base leading-[1.7] text-text-secondary md:text-[17px]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
