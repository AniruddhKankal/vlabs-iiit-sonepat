import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire R_C output to the LED anode.",
  body: "**Green wire**: R_C right lead (col 13) → LED anode (col 20). The collector output path is now complete: VCC → ammeter → R_C → LED → GND. Double-check all connections before applying power.",
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
    "w_rc_led",
  ],
};
