import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The Half Subtractor circuit has been successfully implemented using 74HC86 (XOR), 74HC04 (NOT), and 74HC08 (AND) ICs. The observed Difference and Borrow outputs for all four input combinations match the expected truth table.",
    "The input combination (A=0, B=1) correctly generates a Borrow, demonstrating the circuit's ability to model borrowing in binary subtraction. The Borrow expression A'·B is confirmed to be asymmetric with respect to the two inputs.",
    "The Half Subtractor is the basic building block for binary subtractors. Cascading two Half Subtractors with an OR gate produces a Full Subtractor. Understanding this circuit lays the groundwork for designing ALUs capable of both addition and subtraction.",
  ],
};
