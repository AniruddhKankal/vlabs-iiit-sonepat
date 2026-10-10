import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect potentiometer as analog input",
  body: "Wire the 10 kΩ potentiometer: one end to +5 V, the other end to GND, and the wiper (centre tap) to pin 6 (VIN+) of the ADC0804. Connect pin 7 (VIN−) to GND. The potentiometer allows the analog input voltage V_in to be varied continuously from 0 V to 5 V. Connect pins 11–18 (D0–D7, 8-bit output) through 330 Ω resistors to eight LEDs (D0 = LSB = LED0, D7 = MSB = LED7).",
  show: ["bb", "r1", "r2", "r3", "r4"],
  highlight: "r1",
};
