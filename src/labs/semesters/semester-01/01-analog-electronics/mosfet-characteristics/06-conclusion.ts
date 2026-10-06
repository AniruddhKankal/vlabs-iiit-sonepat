import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The drain and transfer characteristics of the 2N7000 N-channel enhancement MOSFET were successfully plotted. The transfer characteristic confirmed the quadratic law $I_D = K(V_{GS} - V_{TH})^2$ in saturation with threshold voltage $V_{TH} \\approx 2.0\\,\\text{V}$ and transconductance parameter $K \\approx 0.6\\,\\text{A/V}^2$, consistent with datasheet values.",
    "The output characteristics showed a clear transition from the linear (ohmic) region at low $V_{DS}$ to the saturation region where $I_D$ is nearly constant. The pinch-off locus $V_{DS} = V_{GS} - V_{TH}$ separated the two regions as predicted. Channel-length modulation was visible as a small positive slope in saturation.",
    "These characteristics underpin MOSFET applications in switching (linear region: low $r_{DS(on)}$), amplification (saturation region: high $g_m$), and current-source biasing. The near-zero gate current distinguishes the MOSFET from the BJT and enables CMOS logic with negligible static power dissipation.",
  ],
};
