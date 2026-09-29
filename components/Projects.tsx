import Image from "next/image";
import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section-shell bg-white">
      <div className="page-container">
        <Reveal className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-brand">DỰ ÁN / GIAO DIỆN</p>
          <h2 className="mt-2 max-w-[18ch] text-[24px] font-bold leading-[1.2] tracking-[-0.03em] text-text-primary md:text-[27px] lg:text-[30px] min-[1440px]:text-[32px]">Một số giao diện đã thiết kế</h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-[1.6] text-text-secondary md:text-[15px]">Một vài mẫu giao diện Web và hệ thống thể hiện cách Flash Honner thiết kế sản phẩm.</p>
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-5">
          {site.projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 60}>
              <article className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-soft)] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-brand-border hover:shadow-[var(--shadow-card-hover)]">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-background-soft">
                  <Image src={project.image} alt={project.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-300 ease-out hover:scale-[1.015]" />
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-brand">{project.category}</p>
                  <h3 className="mt-2 text-[17px] font-bold leading-[1.3] text-text-primary">{project.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-text-secondary">{project.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
