import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    {
      name: "ADC0804 IC",
      specification: "DIP-20, 8-bit SAR ADC, 0-5 V input",
      quantity: "1",
    },
    {
      name: "Potentiometer",
      specification: "10 kΩ linear, for analog input voltage source",
      quantity: "1",
    },
    {
      name: "Capacitor C_clk",
      specification: "100 pF ceramic (ADC clock oscillator)",
      quantity: "1",
    },
    {
      name: "Resistor R_clk",
      specification: "10 kΩ (ADC clock oscillator with C_clk)",
      quantity: "1",
    },
    {
      name: "Resistors for R-2R DAC (R)",
      specification: "10 kΩ, ±1%, 0.25 W",
      quantity: "4",
    },
    {
      name: "Resistors for R-2R DAC (2R)",
      specification: "20 kΩ (or two 10 kΩ in series), ±1%",
      quantity: "5",
    },
    {
      name: "LED (ADC output display)",
      specification: "5 mm red LED",
      quantity: "8",
    },
    {
      name: "Resistor (LED current limiting)",
      specification: "330 Ω, 0.25 W",
      quantity: "8",
    },
    {
      name: "SPDT Switch",
      specification: "DAC 4-bit input (D3–D0)",
      quantity: "4",
    },
    {
      name: "Digital Multimeter",
      specification: "Voltage measurement for ADC input and DAC output",
      quantity: "1",
    },
    {
      name: "DC Power Supply",
      specification: "5 V regulated, ≥ 500 mA",
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
      quantity: "40",
    },
  ],
};
