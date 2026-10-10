import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The 4-bit binary adder using the 74HC283 IC was successfully demonstrated. The sum LEDs S1–S4 and carry-out LED C4 correctly displayed binary addition results for all tested input combinations, confirming the IC's arithmetic operation.",
    "The carry-lookahead architecture of the 74HC283 provides faster results than a simple ripple-carry adder, with all sum bits computed simultaneously rather than sequentially. This was evident in the immediate LED response upon input changes.",
    "The experiment demonstrates the role of carry-out in multi-precision arithmetic: two 74HC283 ICs can be cascaded by connecting C4 of the lower IC to C0 of the upper IC, forming an 8-bit adder capable of summing values from 0 to 510.",
  ],
};
