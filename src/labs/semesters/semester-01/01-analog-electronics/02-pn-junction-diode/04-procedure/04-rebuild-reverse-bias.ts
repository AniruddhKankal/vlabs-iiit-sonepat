import { type SceneProcedureStep } from "@/labs/experiments/types";
export const step: SceneProcedureStep = {
  label: "Rebuild for reverse-bias measurement.",
  body: "Reverse the diode — cathode to supply positive, anode to GND through the resistor. Increase supply from 0 to 10 V in 1 V steps. Record leakage current (µA range). Current stays essentially flat until breakdown (not reached at 10 V for 1N4148).",
  show: [
    "bb",
    "r1",
    "diode",
    "w_vcc_r1",
    "w_r1_diode",
    "w_diode_gnd",
    "w_vm_pos",
    "w_vm_neg",
  ],
};
