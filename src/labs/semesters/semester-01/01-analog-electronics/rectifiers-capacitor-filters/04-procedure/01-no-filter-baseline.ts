import { type SceneProcedureStep } from "@/labs/experiments/types";
export const step: SceneProcedureStep = {
  label: "Set up full-wave bridge, observe no-filter output.",
  body: 'Assemble the full-wave bridge rectifier with four 1N4007 diodes and $R_L = 1\\,\\text{k}\\Omega$. No capacitor. Connect CRO Channel 2 across $R_L$. Note the pulsating DC waveform (100 Hz). Measure $V_{avg}$ with the DMM and $V_{ripple,pp}$ with the CRO. Record as "No Filter" baseline.',
  show: ["bb", "diode", "r_load"],
};
