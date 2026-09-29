import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function ContactCTA() {
  return (
    <section id="contact" className="section-shell bg-white">
      <div className="page-container">
        <Reveal>
        <div className="relative overflow-hidden rounded-[28px] bg-dark px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-28 size-80 rounded-full bg-brand/20 blur-3xl" />
          <div className="relative max-w-3xl">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-brand lg:text-[13px]">Bắt đầu từ một cuộc trao đổi</p>
            <h2 className="mt-4 max-w-[18ch] text-[30px] font-bold leading-[1.15] tracking-[-0.03em] md:text-[38px] lg:text-[42px]">Bạn có ý tưởng nhưng chưa biết bắt đầu từ đâu?</h2>
            <p className="mt-5 max-w-[44rem] text-[15px] leading-[1.7] text-white/70 md:text-base lg:text-[17px]">Hãy cho Flash Honner biết bạn muốn làm website gì, website dành cho ai, những chức năng đang nghĩ tới và khi nào bạn cần. Nhóm sẽ cùng bạn tách yêu cầu thành từng phần dễ hiểu.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.zaloUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-brand px-5 text-[15px] font-semibold text-white transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-brand-hover focus-visible:bg-brand-hover lg:min-h-[52px] lg:text-base">
                Trao đổi qua Zalo <span className="ml-2" aria-hidden="true">→</span>
              </a>
              <a href="#services" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 px-5 text-[15px] font-semibold text-white transition duration-200 ease-out hover:-translate-y-0.5 hover:border-brand-border hover:bg-white/10 focus-visible:bg-white/10 lg:min-h-[52px] lg:text-base">Xem lại dịch vụ</a>
            </div>
            <p className="mt-4 text-sm text-white/55">Zalo: 037 905 2767</p>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
