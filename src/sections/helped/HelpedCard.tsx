"use client";

import { EceViewer } from "@/labs/previews/EceViewer";
import { type EceComponentKind } from "@/labs/previews/EceViewer";

import { HELPED_CARD_WIDTH_DESKTOP_PX } from "./helped-card-width";
import { color } from "@/tokens";
import { Body, Button } from "@/ui";
import { type HelpedCardRecord } from "./helped.data";

// Map illustration id → ECE component kind
const ILLUSTRATION_TO_ECE: Record<string, EceComponentKind> = {
  target: "ic-meter",
  spaceship: "dc-power-supply",
  money: "mcu-trainer",
};

const SHAPE_FILL_PATH =
  "M0 490V4a4 4 0 0 1 4-4h288.23c.932 0 1.856.163 2.731.48l60.814 22.09c.875.318 1.8.48 2.731.48H439a4 4 0 0 1 4 4V490a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4";
const SHAPE_STROKE_PATH =
  "M4 .5h288.23c.874 0 1.74.152 2.561.45l60.813 22.09c.931.338 1.912.51 2.902.51H439a3.5 3.5 0 0 1 3.5 3.5V490a3.5 3.5 0 0 1-3.5 3.5H4A3.5 3.5 0 0 1 .5 490V4A3.5 3.5 0 0 1 4 .5Z";

/* buildSchemeDeclarations('dark') inline — sets semantic CSS vars for dark scheme */
const DARK_SCHEME_STYLE: React.CSSProperties = {
  ["--surface" as string]: "var(--color-black)",
  ["--ink" as string]: "var(--color-white)",
  ["--ink-muted" as string]: "var(--color-white-60)",
  ["--ink-subtle" as string]: "var(--color-white-40)",
  ["--line" as string]: "var(--color-white-10)",
  ["--line-strong" as string]: "var(--color-white-20)",
  ["--divider" as string]: "var(--color-white-40)",
};

export function HelpedCard({ card }: { card: HelpedCardRecord }) {
  const eceKind = ILLUSTRATION_TO_ECE[card.illustration] ?? "capacitor";

  return (
    <article
      className="grid grid-cols-1 isolate w-full min-h-0 min-w-0 relative text-[var(--ink)] p-[calc(var(--spacing-base)*2.5)_calc(var(--spacing-base)*4)_calc(var(--spacing-base)*4)] [&>*+*]:mt-[calc(var(--spacing-base)*2.5)]"
      style={{
        ...DARK_SCHEME_STYLE,
        maxWidth: `${HELPED_CARD_WIDTH_DESKTOP_PX}px`,
      }}
      data-scheme="dark"
    >
      {/* ShapeLayer */}
      <div className="absolute inset-0 pointer-events-none -z-[1]" aria-hidden>
        <svg
          fill="none"
          height="100%"
          preserveAspectRatio="none"
          style={{ display: "block" }}
          viewBox="0 0 443 494"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={SHAPE_FILL_PATH} fill={color("black")} />
          <path
            d={SHAPE_STROKE_PATH}
            stroke={color("white-40")}
            strokeOpacity={0.2}
          />
        </svg>
      </div>

      {/* WordmarkRow */}
      <div className="grid grid-cols-1 items-center min-h-[calc(var(--spacing-base)*8)]">
        <span className="text-[var(--ink)] font-[system-ui,-apple-system,sans-serif] text-[15px] font-semibold tracking-[-0.02em]">
          {card.wordmark}
        </span>
      </div>

      {/* Rule */}
      <div className="bg-[var(--color-white-40)] h-px w-full" aria-hidden />

      {/* VisualShell */}
      <div className="bg-[#0d0d12] rounded-[calc(var(--radius-base)*2)] h-[240px] overflow-hidden relative w-full [contain:strict]">
        <EceViewer kind={eceKind} background="#0d0d12" />
      </div>

      {/* Rule */}
      <div className="bg-[var(--color-white-40)] h-px w-full" aria-hidden />

      {/* CopyBlock */}
      <div className="grid grid-cols-1 [&>*+*]:mt-[calc(var(--spacing-base)*2)]">
        {/* CardHeading — typeRampDeclarations('headingXs') */}
        <h3
          className="text-[var(--ink)] font-[var(--font-sans),sans-serif] font-medium"
          style={{
            fontSize: "clamp(1.125rem, 0.9415rem + 0.753vw, 1.375rem)",
            lineHeight: "clamp(1.5rem, 1.3165rem + 0.753vw, 1.75rem)",
          }}
        >
          {card.heading}
        </h3>
        <Body muted size="sm">
          {card.body}
        </Body>
      </div>

      {/* CtaRow */}
      <div className="grid grid-cols-[max-content] justify-items-start pt-[calc(var(--spacing-base)*1)]">
        <Button href={card.href} label="Read the case" variant="outlined" />
      </div>
    </article>
  );
}
