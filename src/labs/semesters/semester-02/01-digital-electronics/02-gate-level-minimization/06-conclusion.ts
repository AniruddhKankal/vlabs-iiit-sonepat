import { type LabSection } from "@/labs/lab-content.types";

export const conclusion: LabSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The function F(A,B,C) = Σm(5,6,7) was minimized with a K-map to F = AB + AC and implemented as a two-level AND-OR network and as a multi-level factored network F = A(B + C). Both networks gave identical outputs for all eight input combinations, which verifies that they are equivalent. Factoring reduced the cost from 3 gates and 4 literals to 2 gates and 3 literals. In general, multi-level networks save hardware at the cost of extra levels and propagation delay, while two-level networks are faster and more regular.",
  ],
};
