import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Workflow() {
  return (
    <section id="workflow" aria-labelledby="workflow-heading" className="section-shell soft-section bg-[#F4F1EB]/65">
      <div className="page-container">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-brand">QUY TRÌNH</p>
          <h2 id="workflow-heading" className="mt-3 max-w-[14ch] text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-text-primary">Làm việc như thế nào?</h2>
        </Reveal>

        <div className="mt-14 relative">
          <div aria-hidden="true" className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-[rgba(41,37,36,0.14)] lg:block" />
          <ol className="relative grid gap-9 border-l border-[rgba(41,37,36,0.14)] pl-6 md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:border-l-0 md:pl-0 lg:grid-cols-5 lg:gap-5">
            {site.workflow.map((step, index) => (
              <Reveal as="li" key={step.number} delay={index * 65} className="relative">
                <span className="relative z-10 flex size-14 items-center justify-center rounded-full border border-[#FFB7B2] bg-[#FDFCF8] text-[13px] font-semibold text-brand md:mx-auto">{step.number}</span>
                <div className="mt-4 md:text-center">
                  <h3 className="text-[1.1rem] font-semibold leading-[1.3] tracking-[-0.02em] text-text-primary">{step.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-text-secondary">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
