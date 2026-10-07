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
      name: "74HC76 JK Flip-Flop IC",
      specification: "Dual JK-FF, falling-edge, DIP-16, 5 V",
      quantity: "1",
    },
    {
      name: "Green LED",
      specification: "5 mm, Q output",
      quantity: "1",
    },
    {
      name: "Yellow LED",
      specification: "5 mm, Q_bar output",
      quantity: "1",
    },
    {
      name: "Resistor 330 Ω",
      specification: "¼ W, ×2",
      quantity: "2",
    },
    {
      name: "DC Power Supply",
      specification: "+5 V DC",
      quantity: "1",
    },
    {
      name: "Connecting Wires",
      specification: "M-M jumper wires",
      quantity: "1 set",
    },
  ],
};
