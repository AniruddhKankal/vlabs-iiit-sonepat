// The gap between a section's intro and its content block: one value pair
// across the site (Problem, ThreeCards, FAQ, and onward).
export function SectionStack({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={["grid grid-cols-1 [&>*+*]:mt-10 md:[&>*+*]:mt-20", className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
