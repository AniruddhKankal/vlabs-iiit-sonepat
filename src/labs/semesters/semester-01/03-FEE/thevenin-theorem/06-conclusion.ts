import { type ConclusionSection } from "@/labs/lab-content.types";
export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "Thevenin's Theorem is verified. The open-circuit voltage $V_{th}$ and equivalent resistance $R_{th}$ agree with theoretical calculations within 1%.",
    "Load voltages on the original network match those on the Thevenin equivalent for both load values. Maximum discrepancy is 0.6%, within component and instrument tolerances.",
    "This experiment demonstrates the practical utility of Thevenin's Theorem: any complex linear network can be condensed into a single-source, single-resistor equivalent.",
  ],
};
