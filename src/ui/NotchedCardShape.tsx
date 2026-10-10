import { type CSSProperties } from "react";

import { type Scheme, semanticColor } from "@/tokens";

const CAP_HEIGHT_PX = 20;

const LEFT_SLOPE_WIDTH_PX = 74;
const RIGHT_SLOPE_WIDTH_PX = 73;

const LEFT_SLOPE_PATH =
  "M0 0 C4.197 0 8.369 0.66 12.361 1.958 L61.861 18.042 A40 40 0 0 0 74.222 20 L0 20 Z";
const RIGHT_SLOPE_PATH =
  "M0 20 A40 40 0 0 1 12.63 17.953 L60.418 2.047 A40 40 0 0 1 73.048 0 L73.048 20 Z";

const SCHEME_VARS: Record<Scheme, CSSProperties> = {
  light: {
    "--surface": "var(--color-white)",
    "--ink": "var(--color-black)",
    "--ink-muted": "var(--color-black-60)",
    "--ink-subtle": "var(--color-black-40)",
    "--line": "var(--color-black-10)",
    "--line-strong": "var(--color-black-20)",
    "--divider": "var(--color-black-40)",
  } as CSSProperties,
  muted: {
    "--surface": "var(--color-neutral)",
    "--ink": "var(--color-black)",
    "--ink-muted": "var(--color-black-60)",
    "--ink-subtle": "var(--color-black-40)",
    "--line": "var(--color-black-10)",
    "--line-strong": "var(--color-black-20)",
    "--divider": "var(--color-black-40)",
  } as CSSProperties,
  dark: {
    "--surface": "var(--color-black)",
    "--ink": "var(--color-white)",
    "--ink-muted": "var(--color-white-60)",
    "--ink-subtle": "var(--color-white-40)",
    "--line": "var(--color-white-10)",
    "--line-strong": "var(--color-white-20)",
    "--divider": "var(--color-white-40)",
  } as CSSProperties,
};

export function NotchedCardShape({
  cardScheme = "light",
}: {
  cardScheme?: Scheme;
}) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none -z-[1]"
      style={SCHEME_VARS[cardScheme]}
    >
      <div className="flex h-5 absolute left-0 right-0 top-0 [&_svg]:block [&_svg]:shrink-0 [&_svg]:-mx-px [&_svg]:relative">
        <div
          className="bg-[var(--surface)] basis-0 min-w-0"
          style={{ flexGrow: 344 }}
          data-edge="left"
        />
        <svg
          fill="none"
          height={CAP_HEIGHT_PX}
          preserveAspectRatio="none"
          viewBox={`0 0 74.222 ${CAP_HEIGHT_PX}`}
          width={LEFT_SLOPE_WIDTH_PX}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={LEFT_SLOPE_PATH} fill={semanticColor.surface} />
        </svg>
        <div
          className="basis-0 min-w-0 max-w-[422px]"
          style={{ flexGrow: 518 }}
        />
        <svg
          fill="none"
          height={CAP_HEIGHT_PX}
          preserveAspectRatio="none"
          viewBox={`0 0 73.048 ${CAP_HEIGHT_PX}`}
          width={RIGHT_SLOPE_WIDTH_PX}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={RIGHT_SLOPE_PATH} fill={semanticColor.surface} />
        </svg>
        <div
          className="bg-[var(--surface)] basis-0 min-w-0"
          style={{ flexGrow: 343 }}
          data-edge="right"
        />
      </div>
      <div className="absolute left-0 right-0 bottom-0 top-[19px] bg-[var(--surface)]" />
    </div>
  );
}
