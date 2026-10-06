import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Transistor: BC547 NPN. $V_{CC} = 9\\,\\text{V}$. $R_E = 1\\,\\text{k}\\Omega$, $R_C = 4.7\\,\\text{k}\\Omega$.",
    "Measured $\\alpha = I_C / I_E \\approx 0.988$ (theoretical: $\\alpha = \\beta/(1+\\beta) = 200/201 \\approx 0.995$). Output characteristics are very flat for $V_{CB} > 0.5\\,\\text{V}$, confirming high output impedance.",
  ],
  table: {
    headers: [
      "$V_{EB}$ (V)",
      "$I_E$ (mA)",
      "$I_C$ (mA)",
      "$\\alpha = I_C/I_E$",
    ],
    rows: [
      [0.5, "0.00", "0.00", "—"],
      [0.6, "0.28", "0.27", "0.964"],
      [0.65, "1.05", "1.04", "0.990"],
      [0.7, "2.10", "2.08", "0.990"],
      [0.75, "4.20", "4.15", "0.988"],
      [0.8, "7.60", "7.52", "0.989"],
    ],
  },
};
