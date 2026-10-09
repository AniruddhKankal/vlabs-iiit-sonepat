import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Assemble the voltage divider bias network with resistors R1 and R2.",
  body:
    "Mount the upper divider resistor $R_1 = 100\\text{ k}\\Omega$ at column 15 (row c) and the lower divider resistor " +
    "$R_2 = 10\\text{ k}\\Omega$ at column 15 (row h). " +
    "Connect a red jumper wire (w_vcc_r1) from the top VCC rail to $R_1$ terminal p1. " +
    "Connect a black wire (w_r2_gnd) from $R_2$ terminal p2 to the top ground rail (gnd_top) at column 18. " +
    "The junction between $R_1$ and $R_2$ at column 15 establishes an open-circuit base bias voltage $V_B = V_{CC} \\frac{R_2}{R_1 + R_2} \\approx 1.09\\text{ V}$.",
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
  ],
  highlight: "r1",
};
