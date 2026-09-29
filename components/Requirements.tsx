import { site } from "@/data/site";

export default function Requirements() {
  return (
    <section id="requirements" className="section-shell bg-white lg:py-24 min-[1536px]:py-28">
      <div className="page-container grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-brand lg:text-[14px] min-[1440px]:text-[15px]">Khách hàng cần chuẩn bị gì?</p>
          <h2 className="mt-4 max-w-[18ch] text-[30px] font-bold leading-[1.18] tracking-[-0.03em] text-text-primary md:text-[38px] lg:text-[46px] min-[1440px]:text-[50px]">Chỉ cần cho nhóm biết những điều quan trọng nhất.</h2>
          <p className="mt-5 max-w-[38rem] text-base leading-[1.7] text-text-secondary md:text-[17px] lg:text-lg min-[1440px]:text-[19px]">Bạn không cần chuẩn bị một tài liệu kỹ thuật dài. Một mô tả đơn giản về mục tiêu cũng đủ để bắt đầu cuộc trao đổi.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {site.preparation.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-border bg-background-soft p-4 sm:p-5">
                <span className="text-sm font-bold text-brand">0{index + 1}</span>
                <h3 className="mt-3 text-base font-bold text-text-primary md:text-[17px]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-text-muted md:text-[15px]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] border border-border bg-background-soft p-5 sm:p-7 lg:p-8">
          <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-brand lg:text-[14px]">Phạm vi dự án</p>
          <h3 className="mt-4 text-2xl font-bold leading-tight text-text-primary md:text-3xl">Cùng xác nhận trước khi bắt đầu</h3>
          <p className="mt-4 text-base leading-[1.7] text-text-secondary md:text-[17px]">Trước khi nhận và phát triển dự án, hai bên nên hiểu giống nhau về những phần dưới đây.</p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {site.scope.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-white px-4 py-3 text-sm font-semibold leading-6 text-text-secondary md:text-[15px]">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 rounded-2xl bg-white p-5">
            <p className="text-base font-bold text-text-primary">Chi phí phụ thuộc vào những gì bạn thực sự cần.</p>
            <p className="mt-2 text-sm leading-6 text-text-muted">Nhóm sẽ xem số trang, chức năng, Figma, backend, database, dashboard, responsive, tài liệu và thời gian trước khi đề xuất phạm vi phù hợp. Không dùng giá cố định khi chưa hiểu yêu cầu.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
