import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Diode: 1N4148. Series resistor: 470 $\\Omega$. Supply variable from 0–10 V.",
    "Threshold voltage $V_{th}$ (forward): $\\approx 0.62\\text{–}0.65\\,\\text{V}$.",
    "Maximum forward current tested: ~15 mA at $V_{supply} = 8\\,\\text{V}$.",
    "Reverse leakage current at −10 V: $< 1\\,\\mu\\text{A}$ (below DMM resolution).",
  ],
  table: {
    headers: ["$V_{supply}$ (V)", "$V_D$ (V)", "$I_D$ (mA)", "Region"],
    rows: [
      [0.0, "0.00", "0.00", "Cut-off"],
      [0.5, "0.49", "0.00", "Cut-off"],
      [1.0, "0.62", "0.80", "Forward active"],
      [2.0, "0.66", "2.85", "Forward active"],
      [5.0, "0.69", "9.17", "Forward active"],
      [8.0, "0.71", "15.5", "Forward active"],
    ],
  },
};
