import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the ICs and power them",
  body: "Mount the four XOR gates that act as inverters ($xor\\_b1$ at col 3 row e, $xor\\_b2$ at col 3 row h, $xor\\_b3$ at col 7 row e, $xor\\_b4$ at col 7 row h) and the 74HC283 adder at col 13. Tie pin B of each XOR to the +5 V rail with a red wire so each XOR works as a NOT gate; connect the adder VCC (pin 16, col 13 row f) to +5 V and its GND (pin 8, col 20 row e) to ground.",
  show: [
    "bb",
    "xor_b1",
    "xor_b2",
    "xor_b3",
    "xor_b4",
    "w_vcc_xb1",
    "w_vcc_xb2",
    "w_vcc_xb3",
    "w_vcc_xb4",
    "adder_sub",
  ],
  highlight: "adder_sub",
  supplyVoltage: 5.0,
};
