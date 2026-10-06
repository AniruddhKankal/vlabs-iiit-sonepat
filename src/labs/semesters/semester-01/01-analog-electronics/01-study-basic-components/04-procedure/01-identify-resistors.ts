import { type SceneProcedureStep } from "@/labs/experiments/types";
export const step: SceneProcedureStep = {
  label: "Identify resistors using colour-band code.",
  body: "Hold the resistor with the tolerance band (gold/silver) on the right. Read first three bands: digit, digit, multiplier. Confirm with DMM on resistance mode. Record nominal value, tolerance, and measured value.",
  show: ["bb"],
};
