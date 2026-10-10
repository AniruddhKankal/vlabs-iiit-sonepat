import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Assess fan-out effect on delay",
  body: "At Vcc = 5 V, add additional capacitive loads to the Sum output by connecting 1, 3, and 5 breadboard-connected wires (each approximately 20 pF) to the output node. Measure t_pd for each fan-out load. Observe the increase in delay as capacitive load grows. Record the data and calculate the sensitivity: Δt_pd / ΔC_load, which should be approximately 1 ns per 10–15 pF for 74HC gates.",
  show: [
    "bb",
    "xor1",
    "and1",
    "w_a_xor",
    "w_a_and",
    "w_b_xor",
    "w_b_and",
    "r_sum",
    "r_carry",
    "led_sum",
    "led_carry",
  ],
  activeInputs: {
    A: 0,
    B: 0,
  },
};
