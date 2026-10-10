import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The successive odd-number subtraction method exploits the identity n² = Σᵢ₌₁ⁿ (2i−1) to compute integer square roots without multiplication or division hardware.",
    "The loop correctly terminates using CMP B / JC to detect when the remaining value is less than the next odd number.",
    "For perfect squares, the A=0 exit path (JZ DONE_EQ) is needed because after the last subtraction A equals 0, and the loop would otherwise continue subtracting the next odd number.",
    "The algorithm has O(√N) time complexity, which for 8-bit inputs (N ≤ 255) means at most 16 iterations — fast enough for any practical 8085 application.",
  ],
};
