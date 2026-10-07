"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { color, radius, semanticColor, spacing } from "@/tokens";

// ── Data ──────────────────────────────────────────────────────────────────

export type DocNavItem = {
  href: string;
  label: string;
};

export type DocNavGroup = {
  label: string;
  items: DocNavItem[];
};

export const DOCS_NAV: DocNavGroup[] = [
  {
    label: "Getting Started",
    items: [
      { href: "/docs", label: "Overview" },
      { href: "/docs/quickstart", label: "Quickstart" },
      { href: "/docs/video-tutorial", label: "Video tutorial" },
    ],
  },
  {
    label: "Adding Components",
    items: [
      { href: "/docs/components", label: "Component types" },
      { href: "/docs/geometry", label: "Writing geometry" },
      { href: "/docs/registry", label: "Registry & renderer" },
    ],
  },
  {
    label: "Building Circuits",
    items: [
      { href: "/docs/circuits", label: "Circuit schema" },
      { href: "/docs/pins", label: "Pin references" },
      { href: "/docs/steps", label: "Steps & highlighting" },
      { href: "/docs/columns", label: "Column layout guide" },
    ],
  },
  {
    label: "Reference",
    items: [
      { href: "/docs/types", label: "TypeScript types" },
      { href: "/docs/constraints", label: "Constraints & rules" },
    ],
  },
];

// ── Component ─────────────────────────────────────────────────────────────

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className="block font-[var(--font-sans),sans-serif] text-[14px] no-underline relative transition-[background-color,color] duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{
        borderRadius: radius(1),
        color: active ? color("blue") : semanticColor.ink,
        fontWeight: active ? 500 : 400,
        padding: `${spacing(1)} ${spacing(2)}`,
        backgroundColor: active ? `${color("blue")}12` : "transparent",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = active
          ? `${color("blue")}18`
          : "rgba(0,0,0,0.04)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = active
          ? `${color("blue")}12`
          : "transparent";
      }}
    >
      {/* Active left-border accent */}
      <span
        className="absolute left-0 top-[20%] h-[60%] w-[2px] rounded-[1px] transition-opacity duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          backgroundColor: color("blue"),
          opacity: active ? 1 : 0,
        }}
      />
      {children}
    </Link>
  );
}

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav
      className="flex flex-col gap-[calc(var(--spacing-base)*6)]"
      aria-label="Documentation navigation"
    >
      {DOCS_NAV.map((group) => (
        <div key={group.label}>
          <p className="text-[var(--ink-muted)] font-[var(--font-sans),sans-serif] text-[11px] font-medium tracking-[0.10em] mb-[calc(var(--spacing-base)*1)] uppercase">
            {group.label}
          </p>
          <ul className="flex flex-col gap-[2px] list-none">
            {group.items.map((item) => {
              const active =
                item.href === "/docs"
                  ? pathname === "/docs"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <NavLink href={item.href} active={active}>
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
