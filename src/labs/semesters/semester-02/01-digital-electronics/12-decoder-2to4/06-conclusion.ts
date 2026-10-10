import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The 2:4 Binary Decoder has been successfully implemented using 74HC04 (NOT) and 74HC08 (AND) ICs. All four input combinations were tested and the one-hot output property is confirmed — exactly one of the four output LEDs is ON for each unique input code.",
    "The observed outputs Y0 through Y3 match the expected minterm expressions (A'B', A'B, AB', AB) exactly. The decoder correctly maps each 2-bit binary address to a unique, mutually exclusive output line.",
    "This circuit demonstrates the fundamental operation of address decoding. In a real memory system, the four outputs would connect to the chip-enable (CE) pins of four separate memory chips, allowing the CPU to access one chip at a time based on the two most-significant address bits.",
  ],
};
