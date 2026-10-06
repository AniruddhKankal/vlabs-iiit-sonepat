import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The common-base amplifier was successfully assembled and characterised. The input characteristic confirmed exponential $I_E$–$V_{EB}$ behaviour with threshold near $0.60\\,\\text{V}$, identical to a forward-biased silicon PN junction. The measured input resistance $r_{ib} \\approx 12\\,\\Omega$ at $I_E = 2\\,\\text{mA}$ is consistent with the theoretical $r_e = V_T/I_E = 26/2 = 13\\,\\Omega$.",
    "The output characteristics showed that $I_C$ is essentially independent of $V_{CB}$ once the collector junction is reverse biased — the flat curves verify the high output impedance of the CB stage. The measured current gain $\\alpha \\approx 0.988$ closely matches the predicted value, confirming that almost all emitter current reaches the collector.",
    "Compared with the CE configuration, the CB amplifier has no phase inversion, much lower input impedance, and far higher output impedance. These properties make it particularly valuable in cascode amplifier stages, wide-band RF amplifiers, and current-mirror circuits where a well-controlled $\\alpha$ is critical.",
  ],
};
