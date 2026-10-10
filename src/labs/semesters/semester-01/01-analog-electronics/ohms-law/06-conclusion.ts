import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The experiment successfully verifies Ohm's Law. " +
      "The V-I graph obtained is a straight line passing through the origin, " +
      "confirming that voltage across the resistor is directly proportional to current at constant temperature.",

    "The slope of the V-I graph gives resistance $R$. " +
      "The experimental value agrees with the nominal value within the tolerance band ($\\pm 5\\%$).",

    "Deviations are attributable to contact resistance at breadboard terminals, instrument inaccuracies, " +
      "and slight resistor heating at higher currents. " +
      "Overall the results confirm the validity of Ohm's Law for ohmic resistors.",
  ],
};
