import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the AC step-down source and ground the center tap.",
  body:
    "Mount the step-down transformer secondary supply stand-in at the left edge of the breadboard. " +
    "Connect terminal AC1 to column 4 (row a) and terminal AC2 to column 5 (row b). " +
    "Run a ground jumper wire from the center-tap connection at column 5 (row a) directly to the top blue ground rail (gnd_top). " +
    "The center tap establishes our common zero-voltage reference node for both half-cycles.",
  show: ["bb", "ac_src", "w_ct_gnd"],
  highlight: "ac_src",
};
