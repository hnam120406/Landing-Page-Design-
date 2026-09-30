import { site } from "@/data/site";

export default function ContextStrip() {
  return (
    <section aria-label="Năng lực triển khai" className="border-y border-border bg-background-soft">
      <div className="page-container grid grid-cols-2 sm:grid-cols-4">
        {site.contextPoints.map((point, index) => (
          <div
            key={point.label}
            className={`flex min-h-16 flex-col items-center justify-center px-3 py-3 text-center sm:min-h-[72px] sm:px-4 ${index > 0 ? "border-l border-border" : ""}`}
          >
            <span className="text-[11px] font-bold tracking-[0.08em] text-brand sm:text-[12px]">{point.label}</span>
            <span className="mt-1 text-[13px] font-medium text-text-secondary sm:text-[14px]">{point.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
