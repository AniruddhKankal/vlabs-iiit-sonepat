import { type TheorySection } from "@/labs/lab-content.types";

export const theory: TheorySection = {
  id: "theory",
  type: "text",
  title: "Theory",
  audioPath:
    "/semesters/semester-01/01-analog-electronics-advanced/cb-transistor-characteristics/02_theory_english.mp3",
  paragraphs: [
    "In the common-base (CB) configuration the base terminal is common to both the input and the output circuits. The input is applied between emitter and base (VEB, IE) and the output is taken between collector and base (VCB, IC). In the active region the emitter–base junction is forward biased and the collector–base junction is reverse biased.",
    "Current gain: the dc current gain is α = IC / IE. Because a small part of the emitter current leaves through the base (IE = IC + IB), α is slightly less than 1, typically 0.95 to 0.99. Including leakage, IC = α·IE + ICBO, where ICBO is the collector–base reverse saturation current with the emitter open.",
    "Input characteristics: a plot of IE against VEB at constant VCB. The curve looks like a forward-biased diode: IE is negligible until VEB reaches the cut-in voltage (about 0.5 V for silicon) and then rises rapidly. A larger VCB narrows the effective base width (Early effect), so the curve shifts very slightly to the left.",
    "Output characteristics: a plot of IC against VCB at constant IE. In the active region (VCB > 0) IC ≈ α·IE and is almost independent of VCB, giving nearly flat lines. In saturation the collector–base junction becomes forward biased (VCB slightly negative) and IC falls quickly to zero. In cut-off (IE = 0) only the leakage current ICBO flows.",
    "Parameters: input resistance ri = ΔVEB / ΔIE at constant VCB (typically tens of ohms); output resistance ro = ΔVCB / ΔIC at constant IE (very high, hundreds of kΩ to MΩ); ac current gain α = ΔIC / ΔIE at constant VCB.",
    "In this experiment IE is found from the drop across RE: IE = (VEE − VEB) / RE. IC is found from the drop across the sense resistor RC: IC = VRC / RC. VEB and VCB are read directly from the multimeters.",
  ],
};
