// The intro stack every section shares: eyebrow, heading, optional CTAs,
// with one margin between them. Sections never set this rhythm themselves —
// that is how Problem and FAQ stay identical. Margins, not gap: spacing
// owned by flow survives wrappers and stays one inspectable property.
export function SectionIntro({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={["grid grid-cols-1 [&>*+*]:mt-6", className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
