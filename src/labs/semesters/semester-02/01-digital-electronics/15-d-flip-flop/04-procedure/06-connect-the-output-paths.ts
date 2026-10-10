import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect the output paths.",
  body: "Wire IC Q → resistor → green LED → GND. Wire IC Q_bar → resistor → red LED → GND. Power on.",
  show: [
    "bb",
    "dff1",
    "w_clr_vcc",
    "w_set_vcc",
    "w_d_dff1",
    "w_clk_dff1",
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
  activeInputs: {
    D: 0,
    CLK: 0,
  },
};
