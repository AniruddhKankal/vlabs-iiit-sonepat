import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The 4-bit binary subtractor was successfully implemented by combining a 74HC86 XOR quad gate with a 74HC283 4-bit adder. The XOR gates tied to VCC inverted the B operand, and C0=1 completed the two's complement, implementing A − B = A + B' + 1.",
    "The output LEDs correctly displayed the difference for both A≥B (positive result, C4=1) and A<B (negative result in two's complement, C4=0) cases, validating the two's complement subtraction method without requiring a dedicated subtractor IC.",
    "This technique generalises to any adder: by XORing each B bit with a mode-select signal M, the same circuit can function as either an adder (M=0, C0=0) or a subtractor (M=1, C0=1). This adder/subtractor duality is the basis of the arithmetic logic unit in every processor.",
  ],
};
