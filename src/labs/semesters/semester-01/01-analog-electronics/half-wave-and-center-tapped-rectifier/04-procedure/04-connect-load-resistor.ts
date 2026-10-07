import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect the load resistor R_L.",
  body:
    "Mount the 1 kΩ load resistor R_L spanning columns 17 to 20 along row c. " +
    "Route a yellow jumper wire from the cathode of D1 to column 16, and an orange wire from column 16 to the positive terminal (p1) of R_L. " +
    "Connect a black wire from the negative terminal (p2) of R_L at column 20 to the top ground rail (gnd_top). " +
    "This forms a complete closed circuit for half-wave rectification.",
  show: [
    "bb",
    "ac_src",
    "w_ct_gnd",
    "d1",
    "w_ac1_d1",
    "w_d1_pos",
    "r_load",
    "w_pos_r",
    "w_r_gnd",
  ],
  highlight: "r_load",
};
