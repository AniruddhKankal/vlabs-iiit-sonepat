import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Identify prime implicants.",
  body: "Group 1: minterms {0, 2} — cells (A=0,BC=00) and (A=0,BC=10) are adjacent (differ only in B). Product term: $\\overline{A}\\overline{C}$ (A=0, C=0 in both). Group 2: minterms {5, 7} — cells (A=1,BC=01) and (A=1,BC=11) differ only in B. Product term: $AC$ (A=1, C=1 in both). No larger groups are possible. These are both prime implicants.",
  show: [],
};
