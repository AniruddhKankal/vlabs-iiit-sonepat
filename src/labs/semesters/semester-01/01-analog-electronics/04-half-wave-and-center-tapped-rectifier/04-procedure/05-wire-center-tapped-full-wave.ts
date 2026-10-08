import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect diode D2 to complete the center-tapped full-wave rectifier.",
  body:
    "Mount the second rectifier diode D2 (1N4007) at column 12 on row c, with its anode at column 12 and cathode at column 13. " +
    "Connect a blue wire (w_ac2_d2) from AC2 (secondary lower terminal, col 5, row b) to the anode of D2. " +
    "Run a yellow jumper wire (w_d2_pos) from the cathode of D2 to the common positive bus at column 16 (row b). " +
    "Both diode cathodes now feed into the common load resistor, with their conduction referenced to the center tap (GND).",
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
    "d2",
    "w_ac2_d2",
    "w_d2_pos",
  ],
  highlight: "d2",
};
