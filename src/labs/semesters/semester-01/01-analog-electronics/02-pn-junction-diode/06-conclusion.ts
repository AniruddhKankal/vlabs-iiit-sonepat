import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The V-I characteristics of the 1N4148 PN junction diode were successfully plotted for both forward and reverse bias. " +
      "The forward characteristic exhibited the expected exponential rise beyond $V_{th} \\approx 0.65\\,\\text{V}$, confirming the Shockley diode equation.",

    "The dynamic resistance calculated from the forward characteristic slope agreed with the theoretical $r_d = nkT/qI$. " +
      "In reverse bias, leakage current was below DMM resolution, confirming blocking behaviour.",

    "This experiment establishes a clear understanding of diode non-linearity, threshold voltage, " +
      "and the difference between ideal and real diode behaviour — fundamentals for rectifier, clipping, and clamping circuit design.",
  ],
};
