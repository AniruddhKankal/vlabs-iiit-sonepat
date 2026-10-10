import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Generalise: determine D0, D1 for any function",
  body: "For an arbitrary 2-variable function f(A,B), write the truth table and read off: D0 = f evaluated with A=0 (a function of B alone); D1 = f evaluated with A=1 (a function of B alone). If D0 or D1 evaluates to a constant {0,1} or to B or B', wire accordingly. This procedure generalises to any n-variable function using a 2^(n-1):1 MUX with one variable as the data inputs. Demonstrate with NAND(A,B) as an additional exercise.",
  show: [
    "bb",
    "not1",
    "and1",
    "and2",
    "or1",
    "w_a_not",
    "w_a_and2",
    "w_nota_and1",
    "w_gnd_and1",
    "w_b_and2",
    "w_and1_or",
    "w_and2_or",
    "r_out",
    "led_out",
    "w_out_r",
    "w_out_led",
    "w_out_gnd",
  ],
  activeInputs: {
    A: 0,
    B: 0,
  },
};
