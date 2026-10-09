import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label:
    "Connect the collector resistor R_C1 and NPN transistor for fixed bias.",
  body:
    "Mount collector resistor $R_{C1} = 4.7\\text{ k}\\Omega$ at column 7 (row c). " +
    "Connect a red jumper wire (w_vcc_rc1) from the top VCC rail to terminal p1 of $R_{C1}$. " +
    "Insert the NPN transistor (represented by led_a) at column 12. " +
    "Connect green wire (w_rc1_leda) from $R_{C1}$ terminal p2 to the transistor collector, " +
    "and black wire (w_leda_gnd) from the emitter to the ground rail (gnd_top) at column 13. " +
    "Notice that in fixed bias, the emitter is tied directly to 0 V common ground without degeneration.",
  show: [
    "bb",
    "psu",
    "r_b",
    "w_vcc_rb",
    "r_c1",
    "w_vcc_rc1",
    "led_a",
    "w_rc1_leda",
    "w_leda_gnd",
  ],
  highlight: "r_c1",
};
