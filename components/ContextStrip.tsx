import { site } from "@/data/site";

export default function ContextStrip() {
  return (
    <section aria-label="Năng lực triển khai" className="border-y border-border bg-background-soft">
      <div className="page-container grid grid-cols-2 sm:grid-cols-4">
        {site.contextPoints.map((point, index) => (
          <div
            key={point}
            className={`flex min-h-16 items-center justify-center px-3 py-4 text-center text-[11px] font-bold tracking-[0.08em] text-text-secondary sm:min-h-[72px] sm:px-4 sm:text-[12px] ${index > 0 ? "border-l border-border" : ""}`}
          >
            {point}
          </div>
        ))}
      </div>
    </section>
  );
}
