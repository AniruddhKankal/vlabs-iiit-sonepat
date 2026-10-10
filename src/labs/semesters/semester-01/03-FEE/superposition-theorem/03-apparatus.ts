import { type ApparatusSection } from "@/labs/lab-content.types";
export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    {
      name: "DC Regulated Power Supply",
      specification: "0–15 V, 1 A (two channels)",
      quantity: "2",
    },
    {
      name: "Resistor R1",
      specification: "1 k$\\Omega$, ±1%, 0.25 W",
      quantity: "1",
    },
    {
      name: "Resistor R2",
      specification: "2.2 k$\\Omega$, ±1%, 0.25 W",
      quantity: "1",
    },
    {
      name: "Resistor R3 (Load)",
      specification: "3.3 k$\\Omega$, ±1%, 0.25 W",
      quantity: "1",
    },
    {
      name: "Digital Multimeter",
      specification: "Voltage & current measurement",
      quantity: "1",
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
      name: "Short-circuit Link",
      specification: "Jumper wire for killing voltage source",
      quantity: "2",
    },
  ],
};
