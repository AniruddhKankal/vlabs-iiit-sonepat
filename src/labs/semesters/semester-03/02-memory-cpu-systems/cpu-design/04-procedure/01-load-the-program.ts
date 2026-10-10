import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Load the program",
  body: "The simulator is pre-loaded with a 5-instruction program:\n  LOAD R0, #10\n  LOAD R1, #20\n  ADD R2, R0, R1\n  STORE R2, [30]\n  HALT\nVerify the program is visible in the Program panel. PC starts at 0.",
  show: [],
};
