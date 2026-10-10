import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Repeat for other base currents and calculate parameters",
  body: "Repeat the output readings for $I_B = 40\\,\\mu A$ and $I_B = 60\\,\\mu A$. Plot $I_C$ against $V_{CE}$ for all three values on the same axes. From the plots, calculate $h_{ie}$ (slope of the input curve), $h_{fe} = \\Delta I_C/\\Delta I_B$ in the active region at $V_{CE} = 5\\,V$, and $r_o = \\Delta V_{CE}/\\Delta I_C$ at constant $I_B$.",
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
  highlight: "q1",
  supplyVoltage: 5.0,
  readings: { am_b: "40 µA", vm_be: "0.67 V", am_c: "8.6 mA", vm_ce: "5.0 V" },
};
