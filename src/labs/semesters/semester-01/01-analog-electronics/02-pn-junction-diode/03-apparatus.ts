import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    { name: "Breadboard", specification: "830 tie-point", quantity: "1" },
    {
      name: "1N4148 Silicon Diode",
      specification: "$V_{BR} = 75\\,\\text{V}$, $I_F = 200\\,\\text{mA}$",
      quantity: "1",
    },
    {
      name: "Resistor 470 $\\Omega$",
      specification: "¼ W, series current-limiter",
      quantity: "1",
    },
    {
      name: "Regulated DC Power Supply",
      specification: "0–12 V variable, 1 A",
      quantity: "1",
    },
    {
      name: "Digital Multimeter (×2)",
      specification: "One for voltage, one for current",
      quantity: "2",
    },
    {
      name: "Connecting Wires",
      specification: "M-M jumper wires",
      quantity: "1 set",
    },
  ],
};
