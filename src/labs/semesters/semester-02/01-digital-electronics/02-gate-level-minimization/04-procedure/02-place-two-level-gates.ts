import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the gates of the two-level network.",
  body: "Insert two AND gates (74HC08) and one OR gate (74HC32) in row e, leaving at least two empty columns between them. The two AND gates form the product terms $AB$ and $AC$. The OR gate adds them. This is the **two-level (AND-OR)** network for $F_1 = AB + AC$.",
  show: [
    "bb",
    "psu",
    "w_rail_link_vcc",
    "w_rail_link_gnd",
    "and1",
    "and2",
    "or1",
    "w_vcc_and1",
    "w_gnd_and1",
    "w_vcc_and2",
    "w_gnd_and2",
    "w_vcc_or1",
    "w_gnd_or1",
  ],
  highlight: "and1",
};
