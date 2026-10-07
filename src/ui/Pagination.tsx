"use client";

import { ArrowLeft, ArrowRight } from "@/icons";
import { ButtonShape } from "@/ui";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number, direction: "left" | "right") => void;
};

const ACTION_SIZE_PX = 40;

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const goToPage = (page: number) => {
    if (page === currentPage) return;

    onPageChange(page, page > currentPage ? "right" : "left");
  };

  return (
    <div className="mt-8 flex items-center justify-center">
      <div className="flex items-center gap-6">
        <PaginationButton
          direction="left"
          disabled={currentPage === 0}
          onClick={() => goToPage(currentPage - 1)}
        />

        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToPage(index)}
              aria-label={`Go to page ${index + 1}`}
              aria-current={currentPage === index ? "page" : undefined}
              className="
                h-2 w-2 rounded-full
                bg-black/20
                transition-colors duration-200
                hover:bg-black/40
                focus-visible:outline
                focus-visible:outline-1
                focus-visible:outline-[var(--color-blue)]
                focus-visible:outline-offset-2
                aria-[current=page]:bg-black
              "
            />
          ))}
        </div>

        <PaginationButton
          direction="right"
          disabled={currentPage === totalPages - 1}
          onClick={() => goToPage(currentPage + 1)}
        />
      </div>
    </div>
  );
}

function PaginationButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}) {
  const isLeft = direction === "left";

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-label={isLeft ? "Previous page" : "Next page"}
      className="
        group relative inline-flex shrink-0
        items-center justify-center
        overflow-hidden
        text-[var(--color-black-80)]
        transition-[color,transform]
        duration-200
        ease-[cubic-bezier(0.2,0.8,0.2,1)]
        hover:scale-[1.05]
        active:scale-[0.96]
        disabled:pointer-events-none
        disabled:opacity-40
        focus-visible:outline
        focus-visible:outline-1
        focus-visible:outline-[var(--color-blue)]
        focus-visible:outline-offset-1
      "
      style={{
        width: ACTION_SIZE_PX,
        height: ACTION_SIZE_PX,
      }}
    >
      <span
        className="
          absolute inset-0
          [--button-fill:transparent]
          [--button-stroke:var(--color-black-20)]
        "
      >
        <ButtonShape heightPx={ACTION_SIZE_PX} outlined mirror={isLeft} />
      </span>

      <span
        className="
          pointer-events-none
          absolute inset-0
          overflow-hidden
          opacity-0
          transition-opacity duration-200
          group-hover:opacity-100
          group-focus-visible:opacity-100
          [--button-fill:var(--color-gray-200)]
          [--button-stroke:transparent]
        "
      >
        <span
          className={`
            block h-full w-full
            transition-transform
            duration-[260ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isLeft
                ? "translate-x-[calc(100%+calc(var(--spacing-base)*4))]"
                : "-translate-x-[calc(100%+calc(var(--spacing-base)*4))]"
            }
            group-hover:translate-x-0
            group-focus-visible:translate-x-0
          `}
        >
          <ButtonShape heightPx={ACTION_SIZE_PX} mirror={isLeft} />
        </span>
      </span>

      <span className="relative z-10 inline-flex items-center justify-center">
        {isLeft ? <ArrowLeft sizePx={18} /> : <ArrowRight sizePx={18} />}
      </span>
    </button>
  );
}
