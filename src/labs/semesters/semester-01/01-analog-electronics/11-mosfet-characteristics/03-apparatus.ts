import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    {
      name: "Breadboard",
      specification: "830 tie-point, solderless",
      quantity: "1",
    },
    {
      name: "2N7000 N-ch MOSFET",
      specification:
        "TO-92, $V_{TH}\\approx 2\\,\\text{V}$, $I_D\\leq 200\\,\\text{mA}$",
      quantity: "1",
    },
    {
      name: "R_D Drain Resistor",
      specification: "$1\\,\\text{k}\\Omega$, ¼ W",
      quantity: "1",
    },
    {
      name: "R_pot Gate Divider",
      specification: "$10\\,\\text{k}\\Omega$ potentiometer or fixed",
      quantity: "1",
    },
    {
      name: "DC Power Supply",
      specification: "0–12 V variable, 500 mA",
      quantity: "2",
    },
    {
      name: "Digital Multimeter",
      specification: "DC voltage + DC mA",
      quantity: "2",
    },
    {
      name: "LED (yellow)",
      specification: "5 mm, $V_f \\approx 2.0\\,\\text{V}$",
      quantity: "1",
    },
    {
      name: "Jumper wires",
      specification: "Assorted colours",
      quantity: "1 set",
    },
  ],
};
