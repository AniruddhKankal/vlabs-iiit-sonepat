import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect second 1N4007 diode D2 to complete the full-wave rectifier.",
  body:
    "Insert the second semiconductor diode D2 (1N4007) across columns 13 to 16 on row c, with its anode at column 13 and cathode at column 16. " +
    "Connect a blue wire (w_ac2_d2) from transformer secondary AC2 (col 5, row e) to the anode of D2. " +
    "Run a yellow jumper wire (w_d2_pos) from the cathode of D2 to R_load input (p1). " +
    "Both diode cathodes now feed unidirectional pulses into R_load with opposite phase conduction.",
  show: [
    "bb",
    "transformer",
    "w_ct_gnd",
    "d1",
    "w_ac1_d1",
    "w_d1_pos",
    "r_load",
    "w_r_gnd",
    "dmm",
    "cro",
    "d2",
    "w_ac2_d2",
    "w_d2_pos",
  ],
  highlight: "d2",
};
