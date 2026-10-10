import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Final addition: PP1 + PP2.",
  body: "  PP1: 0010 1100 (= 44)\n+ PP2: 0101 1000 (= 88)\n= ?. Adding: 44 + 88 = 132... wait, that exceeds 66. Recall: PP1 = A shifted by 1 = 11×2=22; PP2 = A shifted by 2 = 11×4=44. 22 + 44 = 66 = 0100 0010. Correct!",
  show: [],
};
