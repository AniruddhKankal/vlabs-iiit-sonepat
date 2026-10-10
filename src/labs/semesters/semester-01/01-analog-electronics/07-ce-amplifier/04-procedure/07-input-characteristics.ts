import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Input characteristics (V_CE constant)",
  body: "Set $V_{CE} = 0\\,V$ with the collector supply. Increase $V_{BB}$ in steps and note $V_{BE}$ and $I_B$ for each step (first table). Then set $V_{CE} = 5\\,V$ and repeat. Re-adjust $V_{CC}$ at every step so that $V_{CE}$ stays constant. Plot $I_B$ (y-axis) against $V_{BE}$ (x-axis).",
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
  highlight: "vm_be",
  supplyVoltage: 5.0,
  readings: { am_b: "23 µA", vm_be: "0.65 V", am_c: "4.8 mA", vm_ce: "5.0 V" },
};
