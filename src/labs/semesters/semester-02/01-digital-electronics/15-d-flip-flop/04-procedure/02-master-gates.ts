import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the master-stage gates",
  body: "Place the NAND gates for the master stage across the centre gap of the first breadboard. The inverter generates the complementary data signal needed by the gated latch.",
  show: ["bb", "psu", "bb2", "nand1", "nand2", "nand3", "not_d"],
  highlight: "nand1",
};
