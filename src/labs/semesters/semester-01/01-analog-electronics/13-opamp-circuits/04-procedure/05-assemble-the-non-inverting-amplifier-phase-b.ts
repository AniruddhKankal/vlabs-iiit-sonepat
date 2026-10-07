import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Assemble the non-inverting amplifier (Phase B).",
  body: "Insert the second LM741 in the Phase B area (col 19 area). Insert R1_ni (10 kΩ) at col 17–20, row c; wire bottom → GND (black). Insert R_f2 (100 kΩ) at col 22–25, row c. Wire: op-amp output → R_f2 right → LED_ni anode (green); LED_ni cathode → GND. Wire feedback: op-amp output → R_f2 → R1_ni top (inverting input). Signal input goes to op-amp non-inverting (+) input (col 17). Connect V+/V− supply rails.",
  show: [
    "bb",
    "psu",
    "dmm",
    "r_in",
    "r_f1",
    "led_inv",
    "w_rin_in",
    "w_rin_inv",
    "w_rf1_out",
    "w_ledinv_gnd",
    "w_ninv_gnd",
    "r1_ni",
    "r_f2",
    "led_ni",
    "w_sig_ni",
    "w_r1ni_gnd",
    "w_rf2_out",
    "w_ledni_gnd",
    "w_fb_ni",
  ],
  highlight: "r1_ni",
};
