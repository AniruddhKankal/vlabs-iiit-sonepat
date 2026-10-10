import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The program correctly computed 10+20+30+40+50 = 150 = 96H using HL-based indirect addressing.",
    "INX H after each ADD M advances the pointer through the array without affecting the accumulator or flags.",
    "Carry collection with INR C on JNC/INR ensures the 16-bit sum is correctly maintained even if partial sums overflow 8 bits.",
    "The self-describing array format (count in first byte) is a common data structure in 8085 programs and firmware.",
  ],
};
