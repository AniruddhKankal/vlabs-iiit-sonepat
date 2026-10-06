import { type TheorySection } from "@/labs/lab-content.types";

export const theory: TheorySection = {
  id: "theory",
  type: "text",
  title: "Theory",
  paragraphs: [
    "Electronic components are the building blocks of every circuit. " +
      "**Passive** components — resistors, capacitors, and inductors — do not require an external power source. " +
      "**Active** components — diodes, transistors, and ICs — control or amplify signals and require a supply voltage.",

    "A **resistor** opposes current and is characterised by its resistance in ohms ($\\Omega$). " +
      "The colour-band code encodes its value and tolerance. " +
      "A **capacitor** stores energy in an electric field; its value is in farads (F), µF, or pF. " +
      "An **inductor** stores energy in a magnetic field and is measured in henrys (H).",

    "**Diodes** allow current in one direction only — anode (+) to cathode (−, marked with a band). " +
      "An LED emits light when forward-biased. " +
      "A Zener diode operates in reverse breakdown for voltage regulation.",

    "The **breadboard** is a solderless prototyping board — holes in each terminal strip share a node " +
      "along the same column (within one half). The long rails provide VCC and GND. " +
      "Core instruments: regulated DC supply, digital multimeter (DMM), function generator, oscilloscope (CRO).",
  ],
};
