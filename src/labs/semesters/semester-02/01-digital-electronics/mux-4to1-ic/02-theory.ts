import { type TheorySection } from "@/labs/lab-content.types";

export const theory: TheorySection = {
  id: "theory",
  type: "text",
  title: "Theory",
  paragraphs: [
    "A multiplexer (MUX) is a combinational circuit that selects one of several input data lines and routes it to a single output. A 4:1 MUX has four data inputs (I0–I3), two select inputs (S1, S0), and one output (Y). The select lines encode a 2-bit binary address that determines which input is connected to the output: Y = I(S1·2 + S0).",
    "The Boolean expression for a 4:1 MUX output is: Y = S1'·S0'·I0 + S1'·S0·I1 + S1·S0'·I2 + S1·S0·I3. Each term is a minterm of the select inputs ANDed with the corresponding data input. MUXes are universal logic elements: any Boolean function of n variables can be implemented with a 2ⁿ-to-1 MUX by applying function values to data inputs.",
    "The 74HC153 is a dual 4:1 multiplexer in a DIP-16 package. It contains two independent 4:1 MUX channels sharing the same select lines S1 and S0. Each channel has its own enable input (EN1_bar, EN2_bar) that is active-LOW. When EN_bar = LOW (enabled), Y = selected input; when EN_bar = HIGH, Y = LOW regardless of S and I. In this experiment, EN1_bar is tied permanently to GND to enable channel 1.",
    "Multiplexers find use in data routing, bus control, function generators, and parallel-to-serial conversion. The 74HC153 operates from 2 V to 6 V with propagation delays under 10 ns at 5 V, making it suitable for high-speed digital switching applications.",
  ],
};
