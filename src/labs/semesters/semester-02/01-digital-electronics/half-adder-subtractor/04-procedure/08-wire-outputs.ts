import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire each gate output to its resistor and LED.",
  body: "Connect the XOR output to the green resistor and on to the green LED (green wires). Connect the first AND output to the yellow resistor and LED (yellow wires). Connect the second AND output to the red resistor and LED (orange wires). Each output uses its own colour so you can follow it across the board.",
  show: [
    "bb", "xor1", "and1", "not1", "and2",
    "w_a_xor", "w_a_and", "w_a_not",
    "w_b_xor", "w_b_and", "w_b_and2",
    "w_not_and2",
    "r_sd", "led_sd", "r_c", "led_c", "r_b", "led_b",
    "w_xor_r", "w_r_led_sd",
    "w_and_r", "w_r_led_c",
    "w_and2_r", "w_r_led_b",
  ],
  highlight: "w_xor_r",
  audioPath: "/semesters/semester-02/01-digital-electronics/half-adder-subtractor/04-procedure/08-procedure.mp3"
};
