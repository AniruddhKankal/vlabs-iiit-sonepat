import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Insert the five logic ICs.",
  body: "Insert the ICs across the centre gap of the breadboard, left to right: two **74HC86** quad XOR ICs (`xor_p`, `xor_s`), two **74HC08** quad AND ICs (`and_g`, `and_p`) and one **74HC32** quad OR IC (`or_c`). Each full-adder stage uses one gate from each IC, so bit $i$ uses gate $i+1$ of every chip.",
  show: ["bb", "psu", "xor_p", "xor_s", "and_g", "and_p", "or_c"],
  highlight: "xor_p",
};
