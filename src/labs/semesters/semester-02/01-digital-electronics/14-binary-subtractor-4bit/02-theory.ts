import { type TheorySection } from "@/labs/lab-content.types";

export const theory: TheorySection = {
  id: "theory",
  type: "text",
  title: "Theory",
  paragraphs: [
    "Binary subtraction can be performed using an adder by exploiting two's complement representation. The two's complement of a number N is obtained by inverting all bits (one's complement) and adding 1. Therefore: A − B = A + (two's complement of B) = A + B' + 1, where B' denotes the bitwise complement of B.",
    "XOR gates implement programmable inversion: when one input of an XOR is tied HIGH (1), the output is the complement of the other input (X ⊕ 1 = X'). When tied LOW (0), the XOR passes the input unchanged (X ⊕ 0 = X). In this circuit, the B-input of each XOR gate is permanently tied to VCC, so all four XOR gates act as inverters for B1–B4.",
    "The carry-in C0 of the 74HC283 is tied to VCC (HIGH), providing the +1 needed to complete the two's complement. The adder therefore computes: A + B' + 1 = A − B (in two's complement arithmetic). The carry-out C4 indicates the sign of the result: C4=1 means A ≥ B (positive or zero result); C4=0 means A < B (negative result in 4-bit unsigned).",
    "For signed 4-bit arithmetic (−8 to +7), results outside this range indicate overflow. When A ≥ B, the result S4–S1 is the correct magnitude. When A < B, S4–S1 holds the two's complement of (B−A); to recover the magnitude, invert S4–S1 and add 1. This experiment demonstrates both cases.",
  ],
};
