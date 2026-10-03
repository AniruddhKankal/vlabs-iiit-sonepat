import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus",
  items: [
    { name: "NPN transistor", specification: "BC547, TO-92 (drawn on the board as two junction markers)", quantity: 1 },
    { name: "Resistor RE", specification: "1 kΩ, ¼ W", quantity: 1 },
    { name: "Resistor RC", specification: "100 Ω, ¼ W (current-sense resistor)", quantity: 1 },
    { name: "Regulated DC power supply", specification: "0–20 V (used as VEE and VCC)", quantity: 2 },
    { name: "Digital multimeter", specification: "DC volts range", quantity: 3 },
    { name: "Breadboard", specification: "830 tie-point", quantity: 1 },
    { name: "Connecting wires", quantity: 1 },
  ],
};
