import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus",
  items: [
    {
      name: "Long breadboard",
      specification: "60-column board",
      quantity: "1",
    },
    {
      name: "DC power supply",
      specification: "+5 V regulated, if using compatible 74HC logic",
      quantity: "1",
    },
    {
      name: "AND gates",
      specification: "Two-input gate primitives for J·CLK and K·CLK",
      quantity: "2",
    },
    {
      name: "Resistors",
      specification: "330 Ω current-limiting resistor",
      quantity: "2",
    },
    {
      name: "LEDs",
      specification: "Green Q and yellow Q̅ indicators",
      quantity: "2",
    },
    {
      name: "Input jumpers",
      specification: "For J, K, T and CLK",
      quantity: "1",
    },
  ],
};
