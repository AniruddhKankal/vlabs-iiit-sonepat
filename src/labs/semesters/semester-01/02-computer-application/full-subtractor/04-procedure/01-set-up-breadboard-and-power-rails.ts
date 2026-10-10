import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Set up breadboard and power rails",
  body: "Place all four ICs on the breadboard, each straddling the centre groove. Connect pin 14 to +5 V and pin 7 to GND for all ICs (74HC86, 74HC04, 74HC08, 74HC32). Set up three input switches (A, B, Bin) using the HIGH/LOW switch arrangement with 10 kΩ pull-down resistors. Verify supply voltages at each IC's Vcc pin before proceeding.",
  show: ["bb"],
};
