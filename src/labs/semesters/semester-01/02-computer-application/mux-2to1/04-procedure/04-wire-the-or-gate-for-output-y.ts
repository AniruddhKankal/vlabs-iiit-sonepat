import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire the OR gate for output Y",
  body: "Wire OR gate (74HC32, pins 1,2→3): connect A·S' (74HC08 pin 3) to pin 1 and B·S (74HC08 pin 6) to pin 2. The MUX output Y = A·S' + B·S appears on pin 3. Connect pin 3 through a 330 Ω current-limiting resistor to the anode of the green LED; cathode to GND. The LED illuminates when Y = 1.",
  show: ["bb", "not1", "and1", "and2", "or1"],
  highlight: "or1",
};
