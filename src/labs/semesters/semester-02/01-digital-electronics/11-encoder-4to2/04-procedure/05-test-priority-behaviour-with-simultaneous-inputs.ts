import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Test priority behaviour with simultaneous inputs",
  body: "Activate two switches simultaneously (e.g., I1=1 and I3=1). Verify the output encodes I3 (the higher priority): A=1, B=1 (binary 11). Try I0=1 and I2=1 simultaneously — output should be A=1, B=0 (encoding I2=binary 10, since I2 > I0). This demonstrates priority encoding behaviour. Document all simultaneous-input combinations tested.",
  show: [
    "bb",
    "or_a",
    "or_b",
    "w_i2_ora",
    "w_i3_ora",
    "w_i3_orb",
    "w_i1_orb",
    "r_a",
    "r_b",
    "led_a",
    "led_b",
    "w_a_r",
    "w_a_led",
    "w_b_r",
    "w_b_led",
    "w_gnd1",
    "w_gnd2",
  ],
  highlight: "led_a",
  activeInputs: {
    I0: 0,
    I1: 0,
    I2: 1,
    I3: 0,
  },
};
