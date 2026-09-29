"use client";

import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";
import { handleHomeNavigation } from "@/components/useActiveSection";

type HomeLinkProps = {
  "aria-label": string;
  children: ReactNode;
  className?: string;
};

export default function HomeLink({ "aria-label": ariaLabel, children, className }: HomeLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    handleHomeNavigation(event);
  }

  return (
    <Link href="/" aria-label={ariaLabel} className={`home-link ${className ?? ""}`} onClick={handleClick}>
      {children}
    </Link>
  );
}
