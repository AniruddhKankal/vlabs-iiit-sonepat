import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the slave-stage gates",
  body: "Place the slave-stage NAND gates on the second breadboard and position the clock inverter. These gates form the output latch.",
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
  ],
  highlight: "nand4",
};
