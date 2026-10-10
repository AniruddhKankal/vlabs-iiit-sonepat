import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Design a MOD-6 synchronous counter.",
  body: "Use three D flip-flops (Q2, Q1, Q0). Normal sequence: 0→1→2→3→4→5→0. States 6 and 7 are unused. Use NAND(Q2, Q1) to detect state 6 (Q2=1, Q1=1) and synchronously load 000 on the next clock edge. This gives a divide-by-6 counter — used in digital clocks (seconds/minutes modulus).",
  show: [],
};
