import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The complete V-I characteristic of the 1N4733A Zener diode was successfully plotted. " +
      "In **forward bias**, threshold voltage $V_f \\approx 0.64\\,\\text{V}$ was observed, consistent with silicon PN junction theory. " +
      "The dynamic resistance $r_d \\approx 26/I_{\\text{mA}}\\,\\Omega$ was verified experimentally.",

    "In **reverse bias**, the breakdown knee appeared sharply at $V_Z \\approx 5.1\\,\\text{V}$. " +
      "Beyond breakdown, $V_Z$ stayed within $\\pm 0.05\\,\\text{V}$ of 5.1 V as supply varied 6–10 V, " +
      "demonstrating the voltage-regulation property. Measured $Z_Z \\approx 7\\,\\Omega$ matched the datasheet.",

    "This experiment establishes the basis for **Zener voltage reference circuits**. " +
      "The constant-voltage breakdown property makes the Zener diode the core reference element in linear regulators " +
      "(LM317, 78xx series) where an op-amp drives a pass transistor to maintain $V_Z$ at the output.",
  ],
};
