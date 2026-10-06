import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Insert the output indicator LED (yellow) and finalise wiring.",
  body: "Verify the yellow LED is inserted correctly at col 10–11, row c (anode at col 10). The LED lights when $V_{GS}$ exceeds $V_{TH} \\approx 2\\,\\text{V}$ and the MOSFET channel opens. Double-check all connections before applying power.",
  show: [
    "bb",
    "psu",
    "dmm",
    "w_amm_in",
    "w_amm_out",
    "r_d",
    "w_rd_led",
    "r_pot",
    "w_vcc_rpot",
    "w_rpot_gnd",
    "w_gate",
    "led_drain",
    "w_led_gnd",
  ],
  highlight: "led_drain",
};
