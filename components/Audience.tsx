import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

const notes = ["nhìn trước", "mọi màn hình", "giao được", "dễ tiếp tục"];

export default function Audience() {
  return (
    <section aria-labelledby="deliverables-heading" className="section-shell soft-section bg-transparent">
      <div className="page-container">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-brand">PHẠM VI BÀN GIAO</p>
          <h2 id="deliverables-heading" className="mt-3 max-w-[14ch] text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-text-primary">Bạn nhận được gì?</h2>
        </Reveal>

        <div className="mt-12 grid gap-3 border-y border-[rgba(41,37,36,0.1)] py-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {site.deliverables.map((deliverable, index) => (
            <Reveal key={deliverable.id} delay={index * 60} className="border-b border-[rgba(41,37,36,0.1)] px-1 py-5 last:border-b-0 sm:px-5 sm:py-6 lg:border-b-0 lg:border-r lg:py-3 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
              <article>
                <span className="eyebrow text-brand">{deliverable.label}</span>
                <h3 className="mt-4 text-[1.15rem] font-semibold leading-[1.25] tracking-[-0.025em] text-text-primary">{deliverable.title}</h3>
                <p className="mt-2 max-w-[18rem] text-[14px] leading-[1.6] text-text-secondary">{deliverable.description}</p>
                <p className="handwritten mt-4 text-[1.35rem] text-text-muted">{notes[index]}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
