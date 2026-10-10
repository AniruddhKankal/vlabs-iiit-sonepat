import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The 8085 assembly program successfully performed addition and subtraction of two 8-bit numbers.",
    "The ADD instruction adds register B to A and updates all five flags. Since 25H + 17H = 3CH < FFH, no carry is generated.",
    "The SUB instruction performs 2's complement subtraction. Since 25H > 17H, no borrow occurs and CY remains 0.",
    "Data transfer instructions LDA, STA, and MOV are fundamental for moving operands to/from the accumulator and registers.",
  ],
};
