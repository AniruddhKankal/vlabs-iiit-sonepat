import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    {
      name: "Breadboard",
      specification: "830 tie-point, solderless",
      quantity: "1",
    },
    {
      name: "LM741 Op-Amp",
      specification: "DIP-8, $A_{OL}\\approx 200{,}000$, GBW = 1 MHz",
      quantity: "2",
    },
    {
      name: "R_in Inverting",
      specification: "$10\\,\\text{k}\\Omega$, ¼ W",
      quantity: "1",
    },
    {
      name: "R_f1 Feedback (inv)",
      specification: "$100\\,\\text{k}\\Omega$, ¼ W",
      quantity: "1",
    },
    {
      name: "R1_ni Non-inv",
      specification: "$10\\,\\text{k}\\Omega$, ¼ W",
      quantity: "1",
    },
    {
      name: "R_f2 Feedback (NI)",
      specification: "$100\\,\\text{k}\\Omega$, ¼ W",
      quantity: "1",
    },
    {
      name: "Dual DC Supply",
      specification: "±12 V regulated, 500 mA",
      quantity: "1",
    },
    {
      name: "Digital Multimeter",
      specification: "DC voltage, 20 V range",
      quantity: "2",
    },
    {
      name: "LEDs",
      specification: "Red (inverting) and green (non-inverting), 5 mm",
      quantity: "1 each",
    },
    {
      name: "Signal Generator",
      specification: "DC–1 MHz, adjustable amplitude",
      quantity: "1",
    },
    {
      name: "Jumper wires",
      specification: "Assorted colours",
      quantity: "1 set",
    },
  ],
};
