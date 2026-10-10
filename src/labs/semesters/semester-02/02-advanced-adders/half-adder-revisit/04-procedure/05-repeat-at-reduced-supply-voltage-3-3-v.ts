import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Repeat at reduced supply voltage (3.3 V)",
  body: "Reduce Vcc to 3.3 V using the variable supply. Keep input signal amplitude at 3.3 V (match the supply). Repeat the delay measurements for both the Sum (XOR) and Carry (AND) paths. Record the increased t_pd values. For 74HC at 3.3 V, expect t_pd ≈ 10–12 ns — about 30–50% slower than at 5 V. Tabulate results alongside the 5 V measurements.",
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
  ],
  activeInputs: {
    A: 0,
    B: 0,
  },
};
