"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

type ZaloCtaButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export default function ZaloCtaButton({ children, href = "https://zalo.me/0379052767", target = "_blank", rel = "noopener noreferrer", ...props }: ZaloCtaButtonProps) {
  return (
    <a href={href} target={target} rel={rel} {...props}>
      {children}
    </a>
  );
}
