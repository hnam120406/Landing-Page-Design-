"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef } from "react";

type RevealProps = {
  as?: "div" | "li";
  children: ReactNode;
  className?: string;
  delay?: number;
};

type RevealCallback = () => void;

let revealObserver: IntersectionObserver | null = null;
const revealCallbacks = new WeakMap<Element, RevealCallback>();

function getRevealObserver() {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return null;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          revealCallbacks.get(entry.target)?.();
          revealCallbacks.delete(entry.target);
          revealObserver?.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
  }

  return revealObserver;
}

export default function Reveal({ as = "div", children, className, delay = 0 }: RevealProps) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = getRevealObserver();

    if (prefersReducedMotion || !observer) {
      return;
    }

    element.classList.add("reveal-ready");
    const reveal = () => element.classList.add("reveal-visible");

    revealCallbacks.set(element, reveal);
    observer.observe(element);

    return () => {
      revealCallbacks.delete(element);
      observer.unobserve(element);
    };
  }, []);

  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;

  const Component = as;

  return (
    <Component
      ref={(element: HTMLElement | null) => {
        elementRef.current = element;
      }}
      className={`reveal ${className ?? ""}`}
      style={style}
    >
      {children}
    </Component>
  );
}
