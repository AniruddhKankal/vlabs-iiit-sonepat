import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect LED output indicators",
  body: "Connect the Difference output (XOR pin 3) through a 330 Ω resistor to the anode of the green LED; cathode to GND. Connect the Borrow output (AND pin 3) through a 330 Ω resistor to the anode of the red LED; cathode to GND. Verify the LED orientation — the flat side (cathode) connects to GND. The green LED indicates D and the red LED indicates Bout.",
  show: [
    "bb",
    "xor1",
    "not1",
    "and1",
    "w_a_xor",
    "w_b_xor",
    "w_a_not",
    "w_b_and",
  ],
  activeInputs: {
    A: 0,
    B: 0,
  },
};
