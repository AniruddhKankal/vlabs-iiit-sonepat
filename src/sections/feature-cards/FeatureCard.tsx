"use client";

import {
  color,
  FONT_WEIGHT,
  fontFamily,
  radius,
  typeRampDeclarations,
} from "@/tokens";

function parseTypeRamp(
  ramp: Parameters<typeof typeRampDeclarations>[0],
): React.CSSProperties {
  const css = typeRampDeclarations(ramp);
  return {
    fontSize: css.match(/font-size:\s*(.+?);/)?.[1],
    lineHeight: css.match(/line-height:\s*(.+?);/)?.[1],
  };
}
import { Body } from "@/ui";
import { EceViewer } from "@/labs/previews/EceViewer";
import { type FeatureCardRecord } from "./feature-cards.data";

export function FeatureCard({ card }: { card: FeatureCardRecord }) {
  return (
    <div
      className="grid h-full min-w-0 grid-cols-1 grid-rows-[auto_auto] overflow-hidden"
      style={{
        backgroundColor: color("black-5"),
        border: `1px solid ${color("black-20")}`,
        borderRadius: radius(2),
      }}
    >
      <div className="box-border w-full px-4 pt-4">
        <div
          className="relative w-full overflow-hidden rounded-sm"
          style={{
            aspectRatio: "411 / 360",
            backgroundColor: color("black-10"),
          }}
        >
          <EceViewer kind={card.component} background="#ffffff" />
        </div>
      </div>
      <div className="grid grid-cols-1 px-4 pb-4 pt-3 [&>*+*]:mt-2">
        <div className="grid items-center gap-x-2 grid-cols-[auto_minmax(0,1fr)]">
          <span
            className="whitespace-nowrap font-mono text-[10px] font-medium tracking-[0.05em]"
            style={{
              background: color("blue"),
              borderRadius: radius(1),
              color: color("white"),
              padding: "2px 7px",
            }}
          >
            {card.label}
          </span>
          <h3
            className="min-w-0 font-sans font-medium"
            style={parseTypeRamp("headingXs")}
          >
            {card.heading}
          </h3>
        </div>
        <Body size="sm">{card.body}</Body>
      </div>
    </div>
  );
}
