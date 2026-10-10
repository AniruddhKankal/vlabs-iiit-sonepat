import { ExternalArrow, ExternalLink, VerticalDivider } from "@/ui";

import { type MenuSocialLink } from "../types/menu-social-link";

export type MenuSocialProps = {
  links: readonly MenuSocialLink[];
};

export function MenuSocial({ links }: MenuSocialProps) {
  const desktopLinks = links.filter((link) => link.showInDesktop);

  return (
    <nav
      aria-label="Community"
      className="hidden md:grid md:auto-cols-auto md:grid-flow-col md:items-center md:justify-end md:gap-x-[20px]"
    >
      {desktopLinks.map((link, index) => {
        const IconComponent = link.icon;
        return (
          <span className="flex items-center gap-x-[20px]" key={link.href}>
            {index > 0 && <VerticalDivider aria-hidden />}
            <ExternalLink
              aria-label={link.ariaLabel}
              className="grid auto-cols-auto grid-flow-col items-center gap-x-[8px] font-sans text-[calc(var(--font-base)*3)] font-medium text-[var(--ink)] no-underline whitespace-nowrap hover:text-[var(--color-blue)] focus-visible:outline-1 focus-visible:outline-[var(--color-blue)] focus-visible:outline-offset-1"
              href={link.href}
            >
              <IconComponent aria-hidden size={14} />
              <ExternalArrow />
            </ExternalLink>
          </span>
        );
      })}
    </nav>
  );
}
