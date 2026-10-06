import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "T mode: T=1 — Q toggles on every clock.",
  body: "Set T=1 (col 4 row a → VCC). Pulse CLK repeatedly. LED alternates with every pulse — this is frequency division by 2. Set T=0 and confirm Q holds.",
  show: [
    "bb",
    "jk1",
    "w_set_vcc",
    "w_clr_vcc",
    "w_t_jk1",
    "w_clk_jk1",
    "r_q",
    "led_q",
    "r_qbar",
    "led_qbar",
    "w_q_out",
    "w_q_led",
    "w_q_gnd",
    "w_qbar_out",
    "w_qbar_led",
    "w_qbar_gnd",
  ],
  highlight: "led_q",
  activeInputs: {
    J: 1,
    K: 1,
    CLK: 1,
  },
};
