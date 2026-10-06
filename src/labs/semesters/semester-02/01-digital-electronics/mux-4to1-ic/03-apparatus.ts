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
      name: "74HC153 MUX IC",
      specification: "Dual 4:1 multiplexer, DIP-16, 5 V CMOS",
      quantity: "1",
    },
    {
      name: "Green LED",
      specification: "5 mm, Vf ≈ 2.0 V (Y output indicator)",
      quantity: "1",
    },
    {
      name: "Resistor 330 Ω",
      specification: "¼ W, carbon film, LED current limiter",
      quantity: "1",
    },
    {
      name: "DIP Switch (6-pole)",
      specification: "For toggling I0–I3 and S0, S1 inputs",
      quantity: "1",
    },
    {
      name: "Regulated DC Power Supply",
      specification: "+5 V DC, 500 mA",
      quantity: "1",
    },
    {
      name: "Digital Multimeter",
      specification: "For verifying output logic levels",
      quantity: "1",
    },
    {
      name: "Connecting Wires",
      specification: "M-M jumper wires, assorted colours",
      quantity: "1 set",
    },
  ],
};
