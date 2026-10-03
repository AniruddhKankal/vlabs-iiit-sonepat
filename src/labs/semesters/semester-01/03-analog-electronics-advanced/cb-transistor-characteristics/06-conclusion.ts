import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The input characteristics of the CB configuration resemble a forward-biased p–n junction: IE is very small below about 0.5 V and rises steeply beyond it. Increasing VCB shifts the curve only slightly, so the input resistance is low (tens of ohms).",
    "The output characteristics are nearly flat in the active region, showing that IC ≈ α·IE is almost independent of VCB. The current gain α is slightly less than 1 (about 0.98–0.99), and the output resistance is very high.",
  ],
};
