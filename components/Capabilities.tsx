import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

const labels = ["Sát deadline", "Figma → Web", "UI/UX", "Demo", "Bắt đầu"];
const tones = ["bg-white", "bg-[#E8EFE8]", "bg-[#EFEDF4]", "bg-[#FFE4E1]", "bg-white"];

export default function Capabilities() {
  return (
    <section aria-labelledby="pain-points-heading" className="section-shell soft-section bg-[#F4F1EB]/65">
      <div className="page-container">
        <Reveal className="max-w-xl">
          <p className="eyebrow text-brand">ĐIỂM ĐAU THƯỜNG GẶP</p>
          <h2 id="pain-points-heading" className="mt-3 max-w-[12ch] text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-text-primary">Nghe quen không?</h2>
          <p className="mt-5 max-w-[38rem] text-[16px] leading-[1.65] text-text-secondary">Nhiều nhóm đã có ý tưởng hoặc code, nhưng vẫn thiếu một phần để sản phẩm trông rõ ràng và hoàn thiện hơn.</p>
        </Reveal>

        <div className="scenario-track mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-5">
          {site.painPoints.map((point, index) => (
            <Reveal key={point.id} delay={index * 55} className={`scenario-card editorial-panel flex min-w-[17.5rem] snap-start flex-col justify-between p-6 ${tones[index]}`}>
              <span className="eyebrow text-text-muted">{labels[index]}</span>
              <p className="mt-10 text-[17px] font-medium leading-[1.35] tracking-[-0.015em] text-text-primary">{point.text}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 max-w-2xl text-[14px] leading-[1.65] text-text-muted md:text-[15px]">Nếu đúng một trong những trường hợp trên, FLASH HONNER có thể hỗ trợ phần còn thiếu.</p>
      </div>
    </section>
  );
}
