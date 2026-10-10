import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The Full Adder circuit has been successfully implemented using 74HC86 (XOR), 74HC08 (AND), and 74HC32 (OR) ICs. All eight input combinations were tested and the observed Sum and Carry-out outputs match the theoretical truth table exactly.",
    "The two-level gate implementation (XOR→Sum, AND/OR→Cout) correctly performs single-bit binary addition with carry-in. The intermediate signal P = A⊕B is efficiently shared between the Sum and Cout paths, minimising gate count.",
    "The Full Adder is a critical building block of arithmetic logic units (ALUs). Understanding its gate-level implementation provides the foundation for designing multi-bit adders, subtractors, comparators, and more complex arithmetic circuits.",
  ],
};
