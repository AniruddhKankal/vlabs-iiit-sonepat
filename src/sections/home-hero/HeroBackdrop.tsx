"use client";

import { useState } from "react";

import { HalftoneImageBackdrop } from "@/platform/visuals/rigs/HalftoneImageBackdrop";

import { HERO_BACKDROP } from "./hero-backdrop-config";

export function HeroBackdrop() {
  const [isReady, setIsReady] = useState(false);

  return (
    <div
      className={`pointer-events-none absolute -inset-[40px] h-[calc(100%+80px)] w-[calc(100%+80px)] transition-opacity duration-[600ms] ease-in-out ${
        isReady ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden
      data-illustration="hero-campus"
    >
      <HalftoneImageBackdrop
        imageUrl={HERO_BACKDROP.imageUrl}
        loading="eager"
        onFirstFrame={() => setIsReady(true)}
        priority
        settings={HERO_BACKDROP.settings}
      />
    </div>
  );
}
