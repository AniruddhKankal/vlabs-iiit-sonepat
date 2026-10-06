import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Insert the output indicator LED (yellow).",
  body: "Insert the yellow LED at col 20–21, row c — anode (longer lead) at col 20, cathode at col 21. Connect a **black wire**: cathode (col 21) → GND rail at col 21. The LED brightness will indicate collector current magnitude.",
  show: [
    "bb",
    "psu",
    "dmm",
    "w_amm_in",
    "w_amm_out",
    "r_e",
    "w_re_gnd",
    "r_c",
    "c_in",
    "w_cin_re",
    "led_out",
    "w_led_gnd",
  ],
  highlight: "led_out",
};
