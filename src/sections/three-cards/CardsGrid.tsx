"use client";

import { Children, useCallback, useRef, type ReactNode } from "react";

import { useScheduledOnScroll } from "@/platform/motion";

import { applyCardRevealLayout } from "./card-reveal-layout";

// The shared card grid: each card rides a slot the scroll-driven reveal
// writes transform/opacity to directly — no per-frame React work.
export function CardsGrid({ children }: { children: ReactNode }) {
  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cards = Children.toArray(children);
  const cardCount = cards.length;

  const runLayout = () => {
    applyCardRevealLayout({ cardRefs, gridRef }, cardCount);
  };

  useScheduledOnScroll(runLayout);

  const slots = cards.map((card, cardNumber) => ({ card, cardNumber }));

  return (
    <div
      className="grid gap-[calc(var(--spacing-base)*4)] grid-cols-1 mx-auto max-w-[480px] w-full md:grid-flow-col md:auto-cols-fr md:grid-cols-none md:max-w-none"
      ref={gridRef}
    >
      {slots.map(({ card, cardNumber }) => (
        <div
          className="will-change-[transform,opacity]"
          key={cardNumber}
          ref={(element) => {
            cardRefs.current[cardNumber] = element;
          }}
        >
          {card}
        </div>
      ))}
    </div>
  );
}
