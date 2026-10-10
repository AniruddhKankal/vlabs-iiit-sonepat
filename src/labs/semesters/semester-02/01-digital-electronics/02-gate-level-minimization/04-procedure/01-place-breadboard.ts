import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the breadboard.",
  body: "Place the 60-column breadboard on the bench. The function to be built is $F(A,B,C) = \\sum m(5,6,7)$, which the K-map minimizes to $F = AB + AC$. Inputs $A$, $B$ and $C$ will be applied at columns 3, 4 and 5.",
  show: ["bb", "psu", "w_rail_link_vcc", "w_rail_link_gnd"],
  highlight: "bb",
};
