import { ArrowUpRight } from "@/icons";
import { color } from "@/tokens";

// The blue outbound arrow that marks external destinations.
export function ExternalArrow() {
  return (
    <span aria-hidden style={{ color: color("blue"), display: "inline-flex" }}>
      <ArrowUpRight sizePx={8} />
    </span>
  );
}
