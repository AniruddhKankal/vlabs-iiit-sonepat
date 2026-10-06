import { type LabSection } from "@/labs/lab-content.types";

export const observations: LabSection = {
  id: "observations",
  title: "Observations",
  type: "observation",
  paragraphs: [
    "Record the multimeter reading across $R_L$ before and after the filter capacitor $C_1$ is connected, and compare against the theoretical value $V_{dc} = V_m / \\pi$.",
  ],
  table: {
    headers: ["Parameter", "Without Filter (C1)", "With Filter (C1)"],
    rows: [
      ["Peak input voltage $V_m$", "12 V", "12 V"],
      ["Measured $V_{dc}$ across $R_L$", "3.6 V", "10.4 V"],
      ["Theoretical $V_{dc}$", "3.82 V", "\u2248 $V_m - V_\\gamma$"],
      ["Ripple observed", "High (half-cycle pulses)", "Low (smoothed)"],
    ],
  },
};
