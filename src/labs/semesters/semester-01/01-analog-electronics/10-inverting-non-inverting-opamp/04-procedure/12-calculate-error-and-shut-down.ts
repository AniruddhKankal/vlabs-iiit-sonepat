import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Calculate the percentage error and shut down.",
  body: "For every row of the observation table calculate the percentage error = |theoretical gain − measured gain| / |theoretical gain| × 100. Note the phase relationship of each circuit. Finally reduce the function generator amplitude to zero, switch off the power supply, the function generator and the oscilloscope, and remove the circuit from the breadboard.",
  show: [],
};
