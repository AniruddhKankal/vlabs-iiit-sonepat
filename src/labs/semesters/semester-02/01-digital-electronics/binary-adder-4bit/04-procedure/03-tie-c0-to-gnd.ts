import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Tie C0 to GND.",
  body: "Connect a black wire from pin C0 (col 13, row e) to the GND rail. C0=0 means no carry-in; the adder computes A + B exactly. To implement A + B + 1, connect C0 to VCC instead.",
  show: ["bb", "adder", "w_c0_gnd"],
};
