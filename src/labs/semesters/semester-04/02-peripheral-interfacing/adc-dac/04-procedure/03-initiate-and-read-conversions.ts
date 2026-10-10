import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Initiate and read conversions",
  body: "Tie /CS (pin 1) to GND (always chip-selected). Connect /WR (pin 3) and /RD (pin 2) both to GND to run the ADC in free-running conversion mode (the /WR–/RD–INTR loop allows auto-restart). In this mode the ADC continuously converts and updates its output register. Adjust the potentiometer and observe the LED binary pattern change. Measure V_in with a voltmeter and record the corresponding LED binary output.",
  show: ["bb", "r1", "r2", "r3", "r4", "led_out"],
  highlight: "led_out",
};
