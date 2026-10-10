import { type ObservationSection } from "@/labs/lab-content.types";
export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Transformer: 9 V RMS, 50 Hz. $R_L = 1\\,\\text{k}\\Omega$. Bridge rectifier (4× 1N4007). Theoretical $\\gamma$ (no filter) = 0.48. At 1000 µF: $\\gamma = 1/(2 \\times 1.73 \\times 100 \\times 1000 \\times 10^{-6}) \\approx 0.003$.",
  ],
  table: {
    headers: [
      "Filter $C$",
      "$V_{avg}$ (V)",
      "$V_{ripple,pp}$ (mV)",
      "Ripple Factor $\\gamma$",
    ],
    rows: [
      ["No filter", "7.6", "9100", "0.48"],
      ["10 µF", "9.5", "1800", "0.095"],
      ["47 µF", "11.0", "380", "0.020"],
      ["220 µF", "11.8", "82", "0.004"],
      ["1000 µF", "12.2", "18", "0.0009"],
    ],
  },
};
