import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect the clock phases",
  body: "Connect the clock input to the master gating path and the clock inverter. The inverted clock is used to drive the complementary latch phase.",
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
    "w_clk_not",
    "w_clk_master",
    "w_clkbar_master",
  ],
  highlight: "w_clk_not",
  activeInputs: { D: 0, CLK: 0 },
};
