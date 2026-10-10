import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Build the 4-bit R-2R ladder DAC",
  body: "Construct a 4-bit R-2R ladder DAC on the remaining breadboard space. Use four 10 kΩ (R) and five 20 kΩ (2R) resistors in the standard R-2R ladder topology. The ladder has four input nodes connected to four switches (D3=MSB to D0=LSB); each switch connects the node to either +5 V (logic 1) or GND (logic 0). The output node (rightmost) is the analog output V_out. Connect V_out to the voltmeter positive probe.",
  show: [
    "bb",
    "r1",
    "r2",
    "r3",
    "r4",
    "led_out",
    "w_r1_junc1",
    "w_junc1_r2",
    "w_r2_junc2",
    "w_junc2_r3",
    "w_r3_junc3",
    "w_junc3_r4",
  ],
};
