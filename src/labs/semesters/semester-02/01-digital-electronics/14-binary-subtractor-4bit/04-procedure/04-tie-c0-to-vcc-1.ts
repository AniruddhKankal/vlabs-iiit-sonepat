import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Tie C0 to VCC (+1).",
  body: "Connect a red wire from the C0 pin (col 19, row e) to the VCC rail (+5 V). C0=1 adds the +1 required to complete two's complement: A + B' + 1 = A − B. This is the critical step that converts the adder into a subtractor.",
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
    "w_c0_vcc",
  ],
};
