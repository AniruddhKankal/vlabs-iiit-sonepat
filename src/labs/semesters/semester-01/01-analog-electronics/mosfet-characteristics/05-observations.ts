import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Device: 2N7000. $R_D = 1\\,\\text{k}\\Omega$. $V_{TH}$ (extracted from $\\sqrt{I_D}$ plot) $\\approx 2.0\\,\\text{V}$.",
    "Table (a): Transfer characteristics at $V_{DS} = 5\\,\\text{V}$.",
  ],
  table: {
    headers: [
      "$V_{GS}$ (V)",
      "$I_D$ (mA)",
      "$\\sqrt{I_D}$ (mA$^{0.5}$)",
      "Region",
    ],
    rows: [
      [0, "0.00", "0.000", "Off"],
      [1.5, "0.00", "0.000", "Off"],
      [2.5, "0.25", "0.500", "Saturation"],
      [3, "1.00", "1.000", "Saturation"],
      [3.5, "2.25", "1.500", "Saturation"],
      [4, "4.00", "2.000", "Saturation"],
      [4.5, "6.25", "2.500", "Saturation"],
      [5, "9.00", "3.000", "Saturation"],
    ],
  },
};
