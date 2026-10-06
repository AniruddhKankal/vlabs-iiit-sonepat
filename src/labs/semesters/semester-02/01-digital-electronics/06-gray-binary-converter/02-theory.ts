import { type TheorySection } from "@/labs/lab-content.types";

export const theory: TheorySection = {
  id: "theory",
  type: "text",
  title: "Theory",
  paragraphs: [
    "Gray code, also called reflected binary code, is a binary numeral system where two successive values differ in only a single bit. This property — the unit-distance property — makes Gray code invaluable in applications where mechanical or electrical glitches during state transitions could be catastrophic, such as shaft encoders, analog-to-digital converters, and error detection systems.",
    "The Binary-to-Gray conversion uses XOR gates: the MSB G3 passes through unchanged (G3 = B3), and each subsequent Gray bit is the XOR of adjacent binary bits: G2 = B3 ⊕ B2, G1 = B2 ⊕ B1, G0 = B1 ⊕ B0. This circuit requires only three 2-input XOR gates for a 4-bit conversion.",
    "The Gray-to-Binary conversion is the inverse process. B3 = G3 (MSB unchanged), then each binary bit is the XOR of all Gray bits above it: B2 = G3 ⊕ G2, B1 = G3 ⊕ G2 ⊕ G1, B0 = G3 ⊕ G2 ⊕ G1 ⊕ G0. This can be implemented with three cascaded XOR gates per bit, or equivalently using XNOR reduction.",
    "The 74HC86 is a quad 2-input XOR gate CMOS IC operating from 2 V to 6 V. Each IC contains four independent XOR gates in a DIP-14 package. One 74HC86 IC provides all three XOR gates needed for the Binary-to-Gray converter demonstrated in this experiment.",
  ],
};
