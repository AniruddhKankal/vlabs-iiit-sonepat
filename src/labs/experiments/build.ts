import {
  type LabContent,
  type LabSection,
  type ProcedureSection,
} from "@/labs/lab-content.types";
import { type Circuit } from "@/labs/types";

import { type ExperimentDefinition, type SceneProcedureStep } from "./types";

/** Procedure belongs after apparatus (04), before simulation / observations (05+). */
function procedureInsertIndex(sections: readonly LabSection[]): number {
  const apparatusIdx = sections.findIndex((s) => s.type === "apparatus");
  if (apparatusIdx >= 0) return apparatusIdx + 1;

  const afterTheory = sections.findIndex(
    (s) =>
      s.type === "simulation" ||
      s.type === "code-lab" ||
      s.type === "observation" ||
      s.type === "conclusion",
  );
  if (afterTheory >= 0) return afterTheory;

  return sections.length;
}

function toCircuitStep(step: SceneProcedureStep) {
  return {
    title: step.label,
    body: step.body,
    show: step.show,
    highlight: step.highlight,
    activeInputs: step.activeInputs,
    supplyVoltage: step.supplyVoltage,
    readings: step.readings,
    ledBrightness: step.ledBrightness,
  };
}

export function buildCircuit(experiment: ExperimentDefinition): Circuit {
  return {
    id: experiment.id,
    title: experiment.title,
    description: experiment.description,
    components: experiment.components,
    steps: experiment.procedureSteps.map(toCircuitStep),
    truthTable: experiment.truthTable,
  };
}

export function buildLabContent(experiment: ExperimentDefinition): LabContent {
  const procedure: ProcedureSection = {
    id: "procedure",
    type: "procedure",
    title: "Procedure",
    steps: experiment.procedureSteps,
  };

  const labType = experiment.labType ?? "breadboard";

  let sections = [...experiment.sections];
  if (experiment.procedureSteps.length > 0) {
    const at = procedureInsertIndex(sections);
    sections = [...sections.slice(0, at), procedure, ...sections.slice(at)];
  }

  return {
    id: experiment.id,
    title: experiment.title,
    circuitId: labType === "breadboard" ? experiment.id : undefined,
    labType: labType === "breadboard" ? undefined : labType,
    sections,
  };
}

/** True when procedure steps carry their own `show` state (no circuitStepIndex indirection). */
export function hasUnifiedProcedureSteps(steps: SceneProcedureStep[]): boolean {
  return steps.length > 0 && steps.every((step) => step.show !== undefined);
}
