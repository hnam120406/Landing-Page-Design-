import { site } from "@/data/site";

export default function Audience() {
  return (
    <section id="audience" className="section-shell bg-white lg:py-24 min-[1536px]:py-28">
      <div className="page-container">
        <div className="max-w-3xl">
          <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-brand lg:text-[14px] min-[1440px]:text-[15px]">Phù hợp với ai?</p>
          <h2 className="mt-4 max-w-[18ch] text-[30px] font-bold leading-[1.18] tracking-[-0.03em] text-text-primary md:text-[38px] lg:text-[46px] min-[1440px]:text-[50px]">Một website tốt bắt đầu từ đúng nhu cầu.</h2>
          <p className="mt-5 max-w-[40rem] text-base leading-[1.7] text-text-secondary md:text-[17px] lg:text-lg min-[1440px]:text-[19px]">Nhóm làm việc trực tiếp với người đang có một mục tiêu cụ thể, dù điểm bắt đầu là đề bài, nội dung, Figma hay chỉ là một ý tưởng còn chưa rõ cấu trúc.</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-5">
          {site.audiences.map((audience, index) => (
            <article key={audience.id} className="rounded-2xl border border-border bg-background-soft p-5 sm:p-6">
              <span className="text-sm font-bold text-brand">0{index + 1}</span>
              <h3 className="mt-5 text-xl font-bold text-text-primary min-[1440px]:text-[23px]">{audience.title}</h3>
              <p className="mt-3 text-base leading-[1.7] text-text-secondary md:text-[17px] min-[1440px]:text-[18px]">{audience.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
