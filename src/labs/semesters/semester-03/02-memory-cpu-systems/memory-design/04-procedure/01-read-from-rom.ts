import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Read from ROM",
  body: 'Enter address 0x02 and click READ.\nObserve: the cell at row 00, column 02 highlights blue, and the status bar shows "READ 0x3C from 0x02".\nThe pre-loaded ROM value 0x3C cannot be changed.',
  show: [],
};
