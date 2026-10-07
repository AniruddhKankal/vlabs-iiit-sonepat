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
      callouts: [
        { pos: [0, 0.05, -0.8], label: "VCC (+) rail" },
        { pos: [0, 0.05, 0.8], label: "GND (−) rail" },
        { pos: [0.4, 0.05, 0], label: "Terminal strips" },
        { pos: [0, 0.05, 0], label: "Centre gap (DIP)" },
      ],
    },
    {
      name: "1N4733A Zener Diode",
      specification:
        "$V_Z = 5.1\\,\\text{V}$, $P_D = 1\\,\\text{W}$, $I_{ZM} = 200\\,\\text{mA}$",
      quantity: "1",
      callouts: [
        { pos: [-0.25, 0.3, 0], label: "Anode (A)" },
        { pos: [0.3, 0.3, 0], label: "Cathode (K) — band" },
        { pos: [0, 0.6, 0], label: "Dome body" },
        { pos: [-0.25, -0.6, 0], label: "Longer lead" },
        { pos: [0.25, -0.6, 0], label: "Shorter lead" },
      ],
    },
    {
      name: "Resistor $470\\,\\Omega$",
      specification: "¼ W, carbon film — Yellow–Violet–Brown–Gold",
      quantity: "1",
      callouts: [
        { pos: [-0.7, 0, 0], label: "Lead 1" },
        { pos: [0.7, 0, 0], label: "Lead 2" },
        { pos: [-0.28, 0.12, 0], label: "Yellow (4)" },
        { pos: [-0.1, 0.12, 0], label: "Violet (7)" },
        { pos: [0.04, 0.12, 0], label: "Brown (×10)" },
        { pos: [0.3, 0.12, 0], label: "Gold (±5%)" },
      ],
    },
    {
      name: "DC Power Supply",
      specification: "$0{-}12\\,\\text{V}$ variable, $1\\,\\text{A}$",
      quantity: "1",
      callouts: [
        { pos: [-0.4, 0.5, 0.4], label: "Voltage dial" },
        { pos: [0.3, 0.1, 0.5], label: "+V terminal (red)" },
        { pos: [0.3, -0.2, 0.5], label: "GND terminal (black)" },
      ],
    },
    {
      name: "Digital Multimeter",
      specification: "DC voltage + DC mA modes",
      quantity: "2",
      callouts: [
        { pos: [0, 0.5, 0.4], label: "Display" },
        { pos: [-0.35, -0.5, 0.4], label: "COM jack" },
        { pos: [0.35, -0.5, 0.4], label: "V/mA jack" },
      ],
    },
    {
      name: "Jumper Wires",
      specification: "Red (VCC), black (GND), orange (node), blue (V-meter)",
      quantity: "1 set",
      callouts: [
        { pos: [-0.5, 0.08, 0], label: "Ferrule end" },
        { pos: [0.5, 0.08, 0], label: "Ferrule end" },
        { pos: [0, 0.08, 0], label: "Insulated body" },
      ],
    },
  ],
};
