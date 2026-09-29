"use client";

import { useMemo } from "react";
import MobileNavigation, { type NavigationItem } from "@/components/MobileNavigation";
import { handleHomeNavigation } from "@/components/useActiveSection";
import useActiveSection from "@/components/useActiveSection";

type ActiveNavigationProps = {
  items: NavigationItem[];
};

export default function ActiveNavigation({ items }: ActiveNavigationProps) {
  const sectionIds = useMemo(() => items.map((item) => item.href.slice(1)), [items]);
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      <nav aria-label="Điều hướng chính" className="hidden items-center gap-1 lg:flex">
        {items.map((item) => {
          const sectionId = item.href.slice(1);
          const isActive = activeSection === sectionId;

          return (
            <a
              key={item.href}
              href={item.href}
              onClick={item.href === "#home" ? handleHomeNavigation : undefined}
              aria-current={isActive ? "location" : undefined}
              className="relative inline-flex min-h-[60px] items-center whitespace-nowrap rounded-full border border-transparent px-5 py-2 text-base font-medium text-text-secondary transition-colors duration-200 hover:border-brand-border hover:bg-brand-soft hover:text-brand focus-visible:bg-brand-soft aria-[current=location]:border-brand-border aria-[current=location]:bg-brand-soft aria-[current=location]:font-semibold aria-[current=location]:text-brand min-[1440px]:min-h-[64px] min-[1440px]:px-6 min-[1440px]:text-[17px]"
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      <MobileNavigation items={items} activeSection={activeSection} />
    </>
  );
}
