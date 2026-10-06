import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Test all four select combinations.",
  body: "With I0=1, I1=0, I2=1, I3=0: S=00 → Y=I0=1 (LED ON); S=01 → Y=I1=0 (LED OFF); S=10 → Y=I2=1 (LED ON); S=11 → Y=I3=0 (LED OFF). Record observations. Change data input values and observe that the output always mirrors the selected input.",
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
  highlight: "led_out",
  activeInputs: {
    S1: 0,
    S0: 0,
    I0: 1,
    I1: 0,
    I2: 1,
    I3: 0,
  },
};
