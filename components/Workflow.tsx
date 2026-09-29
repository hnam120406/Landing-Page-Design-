import { site } from "@/data/site";

export default function Workflow() {
  return (
    <section id="process" className="section-shell bg-background-soft lg:py-24 min-[1536px]:py-28">
      <div className="page-container">
        <div className="max-w-3xl">
          <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-brand lg:text-[14px] min-[1440px]:text-[15px]">Quy trình</p>
          <h2 className="mt-4 max-w-[18ch] text-[30px] font-bold leading-[1.18] tracking-[-0.03em] text-text-primary md:text-[38px] lg:text-[46px] min-[1440px]:text-[50px]">Làm rõ trước, thiết kế sau, rồi mới bắt đầu code.</h2>
          <p className="mt-5 max-w-[40rem] text-base leading-[1.7] text-text-secondary md:text-[17px] lg:text-lg min-[1440px]:text-[19px]">Một dự án nhỏ vẫn cần được thống nhất từ đầu để giảm việc làm lại, dễ kiểm tra tiến độ và dễ bàn giao.</p>
        </div>

        <ol className="relative mt-12 grid gap-4 md:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
          {site.workflow.map((step) => (
            <li key={step.number} className="relative rounded-2xl border border-border bg-white p-5 shadow-[var(--shadow-soft)] sm:p-6">
              <span className="text-3xl font-bold tracking-[-0.04em] text-brand/70">{step.number}</span>
              <h3 className="mt-5 text-lg font-bold text-text-primary lg:text-xl min-[1440px]:text-[22px]">{step.title}</h3>
              <p className="mt-3 text-base leading-[1.7] text-text-secondary md:text-[17px] min-[1440px]:text-[18px]">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
