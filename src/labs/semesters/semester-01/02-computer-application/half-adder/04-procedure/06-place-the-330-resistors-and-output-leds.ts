import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the 330 Ω resistors and output LEDs.",
  body: "Insert the first 330 Ω resistor spanning columns 22–25, row c (Sum path). Insert the green LED with its anode at column 25, row c and cathode at column 26, row c. Insert the second 330 Ω resistor spanning columns 26–29, row c (Carry path). Insert the yellow LED with its anode at column 29, row c and cathode at column 30, row c. Always keep the current-limiting resistor in series before the LED anode.",
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
  ],
  activeInputs: {
    A: 0,
    B: 0,
  },
};
