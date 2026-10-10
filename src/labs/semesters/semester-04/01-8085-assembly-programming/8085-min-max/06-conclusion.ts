import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "CMP is the key instruction: it performs A - operand and sets flags without modifying registers, enabling decision making without data loss.",
    "Keeping MIN in C and MAX in D frees the accumulator for comparisons and avoids memory accesses in the inner loop.",
    "The DCR B / JNZ pattern is efficient: DCR sets the Zero flag and JNZ checks it in one instruction pair, costing only 10 clock cycles per iteration.",
    "This linear scan algorithm (O(n)) is optimal for unsorted arrays; no 8085 sort is needed to find just the extreme values.",
  ],
};
