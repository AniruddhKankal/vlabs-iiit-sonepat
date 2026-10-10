import { type ConclusionSection } from "@/labs/lab-content.types";
export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "Increasing capacitance from 10 µF to 1000 µF reduced ripple voltage from ~1800 mV to ~18 mV peak-to-peak, and the ripple factor from 0.095 to 0.0009 — a 100× improvement.",
    "Average output voltage increased with larger capacitance, approaching $V_m$. The observed relationship $\\gamma \\propto 1/C$ confirmed the theoretical model.",
    "The trade-off between ripple reduction and peak diode current was demonstrated. This experiment establishes the design methodology for capacitor-input power supply filters.",
  ],
};
