"use client";

import { useMemo } from "react";
import MobileNavigation, { type NavigationItem } from "@/components/MobileNavigation";
import { handleSectionNavigation } from "@/components/useActiveSection";
import useActiveSection from "@/components/useActiveSection";

type ActiveNavigationProps = {
  items: NavigationItem[];
};

export default function ActiveNavigation({ items }: ActiveNavigationProps) {
  const sectionIds = useMemo(() => items.map((item) => item.href.slice(1)), [items]);
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      <nav aria-label="Điều hướng chính" className="hidden items-center gap-0.5 lg:flex">
        {items.map((item) => {
          const sectionId = item.href.slice(1);
          const isActive = activeSection === sectionId;

          return (
            <a
              key={item.href}
              href={item.href}
              onClick={handleSectionNavigation}
              aria-current={isActive ? "location" : undefined}
              className="relative inline-flex min-h-[44px] items-center whitespace-nowrap px-3 py-2 text-[14px] font-medium text-text-secondary transition-colors duration-300 after:absolute after:bottom-1.5 after:left-3 after:size-1.5 after:origin-center after:scale-0 after:rounded-full after:bg-brand after:transition-transform after:duration-300 hover:text-brand focus-visible:text-brand aria-[current=location]:font-semibold aria-[current=location]:text-brand aria-[current=location]:after:scale-100 min-[1440px]:px-3.5"
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
