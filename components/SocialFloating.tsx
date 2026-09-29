"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { scrollHomeWithoutHash } from "@/components/useActiveSection";

const zaloContacts = [
  {
    displayPhone: "037 905 2767",
    href: "https://zalo.me/0379052767",
  },
  {
    displayPhone: "096 579 164",
    href: "https://zalo.me/096579164",
  },
] as const;

function SocialIcon({ type }: { type: "zalo" | "instagram" | "youtube" }) {
  if (type === "zalo") {
    return <span aria-hidden="true" className="text-[12px] font-bold leading-none tracking-[-0.04em] md:text-[13px] xl:text-[14px]">Zalo</span>;
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
  const [isZaloOpen, setIsZaloOpen] = useState(false);
  const zaloMenuRef = useRef<HTMLDivElement>(null);
  const zaloButtonRef = useRef<HTMLButtonElement>(null);

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
    if (!isZaloOpen) {
      return;
    }

    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!zaloMenuRef.current?.contains(event.target as Node)) {
        setIsZaloOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsZaloOpen(false);
        zaloButtonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isZaloOpen]);

  function handleBackToTop() {
    scrollHomeWithoutHash();
  }

  const hasSocialLinks = zaloContacts.length > 0;

  if (!hasSocialLinks && !isBackToTopVisible) {
    return null;
  }

  return (
    <aside className="floating-controls motion-enter fixed right-3 z-50 flex flex-col gap-2 md:right-4 md:gap-2.5 xl:right-6 xl:gap-3" aria-label="Liên kết nhanh">
      <div ref={zaloMenuRef} className="relative">
        <button
          ref={zaloButtonRef}
          type="button"
          aria-label={isZaloOpen ? "Đóng lựa chọn liên hệ Zalo" : "Mở lựa chọn liên hệ Zalo"}
          aria-expanded={isZaloOpen}
          aria-haspopup="menu"
          aria-controls="zalo-contact-menu"
          title="Liên hệ qua Zalo"
          onClick={() => setIsZaloOpen((open) => !open)}
          className={`flex size-12 items-center justify-center rounded-full border border-white/70 bg-[#0068FF] text-white shadow-[0_10px_24px_rgba(15,23,42,0.16)] transition duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_14px_30px_rgba(15,23,42,0.2)] active:scale-[0.96] md:size-[52px] xl:size-14 ${isZaloOpen ? "ring-2 ring-[#93C5FD] ring-offset-2" : ""}`}
        >
          <SocialIcon type="zalo" />
        </button>

        <div
          id="zalo-contact-menu"
          hidden={!isZaloOpen}
          role="group"
          aria-label="Chọn số liên hệ Zalo"
          className="zalo-popover absolute bottom-[calc(100%+12px)] right-0 z-[60] w-[min(260px,calc(100vw-32px))] rounded-2xl border border-blue-100 bg-white p-2 shadow-[0_12px_32px_rgba(15,23,42,0.14)] md:bottom-0 md:right-[calc(100%+12px)] md:w-[280px]"
        >
          <p className="px-3 pb-2 pt-1 text-sm font-bold text-[#0068FF]">Zalo</p>
          <div className="grid gap-1 border-t border-blue-100 pt-1">
            {zaloContacts.map((contact, index) => (
              <a
                key={contact.href}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsZaloOpen(false)}
                style={{ "--zalo-contact-delay": `${40 + index * 40}ms` } as CSSProperties}
                className="zalo-contact-row group flex min-h-11 items-center gap-3 rounded-xl px-3 py-2 text-[#0F172A] transition-[background-color,transform] duration-200 ease-out hover:translate-x-0.5 hover:bg-blue-50 focus-visible:bg-blue-50"
              >
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold text-[#0068FF]">Zalo</span>
                  <span className="mt-0.5 block text-sm font-semibold text-[#334155]">{contact.displayPhone}</span>
                </span>
                <span aria-hidden="true" className="text-lg text-[#0068FF] transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={handleBackToTop}
        aria-label="Về đầu trang"
        aria-hidden={!isBackToTopVisible}
        tabIndex={isBackToTopVisible ? 0 : -1}
        disabled={!isBackToTopVisible}
        className={`flex size-12 items-center justify-center rounded-full border border-[#FDBA74] bg-white text-[#EA580C] shadow-[0_10px_24px_rgba(154,52,18,0.16)] transition duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:border-[#F97316] hover:bg-[#FFF7ED] hover:shadow-[0_14px_30px_rgba(154,52,18,0.2)] md:size-[52px] xl:size-14 ${isBackToTopVisible ? "relative translate-y-0 opacity-100" : "pointer-events-none absolute right-0 translate-y-2 opacity-0"}`}
      >
        <span aria-hidden="true" className="text-2xl leading-none md:text-[28px] xl:text-[30px]">↑</span>
      </button>
    </aside>
  );
}
