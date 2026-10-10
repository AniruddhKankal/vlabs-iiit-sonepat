import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Exercise 5: Precedence trap.",
  body: "Predict then verify: int x = 2 + 3 * 4; → 14 (not 20, * before +). int y = 8 / 2 * 4; → 16 (left-to-right: (8/2)*4). int z = 1 << 2 + 1; → 8 (+ before <<: 1 << 3). Always use parentheses to make intent explicit when mixing operators.",
  show: [],
};
