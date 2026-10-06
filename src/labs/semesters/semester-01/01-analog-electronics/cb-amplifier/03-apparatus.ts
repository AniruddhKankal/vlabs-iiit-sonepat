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
      name: "BC547 NPN Transistor",
      specification: "TO-92, $\\beta \\approx 200$",
      quantity: "1",
    },
    {
      name: "R_E Emitter Resistor",
      specification: "$1\\,\\text{k}\\Omega$, ¼ W",
      quantity: "1",
    },
    {
      name: "R_C Collector Resistor",
      specification: "$4.7\\,\\text{k}\\Omega$, ¼ W",
      quantity: "1",
    },
    {
      name: "C_in Coupling Capacitor",
      specification: "$10\\,\\mu\\text{F}$ / 25 V electrolytic",
      quantity: "1",
    },
    {
      name: "DC Power Supply",
      specification: "0–12 V variable, 500 mA",
      quantity: "1",
    },
    {
      name: "Digital Multimeter",
      specification: "DC voltage + DC mA modes",
      quantity: "2",
    },
    {
      name: "Breadboard wires",
      specification: "Red, black, orange, green, blue",
      quantity: "1 set",
    },
    {
      name: "LED (yellow)",
      specification: "5 mm, $V_f \\approx 2.0\\,\\text{V}$",
      quantity: "1",
    },
  ],
};
