import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect the D input",
  body: "Connect the D input to the data-conditioning stage and to the inverter input. The inverter output provides the complementary data signal.",
  show: [
    "bb",
    "psu",
    "bb2",
    "nand1",
    "nand2",
    "nand3",
    "not_d",
    "nand4",
    "nand5",
    "nand6",
    "not_clk",
    "w_d_not",
    "w_d_master",
  ],
  highlight: "w_d_not",
  activeInputs: { D: 0, CLK: 0 },
};
