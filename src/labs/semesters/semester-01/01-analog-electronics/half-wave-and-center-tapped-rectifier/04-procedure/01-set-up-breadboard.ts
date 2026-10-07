import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Set up the breadboard and identify power rails.",
  body:
    "Place the 830-point solderless breadboard on a stable, level work surface. " +
    "Identify the upper and lower horizontal power distribution buses (+ and −) running along the edges, " +
    "as well as the central tie-point terminal strips divided by the center divider notch. " +
    "Designate the top blue rail as the common circuit ground reference (GND) to which the center-tap will return.",
  show: ["bb"],
};
