import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Add resistor, LED, and ground return.",
  body: "Insert 330 Ω resistor at col 22, row c. Insert green LED at col 26, row c (anode at col 26, cathode at col 27). Wire: xor3.Y → r_p.p1; r_p.p2 → led_p.anode; led_p.cathode → GND rail. Connect VCC and GND pins of all three ICs to the power rails.",
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
