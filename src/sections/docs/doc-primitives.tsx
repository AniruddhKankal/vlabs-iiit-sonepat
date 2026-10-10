import { type ComponentType, type ElementType, type ReactNode } from "react";

import { color, radius, spacing, typeRampDeclarations } from "@/tokens";

// ── Prose container ───────────────────────────────────────────────────────
// Applies typography to all child elements in a doc page.
// NOTE: Prose uses deeply nested child selectors that cannot be expressed
// purely with Tailwind utility classes. We use a <style> block scoped via
// a data attribute to replicate the original Linaria behaviour.

export function Prose({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <>
      <style>{`
        [data-prose] {
          color: var(--ink);
          font-family: var(--font-sans), sans-serif;
          max-width: 72ch;
        }
        [data-prose] h1 {
          ${typeRampDeclarations("headingLg")}
          font-family: var(--font-serif), serif;
          font-weight: 300;
          letter-spacing: -0.03em;
          line-height: 1.18;
          margin-bottom: ${spacing(4)};
        }
        [data-prose] h2 {
          ${typeRampDeclarations("headingMd")}
          font-family: var(--font-sans), sans-serif;
          font-weight: 500;
          letter-spacing: -0.03em;
          margin-top: ${spacing(10)};
          margin-bottom: ${spacing(3)};
          padding-bottom: ${spacing(2)};
          border-bottom: 1px solid rgba(0,0,0,0.07);
        }
        [data-prose] h3 {
          ${typeRampDeclarations("headingSm")}
          font-family: var(--font-sans), sans-serif;
          font-weight: 500;
          letter-spacing: -0.02em;
          margin-top: ${spacing(6)};
          margin-bottom: ${spacing(2)};
        }
        [data-prose] p {
          ${typeRampDeclarations("bodyMd")}
          color: var(--ink-muted);
          line-height: 1.7;
          margin-bottom: ${spacing(4)};
        }
        [data-prose] ul, [data-prose] ol {
          ${typeRampDeclarations("bodyMd")}
          color: var(--ink-muted);
          line-height: 1.7;
          margin-bottom: ${spacing(4)};
          padding-left: ${spacing(5)};
        }
        [data-prose] li {
          margin-bottom: ${spacing(1)};
        }
        [data-prose] code {
          background-color: rgba(0,0,0,0.055);
          border-radius: ${radius(1)};
          font-family: var(--font-mono), monospace;
          font-size: 0.875em;
          padding: 0.15em 0.4em;
        }
        [data-prose] pre {
          background-color: #1a1918;
          border-radius: ${radius(2)};
          color: #e8e4dc;
          font-family: var(--font-mono), monospace;
          font-size: 13px;
          line-height: 1.65;
          margin-bottom: ${spacing(6)};
          overflow-x: auto;
          padding: ${spacing(5)};
        }
        [data-prose] pre code {
          background: none;
          border-radius: 0;
          color: inherit;
          font-size: inherit;
          padding: 0;
        }
        [data-prose] hr {
          border: none;
          border-top: 1px solid rgba(0,0,0,0.07);
          margin: ${spacing(8)} 0;
        }
        [data-prose] blockquote {
          border-left: 3px solid var(--color-blue);
          color: var(--ink-muted);
          font-style: italic;
          margin: ${spacing(4)} 0;
          padding-left: ${spacing(4)};
        }
        [data-prose] strong { color: var(--ink); font-weight: 500; }
        [data-prose] em { font-style: italic; }
        [data-prose] table {
          border-collapse: collapse;
          font-size: 14px;
          margin-bottom: ${spacing(6)};
          width: 100%;
        }
        [data-prose] th {
          background-color: rgba(0,0,0,0.03);
          border-bottom: 1px solid rgba(0,0,0,0.10);
          color: var(--ink);
          font-weight: 500;
          padding: ${spacing(2)} ${spacing(3)};
          text-align: left;
        }
        [data-prose] td {
          border-bottom: 1px solid rgba(0,0,0,0.06);
          color: var(--ink-muted);
          padding: ${spacing(2)} ${spacing(3)};
          vertical-align: top;
        }
        [data-prose] tr:last-child td { border-bottom: none; }
      `}</style>
      <div data-prose="" className={className}>
        {children}
      </div>
    </>
  );
}

// ── Eyebrow label (small category tag above the page title) ──────────────
export function DocEyebrow({ children }: { children: ReactNode }) {
  return (
    <p
      className="font-[var(--font-sans),sans-serif] text-[11px] font-medium tracking-[0.10em] mb-[calc(var(--spacing-base)*2)] uppercase"
      style={{ color: color("blue") }}
    >
      {children}
    </p>
  );
}

// ── Callout box ───────────────────────────────────────────────────────────
export function Callout({
  $tone = "info",
  children,
}: {
  $tone?: "info" | "warn" | "tip";
  children: ReactNode;
}) {
  const bgColor =
    $tone === "warn"
      ? "rgba(221,96,0,0.07)"
      : $tone === "tip"
        ? "rgba(34,168,74,0.07)"
        : "rgba(25,97,237,0.07)";

  const borderColor =
    $tone === "warn" ? "#dd6000" : $tone === "tip" ? "#22a84a" : color("blue");

  const strongColor =
    $tone === "warn" ? "#dd6000" : $tone === "tip" ? "#22a84a" : color("blue");

  return (
    <div
      data-callout-tone={$tone}
      className="font-[var(--font-sans),sans-serif] text-[14px] leading-[1.65] mb-[calc(var(--spacing-base)*5)] px-[calc(var(--spacing-base)*4)] py-[calc(var(--spacing-base)*3)] [&>strong]:block [&>strong]:font-medium [&>strong]:mb-[calc(var(--spacing-base)*1)] [&>p]:text-[var(--ink-muted)] [&>p]:text-[14px] [&>p]:m-0"
      style={
        {
          backgroundColor: bgColor,
          borderLeft: `3px solid ${borderColor}`,
          borderRadius: `0 ${radius(1)} ${radius(1)} 0`,
          "--callout-accent": strongColor,
        } as React.CSSProperties
      }
    >
      <style>{`[data-callout-tone="${$tone}"] > strong { color: ${strongColor}; }`}</style>
      {children}
    </div>
  );
}

// ── Step badge (numbered inline step) ────────────────────────────────────
export function StepBadge({ children }: { children: ReactNode }) {
  return (
    <span
      className="items-center rounded-full text-white inline-flex shrink-0 font-[var(--font-mono),monospace] text-[11px] font-medium h-5 justify-center mr-[calc(var(--spacing-base)*2)] w-5"
      style={{ backgroundColor: color("blue") }}
    >
      {children}
    </span>
  );
}

// ── File path chip ────────────────────────────────────────────────────────
export function FilePath({ children }: { children: ReactNode }) {
  return (
    <code className="!bg-[rgba(0,0,0,0.055)] !rounded-[calc(var(--radius-base)*1)] !font-[var(--font-mono),monospace] !text-[13px] !py-[0.2em] !px-[0.5em]">
      {children}
    </code>
  );
}

// ── Type pill ─────────────────────────────────────────────────────────────
export function TypePill({ children }: { children: ReactNode }) {
  return (
    <span
      className="bg-[rgba(25,97,237,0.10)] rounded-[calc(var(--radius-base)*1)] font-[var(--font-mono),monospace] text-[12px] py-[0.15em] px-[0.45em]"
      style={{ color: color("blue") }}
    >
      {children}
    </span>
  );
}

// ── Section nav links (prev / next page) ─────────────────────────────────
export function DocNav({ children }: { children: ReactNode }) {
  return (
    <div className="border-t border-[rgba(0,0,0,0.07)] flex gap-[calc(var(--spacing-base)*4)] justify-between mt-[calc(var(--spacing-base)*12)] pt-[calc(var(--spacing-base)*6)]">
      {children}
    </div>
  );
}

export function DocNavLink({
  as: Component,
  href,
  "data-dir": dir,
  children,
}: {
  as?: ElementType | ComponentType<any>;
  href: string;
  "data-dir"?: "prev" | "next";
  children: ReactNode;
}) {
  const Tag = Component ?? "a";
  return (
    <Tag
      className="font-[var(--font-sans),sans-serif] text-[14px] font-medium no-underline transition-opacity duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:opacity-70"
      href={href}
      data-dir={dir}
      style={{ color: color("blue") }}
    >
      {dir === "prev" && "← "}
      {children}
      {dir === "next" && " →"}
    </Tag>
  );
}
