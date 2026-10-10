import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The BCD-to-Excess-3 converter was successfully implemented on the breadboard. The four output LEDs correctly indicated the XS3 code for each valid BCD input (0–9), confirming the K-map minimised Boolean expressions W = A+BC+BD, X = B'C+B'D+BC'D', Y = C'D'+CD, Z = D'.",
    "The experiment demonstrates the practical application of K-map minimisation in multi-output combinational circuit design. The XS3 code's self-complementing property (the 9's complement equals the bitwise NOT) makes it valuable in BCD arithmetic circuits.",
    "Using standard CMOS gate ICs (74HC04, 74HC08, 74HC32, 74HC86) on a breadboard provides a direct verification path from Boolean algebra through to observable LED outputs, reinforcing the connection between logic design theory and physical digital systems.",
  ],
};
