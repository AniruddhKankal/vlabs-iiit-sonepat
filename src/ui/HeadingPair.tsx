// A heading and its supporting body, paired at one gap everywhere — the
// hero and section intros compose this instead of choosing their own.
export function HeadingPair({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={["grid grid-cols-1 [&>*+*]:mt-3", className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
