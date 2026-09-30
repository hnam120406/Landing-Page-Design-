"use client";

import { useEffect, useState } from "react";
import type { MouseEvent } from "react";

function getHashSection(sectionIds: readonly string[]) {
  const hash = window.location.hash.slice(1);
  return sectionIds.includes(hash) ? hash : sectionIds[0] ?? "";
}

export function cleanSectionHash() {
  if (typeof window === "undefined" || !window.location.hash) {
    return;
  }

  window.history.replaceState(window.history.state, "", window.location.pathname + window.location.search);
}

export function scrollToSectionWithoutHash(sectionId: string) {
  if (typeof window === "undefined") {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById(sectionId)?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
  cleanSectionHash();
}

export function scrollHomeWithoutHash() {
  scrollToSectionWithoutHash("home");
}

export function handleSectionNavigation(event: MouseEvent<HTMLAnchorElement>) {
  const href = event.currentTarget.getAttribute("href") ?? "";
  const sectionId = href.startsWith("#") ? href.slice(1) : "";

  if (!sectionId || !document.getElementById(sectionId)) {
    return;
  }

  event.preventDefault();
  scrollToSectionWithoutHash(sectionId);
}

export function handleHomeNavigation(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  scrollHomeWithoutHash();
}

export default function useActiveSection(sectionIds: readonly string[]) {
  const initialSection = sectionIds.includes("home") ? "home" : sectionIds[0] ?? "";
  const [activeSection, setActiveSection] = useState(initialSection);

  useEffect(() => {
    const initialHash = window.location.hash.slice(1);
    const initialHashSection = sectionIds.includes(initialHash) ? initialHash : null;
    let initialHashSettled = !initialHashSection || initialHashSection === "home";

    if (initialHashSection === "home") {
      cleanSectionHash();
    }

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const initialHashUpdateFrame = initialHashSection
      ? window.requestAnimationFrame(() => {
          document.getElementById(initialHashSection)?.scrollIntoView({ behavior: "auto", block: "start" });
          setActiveSection(initialHashSection);
          cleanSectionHash();
        })
      : null;
    const visibleSections = new Map<string, IntersectionObserverEntry>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        const viewportReadingPoint = window.innerHeight * 0.32;
        const currentSection = [...visibleSections.values()].sort(
          (first, second) =>
            Math.abs(first.boundingClientRect.top - viewportReadingPoint) -
            Math.abs(second.boundingClientRect.top - viewportReadingPoint),
        )[0];

        if (currentSection) {
          const sectionId = currentSection.target.id;

          if (!initialHashSettled) {
            if (sectionId !== initialHashSection) {
              return;
            }

            initialHashSettled = true;
          }

          setActiveSection(sectionId);

          if (sectionId === "home" && window.scrollY <= 4) {
            cleanSectionHash();
          }
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    const handleHashChange = () => {
      const hashSection = getHashSection(sectionIds);
      setActiveSection(hashSection);

      if (hashSection === "home") {
        cleanSectionHash();
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      if (initialHashUpdateFrame !== null) {
        window.cancelAnimationFrame(initialHashUpdateFrame);
      }
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [sectionIds]);

  return activeSection;
}
