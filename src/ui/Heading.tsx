import { Fragment } from "react";

import { type FontWeightToken } from "@/tokens";

import { parseHeadingNotation } from "./heading-notation";

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingSize = "xl" | "lg" | "md" | "sm" | "xs";
export type HeadingFamily = "serif" | "sans";
export type HeadingTracking = "tight" | "normal";
export type HeadingWrap = "balance" | "normal";

export type HeadingProps = {
  as?: HeadingLevel;
  children: string;
  className?: string;
  family?: HeadingFamily;
  size?: HeadingSize;
  tracking?: HeadingTracking;
  weight?: FontWeightToken;
  wrap?: HeadingWrap;
};

const wrapClasses: Record<HeadingWrap, string> = {
  balance: "text-balance",
  normal: "text-wrap",
};

const familyClasses: Record<HeadingFamily, string> = {
  serif: "font-[family-name:var(--font-serif),serif] tracking-[-0.02em]",
  sans: "font-[family-name:var(--font-sans),sans-serif] tracking-[-0.04em]",
};

const weightClasses: Record<FontWeightToken, string> = {
  light: "font-light",
  regular: "font-normal",
  medium: "font-medium",
};

const sizeClasses: Record<HeadingSize, string> = {
  xl: "text-[clamp(3.75rem,2.8319rem+3.7665vw,5rem)] leading-[clamp(4.125rem,3.2069rem+3.7665vw,5.375rem)]",
  lg: "text-[clamp(2.5rem,1.5819rem+3.7665vw,3.75rem)] leading-[clamp(2.875rem,1.9569rem+3.7665vw,4.125rem)]",
  md: "text-[clamp(2.5rem,2.1328rem+1.5066vw,3rem)] leading-[clamp(2.875rem,2.416rem+1.8832vw,3.5rem)]",
  sm: "text-[2rem] leading-[2.5rem]",
  xs: "text-[clamp(1.125rem,0.9414rem+0.7533vw,1.375rem)] leading-[clamp(1.5rem,1.3164rem+0.7533vw,1.75rem)]",
};

/**
 * Accent child styles: swap the font family on [data-accent] children.
 * Uses Tailwind arbitrary child-selector variants.
 */
const accentChildClasses: Record<HeadingFamily, string> = {
  serif:
    "[&_[data-accent]]:font-[family-name:var(--font-sans),sans-serif] [&_[data-accent]]:tracking-[-0.04em]",
  sans: "[&_[data-accent]]:font-[family-name:var(--font-serif),serif] [&_[data-accent]]:tracking-[-0.02em]",
};

export function Heading({
  as: Tag = "h2",
  children,
  className,
  family = "serif",
  size = "md",
  tracking = "tight",
  weight = "regular",
  wrap = "balance",
}: HeadingProps) {
  // Keys are the segment's character offset in the heading: data-derived,
  // unique even when the same word appears twice (breaks count one).
  const keyedSegments = parseHeadingNotation(children).reduce(
    (acc, segment) => {
      const text = segment.kind === "break" ? "" : segment.text;
      const keyed = {
        key: `${segment.kind}-${acc.offset}`,
        kind: segment.kind,
        text,
      };
      acc.segments.push(keyed);
      acc.offset += text.length + (segment.kind === "break" ? 1 : 0);
      return acc;
    },
    {
      segments: [] as { key: string; kind: string; text: string }[],
      offset: 0,
    },
  ).segments;

  const classes = [
    wrapClasses[wrap],
    familyClasses[family],
    tracking === "normal" ? "tracking-normal" : "",
    weightClasses[weight],
    sizeClasses[size],
    accentChildClasses[family],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes}>
      {keyedSegments.map((segment) =>
        segment.kind === "accent" ? (
          <span data-accent key={segment.key}>
            {segment.text}
          </span>
        ) : segment.kind === "break" ? (
          <br key={segment.key} />
        ) : (
          <Fragment key={segment.key}>{segment.text}</Fragment>
        ),
      )}
    </Tag>
  );
}
