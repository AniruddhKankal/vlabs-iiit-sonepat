import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The Zener shunt regulator successfully maintained an output voltage of approximately 5.1 V despite variations in both input voltage (line regulation) and load current (load regulation). The regulated output remained within ±0.05 V for V_in between 6 V and 10 V with a 1 kΩ load.",
    "Line regulation was found to be excellent once the Zener entered breakdown. Load regulation was also satisfactory for load resistances down to 470 Ω, beyond which the voltage began to sag as total current exceeded the design margin.",
    "This experiment demonstrated the fundamental voltage-regulation principle using a Zener diode. While a simple shunt regulator wastes power in the series resistor, it is adequate for low-power reference applications. More efficient regulators using op-amps or dedicated IC regulators (e.g., LM7805) build on this same Zener reference concept.",
  ],
};
