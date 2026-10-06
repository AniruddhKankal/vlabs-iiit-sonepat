import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Assemble the inverting amplifier (Phase A).",
  body: "Insert the LM741 op-amp (DIP-8) straddling the centre gap, pin 1 at col 5. Insert R_in (10 kΩ) at col 3–6, row c; wire signal input (blue) to R_in left. Insert R_f1 (100 kΩ) at col 8–11, row c; wire R_in right → R_f1 left (orange). Wire R_f1 right → LED_inv anode (green); LED_inv cathode → GND (black). Tie non-inverting input (pin 3, col 7) to signal GND. Connect V+ (pin 7) to +12 V rail, V− (pin 4) to −12 V rail.",
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
  ],
  highlight: "r_in",
};
