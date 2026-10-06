import { type ConclusionSection } from "@/labs/lab-content.types";
export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "Norton's Theorem is verified. Short-circuit current $I_N$ and Norton resistance $R_N$ agree with theoretical calculations within 1%.",
    "Load voltage from the Norton equivalent matches that from the original network within 0.6%.",
    "The duality relationship $I_N = V_{th}/R_{th}$ was confirmed experimentally, reinforcing the conceptual link between Norton's and Thevenin's theorems.",
  ],
};
