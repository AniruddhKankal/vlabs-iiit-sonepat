import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Mount collector resistor R_C2, emitter resistor R_E, and second NPN transistor.",
  body:
    "Mount collector resistor $R_{C2} = 4.7\\text{ k}\\Omega$ at column 20 (row c) and emitter resistor $R_E = 1\\text{ k}\\Omega$ at column 20 (row h). " +
    "Connect red wire (w_vcc_rc2) from VCC to $R_{C2}$ pin 1, and black wire (w_re_gnd) from $R_E$ pin 2 to gnd_top at column 23. " +
    "Insert the second transistor (represented by led_b) at column 25. Connect green wire (w_rc2_ledb) from $R_{C2}$ pin 2 to collector, " +
    "and tie the cathode to ground through wire w_ledb_gnd. " +
    "The emitter resistor $R_E$ introduces series negative current feedback to maintain stable operating point against temperature and beta fluctuations.",
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
    "dmm",
    "w_amm_in",
    "w_amm_out",
    "r1",
    "r2",
    "w_vcc_r1",
    "w_r2_gnd",
    "r_c2",
    "r_e",
    "led_b",
    "w_vcc_rc2",
    "w_re_gnd",
    "w_rc2_ledb",
    "w_ledb_gnd",
  ],
  highlight: "r_e",
};
