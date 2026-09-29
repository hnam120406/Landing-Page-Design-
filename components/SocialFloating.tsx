"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { scrollHomeWithoutHash } from "@/components/useActiveSection";

function SocialIcon({ type }: { type: "zalo" | "instagram" | "youtube" }) {
  if (type === "zalo") {
    return <span aria-hidden="true" className="text-[13px] font-bold leading-none tracking-[-0.04em] md:text-[15px] xl:text-[17px]">Zalo</span>;
  }

  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-5 md:size-7 xl:size-[32px]" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 md:size-7 xl:size-[32px]" aria-hidden="true">
      <path d="M21.6 7.2a2.9 2.9 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.9 2.9 0 0 0-2 2C2 9 2 12 2 12s0 3 .4 4.8a2.9 2.9 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.9 2.9 0 0 0 2-2C22 15 22 12 22 12s0-3-.4-4.8ZM10 15.3V8.7l6 3.3-6 3.3Z" />
    </svg>
  );
}

export default function SocialFloating() {
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsBackToTopVisible(window.scrollY > 480);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  function handleBackToTop() {
    scrollHomeWithoutHash();
  }

  const hasSocialLinks = Boolean(site.zaloUrl);

  if (!hasSocialLinks && !isBackToTopVisible) {
    return null;
  }

  return (
    <aside className="floating-controls motion-enter fixed right-4 z-30 flex flex-col gap-2.5 md:right-5 md:gap-3 xl:right-7 xl:gap-3.5" aria-label="Liên kết nhanh">
      {site.zaloUrl ? (
        <a
          href={site.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Liên hệ Flash Honner qua Zalo"
          title="Zalo: 037 905 2767"
          className="flex size-14 items-center justify-center rounded-full border border-white/70 bg-[#0068FF] text-white shadow-[0_10px_24px_rgba(15,23,42,0.16)] transition duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.04] hover:shadow-[0_14px_30px_rgba(15,23,42,0.2)] md:size-16 xl:size-[72px]"
        >
          <SocialIcon type="zalo" />
        </a>
      ) : null}
      <button
        type="button"
        onClick={handleBackToTop}
        aria-label="Về đầu trang"
        aria-hidden={!isBackToTopVisible}
        tabIndex={isBackToTopVisible ? 0 : -1}
        disabled={!isBackToTopVisible}
        className={`flex size-14 items-center justify-center rounded-full border border-[#FDBA74] bg-white text-[#EA580C] shadow-[0_10px_24px_rgba(154,52,18,0.16)] transition duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.04] hover:border-[#F97316] hover:bg-[#FFF7ED] hover:shadow-[0_14px_30px_rgba(154,52,18,0.2)] md:size-16 xl:size-[72px] ${isBackToTopVisible ? "relative translate-y-0 opacity-100" : "pointer-events-none absolute right-0 translate-y-2 opacity-0"}`}
      >
        <span aria-hidden="true" className="text-2xl leading-none md:text-[28px] xl:text-[30px]">↑</span>
      </button>
    </aside>
  );
}
