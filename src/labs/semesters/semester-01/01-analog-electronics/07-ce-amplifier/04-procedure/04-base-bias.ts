import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Build the base (input) circuit",
  body: "Place the $100\\,k\\Omega$ resistor $R_B$ in columns 6–9 and connect the variable supply $V_{BB}$ to its left end, with its negative terminal on the ground rail. $R_B$ limits the base current: $I_B = (V_{BB} - V_{BE})/R_B$.",
  show: ["bb", "q1", "w_e_gnd", "rb", "psu_vbb"],
  highlight: "rb",
};
