import { type LabSection } from "@/labs/lab-content.types";

export const observations: LabSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Note the AC input voltage and the DC output voltage across the load, both without and with the filter capacitor connected, and observe how the ripple visibly reduces once C1 is added.",
  ],
  table: {
    headers: [
      "Parameter",
      "Without filter capacitor",
      "With filter capacitor (100 µF)",
    ],
    rows: [
      ["AC input (Vrms, secondary)", "12 V", "12 V"],
      [
        "DC output across load (measured)",
        "~9.5 V (pulsating)",
        "~15.6 V (smoothed)",
      ],
      ["Ripple frequency", "100 Hz", "100 Hz"],
      [
        "Observed ripple",
        "High — visible pulsations each half-cycle",
        "Low — near-flat DC, small residual ripple",
      ],
    ],
  },
};
