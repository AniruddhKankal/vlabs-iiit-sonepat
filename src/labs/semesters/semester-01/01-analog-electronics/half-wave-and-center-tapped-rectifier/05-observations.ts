import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "The input AC secondary voltage from the transformer was measured as $V_{rms} = 6.36\\text{ V}$ per secondary winding half, " +
      "corresponding to a peak input voltage $V_m = \\sqrt{2} V_{rms} \\approx 9.0\\text{ V}$.",
    "Measurements were recorded across the $1\\text{ k}\\Omega$ load resistor for both the Half-Wave Rectifier and the Center-Tapped Full-Wave Rectifier, " +
      "both without filter and with the $100\\ \\mu\\text{F}$ shunt capacitor filter.",
  ],
  table: {
    headers: [
      "Circuit Parameter",
      "Half-Wave Rectifier",
      "Center-Tapped Full-Wave Rectifier",
    ],
    rows: [
      ["Secondary AC Voltage ($V_{rms}$)", "6.36 V", "6.36 V – 0 – 6.36 V"],
      ["Peak AC Input Voltage ($V_m$)", "9.00 V", "9.00 V"],
      ["Number of Rectifier Diodes", "1 (D1)", "2 (D1, D2)"],
      [
        "Conduction Angle per Diode",
        "180° (positive half only)",
        "180° each (alternate half-cycles)",
      ],
      [
        "Theoretical DC Voltage ($V_{dc}$)",
        "2.86 V ($V_m / \\pi$)",
        "5.73 V ($2V_m / \\pi$)",
      ],
      ["Measured DC Output Voltage ($V_{dc}$)", "2.84 V", "5.68 V"],
      [
        "Measured RMS Output Voltage ($V_{rms}$)",
        "4.48 V ($V_m / 2$)",
        "6.32 V ($V_m / \\sqrt{2}$)",
      ],
      ["Ripple Factor ($\\gamma$)", "1.21", "0.48"],
      [
        "Output Ripple Frequency ($f_r$)",
        "50 Hz ($f_{in}$)",
        "100 Hz ($2f_{in}$)",
      ],
      ["Rectification Efficiency ($\\eta$)", "40.2%", "80.6%"],
      ["Peak Inverse Voltage (PIV)", "9.0 V ($V_m$)", "18.0 V ($2V_m$)"],
      ["Filtered DC Voltage (with 100 µF)", "7.45 V", "8.12 V"],
    ],
  },
};
