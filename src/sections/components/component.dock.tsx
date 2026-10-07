"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { type ComponentData, COMPONENTS_DATA } from "./components.data";

// Dynamically import the 3D viewer with SSR disabled
const EceComponentViewer = dynamic(
  () =>
    import("@/labs/previews/EceComponentViewer").then(
      (m) => m.EceComponentViewer,
    ),
  { ssr: false },
);

function DockItem({
  comp,
  isActive,
}: {
  comp: ComponentData;
  isActive: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isVisible, setIsVisible] = useState(isActive);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "50px",
        threshold: 0,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Link
      ref={ref}
      href={`/components/${comp.slug}`}
      className={`relative w-[64px] h-[64px] rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 ${
        isActive
          ? "bg-white/80 border border-black/10 ring-1 ring-black/5 opacity-100 shadow-sm"
          : "bg-white/40 border border-black/5 hover:border-black/10 hover:bg-white/70 opacity-60 hover:opacity-100"
      }`}
      title={comp.name}
    >
      <div className="absolute inset-0 pointer-events-none">
        {isVisible && (
          <EceComponentViewer
            kind={comp.kind}
            background="#f7f6f3"
            autoRotate={isActive}
            zoom={false}
          />
        )}
      </div>
    </Link>
  );
}

export function ComponentDock({ currentSlug }: { currentSlug: string }) {
  const dockScrollRef = useRef<HTMLDivElement>(null);

  const scrollDock = (direction: "left" | "right") => {
    if (dockScrollRef.current) {
      const scrollAmount = direction === "left" ? -150 : 150;
      dockScrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 p-1.5 rounded-2xl z-50 max-w-[60%]"
      style={{
        background: "rgba(255, 255, 255, 0.55)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        border: "1px solid rgba(255, 255, 255, 0.75)",
        boxShadow:
          "0 4px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)",
      }}
    >
      {/* Left arrow */}
      <button
        className="text-black/30 hover:text-black/60 flex-shrink-0 transition-colors cursor-pointer p-0.5"
        onClick={() => scrollDock("left")}
        aria-label="Scroll left"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Scrollable dock strip */}
      <div
        ref={dockScrollRef}
        className="dock-strip flex items-center gap-2 overflow-x-auto scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>{`
          .dock-strip::-webkit-scrollbar { display: none; }
        `}</style>
        {Object.values(COMPONENTS_DATA).map((comp) => (
          <DockItem
            key={comp.slug}
            comp={comp}
            isActive={comp.slug === currentSlug}
          />
        ))}
      </div>

      {/* Right arrow */}
      <button
        className="text-black/30 hover:text-black/60 flex-shrink-0 transition-colors cursor-pointer p-0.5"
        onClick={() => scrollDock("right")}
        aria-label="Scroll right"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
