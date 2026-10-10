import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire select inputs A and B.",
  body: "Red wire: col 4 row a → pin a (col 8, row e). Orange wire: col 5 row a → pin b (col 9, row e). A=0,B=0 selects Y0; A=0,B=1 selects Y1; A=1,B=0 selects Y2; A=1,B=1 selects Y3.",
  show: ["bb", "demux14", "w_en_gnd", "w_a_demux14", "w_b_demux14"],
  activeInputs: {
    A: 0,
    B: 0,
  },
};
