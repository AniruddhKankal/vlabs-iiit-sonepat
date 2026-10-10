import { EceModel } from "./ece/EceModel";

import { ArrowRight } from "@/icons";

import { Body } from "@/ui";
import { ButtonShape } from "@/ui/ButtonShape";

import { CardShape } from "./CardShape";
import { type IllustrationCardRecord } from "./three-cards.data";

const ACTION_SIZE_PX = 40;

export function IllustrationCard({ card }: { card: IllustrationCardRecord }) {
  return (
    <div className="bg-[var(--color-white)] rounded-[calc(var(--radius-base)*2)] flex flex-col gap-[calc(var(--spacing-base)*4)] h-full isolate min-h-0 min-w-0 p-[calc(var(--spacing-base)*4)] relative">
      <CardShape />

      {/* CardHeading — typeRampDeclarations('headingXs') */}
      <h3
        className="font-[var(--font-sans),sans-serif] font-medium"
        style={{
          fontSize: "clamp(1.125rem, 0.9415rem + 0.753vw, 1.375rem)",
          lineHeight: "clamp(1.5rem, 1.3165rem + 0.753vw, 1.75rem)",
        }}
      >
        {card.heading}
      </h3>

      {/* CardRule */}
      <div
        className="border-t border-dotted border-[var(--divider)] h-0 w-full"
        aria-hidden
      />

      {/* CardStage */}
      <div
        className="bg-[var(--color-white)] rounded-[calc(var(--radius-base)*2)] h-[240px] overflow-hidden w-full"
        data-illustration={card.illustration}
      >
        <EceModel kind={card.illustration} />
      </div>

      {/* CardRule */}
      <div
        className="border-t border-dotted border-[var(--divider)] h-0 w-full"
        aria-hidden
      />

      {/* CardLower */}
      <div className="flex flex-1 flex-col gap-[calc(var(--spacing-base)*4)] min-w-0">
        <Body size="sm">{card.body}</Body>
        {card.attribution ? (
          <footer className="grid items-center gap-x-[calc(var(--spacing-base)*2)] grid-cols-[auto_auto_auto_1fr] mt-auto">
            <Body size="xs" weight="medium">
              {card.attribution.role}
            </Body>

            {/* AttributionPipe */}
            <span
              className="block border-l border-[var(--divider)] h-[21px] w-0"
              aria-hidden
            />

            <Body size="xs">{card.attribution.company}</Body>

            {card.actionHref !== undefined ? (
              <div className="justify-self-end">
                <ActionLink
                  label={card.attribution.company}
                  href={card.actionHref}
                />
              </div>
            ) : null}
          </footer>
        ) : null}
      </div>
    </div>
  );
}

function ActionLink({ label, href }: { label: string; href: string }) {
  return (
    <>
      <style>{`
        .action-link {
          --button-fill: transparent;
          --button-stroke: var(--color-black-20);
        }
        .action-link:is(:hover, :focus-visible) {
          color: var(--color-black);
        }
        .action-link:is(:hover, :focus-visible) [data-slot='action-hover'] > span {
          transform: translateX(0);
        }
        .action-link:hover {
          transform: scale(1.05);
        }
        .action-link:active {
          transform: scale(0.96);
        }
        .action-link:focus-visible {
          outline: 1px solid var(--color-blue);
          outline-offset: 1px;
        }
        .action-link [data-slot='action-hover'] {
          --button-fill: var(--color-black);
          --button-stroke: transparent;
        }
        .action-link [data-slot='action-hover'] > span {
          transform: translateX(calc(-100% - calc(var(--spacing-base) * 4)));
          transition: transform 260ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        @media (prefers-reduced-motion: reduce) {
          .action-link [data-slot='action-hover'] > span {
            transition: none;
          }
        }
      `}</style>
      <a
        className="action-link inline-flex items-center justify-center shrink-0 overflow-hidden relative no-underline text-[var(--color-black-80)] transition-[color,transform] duration-200 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
        style={{ width: ACTION_SIZE_PX, height: ACTION_SIZE_PX }}
        aria-label={`View ${label} details`}
        href={href}
      >
        <ButtonShape heightPx={ACTION_SIZE_PX} outlined />
        <span
          className="absolute inset-0 opacity-[0.05] overflow-hidden pointer-events-none"
          data-slot="action-hover"
        >
          <span className="block h-full w-full">
            <ButtonShape heightPx={ACTION_SIZE_PX} />
          </span>
        </span>
        <span
          className="inline-flex items-center justify-center relative"
          data-slot="action-glyph"
        >
          <ArrowRight sizePx={18} />
        </span>
      </a>
    </>
  );
}
