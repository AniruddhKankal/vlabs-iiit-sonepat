import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Link switch inputs to LED outputs (interactive response)",
  body: "Write logic so that Switch 1 controls LED1 (LED1 ON when Switch 1 pressed, OFF otherwise) and Switch 2 controls LED2. Additionally, configure LED3 to toggle state every time either switch is pressed (edge-triggered). This demonstrates read-then-write GPIO interaction. Verify debouncing behaviour: rapid toggling of a switch should trigger only one clean transition if software debouncing (10–20 ms delay) is implemented.",
  show: [
    "bb",
    "r1",
    "r2",
    "r3",
    "led1",
    "led2",
    "led3",
    "w_vcc_r1",
    "w_vcc_r2",
    "w_vcc_r3",
    "w_r1_led1",
    "w_r2_led2",
    "w_r3_led3",
  ],
};
