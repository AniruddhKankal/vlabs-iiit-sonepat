import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Configure oscilloscope and apply test signal",
  body: "Connect Channel 1 of the oscilloscope to the function generator output (which will drive input A) and Channel 2 to the Sum output (XOR pin 3). Set the function generator to a 1 MHz square wave, 0–5 V amplitude, 50% duty cycle. Tie input B permanently to +5 V (logic 1) so that A transitions directly appear at the XOR output as A⊕1 = A'. This creates a continuous alternating signal to measure delay.",
  show: ["bb", "xor1"],
  highlight: "xor1",
};
