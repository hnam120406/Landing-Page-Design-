import Image from "next/image";
import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

type ProjectCardProps = {
  project: (typeof site.projects)[number];
  featured?: boolean;
};

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article className={featured ? "h-full" : ""}>
      <div className={`relative overflow-hidden rounded-[18px] bg-background-soft ${featured ? "aspect-[16/10]" : "aspect-[16/10]"}`}>
        <Image src={project.image} alt={project.alt} fill sizes={featured ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 34vw, 100vw"} className="object-cover transition duration-300 ease-out hover:scale-[1.015]" />
      </div>
      <div className="pt-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">{project.category}</p>
        <h3 className={`${featured ? "text-[20px] md:text-[22px]" : "text-[17px]"} mt-2 font-bold leading-[1.3] tracking-[-0.02em] text-text-primary`}>{project.title}</h3>
        <p className="mt-1.5 max-w-md text-[14px] leading-[1.6] text-text-secondary">{project.description}</p>
      </div>
    </article>
  );
}

export default function Projects() {
  const [featuredProject, ...supportingProjects] = site.projects;

  return (
    <section id="projects" className="section-shell bg-white">
      <div className="page-container">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand">SELECTED WORK</p>
          <h2 className="mt-2 max-w-[25ch] text-[25px] font-bold leading-[1.15] tracking-[-0.03em] text-text-primary md:text-[28px] lg:text-[30px]">Một vài giao diện để bạn nhìn thấy cách chúng tôi thiết kế.</h2>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.45fr_0.9fr] lg:gap-10">
          <Reveal delay={60} className="h-full">
            <ProjectCard project={featuredProject} featured />
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1 lg:gap-9">
            {supportingProjects.map((project, index) => (
              <Reveal key={project.id} delay={(index + 1) * 60}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
