import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Zener: 1N4733A (V_Z = 5.1 V, 1 W). R_S = 470 Ω. Supply variable 0–10 V.",
    "Nominal output voltage V_out ≈ 5.1 V (in regulation range).",
    "Maximum safe Zener current: I_Z_max = P_Z / V_Z = 1 / 5.1 ≈ 196 mA.",
  ],
  table: {
    headers: [
      "V_in (V)",
      "V_out — No Load (V)",
      "V_out — R_L=1kΩ (V)",
      "V_out — R_L=470Ω (V)",
    ],
    rows: [
      [4, "3.98", "3.96", "3.90"],
      [6, "5.10", "5.09", "5.07"],
      [8, "5.11", "5.10", "5.08"],
      [10, "5.12", "5.11", "5.09"],
    ],
  },
};
