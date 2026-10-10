import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    {
      name: "Breadboard",
      specification: "830 tie-point",
      quantity: "1",
    },
    {
      name: "BC547 NPN Transistor",
      specification: "TO-92, β ≈ 200–400",
      quantity: "1",
    },
    {
      name: "R1 Bias Resistor",
      specification: "100 kΩ, ¼ W",
      quantity: "1",
    },
    {
      name: "R2 Bias Resistor",
      specification: "10 kΩ, ¼ W",
      quantity: "1",
    },
    {
      name: "R_C Collector Resistor",
      specification: "4.7 kΩ, ¼ W",
      quantity: "1",
    },
    {
      name: "R_E Emitter Resistor",
      specification: "1 kΩ, ¼ W",
      quantity: "1",
    },
    {
      name: "C_1, C_2 Coupling Caps",
      specification: "10 µF / 25 V electrolytic",
      quantity: "2",
    },
    {
      name: "C_E Bypass Capacitor",
      specification: "47 µF / 25 V electrolytic",
      quantity: "1",
    },
    {
      name: "Load Resistor R_L",
      specification: "10 kΩ, ¼ W",
      quantity: "1",
    },
    {
      name: "Regulated DC Supply",
      specification: "+12 V, 500 mA",
      quantity: "1",
    },
    {
      name: "Function Generator",
      specification: "1 Hz – 1 MHz, sine wave",
      quantity: "1",
    },
    {
      name: "CRO / Oscilloscope",
      specification: "20 MHz dual channel",
      quantity: "1",
    },
  ],
};
