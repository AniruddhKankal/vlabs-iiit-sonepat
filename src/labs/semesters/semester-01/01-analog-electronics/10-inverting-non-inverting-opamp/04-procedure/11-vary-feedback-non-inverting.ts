import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Repeat the non-inverting amplifier for Rf = 47 kΩ and 22 kΩ.",
  body: "Switch off the supply, replace Rf by 47 kΩ and keep R1 = 10 kΩ. Switch on the supply, adjust the function generator until CH1 shows 1 V peak-to-peak, set the CH2 volts/div for a convenient display and record Vo in the observation table. Repeat with Rf = 22 kΩ. For each value compare the measured gain with 1 + Rf / R1.",
  show: [],
};
