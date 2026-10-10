import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Insert ICs and display on breadboard",
  body: "Place the 74HC4511 DIP-16 IC on the breadboard straddling the centre groove. Place the 7-segment display (DIP-10 package) in a separate section. Connect pin 16 (Vcc) of the 74HC4511 to +5 V and pin 8 (GND) to ground. Connect the common cathode pin(s) of the display directly to GND. Identify the segment pin mapping of the display using the datasheet — pin numbers for segments a, b, c, d, e, f, g and the common cathode.",
  show: ["bb"],
};
