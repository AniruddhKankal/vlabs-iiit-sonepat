"use client";

import dynamic from "next/dynamic";

import { ALL_CIRCUITS } from "@/labs/circuits/index";
import { resolveFinalCircuitStepIndex } from "@/labs/resolve-circuit-step-index";

const LabSceneCanvas = dynamic(
  () => import("@/labs/LabScene").then((m) => m.LabSceneCanvas),
  { ssr: false },
);

type Props = { circuitId: string };

export function CircuitPreview({ circuitId }: Props) {
  const circuit = ALL_CIRCUITS.find((item) => item.id === circuitId);
  if (!circuit) {
    return <div className="h-full w-full bg-[#f7f6f3]" aria-hidden />;
  }

  const finalStepIndex = resolveFinalCircuitStepIndex(circuit);

  return (
    <div className="h-full w-full">
      <LabSceneCanvas
        activeStepIndex={finalStepIndex}
        circuit={circuit}
        previewMode
        showControlsHint={false}
      />
    </div>
  );
}
