import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Compare the two networks.",
  body: "Apply $A = 1$, $B = 0$, $C = 1$. The first AND gate output is 0 but the second is 1, so $F_1 = 1$. In the factored network $B + C = 1$, so $F_2 = A(B + C) = 1$. Both LEDs glow. Repeat for all eight combinations and record $F_1$ and $F_2$ in the observation table.",
  show: [
    "bb", "psu", "w_rail_link_vcc", "w_rail_link_gnd", "and1", "and2", "or1", "w_vcc_and1", "w_gnd_and1", "w_vcc_and2", "w_gnd_and2", "w_vcc_or1", "w_gnd_or1",
    "w_a_and1", "w_b_and1", "w_a_and2", "w_c_and2",
    "w_and1_or1", "w_and2_or1",
    "r_f1", "led_f1", "w_or1_r", "w_r_led_f1", "w_gnd1",
    "or2", "and3", "w_vcc_or2", "w_gnd_or2", "w_vcc_and3", "w_gnd_and3",
    "w_b_or2", "w_c_or2", "w_or2_and3", "w_a_and3",
    "r_f2", "led_f2", "w_and3_r", "w_r_led_f2", "w_gnd2",
  ],
  highlight: "led_f2",
  activeInputs: { A: 1, B: 0, C: 1 },
  ledBrightness: { led_f1: 1, led_f2: 1 },
};
