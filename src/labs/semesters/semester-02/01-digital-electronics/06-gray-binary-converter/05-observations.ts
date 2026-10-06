import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Supply voltage VCC = +5 V DC. One 74HC86 quad-XOR IC powers all three XOR gates.",
    "Note the unit-distance property: adjacent Gray code values differ in exactly one bit position.",
    "Decimal 3 (0011) and decimal 4 (0100) in binary differ in three bits, but in Gray code (0010 and 0110) they differ in only one bit — demonstrating the advantage of Gray code.",
  ],
  table: {
    headers: [
      "B3",
      "B2",
      "B1",
      "B0",
      "Decimal",
      "G3",
      "G2",
      "G1",
      "G0",
      "Gray Code",
    ],
    rows: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, "0000"],
      [0, 0, 0, 1, 1, 0, 0, 0, 1, "0001"],
      [0, 0, 1, 0, 2, 0, 0, 1, 1, "0011"],
      [0, 0, 1, 1, 3, 0, 0, 1, 0, "0010"],
      [0, 1, 0, 0, 4, 0, 1, 1, 0, "0110"],
      [0, 1, 0, 1, 5, 0, 1, 1, 1, "0111"],
      [0, 1, 1, 0, 6, 0, 1, 0, 1, "0101"],
      [0, 1, 1, 1, 7, 0, 1, 0, 0, "0100"],
    ],
  },
};
