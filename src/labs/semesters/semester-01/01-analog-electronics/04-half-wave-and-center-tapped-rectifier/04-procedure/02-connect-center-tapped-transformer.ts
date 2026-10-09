import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label:
    "Mount the center-tapped step-down transformer and ground the center tap.",
  body:
    "Mount the compact center-tapped step-down transformer (transformer) on the left side of the breadboard at column 3 (row c). " +
    "Its secondary terminals emerge at column 5: AC1 at row a, center tap (CT) at row c, and AC2 at row e. " +
    "Connect the center tap (CT) lead at column 5 (row c) directly to the top ground rail (gnd_top) using a black jumper wire (w_ct_gnd). " +
    "The center tap establishes our common 0 V reference node for symmetric bi-phase rectification.",
  show: ["bb", "transformer", "w_ct_gnd"],
  highlight: "transformer",
};
