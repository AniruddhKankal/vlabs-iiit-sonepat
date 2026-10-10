import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Attempt ROM write",
  body: 'Enter address 0x00 (ROM region) and data 0xAB, then click WRITE.\nObserve: an error message appears — "ROM is read-only!".\nNo data is changed. This demonstrates hardware write protection.',
  show: [],
};
