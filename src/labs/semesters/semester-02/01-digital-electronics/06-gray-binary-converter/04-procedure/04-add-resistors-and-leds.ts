import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Add resistors and LEDs.",
  body: "Place r_g3 (col 22, row h) and led_g3 red (col 26, row h) for G3. Place r_g2 (col 8, row c) and led_g2 yellow (col 12, row c) for G2. Place r_g1 (col 15, row c) and led_g1 green (col 19, row c) for G1. Place r_g0 (col 22, row c) and led_g0 blue (col 26, row c) for G0. G3 and G0 are in different banks to avoid net conflicts.",
  show: [
    "bb",
    "xor1",
    "xor2",
    "xor3",
    "w_b3_xor1",
    "w_b3_g3",
    "w_b2_xor1",
    "w_b2_xor2",
    "w_b1_xor2",
    "w_b1_xor3",
    "w_b0_xor3",
    "r_g3",
    "r_g2",
    "r_g1",
    "r_g0",
    "led_g3",
    "led_g2",
    "led_g1",
    "led_g0",
  ],
  activeInputs: {
    B3: 0,
    B2: 0,
    B1: 0,
    B0: 0,
  },
};
