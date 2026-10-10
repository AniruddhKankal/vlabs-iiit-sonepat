import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The experiment verifies both of Kirchhoff's Laws. At node A, the algebraic sum of all branch currents " +
      "is zero for both supply configurations, confirming KCL.",

    "Around each closed loop, the algebraic sum of all EMFs and voltage drops is zero within experimental " +
      "error ($< 1\\%$), confirming KVL. The small residual is attributable to resistor tolerances, " +
      "contact resistance, and instrument accuracy.",

    "These results demonstrate that KCL and KVL are reliable analytical tools for DC circuit analysis, " +
      "prerequisite to more advanced theorems such as Superposition, Thevenin, and Norton.",
  ],
};
