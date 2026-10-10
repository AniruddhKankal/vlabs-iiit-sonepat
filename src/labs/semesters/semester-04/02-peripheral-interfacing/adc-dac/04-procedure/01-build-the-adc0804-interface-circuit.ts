import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Build the ADC0804 interface circuit",
  body: "Insert the ADC0804 (DIP-20) on the breadboard. Connect pin 20 (Vcc) and pin 1 (CS') to +5 V; pins 8 (AGND) and 10 (DGND) to GND. Build the clock oscillator: connect a 10 kΩ resistor from pin 19 (CLK R) to pin 4 (CLK IN), and a 100 pF capacitor from pin 4 to GND. This generates approximately 640 kHz for the successive approximation clock. Connect pin 9 (Vref/2) to a voltage divider or leave unconnected (which defaults to Vcc/2 = 2.5 V, giving a 0–5 V input range).",
  show: ["bb"],
};
