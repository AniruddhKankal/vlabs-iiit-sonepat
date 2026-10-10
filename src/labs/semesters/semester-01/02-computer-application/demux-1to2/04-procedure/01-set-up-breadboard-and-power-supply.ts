import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Set up breadboard and power supply",
  body: "Connect the 5 V regulated supply to the breadboard power rails. Insert the 74HC04 and 74HC08 ICs on the breadboard, both straddling the centre groove. Connect pin 14 to +5 V and pin 7 to GND for both ICs. Prepare two input switches for I (data) and S (select). Connect two LEDs with 330 Ω current-limiting resistors for outputs Y0 and Y1.",
  show: ["bb"],
};
