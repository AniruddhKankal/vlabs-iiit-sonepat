import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire output Y1 to LED.",
  body: "Green wire: pin y1 (col 14, row e) → r_out p1 (col 20, row c). Green wire: r_out p2 → led_out anode (col 24, row c). Black wire: led_out cathode → GND rail. Apply +5 V. Circuit is complete.",
  show: [
    "bb",
    "mux41",
    "w_en_gnd",
    "w_i0_mux41",
    "w_i1_mux41",
    "w_i2_mux41",
    "w_i3_mux41",
    "w_s0_mux41",
    "w_s1_mux41",
    "r_out",
    "led_out",
    "w_y1_r",
    "w_out_led",
    "w_out_gnd",
  ],
  activeInputs: {
    S1: 0,
    S0: 0,
    I0: 1,
    I1: 0,
    I2: 1,
    I3: 0,
  },
};
