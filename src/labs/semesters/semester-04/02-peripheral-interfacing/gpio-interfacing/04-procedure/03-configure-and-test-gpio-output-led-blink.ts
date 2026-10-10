import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Configure and test GPIO output (LED blink)",
  body: "Configure the three GPIO pins as digital outputs in software (or short them to the logic HIGH rail on a trainer). Drive each pin HIGH and LOW alternately at 1 Hz (500 ms on, 500 ms off). Observe the LEDs blinking. Measure the voltage at the GPIO pin when driving HIGH (should be ≥ 4.5 V) and LOW (should be ≤ 0.1 V). Measure LED current with the ammeter; it should be approximately 9 mA, matching the design calculation.",
  show: ["bb", "r1", "r2", "r3", "led1", "led2", "led3"],
  highlight: "led1",
};
