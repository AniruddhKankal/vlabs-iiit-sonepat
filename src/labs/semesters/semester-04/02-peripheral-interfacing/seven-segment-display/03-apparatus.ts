import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    {
      name: "74HC4511 BCD to 7-Segment Decoder/Driver IC",
      specification: "DIP-16, for common-cathode display",
      quantity: "1",
    },
    {
      name: "Common Cathode 7-Segment Display",
      specification: "5161AS or equivalent, 0.56 inch, red",
      quantity: "1",
    },
    {
      name: "Resistor (segment current limiting)",
      specification: "330 Ω, 0.25 W (7 resistors — one per segment)",
      quantity: "7",
    },
    {
      name: "SPDT Switch / Jumper",
      specification: "BCD input (D, C, B, A)",
      quantity: "4",
    },
    {
      name: "DC Power Supply",
      specification: "5 V regulated",
      quantity: "1",
    },
    {
      name: "Bread Board",
      specification: "Full size, 830 tie-points",
      quantity: "1",
    },
    {
      name: "Connecting Wires",
      specification: "22 AWG solid-core jumper wires",
      quantity: "25",
    },
    {
      name: "Digital Multimeter",
      specification: "Voltage measurement",
      quantity: "1",
    },
  ],
};
