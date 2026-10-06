import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    {
      name: "Breadboard",
      specification: "830 tie-point",
      quantity: "1",
    },
    {
      name: "Zener Diode",
      specification: "1N4733A, V_Z = 5.1 V, 1 W",
      quantity: "1",
    },
    {
      name: "Series Resistor R_S",
      specification: "470 Ω, ½ W",
      quantity: "1",
    },
    {
      name: "Load Resistor R_L",
      specification: "1 kΩ, 2.2 kΩ, 4.7 kΩ (¼ W each)",
      quantity: "1 each",
    },
    {
      name: "Regulated DC Power Supply",
      specification: "0–12 V variable",
      quantity: "1",
    },
    {
      name: "Digital Multimeter (×2)",
      specification: "Input and output voltage measurement",
      quantity: "2",
    },
    {
      name: "Connecting Wires",
      specification: "M-M jumper wires",
      quantity: "1 set",
    },
  ],
};
