import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Thrashing with capacity",
  body: "Access 5 distinct blocks in a round-robin: 0x00, 0x10, 0x20, 0x30, 0x40, 0x00, 0x10...\nWith only 4 lines and 5 working blocks, even LRU cannot prevent evictions.\nObserve near-zero hit rate — this is a capacity miss scenario.",
  show: [],
};
