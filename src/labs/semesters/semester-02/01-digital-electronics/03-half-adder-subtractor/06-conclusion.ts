import { type LabSection } from "@/labs/lab-content.types";

export const conclusion: LabSection = {
  id: "conclusion",
  title: "Conclusion",
  type: "conclusion",
  paragraphs: [
    "The combined circuit was built and its outputs matched the expected truth table. One XOR gate produces both the Sum and the Difference, the AND gate produces the Carry, and a NOT gate followed by an AND gate produces the Borrow. This shows that a half adder and a half subtractor share most of their hardware.",
  ],
};
