import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Supply voltage VCC = +5 V DC. 74HC273 powered from the same VCC/GND rails.",
    "LED forward voltages: red ≈ 1.8 V, yellow ≈ 2.1 V, green ≈ 2.0 V. Series resistors = 330 Ω.",
    "The Q outputs change only on the rising edge of CLK — verify this by changing D inputs without clocking.",
    "With MR_bar = LOW (momentarily ground it), all Q outputs go to 0 regardless of CLK.",
  ],
  table: {
    headers: [
      "D[7:0] (binary)",
      "D (hex)",
      "CLK edge",
      "Q[7:0]",
      "LEDs ON (bit positions)",
    ],
    rows: [
      ["0000 0000", "0x00", "Rising", "0000 0000", "None"],
      ["1111 1111", "0xFF", "Rising", "1111 1111", "Q7–Q0 all ON"],
      ["1011 0100", "0xB4", "Rising", "1011 0100", "Q7, Q5, Q4, Q2"],
      ["0101 0101", "0x55", "Rising", "0101 0101", "Q6, Q4, Q2, Q0"],
    ],
  },
};
