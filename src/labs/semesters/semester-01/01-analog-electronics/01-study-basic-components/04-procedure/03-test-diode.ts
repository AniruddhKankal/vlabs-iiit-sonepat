import { type SceneProcedureStep } from "@/labs/experiments/types";
export const step: SceneProcedureStep = {
  label: "Test the diode using DMM diode mode.",
  body: "Set DMM to diode test (→|). Red probe on anode, black on cathode. A good silicon diode reads ~0.55–0.70 V forward. Swapping probes should read OL (open circuit) in reverse. Record both readings.",
  show: ["bb"],
};
