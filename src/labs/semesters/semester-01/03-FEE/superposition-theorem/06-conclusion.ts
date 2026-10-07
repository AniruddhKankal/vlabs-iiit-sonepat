import { type ConclusionSection } from "@/labs/lab-content.types";
export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The Superposition Theorem is verified. The algebraic sum of partial load currents equals the total load current when both sources are active, within experimental error of less than 1.5%.",
    "The small discrepancy is due to resistor tolerances and contact resistances — well within the ±5% tolerance band of components used.",
    "The theorem is a powerful tool: by reducing a multi-source problem into single-source problems, complex networks become tractable.",
  ],
};
