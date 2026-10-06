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
      name: "74HC93 Counter IC",
      specification: "4-bit async binary counter, DIP-14, 5 V",
      quantity: "1",
    },
    {
      name: "LEDs",
      specification: "5 mm — red (QA), yellow (QB), green (QC), blue (QD)",
      quantity: "4",
    },
    {
      name: "Resistors 330 Ω",
      specification: "¼ W, ×4 — one per LED",
      quantity: "4",
    },
    {
      name: "DC Power Supply",
      specification: "+5 V DC",
      quantity: "1",
    },
    {
      name: "Clock source / Push Button",
      specification: "Manual clock pulse (press = one count)",
      quantity: "1",
    },
    {
      name: "Connecting Wires",
      specification: "M-M jumper wires",
      quantity: "1 set",
    },
  ],
};
