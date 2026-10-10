import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Plan the layout and set up power rails",
  body: "Use two breadboards side by side to accommodate all five ICs and the wiring. Assign one breadboard to the lower two Full Adder stages (FA0, FA1) and the other to FA2, FA3, and the output LEDs. Connect the 5 V supply to the power rails of both breadboards and link the ground rails together with a jumper. Place bypass capacitors (100 nF) on each IC. Set up eight input switches for A[3:0] and B[3:0] on the first breadboard.",
  show: ["bb"],
};
