import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Supply voltage: +5 V DC. Function generator: 1 kHz sine wave, 5 V peak-to-peak.",
    "Diode forward voltage (1N4148): $\\approx 0.62\\,\\text{V}$. LED forward voltage: $\\approx 2.0\\,\\text{V}$.",
    "LED current: $I = (V_{CC} - V_f) / R = (5 - 2.0) / 330 \\approx 9.1\\,\\text{mA}$.",
  ],
  table: {
    headers: [
      "Component",
      "Marked Value",
      "Measured Value",
      "Within Tolerance?",
    ],
    rows: [
      ["Resistor 1 (470 $\\Omega$)", "470 Ω ±5%", "—", "—"],
      ["Resistor 2 (1 k$\\Omega$)", "1000 Ω ±5%", "—", "—"],
      ["Capacitor (100 nF)", "100 nF", "—", "—"],
      ["Capacitor (47 µF)", "47 µF", "—", "—"],
      ["1N4148 Diode $V_f$", "~0.65 V", "—", "—"],
      ["LED $V_f$ (red)", "~2.0 V", "—", "—"],
    ],
  },
};
