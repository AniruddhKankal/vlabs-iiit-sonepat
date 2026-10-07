import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The common-emitter BJT amplifier was successfully assembled and characterised. The DC Q-point measured closely matched the theoretical calculations, confirming proper biasing in the active region. The 180° phase inversion between input and output — a defining characteristic of the CE configuration — was clearly observed on the oscilloscope.",
    "The mid-band voltage gain measured at 1 kHz agreed with the theoretical value within measurement error. The frequency response plot revealed the expected low-frequency roll-off (due to coupling and bypass capacitors) and the high-frequency roll-off (due to transistor junction capacitances).",
    "This experiment established the fundamentals of transistor biasing, small-signal amplification, and AC frequency response — core topics in analog electronics applicable to audio amplifiers, sensor signal conditioning, and RF circuits.",
  ],
};
