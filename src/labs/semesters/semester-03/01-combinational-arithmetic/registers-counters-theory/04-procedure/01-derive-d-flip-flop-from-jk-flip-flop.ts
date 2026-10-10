import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Derive D flip-flop from JK flip-flop.",
  body: "For a D flip-flop: Q_next = D. For JK: Q_next = J·Q' + K'·Q. Set J = D and K = D'. Then: Q_next = D·Q' + D''·Q = D·Q' + D·Q = D(Q'+Q) = D. ✓ So connecting J to D and K to NOT(D) converts any JK to a D flip-flop.",
  show: [],
};
