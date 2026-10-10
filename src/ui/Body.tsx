import { type ReactNode } from "react";

import { type FontWeightToken } from "@/tokens";

export type BodyElement = "p" | "span" | "div";
export type BodySize = "md" | "sm" | "xs";

export type BodyProps = {
  as?: BodyElement;
  children: ReactNode;
  className?: string;
  muted?: boolean;
  size?: BodySize;
  weight?: FontWeightToken;
};

const weightClass: Record<FontWeightToken, string> = {
  light: "font-light",
  regular: "font-normal",
  medium: "font-medium",
};

const sizeClass: Record<BodySize, string> = {
  md: "text-[clamp(1rem,0.9082rem+0.3766vw,1.125rem)] leading-[1.55]",
  sm: "text-base leading-[1.55]",
  xs: "text-xs leading-[1.55]",
};

export function Body({
  as: Tag = "p",
  children,
  className,
  muted = false,
  size = "md",
  weight = "regular",
}: BodyProps) {
  const classes = [
    "font-[family-name:var(--font-sans),sans-serif]",
    weightClass[weight],
    sizeClass[size],
    muted && "text-[color:var(--ink-muted)]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classes}>{children}</Tag>;
}
