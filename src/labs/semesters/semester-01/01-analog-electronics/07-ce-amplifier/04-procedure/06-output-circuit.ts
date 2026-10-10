import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Build the collector (output) circuit",
  body: "Connect the variable supply $V_{CC}$ to the collector through the milliammeter (in series, to read $I_C$). Connect the second voltmeter **across** collector and emitter to read $V_{CE}$. Keep $V_{CE} \\le 10\\,V$ to stay within the BC547 power rating.",
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
  supplyVoltage: 0,
  readings: { am_b: "0 µA", vm_be: "0.00 V", am_c: "0.0 mA", vm_ce: "0.0 V" },
};
