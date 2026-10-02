import { site } from "@/data/site";

export default function ContextStrip() {
  return (
    <section aria-label="Năng lực triển khai" className="relative overflow-hidden border-y border-[rgba(41,37,36,0.07)] bg-white/35 py-3">
      <div className="page-container scenario-track flex snap-x snap-mandatory gap-3 overflow-x-auto sm:grid sm:grid-cols-4 sm:gap-0 sm:overflow-visible">
        {site.contextPoints.map((point, index) => (
          <div
            key={point.label}
            className={`flex min-w-[10.5rem] snap-start flex-col justify-center rounded-full px-5 py-3 sm:min-w-0 sm:rounded-none sm:px-4 sm:text-center ${index % 3 === 0 ? "bg-[#E8EFE8]" : index % 3 === 1 ? "bg-[#EFEDF4]" : "bg-[#FFE4E1]"} ${index > 0 ? "sm:border-l sm:border-[rgba(41,37,36,0.08)] sm:bg-transparent" : ""}`}
          >
            <span className="text-[11px] font-semibold tracking-[0.1em] text-brand sm:text-[12px]">{point.label}</span>
            <span className="mt-1 text-[13px] font-medium text-text-secondary sm:text-[14px]">{point.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
