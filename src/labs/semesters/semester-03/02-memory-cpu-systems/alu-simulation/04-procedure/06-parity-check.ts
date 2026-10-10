import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Parity check",
  body: "Try several different values and observe the Parity flag P.\nP=1 when the result has an even number of 1-bits (even parity).\nTry A=0111, B=0000, ADD: Result=0111 has three 1-bits → P=0 (odd parity).",
  show: [],
};
