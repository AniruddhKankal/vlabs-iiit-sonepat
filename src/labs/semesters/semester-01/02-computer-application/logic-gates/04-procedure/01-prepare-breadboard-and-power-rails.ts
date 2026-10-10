import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Prepare breadboard and power rails",
  body: "Connect the 5 V regulated supply to the red (+) rail and ground to the blue (−) rail of the breadboard. Insert input switches: wire each switch so that one position connects the input line to +5 V (logic 1) and the other position connects it to GND through a 10 kΩ pull-down resistor (logic 0). Label the input lines A and B. Verify the supply voltage with a multimeter before inserting any IC.",
  show: ["bb"],
};
