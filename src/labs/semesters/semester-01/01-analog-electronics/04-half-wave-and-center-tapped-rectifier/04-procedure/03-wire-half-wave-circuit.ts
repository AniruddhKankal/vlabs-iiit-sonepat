import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label:
    "Wire the half-wave rectifier using 1N4007 diode D1 and load resistor R_L.",
  body:
    "Insert semiconductor diode D1 (1N4007) across columns 8 to 11 on row c, with its anode at column 8 and cathode at column 11. " +
    "Connect a red jumper wire (w_ac1_d1) from transformer secondary terminal S1 (AC1) to the anode of D1. " +
    "Mount the 1 k$\\Omega$ load resistor R_load across columns 18 to 21 on row c. " +
    "Link D1 cathode to R_load input (p1) using a yellow wire (w_d1_pos), and return R_load terminal p2 (col 21) to the ground rail with black wire w_r_gnd.",
  show: [
    "bb",
    "transformer",
    "w_ct_gnd",
    "d1",
    "w_ac1_d1",
    "w_d1_pos",
    "r_load",
    "w_r_gnd",
  ],
  highlight: "d1",
};
