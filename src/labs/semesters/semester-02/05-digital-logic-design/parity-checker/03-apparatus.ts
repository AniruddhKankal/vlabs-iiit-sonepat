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
      specification: "Quad 2-input XOR, DIP-14, 5 V supply",
      quantity: "1",
    },
    {
      name: "Green LED",
      specification: "5 mm, forward voltage ≈ 2.0 V (parity output)",
      quantity: "1",
    },
    {
      name: "Resistor 330 Ω",
      specification: "¼ W, carbon film, current limiter for LED",
      quantity: "1",
    },
    {
      name: "DIP Switch (4-position)",
      specification: "For toggling B3, B2, B1, B0 inputs",
      quantity: "1",
    },
    {
      name: "Regulated DC Power Supply",
      specification: "+5 V DC, 500 mA",
      quantity: "1",
    },
    {
      name: "Digital Multimeter",
      specification: "For verifying supply voltage and continuity",
      quantity: "1",
    },
    {
      name: "Connecting Wires",
      specification: "M-M jumper wires, assorted colours",
      quantity: "1 set",
    },
  ],
};
