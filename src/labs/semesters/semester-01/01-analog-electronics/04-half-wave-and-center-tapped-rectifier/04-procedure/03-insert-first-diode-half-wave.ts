import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Insert diode D1 for half-wave rectification.",
  body:
    "Insert rectifier diode D1 (1N4007) spanning columns 8 to 9 along row c. " +
    "Connect a red jumper wire from the AC1 source terminal at column 4 (row a) to the anode of D1 at column 8. " +
    "During the positive half-cycle of the AC input, terminal AC1 becomes positive relative to the center tap, " +
    "forward-biasing diode D1 into conduction.",
  show: ["bb", "ac_src", "w_ct_gnd", "d1", "w_ac1_d1"],
  highlight: "d1",
};
