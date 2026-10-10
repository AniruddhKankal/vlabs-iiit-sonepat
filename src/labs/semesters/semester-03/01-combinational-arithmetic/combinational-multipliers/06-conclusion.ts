import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The combinational array multiplier provides a simple, regular structure for binary multiplication using n² AND gates for partial product generation and O(n²) adder gates for summation. The critical path delay is O(n) gate levels due to carry propagation through the adder rows.",
    "The regular array structure is advantageous for VLSI implementation as it allows systematic placement and routing. However, for high-speed applications, the O(n) delay is unacceptable, and Wallace tree or Dadda tree multipliers (O(log n) delay) are preferred.",
    "Signed multiplication using the Baugh-Wooley method extends the unsigned array approach to 2's complement numbers with minimal additional logic, making it the signed equivalent of the unsigned array multiplier. Both are used as reference designs when understanding more complex optimized multiplier architectures.",
  ],
};
