import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect the output path.",
  body: "Wire IC Q pin → resistor → LED anode. Wire LED cathode → GND rail. Power on.",
  show: [
    "bb",
    "sr1",
    "w_s_sr1",
    "w_r_sr1",
    "r_q",
    "led_q",
    "w_q_out",
    "w_q_led",
    "w_q_gnd",
  ],
  activeInputs: {
    S_bar: 1,
    R_bar: 1,
  },
};
