import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The experiment demonstrates that a 2:1 MUX can implement any 2-variable Boolean function by appropriately connecting its data inputs to constant 0, constant 1, input B, or its complement B'. The MUX itself requires no modification between functions.",
    "AND, OR, and XOR were successfully realised using the same MUX hardware. The observed outputs matched the expected truth tables in all twelve test cases (four combinations per function).",
    "This MUX-as-logic principle is the operational foundation of FPGA look-up tables (LUTs). In a commercial FPGA, each LUT's data bits are programmed during device configuration, effectively implementing any desired Boolean function in a single hardware cell. Understanding this concept bridges the gap between combinational logic theory and modern programmable hardware.",
  ],
};
