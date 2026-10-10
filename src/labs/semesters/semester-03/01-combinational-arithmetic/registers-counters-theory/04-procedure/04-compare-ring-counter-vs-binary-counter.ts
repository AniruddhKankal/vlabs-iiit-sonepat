import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Compare ring counter vs binary counter.",
  body: "Ring counter (n=4): states 1000→0100→0010→0001→1000 (4 states from 4 flip-flops). Binary counter (n=4): 16 states from 4 flip-flops. Ring counter is less efficient (only n states) but simpler decoder logic — each state is directly indicated by one flip-flop output, no decoding needed.",
  show: [],
};
