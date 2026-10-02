import Reveal from "@/components/Reveal";

export default function ContactStrip() {
  return (
    <section id="final-cta" aria-labelledby="final-cta-heading" className="section-shell relative overflow-hidden bg-[#EFEDF4]">
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-1/2 size-72 -translate-y-1/2 rounded-full bg-[#FFE4E1] blur-[100px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-1/4 size-80 rounded-full bg-[#E8EFE8] blur-[110px]" />
      <div className="page-container relative">
        <Reveal className="mx-auto max-w-[48rem] text-center">
          <p className="eyebrow text-brand">BẮT ĐẦU TỪ ĐÂY</p>
          <h2 id="final-cta-heading" className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-text-primary">Có ý tưởng hoặc Figma sẵn?</h2>
          <p className="mx-auto mt-5 max-w-[38rem] text-[16px] leading-[1.65] text-text-secondary">Gửi ý tưởng, Figma hoặc link dự án đang làm dở. Nút Zalo luôn ở góc màn hình để bạn liên hệ khi cần.</p>
          <p aria-hidden="true" className="handwritten mt-7 text-[1.7rem] text-[#b96f68]">mình bắt đầu từ phần còn thiếu nhé</p>
        </Reveal>
      </div>
    </section>
  );
}
