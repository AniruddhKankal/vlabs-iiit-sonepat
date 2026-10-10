import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the 74HC283 adder at column 13.",
  body: "Mount the 74HC283 DIP-16 at column 13. Connect pin 16 (col 13, row f) to VCC rail. Connect pin 8 (col 20, row e) to GND rail. This IC will perform A + B' where B' comes from the XOR inverters.",
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
};
