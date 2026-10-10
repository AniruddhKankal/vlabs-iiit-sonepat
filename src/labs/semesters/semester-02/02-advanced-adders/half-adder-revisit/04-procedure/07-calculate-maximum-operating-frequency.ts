import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Calculate maximum operating frequency",
  body: "Using the measured propagation delays, calculate the theoretical maximum clock frequency for a circuit using these gates: f_max = 1 / (2 × t_pd_critical). For a Half Adder at 5 V with t_pd ≈ 8 ns, f_max ≈ 62 MHz. Note that real systems operate well below f_max (typically at 30–50% of it) to account for setup/hold time margins, wire delays, and temperature/voltage variation.",
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
    "w_xor_out",
    "w_sum_led",
    "w_and_out",
    "w_carry_led",
    "w_sum_gnd",
    "w_carry_gnd",
  ],
  activeInputs: {
    A: 0,
    B: 0,
  },
};
