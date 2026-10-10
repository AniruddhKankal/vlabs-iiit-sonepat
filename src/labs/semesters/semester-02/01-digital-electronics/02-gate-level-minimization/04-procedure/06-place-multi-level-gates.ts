import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the gates of the multi-level network.",
  body: "Factor $A$ out of $F = AB + AC$ to get $F = A(B + C)$. Insert one OR gate for $B + C$ and one AND gate that combines this with $A$. This **multi-level (factored)** network needs only two gates instead of three.",
  show: [
    "bb", "psu", "w_rail_link_vcc", "w_rail_link_gnd", "and1", "and2", "or1", "w_vcc_and1", "w_gnd_and1", "w_vcc_and2", "w_gnd_and2", "w_vcc_or1", "w_gnd_or1",
    "w_a_and1", "w_b_and1", "w_a_and2", "w_c_and2",
    "w_and1_or1", "w_and2_or1",
    "r_f1", "led_f1", "w_or1_r", "w_r_led_f1", "w_gnd1",
    "or2", "and3", "w_vcc_or2", "w_gnd_or2", "w_vcc_and3", "w_gnd_and3",
  ],
  highlight: "or2",
  activeInputs: { A: 0, B: 0, C: 0 },
  ledBrightness: { led_f1: 0 },
};
