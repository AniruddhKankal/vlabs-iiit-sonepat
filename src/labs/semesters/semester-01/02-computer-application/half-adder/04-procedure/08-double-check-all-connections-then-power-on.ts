import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Double-check all connections, then power on.",
  body: "Before applying power, trace every connection against the schematic. Check IC supply pins (VCC and GND) are connected. Verify no wire bridges across the centre gap. Set input switches A=0, B=0 (both LOW). Connect +5 V DC supply to the VCC rail and GND to the GND rail. Neither LED should light — this matches the truth table row A=0, B=0 → Sum=0, Carry=0.",
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
  ],
  activeInputs: {
    A: 0,
    B: 0,
  },
};
