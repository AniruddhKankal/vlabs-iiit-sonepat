import { type LabSection } from "@/labs/lab-content.types";

export const conclusion: LabSection = {
  id: "conclusion",
  title: "Conclusion",
  type: "conclusion",
  paragraphs: [
    "The half-wave rectifier successfully converted the AC input into a pulsating DC output, conducting only during the positive half-cycle when D1 was forward biased.",
    "Adding the filter capacitor $C_1$ in parallel with the load significantly raised the measured $V_{dc}$ and visibly reduced ripple, confirming the capacitor\u2019s charge/discharge smoothing action.",
    "The measured DC output without filtering agreed closely with the theoretical prediction $V_{dc} = V_m/\\pi$, within the expected error introduced by the diode\u2019s forward voltage drop.",
  ],
};
