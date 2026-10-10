import { type CSSProperties, type ReactNode } from "react";

export type IconButtonProps = {
  ariaLabel: string;
  children: ReactNode;
  disabled?: boolean;
  sizePx?: number;
  onClick?: () => void;
};

export function IconButton({
  ariaLabel,
  children,
  disabled = false,
  sizePx = 40,
  onClick,
}: IconButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      className="inline-flex items-center justify-center bg-transparent border border-[var(--line-strong)] rounded-[calc(var(--radius-base)*2)] text-[color:var(--ink)] cursor-pointer h-[var(--icon-button-size,40px)] w-[var(--icon-button-size,40px)] hover:bg-[var(--color-black-5)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--color-blue)] focus-visible:outline-offset-1 disabled:border-[var(--line)] disabled:text-[color:var(--line-strong)] disabled:cursor-default disabled:hover:bg-transparent"
      disabled={disabled}
      onClick={onClick}
      style={{ "--icon-button-size": `${sizePx}px` } as CSSProperties}
      type="button"
    >
      {children}
    </button>
  );
}
