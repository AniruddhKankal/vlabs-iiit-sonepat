import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Test all four input combinations.",
  body: "Toggle inputs through all four states and observe the LEDs:\nA=0, B=0 → Sum=0 (green off), Carry=0 (yellow off)\nA=0, B=1 → Sum=1 (green ON), Carry=0 (yellow off)\nA=1, B=0 → Sum=1 (green ON), Carry=0 (yellow off)\nA=1, B=1 → Sum=0 (green off), Carry=1 (yellow ON)\nRecord your observations in the table. Compare with the expected truth table.",
  show: [
    "bb",
    "xor1",
    "and1",
    "w_a_xor",
    "w_a_and",
    "w_b_xor",
    "w_b_and",
    "r_sum",
    "r_carry",
    "led_sum",
    "led_carry",
    "w_xor_out",
    "w_sum_led",
    "w_and_out",
    "w_carry_led",
    "w_sum_gnd",
    "w_carry_gnd",
  ],
  activeInputs: {
    A: 0,
    B: 0,
  },
};
