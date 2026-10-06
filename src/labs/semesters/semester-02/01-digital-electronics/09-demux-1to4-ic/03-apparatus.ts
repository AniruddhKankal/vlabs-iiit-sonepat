import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    {
      name: "Breadboard",
      specification: "Standard 830-tie-point solderless breadboard",
      quantity: "1",
    },
    {
      name: "74HC139 DEMUX IC",
      specification: "Dual 2:4 decoder/demultiplexer, DIP-16, 5 V",
      quantity: "1",
    },
    {
      name: "Red LED",
      specification: "5 mm, Vf ≈ 2.0 V (Y0 output)",
      quantity: "1",
    },
    {
      name: "Yellow LED",
      specification: "5 mm, Vf ≈ 2.1 V (Y1 output)",
      quantity: "1",
    },
    {
      name: "Green LED",
      specification: "5 mm, Vf ≈ 2.0 V (Y2 output)",
      quantity: "1",
    },
    {
      name: "Blue LED",
      specification: "5 mm, Vf ≈ 3.0 V (Y3 output)",
      quantity: "1",
    },
    {
      name: "Resistor 330 Ω",
      specification: "¼ W, carbon film",
      quantity: "4",
    },
    {
      name: "DIP Switch (2-pole)",
      specification: "For toggling select inputs A and B",
      quantity: "1",
    },
    {
      name: "Regulated DC Power Supply",
      specification: "+5 V DC, 500 mA",
      quantity: "1",
    },
    {
      name: "Connecting Wires",
      specification: "M-M jumper wires, assorted colours",
      quantity: "1 set",
    },
  ],
};
