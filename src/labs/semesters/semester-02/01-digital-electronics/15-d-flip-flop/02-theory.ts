import { type TheorySection } from "@/labs/lab-content.types";

export const theory: TheorySection = {
  id: "theory",
  type: "text",
  title: "Theory",
  paragraphs: [
    "A D (Data or Delay) flip-flop is a bistable sequential circuit that stores one bit. It has a data input $D$, a clock input $CLK$, and complementary outputs $Q$ and $\\overline{Q}$.",
    "A positive-edge-triggered D flip-flop samples the value at D only at the rising edge of the clock. If D = 1 at that instant, Q becomes 1; if D = 0, Q becomes 0. Between rising edges, the output retains the previously stored value even if D changes.",
    "A master-slave implementation uses two gated latches in cascade, driven by opposite clock phases. The master captures the input while the clock is LOW and the slave transfers the captured state to the output when the clock rises. This arrangement avoids the output following D continuously.",
    "Using NAND gates, each latch is formed by a pair of cross-coupled NAND gates and gated input logic. An inverter provides the complementary data signal and another inverter provides the complementary clock phase. The outputs of the final latch are complementary in normal operation.",
    "Characteristic equation at the active clock edge: $Q_{n+1}=D$. When there is no active clock edge, $Q_{n+1}=Q_n$.",
    "Applications include data registers, shift registers, pipeline storage, synchronising stages and memory elements. Use a regulated +5 V supply for the 74HC-series logic and switch the supply off before changing connections.",
  ],
};
