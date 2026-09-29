import { site } from "@/data/site";

function CapabilityIcon({ id }: { id: string }) {
  if (id === "figma") {
    return (
      <svg aria-hidden="true" className="size-6" viewBox="0 0 24 24" fill="none">
        <path d="M8 3h4v6H8a3 3 0 1 1 0-6Z" fill="currentColor" />
        <path d="M12 3h4a3 3 0 1 1 0 6h-4V3Z" fill="currentColor" opacity=".72" />
        <path d="M8 9h4v6H8a3 3 0 1 1 0-6Z" fill="currentColor" opacity=".84" />
        <circle cx="15" cy="12" r="3" fill="currentColor" opacity=".58" />
        <path d="M8 15h4v3a3 3 0 1 1-3-3H8Z" fill="currentColor" opacity=".68" />
      </svg>
    );
  }

  if (id === "website") {
    return (
      <svg aria-hidden="true" className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 8h18M7 6h.01M10 6h.01" />
        <path d="m8 13 2 2-2 2M13 17h3" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M10 6h4M11 18h2" />
      <path d="M3 9v6M21 9v6" />
    </svg>
  );
}

export default function Capabilities() {
  return (
    <section aria-label="Năng lực chính" className="border-y border-border bg-white">
      <div className="page-container grid gap-1 py-3 sm:grid-cols-3 sm:gap-0 sm:py-4">
        {site.capabilities.map((capability, index) => (
          <div key={capability.id} className={`flex items-center gap-3 px-2 py-2 sm:justify-center sm:px-4 ${index > 0 ? "sm:border-l sm:border-border" : ""}`}>
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
              <CapabilityIcon id={capability.id} />
            </span>
            <div>
              <p className="text-[11px] font-bold tracking-[0.08em] text-brand">{capability.label}</p>
              <p className="mt-0.5 text-[14px] font-medium text-text-primary">{capability.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
