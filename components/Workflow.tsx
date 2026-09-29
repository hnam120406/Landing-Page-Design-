import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Workflow() {
  return (
    <section id="workflow" className="section-shell bg-white">
      <div className="page-container">
        <Reveal className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand">QUY TRÌNH</p>
          <h2 className="mt-2 max-w-[18ch] text-[25px] font-bold leading-[1.15] tracking-[-0.03em] text-text-primary md:text-[28px] lg:text-[30px]">Từ ý tưởng đến website.</h2>
        </Reveal>

        <ol className="relative mt-8 grid gap-7 border-l border-border pl-6 md:grid-cols-2 md:gap-5 md:border-l-0 md:pl-0 lg:grid-cols-4">
          <div aria-hidden="true" className="absolute left-[12%] right-[12%] top-5 hidden h-px bg-border lg:block" />
          {site.workflow.map((step, index) => (
            <Reveal as="li" key={step.number} delay={index * 60} className="relative">
              <span className="relative z-10 flex size-10 items-center justify-center rounded-full border border-brand bg-white text-[12px] font-bold text-brand md:mx-auto">{step.number}</span>
              <div className="mt-3 md:text-center">
                <h3 className="text-[17px] font-bold leading-[1.3] text-text-primary">{step.title}</h3>
                <p className="mt-1.5 text-[14px] leading-[1.6] text-text-secondary">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
