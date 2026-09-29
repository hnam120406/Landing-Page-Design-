import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Audience() {
  return (
    <section id="audience" className="section-shell bg-white">
      <div className="page-container">
        <Reveal className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-brand lg:text-[12px]">Phù hợp với ai?</p>
          <h2 className="mt-4 max-w-[18ch] text-[28px] font-bold leading-[1.18] tracking-[-0.03em] text-text-primary md:text-[30px] lg:text-[34px] min-[1440px]:text-[36px]">Một website tốt bắt đầu từ đúng nhu cầu.</h2>
          <p className="mt-5 max-w-[44rem] text-[14px] leading-[1.65] text-text-secondary md:text-[15px] lg:text-[15px] min-[1440px]:text-base">Nhóm làm việc trực tiếp với người đang có một mục tiêu cụ thể, dù điểm bắt đầu là đề bài, nội dung, Figma hay chỉ là một ý tưởng còn chưa rõ cấu trúc.</p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-5">
          {site.audiences.map((audience, index) => (
            <Reveal key={audience.id} delay={index * 70} className="h-full">
              <article className="h-full rounded-2xl border border-border bg-background-soft p-5 sm:p-6">
              <span className="text-sm font-bold text-brand">0{index + 1}</span>
              <h3 className="mt-5 text-[17px] font-bold text-text-primary lg:text-[18px] min-[1440px]:text-[19px]">{audience.title}</h3>
              <p className="mt-3 text-[14px] leading-[1.65] text-text-secondary md:text-[15px] min-[1440px]:text-base">{audience.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
