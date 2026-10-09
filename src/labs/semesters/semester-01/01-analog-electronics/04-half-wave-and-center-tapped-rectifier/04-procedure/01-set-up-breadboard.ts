import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Set up the solderless breadboard and identify the power rails.",
  body:
    "Place the 830-point solderless breadboard on a stable work surface. " +
    "Identify the upper and lower horizontal power distribution buses (+ and −) running along the edges, " +
    "as well as the central tie-point terminal strips. " +
    "Designate the top ground rail (gnd_top) as the common circuit ground reference (0 V) to which the transformer center tap returns.",
  show: ["bb"],
};
