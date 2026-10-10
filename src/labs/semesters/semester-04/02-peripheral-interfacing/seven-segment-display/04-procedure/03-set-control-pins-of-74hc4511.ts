import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Set control pins of 74HC4511",
  body: "The 74HC4511 has three control inputs: LT' (Lamp Test, pin 3), BL' (Blanking, pin 4), and LE (Latch Enable, pin 5). For normal operation, tie LT' and BL' to +5 V (active-low, so HIGH = disabled, meaning lamp test and blanking are both off). Tie LE to GND (latch enable LOW = transparent latch, output follows input). Connect the four BCD inputs A (pin 7), B (pin 1), C (pin 2), D (pin 6) to their respective switches.",
  show: [
    "bb",
    "led_a",
    "led_b",
    "led_c",
    "led_d",
    "led_e",
    "led_f",
    "led_g",
    "r_a",
    "r_b",
    "r_c",
    "r_d",
    "r_e",
    "r_f",
    "r_g",
  ],
  highlight: "r_a",
};
