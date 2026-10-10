import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire the inverting amplifier (Rin = 10 kΩ, Rf = 100 kΩ).",
  body: "With the supply switched off, fit the LM741 across the centre gap of the breadboard. Connect +12 V to pin 7 and −12 V to pin 4. Connect pin 3 to ground. Connect Rin = 10 kΩ between the input point Vin and pin 2. Connect Rf = 100 kΩ between pin 6 (output) and pin 2. Leave pins 1, 5 and 8 unconnected. Connect the function generator output to the input point Vin and its ground lead to the circuit ground.",
  show: [],
};
