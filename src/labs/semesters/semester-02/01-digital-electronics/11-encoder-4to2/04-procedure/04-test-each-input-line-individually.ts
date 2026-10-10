import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Test each input line individually",
  body: "Activate each input switch one at a time (keeping all others LOW). Record the LED states (A, B) for each case: I0=1 → A=0, B=0 (binary 00); I1=1 → A=0, B=1 (binary 01); I2=1 → A=1, B=0 (binary 10); I3=1 → A=1, B=1 (binary 11). The two LEDs should display the binary encoding of the active input. Record all observations in the truth table.",
  show: [
    "bb",
    "or_a",
    "or_b",
    "w_i2_ora",
    "w_i3_ora",
    "w_i3_orb",
    "w_i1_orb",
    "r_a",
    "r_b",
    "led_a",
    "led_b",
    "w_a_r",
    "w_a_led",
    "w_b_r",
    "w_b_led",
    "w_gnd1",
    "w_gnd2",
  ],
  highlight: "led_a",
  activeInputs: {
    I0: 0,
    I1: 0,
    I2: 1,
    I3: 0,
  },
};
