import { type TheorySection } from "@/labs/lab-content.types";

export const theory: TheorySection = {
  id: "theory",
  type: "text",
  title: "Theory",
  paragraphs: [
    "A digital magnitude comparator compares two binary numbers and produces three outputs: EQ (A = B), GT (A > B), and LT (A < B). For any input pair, exactly one of these outputs is HIGH. Comparators are essential in sorting networks, address decoders, and ALU flag generation.",
    "For a 1-bit comparator, the logic is straightforward. The equality output uses the XNOR function — XNOR(A, B) is HIGH only when A and B are equal: $$EQ = \\overline{A \\oplus B} = A \\cdot B + \\overline{A} \\cdot \\overline{B}$$ The greater-than output requires A to be HIGH and B to be LOW, implemented with A AND NOT_B: $$GT = A \\cdot \\overline{B}$$ The less-than output requires A to be LOW and B to be HIGH: $$LT = \\overline{A} \\cdot B$$",
    "For a 4-bit comparator (A[3:0] vs B[3:0]), comparison starts from the most-significant bit. If A3 ≠ B3, the result is determined immediately. If A3 = B3, comparison cascades to bit 2, then bit 1, then bit 0. The 74LS85 / 74HC85 IC implements this cascade logic with dedicated cascade inputs (IAGTB, IAEQB, IALTB) allowing multiple comparators to be chained for wider words.",
    "The IC 74HC266 (quad XNOR, DIP-14) and 74HC04 (hex inverter) combined with 74HC08 (AND gates) implement the three output functions on this breadboard. Three LEDs — yellow (EQ), red (GT), green (LT) — indicate the comparison result.",
  ],
};
