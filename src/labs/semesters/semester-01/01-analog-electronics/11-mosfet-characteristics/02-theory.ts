import { type TheorySection } from "@/labs/lab-content.types";

export const theory: TheorySection = {
  id: "theory",
  type: "text",
  title: "Theory",
  paragraphs: [
    "The **2N7000** is an N-channel enhancement-mode MOSFET. In the enhancement mode, the channel does **not** exist at $V_{GS} = 0$; it is created (enhanced) only when $V_{GS}$ exceeds the threshold voltage $V_{TH} \\approx 2.0\\text{–}2.5\\,\\text{V}$. Increasing $V_{GS}$ attracts electrons into the p-type substrate beneath the gate oxide, inverting it and forming an n-type conduction channel between drain and source.",
    "The device operates in two regions:$$\\text{Linear (Ohmic): } V_{DS} < V_{GS}-V_{TH} \\quad I_D = K\\bigl[2(V_{GS}-V_{TH})V_{DS} - V_{DS}^2\\bigr]$$$$\\text{Saturation: } V_{DS} \\geq V_{GS}-V_{TH} \\quad I_D = K(V_{GS}-V_{TH})^2$$where $K = \\mu_n C_{ox}(W/2L)$ is the process transconductance parameter ($K \\approx 0.6\\,\\text{A/V}^2$ for the 2N7000). The transconductance $g_m = 2K(V_{GS}-V_{TH}) = \\partial I_D/\\partial V_{GS}$ characterises the gain of MOSFET amplifier stages.",
    "The **transfer characteristic** ($I_D$ vs $V_{GS}$ at fixed $V_{DS}$) is a parabola starting at $V_{TH}$ and rising quadratically. Plotting $\\sqrt{I_D}$ vs $V_{GS}$ gives a straight line whose x-intercept is $V_{TH}$ and slope is $\\sqrt{K}$ — a convenient way to extract parameters. For the 2N7000: $V_{TH} \\approx 2\\,\\text{V}$, $I_{D,\\text{max}} \\approx 200\\,\\text{mA}$.",
    "The **drain characteristics** ($I_D$ vs $V_{DS}$ for several fixed $V_{GS}$) show a family of curves. In the linear region the MOSFET behaves as a voltage-controlled resistor $r_{DS(on)} \\approx 1/(2K(V_{GS}-V_{TH}))$; in saturation, $I_D$ is nearly independent of $V_{DS}$ (slight slope due to channel-length modulation $\\lambda$). The boundary between regions is the locus $V_{DS} = V_{GS} - V_{TH}$ (dashed pinch-off line).",
  ],
};
