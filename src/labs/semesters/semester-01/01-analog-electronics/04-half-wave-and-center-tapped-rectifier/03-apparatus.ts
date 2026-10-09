import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    {
      name: "Center-Tapped Step-Down Transformer",
      specification: "230 V / 6 V – 0 – 6 V (or 9 V – 0 – 9 V), 500 mA, 50 Hz",
      quantity: "1",
    },
    {
      name: "Semiconductor Diode (1N4007)",
      specification: "General-purpose silicon rectifier, 1000 V PIV, 1 A",
      quantity: "2",
    },
    {
      name: "Load Resistor ($R_L$)",
      specification: "1 k$\\Omega$, 0.5 W, ±5% tolerance",
      quantity: "1",
    },
    {
      name: "Electrolytic Filter Capacitor ($C_1$)",
      specification: "100 $\\mu$F, 25 V working voltage",
      quantity: "1",
    },
    {
      name: "Digital Multimeter (DMM)",
      specification: "Measurement of $V_{ac}$ and $V_{dc}$",
      quantity: "1",
    },
    {
      name: "Cathode Ray Oscilloscope (CRO) / DSO",
      specification: "Dual-channel, 20 MHz with 10× probes",
      quantity: "1",
    },
    {
      name: "Solderless Breadboard",
      specification: "Full size, 830 tie-points",
      quantity: "1",
    },
    {
      name: "Connecting Wires",
      specification: "22 AWG solid-core jumper wires",
      quantity: "As required",
    },
  ],
};
