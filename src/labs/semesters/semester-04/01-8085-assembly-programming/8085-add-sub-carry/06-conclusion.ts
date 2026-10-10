import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The ADC instruction enabled collection of the carry from an 8-bit addition to form a correct 16-bit result: 200 + 100 = 300 = 012CH.",
    "JNC (Jump if No Carry) was used to skip the borrow-flag setting, demonstrating conditional branching based on the Carry flag.",
    "Multi-precision arithmetic in 8085 requires careful sequencing of ADD/ADC for addition and SUB/SBB for subtraction.",
    "The technique of storing 00H in A and adding the carry is the standard method for extending an 8-bit sum to 16 bits on the 8085.",
  ],
};
