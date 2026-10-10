import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire the inputs to the AND level.",
  body: "Connect input $A$ (red) to the A pins of both AND gates, input $B$ (blue) to the B pin of the first AND gate and input $C$ (orange) to the B pin of the second AND gate. The first AND gate now produces $AB$ and the second produces $AC$.",
  show: [
    "bb", "psu", "w_rail_link_vcc", "w_rail_link_gnd", "and1", "and2", "or1", "w_vcc_and1", "w_gnd_and1", "w_vcc_and2", "w_gnd_and2", "w_vcc_or1", "w_gnd_or1",
    "w_a_and1", "w_b_and1", "w_a_and2", "w_c_and2",
  ],
  highlight: "w_a_and1",
  activeInputs: { A: 0, B: 0, C: 0 },
};
