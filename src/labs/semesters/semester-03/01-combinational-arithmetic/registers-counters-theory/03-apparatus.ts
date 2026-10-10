import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Related ICs for Hands-On Labs",
  items: [
    {
      name: "74HC74 D Flip-Flop",
      specification: "Dual D flip-flop, DIP-14",
      quantity: "1",
    },
    {
      name: "74HC76 JK Flip-Flop",
      specification: "Dual JK flip-flop with preset/clear, DIP-16",
      quantity: "1",
    },
    {
      name: "74HC194 Shift Register",
      specification: "4-bit bidirectional universal shift register",
      quantity: "1",
    },
    {
      name: "74HC163 Counter",
      specification: "4-bit synchronous binary counter, DIP-16",
      quantity: "1",
    },
    {
      name: "74HC273 Register",
      specification: "8-bit D register (see SIPO shift register lab)",
      quantity: "1",
    },
    {
      name: "Breadboard",
      specification: "Standard 830-tie-point solderless breadboard",
      quantity: "1",
    },
    {
      name: "Regulated DC Power Supply",
      specification: "+5 V DC, 500 mA",
      quantity: "1",
    },
  ],
};
