import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place all five gates.",
  body: "Mount five ICs: 74HC266 XNOR at col 4 row e (EQ path); 74HC04 NOT at col 10 row e (to generate NOT_B for GT path); 74HC08 AND at col 16 row e (GT: A · NOT_B); 74HC04 NOT at col 10 row h (to generate NOT_A for LT path); 74HC08 AND at col 16 row h (LT: NOT_A · B). Press each IC firmly until all pins are seated.",
  show: ["bb", "xnor1", "not1", "and1", "not2", "and2"],
  highlight: "xnor1",
};
