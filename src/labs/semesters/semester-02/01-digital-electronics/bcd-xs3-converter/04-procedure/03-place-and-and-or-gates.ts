import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place AND and OR gates.",
  body: "Mount and1 (74HC08) at col 8, row e — computes the B·C product term. Mount and2 (74HC08) at col 8, row h — computes B·D. Mount or1 (74HC32) at col 14, row e — forms W = A + B·C (cascade with and1). Mount or2 (74HC32) at col 14, row h — forms the X output term.",
  show: ["bb", "not1", "not2", "and1", "and2", "or1", "or2", "xor1"],
  highlight: "and1",
};
