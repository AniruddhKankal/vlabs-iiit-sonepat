import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect the LED cathodes to ground.",
  body: "Use black jumpers to connect the cathode of each LED to the top ground rail (columns 49, 53 and 57). With both inputs at 0, all three LEDs stay OFF.",
  show: [
    "bb", "xor1", "and1", "not1", "and2",
    "w_a_xor", "w_a_and", "w_a_not",
    "w_b_xor", "w_b_and", "w_b_and2",
    "w_not_and2",
    "r_sd", "led_sd", "r_c", "led_c", "r_b", "led_b",
    "w_xor_r", "w_r_led_sd",
    "w_and_r", "w_r_led_c",
    "w_and2_r", "w_r_led_b",
    "w_gnd_sd", "w_gnd_c", "w_gnd_b",
  ],
  activeInputs: { A: 0, B: 0 },
  ledBrightness: { led_sd: 0, led_c: 0, led_b: 0 },
  audioPath: "/semesters/semester-02/01-digital-electronics/half-adder-subtractor/04-procedure/09-procedure.mp3"
};
