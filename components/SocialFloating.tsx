"use client";

import { useEffect, useState } from "react";
import { scrollHomeWithoutHash } from "@/components/useActiveSection";

const ZALO_URL = "https://zalo.me/0379052767";

function ZaloIcon() {
  return <span aria-hidden="true" className="text-[16px] font-extrabold leading-none tracking-[-0.04em] md:text-[18px] lg:text-[20px]">Zalo</span>;
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
    let resetAttentionId = 0;
    const triggerAttention = () => {
      setIsZaloAttention(true);
      window.clearTimeout(resetAttentionId);
      resetAttentionId = window.setTimeout(() => setIsZaloAttention(false), 1120);
    };
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    triggerAttention();
    const attentionIntervalId = window.setInterval(triggerAttention, prefersReducedMotion ? 9000 : 5200);

    return () => {
      window.clearInterval(attentionIntervalId);
      window.clearTimeout(resetAttentionId);
    };
  }, []);

  function handleBackToTop() {
    scrollHomeWithoutHash();
  }

  return (
    <aside className="floating-controls motion-enter fixed right-4 z-50 flex flex-col md:right-5 xl:right-7" aria-label="Liên kết nhanh">
      <a
        href={ZALO_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Liên hệ Flash Honner qua Zalo"
        title="Liên hệ qua Zalo"
        className={`floating-control flex items-center justify-center rounded-full border border-white/70 bg-[#0068FF] text-white shadow-[0_10px_24px_rgba(15,23,42,0.16)] transition duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,104,255,0.3)] active:scale-[0.96] ${isZaloAttention ? "zalo-attention" : ""}`}
      >
        <ZaloIcon />
      </a>

      <button
        type="button"
        onClick={handleBackToTop}
        aria-label="Về đầu trang"
        aria-hidden={!isBackToTopVisible}
        tabIndex={isBackToTopVisible ? 0 : -1}
        disabled={!isBackToTopVisible}
        className={`floating-control flex items-center justify-center rounded-full border border-[#FDBA74] bg-white text-[#EA580C] shadow-[0_8px_24px_rgba(15,23,42,0.1)] transition duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:border-[#F97316] hover:bg-[#FFF7ED] hover:shadow-[0_10px_26px_rgba(15,23,42,0.14)] ${isBackToTopVisible ? "relative translate-y-0 opacity-100" : "pointer-events-none absolute right-0 translate-y-2 opacity-0"}`}
      >
        <span aria-hidden="true" className="text-[26px] leading-none md:text-[28px] lg:text-[30px]">↑</span>
      </button>
    </aside>
  );
}
