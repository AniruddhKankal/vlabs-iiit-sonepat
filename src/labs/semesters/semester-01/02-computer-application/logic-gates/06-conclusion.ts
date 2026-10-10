import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "All seven basic logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR) have been successfully realised using 74HC-series ICs on a breadboard. The observed truth tables for each gate match the theoretical truth tables exactly.",
    "The XNOR gate was derived by cascading an XOR gate output through a NOT gate, demonstrating that complex logic functions can be built by combining simpler gates. NAND and NOR gates are confirmed to be functionally complete building blocks.",
    "The 74HC logic family proved reliable at 5 V, with clear HIGH (> 4.5 V) and LOW (< 0.1 V) output levels easily distinguished by the LED indicators. This experiment builds the foundational understanding required for designing combinational and sequential digital circuits.",
  ],
};
