import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire switch input circuits with pull-down resistors",
  body: "Connect two push-button switches as inputs (e.g., GPIO pins 2 and 3 on Arduino). For each switch: one terminal connects to +5 V; the other terminal connects to the GPIO input pin AND through a 10 kΩ pull-down resistor to GND. When the switch is open, the 10 kΩ pulls the input to 0 V (logic 0). When pressed, the 5 V rail overrides the pull-down and the input reads logic 1. This is the standard active-high switch configuration.",
  show: ["bb", "r1", "r2", "r3"],
  highlight: "r1",
};
