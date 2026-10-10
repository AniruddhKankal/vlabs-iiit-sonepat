import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place NOT and XOR gates.",
  body: "Mount not1 (74HC04) at column 3, row e for D inversion. Mount not2 (74HC04) at column 20, row h — its output drives the Z (D') LED directly. Mount xor1 (74HC86) at column 20, row e for Y ≈ C ⊕ D.",
  show: ["bb", "not1", "not2"],
  highlight: "not1",
};
