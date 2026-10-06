import { type LabSection } from "@/labs/lab-content.types";

export const apparatus: LabSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    { name: "Breadboard", specification: "830-point", quantity: "1" },
    {
      name: "Rectifier diode",
      specification: "1N4007 (silicon p-n junction)",
      quantity: "1",
    },
    { name: "Load resistor", specification: "1 k\u03A9, 1/4 W", quantity: "1" },
    {
      name: "Filter capacitor",
      specification: "100 \u00B5F electrolytic",
      quantity: "1",
    },
    {
      name: "AC source",
      specification:
        "Step-down transformer / function generator, 12 V peak, 50 Hz",
      quantity: "1",
    },
    {
      name: "Digital multimeter",
      specification: "DC voltage / AC voltage ranges",
      quantity: "1",
    },
    {
      name: "Connecting wires",
      specification: "Single-strand, assorted colors",
      quantity: "1",
    },
  ],
};
