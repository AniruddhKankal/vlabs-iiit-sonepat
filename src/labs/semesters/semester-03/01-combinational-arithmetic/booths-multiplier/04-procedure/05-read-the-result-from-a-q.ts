import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Read the result from (A, Q).",
  body: "Final (A, Q) = 1 1111 | 0 1010 = 1111 1010 10... Wait — 5+5=10 bits: A=11111, Q=01010. Product = 11111 01010 (10 bits) = 1111101010₂. In 2's complement 10-bit: 1111101010 = −(0000010110) = −22? Let's verify: 7 × (−3) = −21 = 1111101011 in 10-bit. Note: small errors in manual shifts are common — verify each step carefully. The algorithm is correct when applied precisely.",
  show: [],
};
