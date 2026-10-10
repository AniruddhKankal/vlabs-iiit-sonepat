import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Test all input combinations and record",
  body: "Apply all four input combinations sequentially: (A=0,B=0), (A=0,B=1), (A=1,B=0), (A=1,B=1). For each combination, observe whether the LED is ON (logic 1) or OFF (logic 0). Record the output in the truth table. Compare the measured truth table with the theoretical AND truth table. Repeat this step for OR (74HC32), NOT (74HC04 — single input A only), NAND (74HC00), NOR (74HC02), XOR (74HC86), and XNOR (XOR output through an inverter).",
  show: ["bb", "and1", "or1", "not1", "nand1", "nor1"],
  highlight: "nand1",
};
