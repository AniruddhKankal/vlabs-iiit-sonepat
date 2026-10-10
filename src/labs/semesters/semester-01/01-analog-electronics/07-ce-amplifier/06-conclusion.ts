import { type LabSection } from "@/labs/lab-content.types";

export const conclusion: LabSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The input characteristics of the CE configuration resemble a forward-biased diode: the base current is negligible below about 0.6 V and rises rapidly beyond it, and a higher $V_{CE}$ shifts the curve slightly to the right.",
    "The output characteristics show cut-off, active and saturation regions. In the active region $I_C$ is nearly independent of $V_{CE}$ and is approximately $\\beta I_B$, with a small positive slope due to the Early effect.",
    "From the curves the input resistance $h_{ie}$, current gain $h_{fe}$ and output resistance $r_o$ were calculated at the chosen operating point.",
  ],
};
