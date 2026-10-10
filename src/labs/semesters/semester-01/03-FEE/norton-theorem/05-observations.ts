import { type ObservationSection } from "@/labs/lab-content.types";
export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Norton parameters and load voltage comparison between original network and Norton equivalent circuit.",
  ],
  table: {
    headers: ["Parameter", "Theoretical Value", "Measured Value", "Error (%)"],
    rows: [
      ["$I_N$ (mA)", 9.0, 8.93, 0.78],
      ["$R_N$ (k$\\Omega$)", 0.688, 0.695, 1.02],
      ["$I_N$ from $V_{th}/R_N$ (mA)", 8.99, 8.85, 1.56],
      ["$V_L$ (Original, $R_L=3.3\\,\\text{k}\\Omega$) (V)", 5.12, 5.09, 0.59],
      ["$V_L$ (Norton, $R_L=3.3\\,\\text{k}\\Omega$) (V)", 5.12, 5.1, 0.39],
    ],
  },
};
