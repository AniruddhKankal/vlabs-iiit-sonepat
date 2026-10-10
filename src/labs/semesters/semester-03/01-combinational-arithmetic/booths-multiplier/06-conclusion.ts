import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "Booth's multiplication algorithm correctly multiplies two signed 2's complement numbers by examining multiplier bit pairs (Q₀, Q₋₁) and performing add, subtract, or no-operation, followed by an arithmetic right shift at each step. The product accumulates in the (A, Q) register pair.",
    "The algorithm's efficiency comes from recognizing that a string of 1s in the multiplier (which would require many additions in naive multiplication) can be replaced by a subtract at the first 1 and nothing until the last 1, where an add occurs. This is the binary equivalent of saying 01111110 = 10000000 − 00000010 (128 − 2).",
    "Modified Booth encoding (Radix-4) doubles the efficiency by examining 3-bit groups, halving the number of partial products. All modern multiplier circuits in CPUs, GPUs, and DSPs use Booth encoding combined with Wallace/Dadda trees for high-speed signed multiplication.",
  ],
};
