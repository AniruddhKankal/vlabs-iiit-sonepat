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
      name: "74HC273 Register IC",
      specification: "8-bit D flip-flop, DIP-20, 5 V supply",
      quantity: "1",
    },
    {
      name: "LED (assorted colours)",
      specification: "5 mm LEDs for Q0–Q7 outputs",
      quantity: "8",
    },
    {
      name: "Resistor 330 Ω",
      specification: "¼ W, carbon film, current limiter per LED",
      quantity: "8",
    },
    {
      name: "Push Button",
      specification: "Momentary, for CLK input",
      quantity: "1",
    },
    {
      name: "DIP Switch (8-position)",
      specification: "For D0–D7 data inputs",
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
