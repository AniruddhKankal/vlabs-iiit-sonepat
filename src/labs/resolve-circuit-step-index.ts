import { ALL_CONTENTS } from "@/labs/content";
import { type ProcedureSection } from "@/labs/lab-content.types";
import { type Circuit } from "@/labs/types";

function getProcedureSection(circuitId: string): ProcedureSection | undefined {
  const procedure = ALL_CONTENTS[circuitId]?.sections.find(
    (section): section is ProcedureSection => section.type === "procedure",
  );
  return procedure;
}

/** Map a procedure step index to the circuit step the lab scene should show. */
export function resolveProcedureCircuitStepIndex(
  circuit: Circuit,
  procedureStepIndex: number,
): number {
  const maxIndex = Math.max(circuit.steps.length - 1, 0);
  const procedure = getProcedureSection(circuit.id);
  if (!procedure) {
    return Math.min(procedureStepIndex, maxIndex);
  }

  const step = procedure.steps[procedureStepIndex];
  if (!step) {
    return maxIndex;
  }

  if (step.show !== undefined) {
    return Math.min(procedureStepIndex, maxIndex);
  }

  const mapped = step.circuitStepIndex ?? procedureStepIndex;
  return Math.min(mapped, maxIndex);
}

/** Final built circuit — the last procedure step's scene, when lab content exists. */
export function resolveFinalCircuitStepIndex(circuit: Circuit): number {
  const procedure = getProcedureSection(circuit.id);
  if (!procedure || procedure.steps.length === 0) {
    return Math.max(circuit.steps.length - 1, 0);
  }

  return resolveProcedureCircuitStepIndex(circuit, procedure.steps.length - 1);
}
