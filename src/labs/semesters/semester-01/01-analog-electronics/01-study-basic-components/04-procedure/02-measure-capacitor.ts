import { type SceneProcedureStep } from "@/labs/experiments/types";
export const step: SceneProcedureStep = {
  label: "Measure capacitor value with the DMM.",
  body: "Set the multimeter to capacitance mode (Cx). Insert capacitor leads into test jacks, observing polarity for electrolytic types (longer lead = positive). Compare reading with body marking.",
  show: ["bb"],
};
