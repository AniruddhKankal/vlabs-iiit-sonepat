import { type CSSProperties } from "react";

export type GuideCrosshairProps = {
  // Bounds the lines to the content max-width instead of the full section, so
  // they stay within the content column rather than bleeding into the gutters.
  contained?: boolean;
  crossX: string;
  crossY: string;
  // Scenes that draw their own full-height vertical guide disable these.
  verticalLines?: boolean;
};

export function GuideCrosshair({
  contained = false,
  crossX,
  crossY,
  verticalLines = true,
}: GuideCrosshairProps) {
  const lineBase = "absolute bg-[var(--line)]";

  const crosshair = (
    <div
      aria-hidden
      className="hidden md:block md:absolute md:inset-0 md:pointer-events-none"
      style={
        {
          "--cross-x": crossX,
          "--cross-y": crossY,
          "--cross-gap": "18px",
        } as CSSProperties
      }
    >
      {/* h-left */}
      <span
        className={`${lineBase} h-px left-0 top-[var(--cross-y)] w-[calc(var(--cross-x)-var(--cross-gap))]`}
      />
      {/* h-right */}
      <span
        className={`${lineBase} h-px right-0 top-[var(--cross-y)] w-[calc(100%-var(--cross-x)-var(--cross-gap))]`}
      />
      {/* v-top */}
      {verticalLines && (
        <span
          className={`${lineBase} h-[calc(var(--cross-y)-var(--cross-gap))] left-[var(--cross-x)] top-0 w-px`}
        />
      )}
      {/* v-bottom */}
      {verticalLines && (
        <span
          className={`${lineBase} h-[calc(100%-var(--cross-y)-var(--cross-gap))] left-[var(--cross-x)] top-[calc(var(--cross-y)+var(--cross-gap))] w-px`}
        />
      )}
      {/* v-eraser: re-creates the designed gap around the plus when a scene
         draws its own full-height guide behind this crosshair */}
      {!verticalLines && (
        <span className="absolute bg-[var(--surface)] h-[calc(var(--cross-gap)*2)] left-[var(--cross-x)] top-[var(--cross-y)] w-[3px] -translate-x-1/2 -translate-y-1/2" />
      )}
      {/* CSS-drawn full-bleed plus */}
      <span className="absolute h-3 w-3 left-[var(--cross-x)] top-[var(--cross-y)] -translate-x-1/2 -translate-y-1/2 before:absolute before:bg-[var(--color-blue)] before:h-full before:left-1/2 before:top-0 before:-translate-x-1/2 before:w-px before:content-[''] after:absolute after:bg-[var(--color-blue)] after:h-px after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-full after:content-['']" />
    </div>
  );

  return contained ? (
    <div className="h-full mx-auto max-w-[1512px] relative w-full">
      {crosshair}
    </div>
  ) : (
    crosshair
  );
}
