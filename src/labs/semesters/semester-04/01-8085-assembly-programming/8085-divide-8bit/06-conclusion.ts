import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The repeated-subtraction algorithm successfully divided 29 by 5, yielding quotient 5 and remainder 4 (29 = 5×5 + 4).",
    "CMP is crucial because it sets the Carry flag when A < B without modifying A, making it perfect for loop termination.",
    "JC branches out of the loop as soon as the Carry flag is set, i.e., when the remaining dividend is less than the divisor.",
    "Division by zero is guarded by ORA A followed by JZ, a common 8085 idiom for testing if A equals zero.",
  ],
};
