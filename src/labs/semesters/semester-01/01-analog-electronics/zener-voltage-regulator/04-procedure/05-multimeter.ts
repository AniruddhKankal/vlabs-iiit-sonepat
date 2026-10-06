import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect the multimeter across the output.",
  body: "Set the digital multimeter to the DC voltage range (20 V). Place the positive probe on the output node (column 7, next to Rs) and the negative probe on the ground node (column 9, the Zener anode). The meter now reads Vout. With the supply at 0 V it reads 0.00 V.",
  show: [
    "bb",
    "psu",
    "rs",
    "w_vcc_rs",
    "dz",
    "w_rs_dz",
    "w_dz_gnd",
    "rl1",
    "w_dz_rl1",
    "w_rl1_gnd",
    "dmm",
  ],
  highlight: "dmm",
  supplyVoltage: 0,
  readings: { dmm: "0.00 V" },
};
