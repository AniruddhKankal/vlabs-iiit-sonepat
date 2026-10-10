import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire D0 and D1 data inputs.",
  body: "Red wire: col 2 row a → D0 pin (col 4, row e). Blue wire: col 2 row b → D1 pin (col 5, row e). Connect D2–D7 pins to the GND rail (all LOW by default). Connect the 8-position DIP switch outputs to the D0–D7 nodes for full control.",
  show: ["bb", "reg8", "w_mr_high", "w_clk_reg8", "w_d0_reg8", "w_d1_reg8"],
  activeInputs: {
    CLK: 0,
    D0: 0,
    D1: 0,
  },
};
