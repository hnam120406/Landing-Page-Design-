import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Requirements() {
  return (
    <section id="requirements" className="section-shell bg-white">
      <div className="page-container grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-brand lg:text-[12px]">Khách hàng cần chuẩn bị gì?</p>
            <h2 className="mt-4 max-w-[18ch] text-[28px] font-bold leading-[1.18] tracking-[-0.03em] text-text-primary md:text-[30px] lg:text-[34px] min-[1440px]:text-[36px]">Chỉ cần cho nhóm biết những điều quan trọng nhất.</h2>
            <p className="mt-5 max-w-[42rem] text-[14px] leading-[1.65] text-text-secondary md:text-[15px] lg:text-[15px] min-[1440px]:text-base">Bạn không cần chuẩn bị một tài liệu kỹ thuật dài. Một mô tả đơn giản về mục tiêu cũng đủ để bắt đầu cuộc trao đổi.</p>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {site.preparation.map((item, index) => (
              <Reveal key={item.title} delay={index * 60} className="h-full">
                <article className="h-full rounded-2xl border border-border bg-background-soft p-4 sm:p-5">
                <span className="text-sm font-bold text-brand">0{index + 1}</span>
                <h3 className="mt-3 text-[17px] font-bold text-text-primary md:text-[18px]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-text-muted md:text-[15px]">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120} className="h-full">
        <div className="h-full rounded-[24px] border border-border bg-background-soft p-5 sm:p-7 lg:p-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-brand lg:text-[12px]">Phạm vi dự án</p>
          <h3 className="mt-4 text-[18px] font-bold leading-tight text-text-primary md:text-[19px]">Cùng xác nhận trước khi bắt đầu</h3>
          <p className="mt-4 text-[14px] leading-[1.65] text-text-secondary md:text-[15px]">Trước khi nhận và phát triển dự án, hai bên nên hiểu giống nhau về những phần dưới đây.</p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {site.scope.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-white px-4 py-3 text-sm font-semibold leading-6 text-text-secondary md:text-[15px]">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 rounded-2xl bg-white p-5">
              <p className="text-[14px] font-bold text-text-primary md:text-[15px]">Chi phí phụ thuộc vào những gì bạn thực sự cần.</p>
            <p className="mt-2 text-sm leading-6 text-text-muted">Nhóm sẽ xem số trang, chức năng, Figma, phần giao diện và xử lý dữ liệu, cơ sở dữ liệu, trang quản trị, khả năng hiển thị trên các thiết bị, tài liệu và thời gian trước khi đề xuất phạm vi phù hợp. Không dùng giá cố định khi chưa hiểu yêu cầu.</p>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
