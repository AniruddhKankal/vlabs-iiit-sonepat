// Owns the page's horizontal gutter and max content width. SectionShell is
// the standard consumer; page chrome (menu, footer) composes it directly.

// Owns the page's horizontal frame: max content width plus the only
// horizontal gutter on the site. Sections never set their own.
export function Container({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={["site-container", className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </div>
  );
}
