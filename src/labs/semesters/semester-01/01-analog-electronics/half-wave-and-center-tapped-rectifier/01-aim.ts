import { type TheorySection } from "@/labs/lab-content.types";

export const aim: TheorySection = {
  id: "aim",
  type: "text",
  title: "Aim",
  paragraphs: [
    "To construct and study the operation of a Half-Wave Rectifier and a Center-Tapped Full-Wave Rectifier circuit using semiconductor diodes on a breadboard.",
    "To observe and compare input and output waveforms, measure the DC output voltage ($V_{dc}$), RMS voltage ($V_{rms}$), ripple factor ($\\gamma$), and rectification efficiency ($\\eta$) for both rectifier configurations.",
    "To observe the effect of a shunt capacitor filter ($C$) connected across the load resistor ($R_L$) on the output DC voltage and ripple voltage reduction.",
  ],
};
