import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the 330 Ω resistor.",
  body: "Insert the 330 Ω current-limiting resistor in the Q output path to protect the LED.",
  show: ["bb", "sr1", "w_s_sr1", "w_r_sr1", "r_q"],
  activeInputs: {
    S_bar: 1,
    R_bar: 1,
  },
};
