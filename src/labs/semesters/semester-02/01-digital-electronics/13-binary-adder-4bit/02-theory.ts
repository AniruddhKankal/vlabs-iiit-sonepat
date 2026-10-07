import { type TheorySection } from "@/labs/lab-content.types";

export const theory: TheorySection = {
  id: "theory",
  type: "text",
  title: "Theory",
  paragraphs: [
    "A binary adder is a digital circuit that performs addition of binary numbers. A 4-bit adder adds two 4-bit operands A (A4–A1) and B (B4–B1) along with a carry-in C0 to produce a 4-bit sum S (S4–S1) and a carry-out C4. The sum is a 5-bit result when C4 is included, allowing values from 0+0+0=0 to 15+15+1=31.",
    "The 74HC283 is a high-speed CMOS 4-bit binary full adder using carry-lookahead logic. Unlike a ripple-carry adder where each stage must wait for the previous carry, the 74HC283 generates all carries simultaneously based on the propagate (P=A⊕B) and generate (G=A·B) signals, reducing the critical path delay to a nearly constant time. This makes it suitable for use in ALUs and arithmetic pipelines.",
    "Pin description: A1–A4 and B1–B4 are the two 4-bit inputs (1=LSB, 4=MSB). C0 is carry-in (tie to GND for no initial carry). S1–S4 are the sum outputs. C4 is the carry-out, indicating overflow when the result exceeds 15. VCC (pin 16) and GND (pin 8) supply the 2–6 V operating voltage.",
    "Example: 3 + 5 = 8. A = 0011, B = 0101, C0 = 0. Sum S = 1000, C4 = 0. Example: 7 + 9 = 16. A = 0111, B = 1001, C0 = 0. Sum S = 0000, C4 = 1 (overflow). The full 5-bit result 10000 = 16 is correct when C4 is included as bit 5.",
  ],
};
