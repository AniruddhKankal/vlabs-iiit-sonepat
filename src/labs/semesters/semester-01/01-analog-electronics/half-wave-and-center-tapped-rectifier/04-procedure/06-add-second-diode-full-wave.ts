import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Add diode D2 to form the center-tapped full-wave rectifier.",
  body:
    "Insert second rectifier diode D2 (1N4007) spanning columns 12 to 13 along row c. " +
    "Connect a blue jumper wire from the AC2 source terminal at column 5 (row b) to the anode of D2 at column 12. " +
    "Wire the cathode of D2 at column 13 with a yellow jumper to column 16 (row b), tying it to the shared positive load bus. " +
    "During the negative half-cycle, terminal AC2 becomes positive relative to CT, forward-biasing D2. " +
    "Both half-cycles now deliver current through R_L in the same direction, doubling the average DC voltage to approximately 7.2 V ($V_{dc} = 2V_m/\\pi$).",
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
    "dmm",
    "d2",
    "w_ac2_d2",
    "w_d2_pos",
  ],
  highlight: "d2",
  readings: { dmm: "7.2 V" },
};
