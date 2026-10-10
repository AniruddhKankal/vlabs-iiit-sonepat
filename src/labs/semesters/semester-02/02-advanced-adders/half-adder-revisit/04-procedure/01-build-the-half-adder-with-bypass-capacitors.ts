import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Build the Half Adder with bypass capacitors",
  body: "Construct the Half Adder: 74HC86 XOR (Sum) and 74HC08 AND (Carry), with inputs A and B. Place a 100 nF ceramic capacitor between pin 14 (Vcc) and pin 7 (GND) of each IC, positioned as close to the IC body as possible. These bypass (decoupling) capacitors suppress supply noise caused by rapid output switching and are mandatory for accurate high-speed measurements. Set both inputs to GND initially.",
  show: ["bb"],
};
