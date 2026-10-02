import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

const notes = ["code được", "hiểu bối cảnh", "rõ từ đầu", "không vòng vo"];

export default function WhyFlashHonner() {
  return (
    <section aria-labelledby="why-flash-honner-heading" className="section-shell soft-section bg-[#F4F1EB]/65">
      <div className="page-container">
        <Reveal className="max-w-xl">
          <p className="eyebrow text-brand">VÌ SAO FLASH HONNER?</p>
          <h2 id="why-flash-honner-heading" className="mt-3 max-w-[14ch] text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-text-primary">Một studio nhỏ có gu.</h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {site.trustPoints.map((point, index) => (
            <Reveal key={point.id} delay={index * 70} className="paper-note editorial-panel bg-white p-6 sm:p-8">
              <article>
                <h3 className="max-w-[18ch] text-[1.25rem] font-semibold leading-[1.2] tracking-[-0.025em] text-text-primary">{point.title}</h3>
                <p className="mt-4 max-w-xl text-[15px] leading-[1.65] text-text-secondary">{point.description}</p>
                <div className="mt-7 flex items-center gap-3 text-text-muted">
                  <span aria-hidden="true" className="h-px w-10 bg-brand/60" />
                  <span className="handwritten text-[1.35rem]">{notes[index]}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
