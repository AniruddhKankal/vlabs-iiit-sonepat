import { type SceneProcedureStep } from "@/labs/experiments/types";
export const step: SceneProcedureStep = {
  label: "Explore the breadboard layout.",
  body: "Using DMM in continuity mode (buzzer), probe pairs of holes in the same terminal strip column — meter should beep. Probe across the centre gap — no beep. Probe along the red power rail — continuous along the full length. This builds spatial awareness of breadboard internals.",
  show: ["bb"],
};
