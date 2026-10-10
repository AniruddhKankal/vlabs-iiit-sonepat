import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The Karnaugh map method was applied to minimize f = Σm(0,2,5,7) for three variables. The canonical SOP was reduced from four 3-literal product terms to two 2-literal terms: $f = \\overline{A}\\overline{C} + AC$, equivalent to XNOR(A,C).",
    "The procedure demonstrated identification of prime implicants by grouping adjacent 1-cells in the K-map, and selection of essential prime implicants that must appear in any minimal cover. Don't care conditions (not present in this example) can further reduce complexity when applicable.",
    "K-maps are practical for up to 4–5 variables. For larger functions, algorithmic methods such as the Quine–McCluskey algorithm or modern EDA tools (espresso, ABC) are used, which implement the same theoretical principles computationally.",
  ],
};
