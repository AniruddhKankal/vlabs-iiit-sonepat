import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the input-gating gates",
  body: "Place the AND and NAND gates at the spaced positions shown. The AND gates form J·CLK and K·CLK; the following NAND gates combine these with the feedback outputs.",
  show: ["bb", "psu", "and_jclk", "nand_sbar", "and_kclk", "nand_rbar"],
  highlight: "and_jclk",
};
