import { type LabSection } from "@/labs/lab-content.types";

export const conclusion: LabSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "A 4-bit binary subtractor was built from a 74HC283 adder and four inverters using $A - B = A + \\overline{B} + 1$. For every test pair the sum outputs matched the calculated values.",
    "The carry-out $C_4$ acts as a no-borrow flag: $C_4 = 1$ when $A \\ge B$ and $C_4 = 0$ when $A < B$. In the borrow case, the sum lines hold the 2's complement of the magnitude.",
  ],
};
