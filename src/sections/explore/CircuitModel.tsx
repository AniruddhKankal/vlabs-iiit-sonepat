"use client";

import dynamic from "next/dynamic";

export const CircuitModel = dynamic(
  () => import("./CircuitPreview").then((m) => m.CircuitPreview),
  { ssr: false },
);
