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
      name: "74HC08 AND Gate IC",
      specification: "Quad 2-input AND, DIP-14, 5 V supply",
      quantity: "1",
    },
    {
      name: "Green LED",
      specification: "5 mm, forward voltage ≈ 2.0 V (Sum output)",
      quantity: "1",
    },
    {
      name: "Yellow LED",
      specification: "5 mm, forward voltage ≈ 2.1 V (Carry output)",
      quantity: "1",
    },
    {
      name: "Resistor 330 Ω",
      specification: "¼ W, carbon film, current limiter for LEDs",
      quantity: "2",
    },
    {
      name: "Push Button / DIP Switch",
      specification: "For toggling logic inputs A and B",
      quantity: "2",
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
