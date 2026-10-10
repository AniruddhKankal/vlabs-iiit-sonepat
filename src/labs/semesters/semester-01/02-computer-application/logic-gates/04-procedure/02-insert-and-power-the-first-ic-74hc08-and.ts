import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Insert and power the first IC (74HC08 AND)",
  body: "Insert the 74HC08 DIP-14 IC straddling the centre groove of the breadboard so pins 1–7 are on one side and pins 8–14 on the other. Connect pin 14 (Vcc) to the +5 V rail and pin 7 (GND) to the ground rail. This powers the IC. The 74HC08 contains four AND gates; use gate 1 (pins 1, 2 inputs; pin 3 output) for this step.",
  show: ["bb", "and1", "or1"],
  highlight: "and1",
};
