import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The 2:1 Multiplexer has been successfully implemented using 74HC04 (NOT), 74HC08 (AND), and 74HC32 (OR) ICs. All eight input combinations were tested and the observed output Y correctly follows input A when S=0 and input B when S=1.",
    "The MUX functions as a digitally controlled data selector, routing exactly one of its input signals to the output based on the binary value of the select line. The gate-level implementation confirms the Boolean expression Y = A·S' + B·S.",
    "The 2:1 MUX is a foundational building block: larger MUX circuits (4:1, 8:1) are constructed by hierarchically combining 2:1 MUXes. In programmable logic, MUX-based LUTs form the core of FPGA fabric, and understanding the 2:1 MUX behaviour is essential for all subsequent digital design work.",
  ],
};
