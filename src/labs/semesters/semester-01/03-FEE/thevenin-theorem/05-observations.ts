import { type ObservationSection } from "@/labs/lab-content.types";
export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Open-circuit voltage, Thevenin resistance, and load measurements for original vs Thevenin equivalent circuit.",
  ],
  table: {
    headers: ["Parameter", "Theoretical Value", "Measured Value", "Error (%)"],
    rows: [
      ["$V_{th}$ (V)", 6.19, 6.15, 0.65],
      ["$R_{th}$ (k$\\Omega$)", 0.688, 0.695, 1.02],
      ["$V_L$ with R3=3.3 kΩ (Original) (V)", 5.12, 5.09, 0.59],
      ["$V_L$ with R3=3.3 kΩ (Thevenin) (V)", 5.12, 5.11, 0.2],
      ["$V_L$ with R4=4.7 kΩ (Original) (V)", 5.44, 5.41, 0.55],
      ["$V_L$ with R4=4.7 kΩ (Thevenin) (V)", 5.44, 5.42, 0.37],
    ],
  },
};
