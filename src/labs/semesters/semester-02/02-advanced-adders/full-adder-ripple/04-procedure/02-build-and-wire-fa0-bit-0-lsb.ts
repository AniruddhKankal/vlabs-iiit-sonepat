import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Build and wire FA0 (bit 0, LSB)",
  body: "Implement the Full Adder for bit 0: XOR gate 1 computes P0 = A0⊕B0; XOR gate 2 computes S0 = P0⊕C0 (with C0 tied to GND, since there is no carry into the LSB). AND gate 1 computes A0·B0; AND gate 2 computes P0·C0 = 0 (for C0=0 this is always 0). OR gate produces C1 = A0·B0 + P0·C0 = A0·B0. Connect the green LED for S0. Note C1 output — this feeds FA1.",
  show: ["bb", "xor1", "and1", "xor2", "and2", "or1"],
  highlight: "xor1",
};
