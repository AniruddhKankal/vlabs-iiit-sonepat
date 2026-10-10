import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Mount the output resistors and LEDs.",
  body: "Mount five $330\\,\\Omega$ current-limiting resistors and five LEDs in the output bank at the right-hand end of the board. Green LEDs show the sum bits $S_3 S_2 S_1 S_0$ and the yellow LED shows the final carry $C_{out}$.",
  show: [
    "bb",
    "psu",
    "xor_p",
    "xor_s",
    "and_g",
    "and_p",
    "or_c",
    "r_cout",
    "r_s3",
    "r_s2",
    "r_s1",
    "r_s0",
    "led_cout",
    "led_s3",
    "led_s2",
    "led_s1",
    "led_s0",
  ],
  highlight: "led_cout",
};
