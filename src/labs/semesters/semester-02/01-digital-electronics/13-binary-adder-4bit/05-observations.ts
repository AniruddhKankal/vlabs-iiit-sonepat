import { type LabSection } from "@/labs/lab-content.types";

export const observations: LabSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Apply each input combination, note the state of the four sum LEDs and the carry LED (1 = ON, 0 = OFF) and complete the table. The last column gives the expected result as decimal arithmetic and as the 5-bit binary result $C_{out}S_3S_2S_1S_0$.",
  ],
  table: {
    headers: [
      "Test",
      "A3A2A1A0",
      "B3B2B1B0",
      "Cin",
      "S3S2S1S0 (observed)",
      "Cout (observed)",
      "Expected (decimal)",
    ],
    rows: [
      ["1", "0000", "0000", "0", "", "", "0 + 0 = 0 (00000)"],
      ["2", "0101", "0011", "0", "", "", "5 + 3 = 8 (01000)"],
      ["3", "1001", "0110", "0", "", "", "9 + 6 = 15 (01111)"],
      ["4", "0111", "0001", "0", "", "", "7 + 1 = 8 (01000)"],
      ["5", "1010", "0101", "1", "", "", "10 + 5 + 1 = 16 (10000)"],
      ["6", "1111", "0001", "0", "", "", "15 + 1 = 16 (10000)"],
      ["7", "1111", "1111", "1", "", "", "15 + 15 + 1 = 31 (11111)"],
      ["8", "1100", "1100", "0", "", "", "12 + 12 = 24 (11000)"],
    ],
  },
};
