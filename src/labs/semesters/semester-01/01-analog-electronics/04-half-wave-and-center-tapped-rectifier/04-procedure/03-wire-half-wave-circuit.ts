import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire the half-wave rectifier configuration using diode D1.",
  body:
    "Insert diode D1 (1N4007) at column 8 on row c, with its anode oriented towards column 8 and cathode at column 9. " +
    "Connect a red jumper wire (w_ac1_d1) from AC1 (col 4, row a) to the anode of D1. " +
    "Route a yellow wire (w_d1_pos) from the cathode of D1 to the positive distribution node at column 16. " +
    "Mount the 1 k$\\Omega$ load resistor R_load across columns 17 to 20, link its input terminal (col 17) to the positive node via wire w_pos_r, " +
    "and connect its ground end (col 20) to the gnd_top rail with black wire w_r_gnd. Connect the DMM across R_load.",
  show: [
    "bb",
    "ac_src",
    "w_ct_gnd",
    "d1",
    "w_ac1_d1",
    "w_d1_pos",
    "w_pos_r",
    "r_load",
    "w_r_gnd",
    "dmm",
  ],
  highlight: "d1",
};
