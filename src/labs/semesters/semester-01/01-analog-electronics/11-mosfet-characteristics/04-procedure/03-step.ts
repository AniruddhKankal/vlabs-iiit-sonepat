import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the drain resistor and the MOSFET",
  body: "Insert the 100 Ω drain resistor $R_D$ and the N-channel MOSFET. Identify its Drain (D), Gate (G) and Source (S) from the datasheet before powering anything.",
  show: ["bb", "psu_vds", "r_d", "q1"],
  highlight: "q1",
};
