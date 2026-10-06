import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Supply voltage VCC = +5 V. C0 = 0 (tied to GND). No carry-in.",
    "Sum LEDs represent S4 (MSB, blue) down to S1 (LSB, red). C4 (white) is the 5th bit.",
    "LED ON = logic HIGH = 1; LED OFF = logic LOW = 0.",
  ],
  table: {
    headers: [
      "A (decimal)",
      "B (decimal)",
      "A+B",
      "S4 S3 S2 S1",
      "C4",
      "Result",
    ],
    rows: [
      [3, 5, 8, "1 0 0 0", 0, "8 (no overflow)"],
      [7, 9, 16, "0 0 0 0", 1, "16 (overflow)"],
      [10, 2, 12, "1 1 0 0", 0, "12 (no overflow)"],
      [15, 15, 30, "1 1 1 0", 1, "30 (overflow)"],
    ],
  },
};
