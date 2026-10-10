import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Test: B=0000 → P=0 (even parity).",
  body: "Set all four DIP switches LOW (0000). XOR chain: 0⊕0=0, 0⊕0=0, 0⊕0=0. P=0. LED is OFF. Total 1s in transmitted word (0000 0) = 0, which is even. Correct.",
  show: [
    "bb",
    "xor1",
    "xor2",
    "xor3",
    "w_b3_xor1",
    "w_b2_xor1",
    "w_b1_xor2",
    "w_b0_xor2",
    "w_xor1_xor3",
    "w_xor2_xor3",
    "r_p",
    "led_p",
    "w_xor3_rp",
    "w_rp_led",
    "w_led_gnd",
  ],
  activeInputs: {
    B3: 0,
    B2: 0,
    B1: 0,
    B0: 0,
  },
};
