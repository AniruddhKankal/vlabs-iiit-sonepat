import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Write to RAM",
  body: 'Enter address 0x20 (first RAM location) and data 0x5A, then click WRITE.\nObserve: the cell turns orange, status bar shows "WROTE 0x5A to 0x20".\nThis is the first writable byte in the RAM region.',
  show: [],
};
