import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Set up breadboard and input switches",
  body: "Connect the 5 V supply to the breadboard power rails. Prepare two input switches for A and B: each switch in the HIGH position connects the line to +5 V; in the LOW position, a 10 kΩ pull-down resistor holds the line at GND. Label the switch positions clearly. Measure the voltages at each switch output to confirm clean HIGH (≥ 4.5 V) and LOW (≤ 0.1 V) levels before inserting ICs.",
  show: ["bb"],
};
