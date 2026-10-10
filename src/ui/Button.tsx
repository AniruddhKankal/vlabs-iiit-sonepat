import Link from "next/link";
import { type ReactNode } from "react";

import { ButtonShape } from "./ButtonShape";

const BUTTON_HEIGHT_PX: Record<ButtonSize, number> = {
  regular: 40,
  small: 32,
};

export type ButtonSize = "regular" | "small";
export type ButtonVariant = "filled" | "outlined";

export type ButtonProps = {
  disabled?: boolean;
  href?: string;
  label: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  size?: ButtonSize;
  type?: "button" | "submit";
  variant?: ButtonVariant;
  onClick?: () => void;
};

/*
 * Button theming relies on CSS custom properties (--button-fill, --button-stroke,
 * etc.) defined in globals.css and cascading from ancestor [data-scheme] contexts.
 */

export function Button({
  disabled = false,
  href,
  label,
  leadingIcon,
  trailingIcon,
  size = "regular",
  type = "button",
  variant = "filled",
  onClick,
}: ButtonProps) {
  const heightPx = BUTTON_HEIGHT_PX[size];
  const isProtocolLink =
    href !== undefined &&
    (href.startsWith("mailto:") || href.startsWith("tel:"));
  const isExternal =
    href !== undefined && !href.startsWith("/") && !isProtocolLink;

  const rootClass = [
    "inline-flex items-center justify-center relative group",
    "bg-none border-none cursor-pointer no-underline uppercase",
    "font-mono text-[calc(var(--font-base)*3)] font-medium tracking-normal",
    size === "small" ? "h-8" : "h-10",
    "focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--color-blue)] focus-visible:outline-offset-1",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      <ButtonShape heightPx={heightPx} outlined={variant === "outlined"} />
      <span
        data-slot="hover-layer"
        className={[
          "absolute inset-0 overflow-hidden pointer-events-none rounded-[2px]",
          "opacity-[var(--button-hover-opacity)]",
          variant === "outlined" ? "z-0" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <span className="block h-full w-full relative -translate-x-[calc(100%+16px)] transition-transform duration-[260ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]">
          <ButtonShape heightPx={heightPx} />
        </span>
      </span>
      <span
        data-slot="content"
        className={[
          "inline-flex items-center gap-[calc(var(--spacing-base)*2)] relative z-[1]",
          "text-[color:var(--button-label)] transition-colors duration-[220ms] ease-in-out",
        ].join(" ")}
      >
        {leadingIcon}
        {label}
        {trailingIcon}
      </span>
    </>
  );

  const sharedAttributes = {
    className: rootClass,
    "data-button-root": "" as const,
    "data-size": size,
    "data-variant": variant,
  };

  /* The stroke stays visible through the hover fill: the base shape is
     raised above the sliding layer (menu LOG IN, FAQ TALK TO US). */
  const outlinedFirst =
    variant === "outlined" ? { style: { zIndex: 1 } as const } : {};

  if (href === undefined) {
    return (
      <button
        {...sharedAttributes}
        aria-busy={disabled ? true : undefined}
        disabled={disabled}
        onClick={onClick}
        type={type}
      >
        {inner}
      </button>
    );
  }

  if (isProtocolLink) {
    return (
      <a {...sharedAttributes} href={href}>
        {inner}
      </a>
    );
  }

  if (isExternal) {
    return (
      <a
        {...sharedAttributes}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {inner}
      </a>
    );
  }

  return (
    <Link {...sharedAttributes} href={href}>
      {inner}
    </Link>
  );
}
