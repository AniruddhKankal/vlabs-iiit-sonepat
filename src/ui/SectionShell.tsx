import { type ReactNode } from "react";

import { type Scheme } from "@/tokens";

import { Container } from "./Container";

export type SectionShellProps = {
  ariaLabel?: string;
  background?: ReactNode;
  children: ReactNode;
  connectsUp?: boolean;
  flushInline?: boolean;
  fullBleedBackground?: boolean;
  keepsTopRhythm?: boolean;
  rhythm?: "section" | "hero" | "spacious" | "flush";
  scheme?: Scheme;
};

export function SectionShell({
  ariaLabel,
  background,
  children,
  connectsUp = false,
  flushInline = false,
  fullBleedBackground = false,
  keepsTopRhythm = false,
  rhythm = "section",
  scheme = "light",
}: SectionShellProps) {
  return (
    <section
      aria-label={ariaLabel}
      className="section-shell bg-[var(--surface)] min-w-0 overflow-clip relative w-full"
      data-connect-up={connectsUp ? "" : undefined}
      data-keep-top-rhythm={keepsTopRhythm ? "" : undefined}
      data-menu-surface=""
      data-rhythm={rhythm}
      data-scheme={scheme}
    >
      {background !== undefined && (
        <div
          aria-hidden
          className={[
            "absolute inset-0 mx-auto max-w-[1512px] overflow-clip pointer-events-none z-0",
            fullBleedBackground && "max-w-none",
          ]
            .filter(Boolean)
            .join(" ")}
          data-background-layer=""
        >
          {background}
        </div>
      )}
      <Container
        className="relative z-[1]"
        data-flush-inline={flushInline ? "" : undefined}
      >
        {children}
      </Container>
    </section>
  );
}
