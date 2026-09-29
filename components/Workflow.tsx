import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Workflow() {
  return (
    <section id="workflow" className="section-shell bg-background-soft">
      <div className="page-container">
        <Reveal className="max-w-3xl">
          <h2 className="max-w-[18ch] text-[28px] font-bold leading-[1.18] tracking-[-0.03em] text-text-primary md:text-[30px] lg:text-[34px] min-[1440px]:text-[36px]">Quy trình</h2>
        </Reveal>

        <ol className="relative mt-8 grid gap-4 md:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5">
          {site.workflow.map((step, index) => (
            <Reveal as="li" key={step.number} delay={index * 70} className="relative h-full rounded-2xl border border-border bg-white p-5 shadow-[var(--shadow-soft)] sm:p-6">
              <span className="text-2xl font-bold tracking-[-0.04em] text-brand/70">{step.number}</span>
              <h3 className="mt-5 text-[17px] font-bold text-text-primary lg:text-[18px] min-[1440px]:text-[19px]">{step.title}</h3>
              <p className="mt-3 text-[14px] leading-[1.65] text-text-secondary md:text-[15px] min-[1440px]:text-base">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
