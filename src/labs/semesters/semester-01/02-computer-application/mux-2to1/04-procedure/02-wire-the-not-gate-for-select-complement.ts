import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire the NOT gate for select complement",
  body: "Wire NOT gate (74HC04, pin 1→2): connect the select input S to pin 1. The complement S' appears on pin 2. This single NOT gate is the only active logic element solely dedicated to the control path. Verify that S' correctly toggles opposite to S by probing with a multimeter at this stage — when S = HIGH (+5 V), pin 2 should read LOW (≈0 V).",
  show: ["bb", "not1"],
  highlight: "not1",
};
