import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Add four output LEDs and resistors.",
  body: "Place four 330 Ω resistors and LEDs: Red=QA (LSB), Yellow=QB, Green=QC, Blue=QD (MSB). This visual display shows the binary count as a pattern of lit LEDs.",
  show: [
    "bb",
    "ctr",
    "w_qa_clkb",
    "w_qa_r01",
    "w_qc_r02",
    "r_qa",
    "led_qa",
    "r_qb",
    "led_qb",
    "r_qc",
    "led_qc",
    "r_qd",
    "led_qd",
  ],
  activeInputs: {
    CLK: 0,
  },
};
