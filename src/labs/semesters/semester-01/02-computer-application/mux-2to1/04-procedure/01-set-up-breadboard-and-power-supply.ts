import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Set up breadboard and power supply",
  body: "Connect the 5 V supply to the breadboard power rails. Insert all three ICs (74HC04, 74HC08, 74HC32) on the breadboard, each straddling the centre groove. Connect pin 14 to +5 V and pin 7 to GND for all ICs. Prepare three input switches (A, B, S) using the HIGH/LOW switch arrangement. Label them clearly; S is the select line and A, B are the data inputs.",
  show: ["bb"],
};
