import { PlusMark } from "@/icons";

export function MarkedDivider() {
  return (
    <div
      className="flex items-center gap-1.5 w-full text-[color:var(--color-blue)] md:flex-col md:h-full md:w-auto"
      role="separator"
    >
      <PlusMark sizePx={12} />
      <div
        className="flex-1 h-px min-h-px min-w-0 bg-[var(--marked-divider-line,var(--line))] md:h-auto md:min-h-0 md:min-w-px md:w-px"
        aria-hidden
      />
      <PlusMark sizePx={12} />
    </div>
  );
}
