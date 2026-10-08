import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label:
    "Connect the center-tapped transformer secondary and ground the center tap.",
  body:
    "Place the step-down center-tapped transformer supply (ac_src) at column 1. " +
    "Connect the two outer secondary terminals: AC1 to column 4 (row a) and AC2 to column 5 (row b). " +
    "Connect the transformer center-tap lead (CT) at column 5 to the top ground rail (gnd_top) using a black jumper wire (w_ct_gnd). " +
    "This establishes the center tap as the stable 0 V common ground reference between the two secondary windings.",
  show: ["bb", "ac_src", "w_ct_gnd"],
  highlight: "ac_src",
};
