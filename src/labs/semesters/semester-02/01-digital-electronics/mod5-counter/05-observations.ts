import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Supply: +5 V. Clock pulsed manually. Count resets at 5 as expected.",
    "Note: count 5 (0101) is too brief to be observed — the asynchronous reset acts within nanoseconds of QA and QC both going HIGH.",
  ],
  table: {
    headers: ["CLK Pulse", "QD", "QC", "QB", "QA", "Count", "LEDs (D C B A)"],
    rows: [
      ["Reset/0", 0, 0, 0, 0, 0, "off off off off"],
      [1, 0, 0, 0, 1, 1, "off off off RED"],
      [2, 0, 0, 1, 0, 2, "off off YEL off"],
      [3, 0, 0, 1, 1, 3, "off off YEL RED"],
      [4, 0, 1, 0, 0, 4, "off GRN off off"],
      ["5 → 0", 0, 0, 0, 0, "5→0", "Reset (instant)"],
    ],
  },
};
