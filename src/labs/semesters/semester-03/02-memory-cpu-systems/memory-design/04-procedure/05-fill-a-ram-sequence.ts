import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Fill a RAM sequence",
  body: "Write the value 0xFF to addresses 0x30, 0x31, 0x32, 0x33 in sequence.\nObserve the memory grid updating with each write.\nThen click RESET and confirm the RAM values return to 0x00 while ROM data is restored.",
  show: [],
};
