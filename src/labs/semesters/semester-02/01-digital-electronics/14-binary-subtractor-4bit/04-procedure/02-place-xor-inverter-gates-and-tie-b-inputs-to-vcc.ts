import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place XOR inverter gates and tie B-inputs to VCC.",
  body: "Mount xor_b1 at col 3 row e; xor_b2 at col 3 row h; xor_b3 at col 7 row e; xor_b4 at col 7 row h. Connect a red wire from VCC rail to pin B of each XOR gate. Each XOR now functions as a NOT gate: output = NOT(A-input).",
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
  ],
  highlight: "xor_b1",
};
