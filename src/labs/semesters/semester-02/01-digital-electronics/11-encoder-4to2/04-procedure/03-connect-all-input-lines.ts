import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect all input lines",
  body: "Connect I3 to both pin 2 of OR gate 1 and pin 5 of OR gate 2 (fan-out of 2 — well within 74HC drive capability). Connect I2 to pin 1 of OR gate 1 only. Connect I1 to pin 4 of OR gate 2 only. Connect I0 to GND (or leave the input switches for I0 as the default OFF state — activating I0 should produce 00 at the output, same as all-inputs-OFF, which highlights the need for a valid-output flag). Tie unused gate inputs (pins 8–13 of 74HC32) to GND.",
  show: ["bb", "or_a", "or_b", "w_i2_ora", "w_i3_ora", "w_i3_orb", "w_i1_orb"],
  activeInputs: {
    I0: 0,
    I1: 0,
    I2: 0,
    I3: 0,
  },
};
