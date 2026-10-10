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
    },
    {
      name: "74HC279 SR Latch IC",
      specification: "Quad SR latch, DIP-16, 5 V supply",
      quantity: "1",
    },
    {
      name: "Green LED",
      specification: "5 mm, Q output indicator",
      quantity: "1",
    },
    {
      name: "Resistor 330 Ω",
      specification: "¼ W, current limiter for LED",
      quantity: "1",
    },
    {
      name: "DC Power Supply",
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
