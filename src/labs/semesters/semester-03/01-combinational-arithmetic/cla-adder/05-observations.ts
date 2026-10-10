import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Both RCA and CLA give the same result for the addition. The difference is in propagation delay.",
    "The CLA computes all carry bits in one parallel operation using AND-OR logic, independent of word width.",
  ],
  table: {
    headers: [
      "Adder Type",
      "4-bit delay",
      "8-bit delay",
      "16-bit delay",
      "32-bit delay",
    ],
    rows: [
      ["Ripple Carry (RCA)", "4 × t_FA", "8 × t_FA", "16 × t_FA", "32 × t_FA"],
      [
        "Carry Look-Ahead (CLA)",
        "~4 levels",
        "~4 levels",
        "~6 levels (2-level CLA)",
        "~8 levels (3-level)",
      ],
      [
        "74HC283 (4-bit CLA)",
        "9 ns (typ)",
        "18 ns (2×283)",
        "36 ns (4×283)",
        "72 ns (8×283)",
      ],
    ],
  },
};
