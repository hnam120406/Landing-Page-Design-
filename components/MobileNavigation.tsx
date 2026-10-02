"use client";

import { useEffect, useRef, useState } from "react";
import { handleSectionNavigation } from "@/components/useActiveSection";

export type NavigationItem = {
  href: string;
  label: string;
};

type MobileNavigationProps = {
  items: NavigationItem[];
  activeSection: string;
};

export default function MobileNavigation({ items, activeSection }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousDocumentOverflow = document.documentElement.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const closeOnDesktop = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);
    firstLinkRef.current?.focus();

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousDocumentOverflow;
      document.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [isOpen]);

  return (
    <div className="relative z-10 shrink-0 lg:hidden">
      <button
        ref={menuButtonRef}
        type="button"
        aria-label={isOpen ? "Đóng menu điều hướng" : "Mở menu điều hướng"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
        className="relative z-10 flex size-11 items-center justify-center rounded-full border border-[rgba(41,37,36,0.16)] bg-[#FDFCF8] text-text-primary shadow-[0_2px_10px_rgba(41,37,36,0.06)] transition-colors duration-300 hover:border-brand hover:text-brand focus-visible:bg-brand-soft"
      >
        <span aria-hidden="true" className="relative flex size-5 flex-col justify-center gap-1.5">
          <span className={`block h-0.5 w-5 rounded-full bg-current transition duration-200 ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 rounded-full bg-current transition duration-200 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-3.5 self-end rounded-full bg-current transition duration-200 ${isOpen ? "w-5 -translate-y-2 -rotate-45" : ""}`} />
        </span>
      </button>

      <nav
        id="mobile-navigation"
        aria-label="Điều hướng di động"
        hidden={!isOpen}
        className="absolute inset-x-0 top-[calc(100%+0.75rem)] max-h-[calc(100dvh-8rem)] overflow-y-auto rounded-[2rem] bg-transparent p-0 md:max-h-[calc(100dvh-9.5625rem)]"
      >
        <div className="grid gap-1 rounded-[2rem] border border-[rgba(41,37,36,0.08)] bg-[#FDFCF8]/95 p-3 shadow-[var(--shadow-soft)] backdrop-blur-xl">
          {items.map((item, index) => (
            (() => {
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={(event) => {
                    handleSectionNavigation(event);
                    setIsOpen(false);
                  }}
                  className="flex min-h-11 items-center rounded-full border border-transparent px-4 text-[15px] font-medium text-text-secondary transition-colors duration-300 hover:border-brand-border hover:bg-brand-soft hover:text-brand focus-visible:bg-brand-soft aria-[current=location]:border-brand-border aria-[current=location]:bg-brand-soft aria-[current=location]:font-semibold aria-[current=location]:text-brand"
                >
                  {item.label}
                </a>
              );
            })()
          ))}
        </div>
      </nav>
    </div>
  );
}
