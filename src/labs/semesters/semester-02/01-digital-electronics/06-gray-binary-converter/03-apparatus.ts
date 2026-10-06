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
      name: "74HC86 XOR Gate IC",
      specification: "Quad 2-input XOR, DIP-14, 5 V CMOS",
      quantity: "1",
    },
    {
      name: "Red LED",
      specification: "5 mm, Vf ≈ 2.0 V (G3 output)",
      quantity: "1",
    },
    {
      name: "Yellow LED",
      specification: "5 mm, Vf ≈ 2.1 V (G2 output)",
      quantity: "1",
    },
    {
      name: "Green LED",
      specification: "5 mm, Vf ≈ 2.0 V (G1 output)",
      quantity: "1",
    },
    {
      name: "Blue LED",
      specification: "5 mm, Vf ≈ 3.0 V (G0 output)",
      quantity: "1",
    },
    {
      name: "Resistor 330 Ω",
      specification: "¼ W, carbon film",
      quantity: "4",
    },
    {
      name: "DIP Switch (4-pole)",
      specification: "For toggling binary inputs B3, B2, B1, B0",
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
