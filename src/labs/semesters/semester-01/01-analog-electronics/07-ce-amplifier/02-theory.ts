import { type TheorySection } from "@/labs/lab-content.types";

export const theory: TheorySection = {
  id: "theory",
  type: "text",
  title: "Theory",
  paragraphs: [
    "In the Common Emitter (CE) configuration the emitter terminal is common to both the input (base–emitter) and the output (collector–emitter) loops. The input signal is applied between base and emitter, and the output is taken between collector and emitter. CE is the most widely used amplifier configuration because it gives both current gain and voltage gain.",
    "**Input characteristics** are plotted between the base current $I_B$ and the base–emitter voltage $V_{BE}$ while the collector–emitter voltage $V_{CE}$ is held constant. The curve resembles a forward-biased p–n junction: $I_B$ is negligible until $V_{BE}$ crosses the cut-in voltage (about 0.6 V for silicon) and then rises steeply. Increasing $V_{CE}$ shifts the curve slightly to the right because the collector-base junction becomes more reverse biased and the effective base width narrows.",
    "**Output characteristics** are plotted between the collector current $I_C$ and $V_{CE}$ while the base current $I_B$ is held constant. The family of curves has three regions: the *cut-off region* ($I_B \\approx 0$, both junctions reverse biased, $I_C \\approx I_{CEO}$), the *active region* (base-emitter forward biased, collector-base reverse biased, $I_C \\approx \\beta I_B$ and nearly flat) and the *saturation region* (both junctions forward biased, small $V_{CE}$ where $I_C$ rises sharply). The slight upward slope in the active region is due to the Early effect.",
    "**Parameters from the curves** (small-signal, at a chosen operating point):",
    "Input resistance: $h_{ie} = \\dfrac{\\Delta V_{BE}}{\\Delta I_B}\\Big|_{V_{CE}=\\text{const}}$",
    "Current gain: $h_{fe} = \\beta = \\dfrac{\\Delta I_C}{\\Delta I_B}\\Big|_{V_{CE}=\\text{const}}$",
    "Output admittance: $h_{oe} = \\dfrac{\\Delta I_C}{\\Delta V_{CE}}\\Big|_{I_B=\\text{const}}$, so output resistance $r_o = 1/h_{oe}$",
    "The terminal currents are related by $I_E = I_B + I_C$. For the BC547 the absolute maximum ratings are $V_{CEO} = 45$ V, $I_C = 100$ mA and $P_{tot} = 500$ mW, so $V_{CE}$ is kept at or below 10 V in this experiment.",
  ],
};
