import ZaloCtaButton from "@/components/ZaloCtaButton";

export default function ContactStrip() {
  return (
    <section id="final-cta" aria-labelledby="final-cta-heading" className="border-y border-brand-border bg-brand-soft py-8 sm:py-9">
      <div className="page-container flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand">BẮT ĐẦU TỪ ĐÂY</p>
          <h2 id="final-cta-heading" className="mt-2 text-[24px] font-bold leading-[1.2] tracking-[-0.03em] text-text-primary md:text-[28px]">Có ý tưởng hoặc Figma sẵn?</h2>
          <p className="mt-2 max-w-2xl text-[14px] leading-[1.6] text-text-secondary md:text-[15px]">Gửi tụi mình xem trước. FLASH HONNER sẽ trao đổi phạm vi, thời gian và chi phí trước khi bắt đầu.</p>
        </div>
        <ZaloCtaButton className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-xl bg-brand px-5 text-[14px] font-semibold text-white shadow-[var(--shadow-soft)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-[var(--shadow-brand-hover)] focus-visible:bg-brand-hover">
          Nhắn Zalo <span aria-hidden="true" className="ml-2">→</span>
        </ZaloCtaButton>
      </div>
    </section>
  );
}
