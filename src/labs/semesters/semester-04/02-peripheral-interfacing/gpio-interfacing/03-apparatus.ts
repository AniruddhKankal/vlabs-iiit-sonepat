import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    {
      name: "Microcontroller Board (or Logic Trainer)",
      specification: "Arduino Uno / ATmega328P at 5 V",
      quantity: "1",
    },
    {
      name: "LED",
      specification: "Red, 5 mm, V_f ≈ 2 V",
      quantity: "3",
    },
    {
      name: "Current Limiting Resistor",
      specification: "330 Ω, 0.25 W (for LEDs)",
      quantity: "3",
    },
    {
      name: "Pull-down Resistor",
      specification: "10 kΩ, 0.25 W (for switches)",
      quantity: "2",
    },
    {
      name: "Tactile Push-button Switch",
      specification: "Momentary SPST, 6 mm",
      quantity: "2",
    },
    {
      name: "DC Power Supply",
      specification: "5 V regulated (or USB from MCU board)",
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
      quantity: "20",
    },
    {
      name: "Digital Multimeter",
      specification: "Voltage and current measurement",
      quantity: "1",
    },
  ],
};
