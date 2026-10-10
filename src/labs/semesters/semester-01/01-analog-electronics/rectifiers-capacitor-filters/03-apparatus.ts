import { type ApparatusSection } from "@/labs/lab-content.types";
export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    { name: "Breadboard", specification: "830 tie-point", quantity: "1" },
    {
      name: "1N4007 Rectifier Diode",
      specification: "PIV 1000 V, 1 A",
      quantity: "4",
    },
    {
      name: "Step-down Transformer",
      specification: "230 V / 9 V, 500 mA",
      quantity: "1",
    },
    {
      name: "Load Resistor $R_L$",
      specification: "1 k$\\Omega$, ¼ W",
      quantity: "1",
    },
    {
      name: "Filter Capacitors",
      specification: "10 µF, 47 µF, 220 µF, 1000 µF (25 V each)",
      quantity: "1 each",
    },
    {
      name: "CRO / Oscilloscope",
      specification: "20 MHz dual channel",
      quantity: "1",
    },
    {
      name: "Digital Multimeter",
      specification: "DC voltage measurement",
      quantity: "1",
    },
    {
      name: "Connecting Wires",
      specification: "M-M jumper wires",
      quantity: "1 set",
    },
  ],
};
