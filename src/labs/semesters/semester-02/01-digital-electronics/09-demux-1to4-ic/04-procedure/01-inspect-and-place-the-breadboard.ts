import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Inspect and place the breadboard.",
  body: "Set up the breadboard. The 74HC139 is a 16-pin DIP IC. Remember that outputs are active-LOW: the selected LED turns ON because the output pin goes to 0 V, forward-biasing the LED through the series resistor to GND.",
  show: ["bb"],
};
