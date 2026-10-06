import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Inspect and place the breadboard.",
  body: "Set up the breadboard. The 74HC283 is a 16-pin IC that spans 8 columns per bank. Plan the layout: IC at cols 7–14, input switches at cols 1–4, output LEDs at cols 22–46. Ensure VCC and GND rails are connected to the power supply.",
  show: ["bb"],
};
