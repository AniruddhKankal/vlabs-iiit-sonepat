import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    { name: "NPN transistor", specification: "BC547", quantity: "1" },
    { name: "Resistor (base)", specification: "100 kΩ, 0.25 W", quantity: "1" },
    {
      name: "Variable DC power supply",
      specification: "0–15 V (V_BB, base supply)",
      quantity: "1",
    },
    {
      name: "Variable DC power supply",
      specification: "0–15 V (V_CC, collector supply)",
      quantity: "1",
    },
    {
      name: "Ammeter (base current I_B)",
      specification: "0–200 µA",
      quantity: "1",
    },
    {
      name: "Ammeter (collector current I_C)",
      specification: "0–100 mA",
      quantity: "1",
    },
    {
      name: "Voltmeter (V_BE)",
      specification: "DC, 0–1 V",
      quantity: "1",
    },
    {
      name: "Voltmeter (V_CE)",
      specification: "DC, 0–15 V",
      quantity: "1",
    },
    { name: "Breadboard", quantity: "1" },
    {
      name: "Connecting wires and probes",
      specification: "Single-strand 22 AWG, BNC probes",
      quantity: "As required",
    },
  ],
};
