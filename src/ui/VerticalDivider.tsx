import { semanticColor } from "@/tokens";

// The 10px hairline that separates inline items (nav groups, social chips).
export function VerticalDivider() {
  return (
    <span
      style={{
        backgroundColor: semanticColor.divider,
        flexShrink: 0,
        height: 10,
        width: 1,
      }}
    />
  );
}
