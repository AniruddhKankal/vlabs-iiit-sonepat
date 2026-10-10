import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Output characteristics (I_B = 20 µA)",
  body: "Adjust $V_{BB}$ until the microammeter reads $I_B = 20\\,\\mu A$ and keep it there. Increase $V_{CC}$ from 0 V to 10 V in steps, noting $V_{CE}$ and $I_C$ (second table). Re-adjust $V_{BB}$ whenever $I_B$ drifts. Take more readings at small $V_{CE}$ (0–1 V) where the curve bends.",
  show: [
    "bb",
    "q1",
    "w_e_gnd",
    "rb",
    "psu_vbb",
    "am_b",
    "vm_be",
    "psu_vcc",
    "am_c",
    "vm_ce",
  ],
  highlight: "am_c",
  supplyVoltage: 5.0,
  readings: { am_b: "20 µA", vm_be: "0.64 V", am_c: "4.2 mA", vm_ce: "5.0 V" },
};
