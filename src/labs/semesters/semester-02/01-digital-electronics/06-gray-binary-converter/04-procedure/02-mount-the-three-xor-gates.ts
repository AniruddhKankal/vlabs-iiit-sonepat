import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Mount the three XOR gates.",
  body: "Mount xor1 (74HC86) at column 5 row e — produces G2 = B3 ⊕ B2. Mount xor2 at column 12 row e — produces G1 = B2 ⊕ B1. Mount xor3 at column 19 row e — produces G0 = B1 ⊕ B0. All three gates may come from a single 74HC86 IC (quad package). Connect pin 14 to VCC and pin 7 to GND.",
  show: ["bb", "xor1", "xor2", "xor3"],
  highlight: "xor1",
};
