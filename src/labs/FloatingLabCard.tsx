"use client";

import { useRef, useState, type PointerEvent, type ReactNode } from "react";

type Offset = { x: number; y: number };

type DragSession = {
  pointerId: number;
  startX: number;
  startY: number;
  orig: Offset;
  anchorLeft: number;
  anchorTop: number;
  cardW: number;
  cardH: number;
  boundsW: number;
  boundsH: number;
};

type FloatingLabCardProps = {
  children: ReactNode;
};

function clampOffset(raw: Offset, session: DragSession): Offset {
  const pad = 12;
  const minX = pad - session.anchorLeft;
  const maxX = session.boundsW - session.cardW - pad - session.anchorLeft;
  const minY = pad - session.anchorTop;
  const maxY = session.boundsH - session.cardH - pad - session.anchorTop;

  return {
    x: Math.max(minX, Math.min(raw.x, maxX)),
    y: Math.max(minY, Math.min(raw.y, maxY)),
  };
}

export function FloatingLabCard({ children }: FloatingLabCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<DragSession | null>(null);
  const [offset, setOffset] = useState<Offset>({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const onHandlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 || !cardRef.current) return;
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);

    const card = cardRef.current;
    const parent = card.offsetParent as HTMLElement | null;
    const parentRect = parent?.getBoundingClientRect() ?? {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const rect = card.getBoundingClientRect();

    dragRef.current = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      orig: offset,
      anchorLeft: rect.left - offset.x - parentRect.left,
      anchorTop: rect.top - offset.y - parentRect.top,
      cardW: rect.width,
      cardH: rect.height,
      boundsW: parentRect.width,
      boundsH: parentRect.height,
    };
    setDragging(true);
  };

  const onHandlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== e.pointerId) return;

    const raw = {
      x: drag.orig.x + (e.clientX - drag.startX),
      y: drag.orig.y + (e.clientY - drag.startY),
    };
    setOffset(clampOffset(raw, drag));
  };

  const endDrag = (e: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== e.pointerId) return;
    dragRef.current = null;
    setDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div
      ref={cardRef}
      className="floating-lab-card bg-white/[0.97] rounded-[calc(var(--radius-base)*3)] shadow-[0_2px_16px_rgba(0,0,0,0.10),0_0_0_1px_rgba(0,0,0,0.06)] w-[min(400px,calc(100vw-var(--spacing-base)*12))] max-h-[48vh] absolute z-[100] flex flex-col data-[dragging=true]:select-none"
      style={{
        left: "calc(var(--spacing-base) * 6)",
        top: "calc(var(--spacing-base) * 5)",
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
      data-dragging={dragging ? "true" : "false"}
    >
      <div
        className="floating-lab-card-handle shrink-0 flex items-center justify-center cursor-grab active:cursor-grabbing touch-none"
        style={{ height: "calc(var(--spacing-base) * 4.5)" }}
        onPointerDown={onHandlePointerDown}
        onPointerMove={onHandlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        aria-label="Drag panel"
        role="toolbar"
      >
        <span className="floating-lab-card-grip" aria-hidden />
      </div>

      <div
        className="floating-lab-card-body lab-card-scroll overflow-y-auto min-h-0 flex-1"
        style={{
          padding:
            "0 calc(var(--spacing-base) * 5) calc(var(--spacing-base) * 5)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
