import { type LabSection } from "@/labs/lab-content.types";

export const conclusion: LabSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "For input voltages above about 6.78 V (with RL = 1 kΩ) the reverse-biased Zener diode enters breakdown and holds the output voltage at approximately its Zener voltage of 5.1 V, while a change in Vin from 8 V to 12 V produces only a very small change in Vout. Below this input, at Vin = 6 V, the diode is not conducting and the output simply follows the input through the Rs-RL divider.",
    "When the load was increased by connecting RL2 in parallel (RL = 500 Ω), the load current doubled to about 10.2 mA, the Zener current fell to about 4.65 mA, and the output voltage stayed approximately constant. Hence the Zener diode works as a simple shunt voltage regulator with good line and load regulation, provided it remains in breakdown (IZ(min) < IZ < IZ(max)).",
  ],
};
