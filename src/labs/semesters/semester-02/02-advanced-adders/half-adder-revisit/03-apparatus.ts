import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    {
      name: "74HC86 Quad 2-input XOR IC",
      specification: "DIP-14 (Half Adder Sum path)",
      quantity: "1",
    },
    {
      name: "74HC08 Quad 2-input AND IC",
      specification: "DIP-14 (Half Adder Carry path)",
      quantity: "1",
    },
    {
      name: "Digital Oscilloscope",
      specification: "Dual-channel, ≥ 50 MHz bandwidth, 1 ns resolution",
      quantity: "1",
    },
    {
      name: "Function Generator",
      specification: "1 kHz–10 MHz square wave output",
      quantity: "1",
    },
    {
      name: "Oscilloscope Probes",
      specification: "10× probes, 10 pF tip capacitance",
      quantity: "2",
    },
    {
      name: "Variable DC Power Supply",
      specification: "2 V – 5 V selectable",
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
      name: "Bypass Capacitor",
      specification: "100 nF ceramic, placed between Vcc and GND of each IC",
      quantity: "2",
    },
  ],
};
