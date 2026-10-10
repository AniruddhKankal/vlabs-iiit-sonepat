import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The Full Subtractor circuit has been successfully implemented and verified. All eight input combinations produce the correct Difference and Borrow-out outputs, matching the theoretical truth table.",
    "The circuit correctly handles the three-input subtraction A − B − Bin, including the case where multiple borrows cascade, as evidenced by the correct output for (0,1,1) → D=0, Bout=1 and (1,1,1) → D=1, Bout=1.",
    "By cascading Full Subtractors (connecting each Bout to the next Bin), multi-bit binary subtraction can be performed. In practice, subtraction in digital systems is often implemented using two's complement addition, but the Full Subtractor provides direct insight into borrow propagation and binary arithmetic fundamentals.",
  ],
};
