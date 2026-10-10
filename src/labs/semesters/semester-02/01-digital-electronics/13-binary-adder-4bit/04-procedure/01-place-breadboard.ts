import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the long breadboard.",
  body: "Place the 60-column breadboard on the workbench. A 4-bit adder needs five logic ICs and nine input points, so the standard 30-column board is too small.",
  show: ["bb"],
  highlight: "bb",
};
