import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Assemble the CE amplifier circuit.",
  body: "Place BC547 on the breadboard (flat face facing you: E-B-C from left to right). Connect R1 from VCC to base, R2 from base to GND, R_C from VCC to collector, R_E from emitter to GND. Connect bypass capacitor C_E across R_E. Connect coupling capacitors C_1 at the input (between signal source and base) and C_2 at the output (between collector and R_L). Apply +12 V supply.",
  show: ["bb", "r1", "r2", "rc", "re", "q1", "led_out"],
  highlight: "led_out",
};
