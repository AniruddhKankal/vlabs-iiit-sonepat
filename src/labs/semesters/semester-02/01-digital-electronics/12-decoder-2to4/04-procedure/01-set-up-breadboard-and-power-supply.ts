import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Set up breadboard and power supply",
  body: "Connect the 5 V supply to the breadboard power rails. Insert both ICs (74HC04 and 74HC08) on the breadboard. Connect pin 14 to +5 V and pin 7 to GND for both. Prepare two input switches (A and B) with 10 kΩ pull-down resistors. Connect four LEDs (with 330 Ω series resistors) at conveniently located rows for outputs Y0, Y1, Y2, Y3. Label each LED.",
  show: ["bb"],
};
