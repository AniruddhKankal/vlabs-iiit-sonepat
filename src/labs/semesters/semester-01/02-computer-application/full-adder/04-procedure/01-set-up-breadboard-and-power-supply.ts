import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Set up breadboard and power supply",
  body: "Place the breadboard on a static-free surface and connect the 5 V regulated supply to the power rails. Set up three input switches (A, B, Cin): wire each switch so that one position drives the line to +5 V (logic 1) via a direct connection and the other position drives it to GND through a 10 kΩ pull-down resistor (logic 0). Verify the supply voltage at the power rails with a multimeter before inserting ICs.",
  show: ["bb"],
};
