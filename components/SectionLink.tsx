"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { handleSectionNavigation } from "@/components/useActiveSection";

export default function SectionLink({ onClick, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (!event.defaultPrevented) {
      handleSectionNavigation(event);
    }
  }

  return <a {...props} onClick={handleClick} />;
}
