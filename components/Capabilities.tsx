import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Capabilities() {
  return (
    <section aria-labelledby="pain-points-heading" className="section-shell bg-white">
      <div className="page-container grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <Reveal className="max-w-sm">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand">ĐIỂM ĐAU THƯỜNG GẶP</p>
          <h2 id="pain-points-heading" className="mt-2 text-[28px] font-bold leading-[1.18] tracking-[-0.03em] text-text-primary md:text-[34px] lg:text-[40px]">Nghe quen không?</h2>
          <p className="mt-4 max-w-sm text-[15px] leading-[1.65] text-text-secondary">Nhiều nhóm đã có ý tưởng hoặc code, nhưng vẫn thiếu một phần để sản phẩm trông rõ ràng và hoàn thiện hơn.</p>
        </Reveal>

        <div>
          <div className="divide-y divide-border border-y border-border">
            {site.painPoints.map((point, index) => (
              <Reveal key={point.id} delay={index * 60} className="flex items-start gap-4 py-5 sm:py-6">
                <span aria-hidden="true" className="mt-2 h-1.5 w-8 shrink-0 rounded-full bg-brand" />
                <p className="max-w-xl text-[16px] font-medium leading-[1.55] text-text-primary">{point.text}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 max-w-2xl text-[14px] leading-[1.65] text-text-secondary md:text-[15px]">Nếu đúng một trong những trường hợp trên, FLASH HONNER có thể hỗ trợ phần còn thiếu.</p>
        </div>
      </div>
    </section>
  );
}
