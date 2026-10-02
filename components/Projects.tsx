import Image from "next/image";
import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

type ProjectCardProps = {
  project: (typeof site.projects)[number];
  featured?: boolean;
};

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article className={featured ? "h-full" : "h-full"}>
      <div className={`group relative h-full overflow-hidden rounded-[2rem] ${featured ? "bg-[#E8EFE8] p-3 sm:p-5" : "bg-[#EFEDF4] p-3 sm:p-4"}`}>
        <div className={`relative overflow-hidden rounded-[1.5rem] ${featured ? "aspect-[16/10]" : "aspect-[16/10]"}`}>
          <Image src={project.image} alt={project.alt} fill sizes={featured ? "(min-width: 1024px) 62vw, 100vw" : "(min-width: 1024px) 30vw, 100vw"} className="object-cover transition duration-700 ease-out group-hover:scale-[1.018] group-hover:-translate-y-0.5" />
        </div>
        <div className="px-1 pb-2 pt-5 sm:px-2 sm:pb-2">
          <p className="eyebrow text-brand">{project.category}</p>
          <h3 className={`${featured ? "text-[clamp(1.35rem,2.5vw,2rem)]" : "text-[1.15rem]"} mt-3 font-semibold leading-[1.2] tracking-[-0.03em] text-text-primary`}>{project.title}</h3>
          <p className="mt-2 max-w-md text-[14px] leading-[1.6] text-text-secondary">{project.description}</p>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [featuredProject, ...supportingProjects] = site.projects;

  return (
    <section id="projects" className="section-shell soft-section bg-[#F4F1EB]/65">
      <div className="page-container">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-brand">SELECTED WORK</p>
          <h2 className="mt-3 max-w-[16ch] text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-text-primary">Nhìn giao diện trước khi quyết định.</h2>
          <p className="mt-5 max-w-2xl text-[16px] leading-[1.65] text-text-secondary">Các mục dưới đây là bản thiết kế mẫu để bạn hình dung cách FLASH HONNER thiết kế và triển khai sản phẩm.</p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.45fr_0.8fr] lg:gap-7">
          <Reveal delay={60} className="h-full">
            <ProjectCard project={featuredProject} featured />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {supportingProjects.map((project, index) => (
              <Reveal key={project.id} delay={(index + 1) * 75}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
