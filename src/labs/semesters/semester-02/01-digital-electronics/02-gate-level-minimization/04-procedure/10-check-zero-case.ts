import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Confirm both outputs are 0 when $A = 0$.",
  body: "Apply $A = 0$, $B = 1$, $C = 1$. Both AND gates have a 0 input, so $F_1 = 0$, and $F_2 = 0 \\cdot (B + C) = 0$. Both LEDs are off. When $A = 0$ the output is always 0 whatever $B$ and $C$ are. The two columns of the observation table are identical, so the factored network is equivalent to the AND-OR network while using one gate fewer.",
  show: [
    "bb", "psu", "w_rail_link_vcc", "w_rail_link_gnd", "and1", "and2", "or1", "w_vcc_and1", "w_gnd_and1", "w_vcc_and2", "w_gnd_and2", "w_vcc_or1", "w_gnd_or1", "or2", "and3", "w_vcc_or2", "w_gnd_or2", "w_vcc_and3", "w_gnd_and3",
    "r_f1", "led_f1", "r_f2", "led_f2",
    "w_a_and1", "w_b_and1", "w_a_and2", "w_c_and2",
    "w_and1_or1", "w_and2_or1", "w_or1_r", "w_r_led_f1", "w_gnd1",
    "w_b_or2", "w_c_or2", "w_or2_and3", "w_a_and3",
    "w_and3_r", "w_r_led_f2", "w_gnd2",
  ],
  highlight: "led_f1",
  activeInputs: { A: 0, B: 1, C: 1 },
  ledBrightness: { led_f1: 0, led_f2: 0 },
};
