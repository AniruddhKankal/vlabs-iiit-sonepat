import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect the OR level and the F1 indicator.",
  body: "Connect the outputs of the two AND gates to the two inputs of the OR gate with white wires. Take the OR output through a $330\\,\\Omega$ resistor to the green LED and return the LED cathode to ground. The LED shows $F_1 = AB + AC$.",
  show: [
    "bb", "psu", "w_rail_link_vcc", "w_rail_link_gnd", "and1", "and2", "or1", "w_vcc_and1", "w_gnd_and1", "w_vcc_and2", "w_gnd_and2", "w_vcc_or1", "w_gnd_or1",
    "w_a_and1", "w_b_and1", "w_a_and2", "w_c_and2",
    "w_and1_or1", "w_and2_or1",
    "r_f1", "led_f1", "w_or1_r", "w_r_led_f1", "w_gnd1",
  ],
  highlight: "led_f1",
  activeInputs: { A: 0, B: 0, C: 0 },
  ledBrightness: { led_f1: 0 },
};
