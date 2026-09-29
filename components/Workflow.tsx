import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Workflow() {
  return (
    <section id="workflow" className="section-shell bg-background-soft">
      <div className="page-container">
        <Reveal className="max-w-3xl">
          <h2 className="max-w-[18ch] text-[24px] font-bold leading-[1.2] tracking-[-0.03em] text-text-primary md:text-[27px] lg:text-[30px] min-[1440px]:text-[32px]">Quy trình</h2>
        </Reveal>

        <ol className="relative mt-6 grid gap-3 md:grid-cols-2 lg:mt-8 lg:grid-cols-4 lg:gap-4 xl:gap-5">
          {site.workflow.map((step, index) => (
            <Reveal as="li" key={step.number} delay={index * 60} className="relative rounded-2xl border border-border bg-white p-4 shadow-[var(--shadow-soft)] sm:p-5">
              <span className="text-xl font-bold tracking-[-0.04em] text-brand/70">{step.number}</span>
              <h3 className="mt-4 text-[16px] font-bold leading-[1.3] text-text-primary lg:text-[17px]">{step.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-text-secondary md:text-[15px]">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
