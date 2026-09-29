import ZaloCtaButton from "@/components/ZaloCtaButton";

export default function ContactStrip() {
  return (
    <section className="border-y border-brand-border bg-brand-soft py-8 sm:py-9">
      <div className="page-container flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand">BẮT ĐẦU TỪ Ý TƯỞNG</p>
          <h2 className="mt-2 text-[22px] font-bold leading-[1.2] tracking-[-0.03em] text-text-primary md:text-[25px]">Bạn đang có một ý tưởng?</h2>
          <p className="mt-2 text-[14px] leading-[1.6] text-text-secondary">Gửi nhu cầu cho Flash Honner để bắt đầu trao đổi.</p>
        </div>
        <ZaloCtaButton className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-xl bg-brand px-5 text-[14px] font-semibold text-white shadow-[var(--shadow-soft)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-[var(--shadow-brand-hover)] focus-visible:bg-brand-hover">
          Trao đổi qua Zalo <span aria-hidden="true" className="ml-2">→</span>
        </ZaloCtaButton>
      </div>
    </section>
  );
}
