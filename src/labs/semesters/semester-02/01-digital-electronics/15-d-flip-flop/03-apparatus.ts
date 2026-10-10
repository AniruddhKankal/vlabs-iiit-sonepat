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
      name: "74HC74 D Flip-Flop IC",
      specification: "Dual D-FF, rising-edge, DIP-14, 5 V",
      quantity: "1",
    },
    {
      name: "Green LED",
      specification: "5 mm, Q output indicator",
      quantity: "1",
    },
    {
      name: "Red LED",
      specification: "5 mm, Q_bar output indicator",
      quantity: "1",
    },
    {
      name: "Resistor 330 Ω",
      specification: "¼ W, ×2 — current limiters",
      quantity: "2",
    },
    {
      name: "DC Power Supply",
      specification: "+5 V DC, 500 mA",
      quantity: "1",
    },
    {
      name: "Connecting Wires",
      specification: "M-M jumper wires",
      quantity: "1 set",
    },
  ],
};
