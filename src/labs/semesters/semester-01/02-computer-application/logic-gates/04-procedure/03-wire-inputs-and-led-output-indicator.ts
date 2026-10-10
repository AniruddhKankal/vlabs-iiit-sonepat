import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire inputs and LED output indicator",
  body: "Connect input switch A to pin 1 and input switch B to pin 2 of the AND gate. Connect pin 3 (output) through a 330 Ω current-limiting resistor to the anode of an LED; connect the LED cathode to ground. The LED will illuminate when the gate output is logic 1. Verify no short circuits exist before applying power.",
  show: ["bb", "and1", "or1", "not1"],
  highlight: "not1",
};
