import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    {
      name: "Breadboard",
      specification: "830 tie-point solderless",
      quantity: "1",
    },
    {
      name: "Resistors",
      specification:
        "100 $\\Omega$, 470 $\\Omega$, 1 k$\\Omega$, 10 k$\\Omega$ (¼ W)",
      quantity: "2 each",
    },
    {
      name: "Capacitors",
      specification: "100 nF ceramic, 47 µF electrolytic",
      quantity: "2 each",
    },
    {
      name: "LED",
      specification: "Red 5 mm, $V_f \\approx 2\\,\\text{V}$",
      quantity: "2",
    },
    {
      name: "1N4148 Diode",
      specification: "Silicon signal diode",
      quantity: "2",
    },
    {
      name: "BC547 NPN Transistor",
      specification: "TO-92 package",
      quantity: "1",
    },
    {
      name: "Regulated DC Power Supply",
      specification: "0–12 V, 1 A",
      quantity: "1",
    },
    {
      name: "Digital Multimeter",
      specification: "AC/DC voltage, current, resistance",
      quantity: "1",
    },
    {
      name: "Function Generator",
      specification: "1 Hz – 1 MHz",
      quantity: "1",
    },
    {
      name: "CRO / Oscilloscope",
      specification: "20 MHz dual channel",
      quantity: "1",
    },
    {
      name: "Connecting Wires",
      specification: "M-M jumper wires",
      quantity: "1 set",
    },
  ],
};
