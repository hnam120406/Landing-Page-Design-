"use client";

import { useEffect, useState } from "react";
import { scrollHomeWithoutHash } from "@/components/useActiveSection";

const ZALO_URL = "https://zalo.me/0379052767";

function ZaloIcon() {
  return <span aria-hidden="true" className="text-[12px] font-bold leading-none tracking-[-0.04em] md:text-[13px] xl:text-[14px]">Zalo</span>;
}

export default function SocialFloating() {
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);
  const [isZaloAttention, setIsZaloAttention] = useState(false);

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

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let resetAttentionId = 0;
    const triggerAttention = () => {
      setIsZaloAttention(true);
      window.clearTimeout(resetAttentionId);
      resetAttentionId = window.setTimeout(() => setIsZaloAttention(false), 760);
    };
    const attentionIntervalId = window.setInterval(triggerAttention, 6000);

    return () => {
      window.clearInterval(attentionIntervalId);
      window.clearTimeout(resetAttentionId);
    };
  }, []);

  function handleBackToTop() {
    scrollHomeWithoutHash();
  }

  return (
    <aside className="floating-controls motion-enter fixed right-3 z-50 flex flex-col gap-2 md:right-4 md:gap-2.5 xl:right-6 xl:gap-3" aria-label="Liên kết nhanh">
      <a
        href={ZALO_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Liên hệ Flash Honner qua Zalo"
        title="Liên hệ qua Zalo"
        className="flex size-12 items-center justify-center rounded-full border border-white/70 bg-[#0068FF] text-white shadow-[0_10px_24px_rgba(15,23,42,0.16)] transition duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(15,23,42,0.2)] active:scale-[0.96] md:size-[52px] xl:size-14"
      >
        <span className={isZaloAttention ? "zalo-attention" : "inline-flex"}>
          <ZaloIcon />
        </span>
      </a>

      <button
        type="button"
        onClick={handleBackToTop}
        aria-label="Về đầu trang"
        aria-hidden={!isBackToTopVisible}
        tabIndex={isBackToTopVisible ? 0 : -1}
        disabled={!isBackToTopVisible}
        className={`flex size-12 items-center justify-center rounded-full border border-[#FDBA74] bg-white text-[#EA580C] shadow-[0_10px_24px_rgba(154,52,18,0.16)] transition duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:border-[#F97316] hover:bg-[#FFF7ED] hover:shadow-[0_14px_30px_rgba(154,52,18,0.2)] md:size-[52px] xl:size-14 ${isBackToTopVisible ? "relative translate-y-0 opacity-100" : "pointer-events-none absolute right-0 translate-y-2 opacity-0"}`}
      >
        <span aria-hidden="true" className="text-2xl leading-none md:text-[28px] xl:text-[30px]">↑</span>
      </button>
    </aside>
  );
}
