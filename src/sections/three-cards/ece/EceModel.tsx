"use client";

import dynamic from "next/dynamic";

import { type EceComponentKind } from "@/labs/previews/EceComponentViewer";

export type EceKind = EceComponentKind;

export const EceModel = dynamic(
  () => import("@/labs/previews/EceViewer").then((m) => m.EceViewer),
  { ssr: false },
);
