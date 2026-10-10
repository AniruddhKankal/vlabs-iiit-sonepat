"use client";

import { NavigationMenu } from "@base-ui/react/navigation-menu";
import NextImage from "next/image";
import { useState } from "react";

import { ArrowUpRight } from "@/icons";
import { usePathname } from "next/navigation";
import { ExternalLink } from "@/ui";

import { type MenuNavChild } from "../types/menu-nav-child";

export type MenuDropdownProps = {
  items: readonly MenuNavChild[];
};

export function MenuDropdown({ items }: MenuDropdownProps) {
  const pathname = usePathname();
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? "");
  const activeItem =
    items.find((item) => item.href === activeHref) ?? items[0] ?? null;

  return (
    <div className="grid grid-cols-[minmax(280px,320px)_minmax(320px,360px)]">
      {/* DropdownList */}
      <ul className="grid auto-rows-min grid-cols-1 content-start list-none p-[8px]">
        {items.map((child) => {
          const IconComponent = child.icon;
          const isCurrentPage =
            child.external !== true &&
            (pathname === child.href || pathname.startsWith(`${child.href}/`));
          return (
            <li
              key={child.href}
              onFocus={() => setActiveHref(child.href)}
              onMouseEnter={() => setActiveHref(child.href)}
            >
              <NavigationMenu.Link
                className="grid grid-cols-[auto_1fr] items-center gap-x-[12px] rounded-[calc(var(--radius-base)*2)] p-[12px] no-underline transition-[background] duration-[0.18s] ease-standard hover:bg-[var(--color-black-5)] focus-visible:outline-1 focus-visible:outline-[var(--color-blue)] focus-visible:-outline-offset-1"
                data-active={isCurrentPage ? "" : undefined}
                render={
                  child.external === true ? (
                    <ExternalLink href={child.href} />
                  ) : (
                    <a href={child.href} />
                  )
                }
              >
                {/* IconWrap */}
                <span
                  aria-hidden
                  className="inline-flex items-center justify-center relative h-[32px] w-[32px] rounded-[calc(var(--radius-base)*1.5)] bg-[var(--color-black-5)] text-[var(--ink-muted)] [[data-active]>&]:text-[var(--color-blue)]"
                >
                  <IconComponent size={16} />
                  {child.external === true && (
                    <span
                      aria-hidden
                      className="absolute -bottom-[3px] -right-[3px] inline-flex items-center justify-center h-[12px] w-[12px] rounded-full bg-[var(--surface)] text-[var(--color-blue)] pointer-events-none"
                    >
                      <ArrowUpRight sizePx={6} />
                    </span>
                  )}
                </span>
                {/* TextStack */}
                <span className="grid min-w-0 [&>*+*]:mt-[3px]">
                  {/* ItemLabel */}
                  <span className="font-mono text-[calc(var(--font-base)*3)] font-medium tracking-[0] uppercase leading-[1.1] text-[var(--ink)] before:bg-[var(--color-blue)] before:content-[''] before:hidden before:h-[2px] before:mr-[6px] before:align-middle before:w-[8px] before:inline-block [[data-active]>&]:text-[var(--color-blue)] [[data-active]>&]:before:inline-block">
                    {child.label}
                  </span>
                  {/* ItemDescription */}
                  <span className="font-sans text-[calc(var(--font-base)*3.5)] leading-[1.3] text-[var(--ink-muted)]">
                    {child.description}
                  </span>
                </span>
              </NavigationMenu.Link>
            </li>
          );
        })}
      </ul>
      {activeItem && (
        /* PreviewPanel */
        <div className="flex flex-col gap-[12px] min-h-0 p-[12px] border-l border-[var(--line)]">
          {/* PreviewFrame */}
          <div className="relative flex-1 min-h-[160px] w-full overflow-hidden rounded-[calc(var(--radius-base)*2)] border border-[var(--line)] bg-[var(--color-black-5)]">
            <NextImage
              alt={activeItem.preview.imageAlt}
              fill
              sizes="720px"
              src={activeItem.preview.image}
              style={{
                objectFit: "cover",
                objectPosition: activeItem.preview.imagePosition ?? "top left",
                transform:
                  activeItem.preview.imageScale === undefined
                    ? undefined
                    : `scale(${activeItem.preview.imageScale})`,
                transformOrigin: "center",
              }}
            />
          </div>
          {/* PreviewText */}
          <div className="grid [&>*+*]:mt-[4px]">
            <span className="font-sans text-[calc(var(--font-base)*3.5)] font-medium tracking-[-0.01em] leading-[1.2] text-[var(--ink)]">
              {activeItem.preview.title}
            </span>
            <span className="font-sans text-[calc(var(--font-base)*3)] leading-[1.4] text-[var(--ink-muted)]">
              {activeItem.preview.description}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
