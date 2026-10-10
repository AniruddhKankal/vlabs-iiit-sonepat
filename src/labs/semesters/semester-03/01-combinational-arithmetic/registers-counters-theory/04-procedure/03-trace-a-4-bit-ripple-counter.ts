import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Trace a 4-bit ripple counter.",
  body: "Connect the Q̄ output of each flip-flop to the CLK of the next. Start at 0000. On first CLK↓: FF0 toggles → Q0=1. On second CLK↓: FF0 toggles back → Q0=0, Q0↓ triggers FF1 → Q1=1. State=0010. Continue to trace through 16 states. Note the glitch when state 7→8 (all bits change, each after a different delay).",
  show: [],
};
