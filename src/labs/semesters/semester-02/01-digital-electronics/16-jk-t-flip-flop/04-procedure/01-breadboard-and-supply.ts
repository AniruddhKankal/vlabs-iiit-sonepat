import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the breadboard and power supply",
  body: "Place the 60-column breadboard and connect the +5 V supply to VCC and GND rails. Keep power off while wiring.",
  show: ["bb", "psu"],
  highlight: "psu",
  supplyVoltage: 5.0,
};
