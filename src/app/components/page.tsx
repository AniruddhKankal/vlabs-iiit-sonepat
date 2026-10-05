"use client";

import { MenuStyleProvider } from "@/platform/menu-style";
import { Menu } from "@/sections/menu";
import { Footer } from "@/sections/footer";
import {
  Body,
  ButtonShape,
  Eyebrow,
  Heading,
  HeadingPair,
  SectionIntro,
  SectionShell,
  SectionStack,
} from "@/ui";
import { IllustrationCard } from "@/sections/three-cards/IllustrationCard";
import { COMPONENTS_DATA } from "@/sections/components/components.data";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "@/icons";

export default function ComponentsPage() {
  const ACTION_SIZE_PX = 40;
  const [page, setPage] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const cards = Object.values(COMPONENTS_DATA).map((comp) => ({
    heading: comp.name,
    body: comp.tagline,
    illustration: comp.kind,
    actionHref: `/components/${comp.slug}`,
    attribution: {
      role: "Component",
      company: comp.specs[0]?.value || "Detail",
    },
  }));

  const components_per_page = 9;

  const visibleCards = cards.slice(
    page * components_per_page,
    (page + 1) * components_per_page,
  );

  const totalPages = Math.ceil(cards.length / components_per_page);

  const changePage = (nextPage: number, direction: "left" | "right") => {
    if (nextPage === page || isChanging) return;

    setDirection(direction);
    setIsChanging(true);

    setTimeout(() => {
      setPage(nextPage);

      requestAnimationFrame(() => {
        setIsChanging(false);
      });
    }, 180);
  };

  return (
    <>
      <style>{`
        .page-transition {
          will-change: transform, opacity;
        }

        .page-enter {
          animation: page-enter 400ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .page-exit-left {
          animation: page-exit-left 180ms cubic-bezier(0.4, 0, 1, 1);
        }

        .page-exit-right {
          animation: page-exit-right 180ms cubic-bezier(0.4, 0, 1, 1);
        }

        @keyframes page-enter {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes page-exit-left {
          from {
            opacity: 1;
            transform: translateX(0);
          }

          to {
            opacity: 0;
            transform: translateX(-20px);
          }
        }

        @keyframes page-exit-right {
          from {
            opacity: 1;
            transform: translateX(0);
          }

          to {
            opacity: 0;
            transform: translateX(20px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .page-transition {
            animation: none;
          }
        }
      `}</style>
      <MenuStyleProvider>
        <Menu scheme="muted" />
        <main>
          <SectionShell scheme="light">
            <SectionStack>
              <SectionIntro>
                <Eyebrow>Component Library</Eyebrow>
                <HeadingPair>
                  <div className="md:max-w-[921px] [&_[data-accent]]:tracking-[-0.02em]">
                    <Heading as="h1" size="lg" weight="light">
                      Explore all electronics components
                    </Heading>
                  </div>
                  <div className="md:max-w-[571px]">
                    <Body muted size="sm">
                      Interactive 3D models and detailed specifications for
                      every building block in our virtual laboratory.
                    </Body>
                  </div>
                </HeadingPair>
              </SectionIntro>

              <div
                className={`grid gap-[calc(var(--spacing-base)*4)] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 page-transition ${
                  isChanging
                    ? direction === "right"
                      ? "page-exit-left"
                      : "page-exit-right"
                    : "page-enter"
                }`}
              >
                {visibleCards.map((card) => (
                  <IllustrationCard card={card} key={card.illustration} />
                ))}
              </div>

              <div className="flex justify-center items-center mt-8">
                <div className="flex gap-6">
                  <ButtonComponent
                    onClick={() => changePage(Math.max(0, page - 1), "left")}
                    disabled={page === 0 || isChanging}
                    direction="left"
                  />
                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setPage(index)}
                        aria-label={`Go to page ${index + 1}`}
                        className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                          page === index ? "bg-black" : "bg-black/20"
                        }`}
                      />
                    ))}
                  </div>
                  <ButtonComponent
                    onClick={() =>
                      changePage(Math.min(totalPages - 1, page + 1), "right")
                    }
                    disabled={page === totalPages - 1 || isChanging}
                    direction="right"
                  />
                </div>
              </div>
            </SectionStack>
          </SectionShell>
        </main>
        <Footer />
      </MenuStyleProvider>
    </>
  );
}

function ButtonComponent({
  disabled,
  onClick,
  direction,
}: {
  disabled: boolean;
  onClick: () => void;
  direction: string;
}) {
  const isLeft = direction === "left";
  const ACTION_SIZE_PX = 40;
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

        /* Default / Right button */
        .action-link [data-slot='action-hover'] > span {
          transform: translateX(
            calc(-100% - calc(var(--spacing-base) * 4))
          );
          transition: transform 260ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* Left button starts from the RIGHT */
        .action-button--left [data-slot='action-hover'] > span {
          transform: translateX(
            calc(100% + calc(var(--spacing-base) * 4))
          );
        }

        /* Hover: both move into position */
        .action-link:is(:hover, :focus-visible)
          [data-slot='action-hover'] > span {
          transform: translateX(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .action-link [data-slot='action-hover'] > span {
            transition: none;
          }
        }
      `}</style>
      <button
        className={`action-link inline-flex items-center justify-center shrink-0 overflow-hidden relative no-underline text-[var(--color-black-80)] transition-[color,transform] duration-200 ease-[cubic-bezier(0.2,0.8,0.2,1)] 
        ${isLeft ? "action-button--left" : ""}`}
        style={{ width: ACTION_SIZE_PX, height: ACTION_SIZE_PX }}
        disabled={disabled}
        onClick={onClick}
      >
        <ButtonShape heightPx={ACTION_SIZE_PX} outlined mirror={isLeft} />
        <span
          className="absolute inset-0 opacity-[0.05] overflow-hidden pointer-events-none"
          data-slot="action-hover"
        >
          <span className="block h-full w-full">
            <ButtonShape heightPx={ACTION_SIZE_PX} mirror={isLeft} />
          </span>
        </span>
        <span
          className="inline-flex items-center justify-center relative"
          data-slot="action-glyph"
        >
          {isLeft ? <ArrowLeft sizePx={18} /> : <ArrowRight sizePx={18} />}
        </span>
      </button>
    </>
  );
}
