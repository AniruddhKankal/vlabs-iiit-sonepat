import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    {
      name: "DC Regulated Power Supply",
      specification: "0–12 V, 1 A",
      quantity: "1",
    },
    {
      name: "Carbon Film Resistor",
      specification: "1 k$\\Omega$, ±5%, 0.25 W",
      quantity: "2",
    },
    {
      name: "Digital Multimeter",
      specification: "Voltage & current measurement",
      quantity: "2",
    },
    {
      name: "Bread Board",
      specification: "Full size, 830 tie-points",
      quantity: "1",
    },
    {
      name: "Connecting Wires",
      specification: "22 AWG solid-core jumper wires",
      quantity: "15",
    },
    {
      name: "Milliammeter / Ammeter",
      specification: "0–100 mA DC",
      quantity: "1",
    },
    { name: "Voltmeter", specification: "0–15 V DC", quantity: "1" },
    {
      name: "Rheostat (optional)",
      specification: "100 $\\Omega$, 1 A",
      quantity: "1",
    },
  ],
};
