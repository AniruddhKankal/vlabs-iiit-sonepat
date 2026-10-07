import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Zener: 1N4733A. $V_Z(\\text{nominal}) = 5.1\\,\\text{V}$, $R_S = 470\\,\\Omega$.",
    "Forward threshold $V_f \\approx 0.62\\text{–}0.65\\,\\text{V}$. Breakdown knee at $V_Z \\approx 5.0\\text{–}5.2\\,\\text{V}$ (within ±2% of spec).",
    "Measured $Z_Z = \\Delta V_Z / \\Delta I_Z \\approx 6\\text{–}9\\,\\Omega$ (consistent with datasheet at $I_Z = 5\\text{–}20\\,\\text{mA}$).",
  ],
  table: {
    headers: ["$V_s$ (V)", "$V_Z$ (V)", "$I_Z$ (mA)", "Region"],
    rows: [
      [0.0, "0.00", "0.00", "Off"],
      [0.5, "0.49", "0.00", "Cut-off"],
      [1.0, "0.62", "0.80", "Forward active"],
      [2.0, "0.66", "2.85", "Forward active"],
      ["—", "—", "—", "— (reverse setup) —"],
      ["4", "−3.98", "0.00", "Pre-breakdown"],
      ["5", "−4.82", "0.37", "Entering knee"],
      ["6", "−5.10", "1.91", "Breakdown"],
      ["8", "−5.12", "6.13", "Breakdown"],
      ["10", "−5.14", "10.3", "Breakdown"],
    ],
  },
};
