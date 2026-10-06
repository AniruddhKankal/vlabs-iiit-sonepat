import { type TheorySection } from "@/labs/lab-content.types";

export const theory: TheorySection = {
  id: "theory",
  type: "text",
  title: "Theory",
  paragraphs: [
    "A PN junction diode is formed by joining P-type (excess holes) and N-type (excess electrons) semiconductors. " +
      "At the junction, carriers recombine to form a **depletion region** with a built-in barrier of ~0.6–0.7 V for silicon.",

    "In **forward bias**, the applied voltage reduces the barrier. Above the threshold $V_{th} \\approx 0.6\\text{–}0.7\\,\\text{V}$, " +
      "current rises exponentially: $I = I_s(e^{qV/nkT} - 1)$. " +
      "In **reverse bias**, only a tiny leakage current $I_s$ flows until breakdown.",

    "The V-I characteristic has three regions: forward active (exponential rise), " +
      "reverse pre-breakdown (near-zero leakage), and reverse breakdown (sharp current rise at $V_{BR}$). " +
      "The 1N4148 has $V_{th} \\approx 0.65\\,\\text{V}$, leakage $< 25\\,\\text{nA}$, $V_{BR} = 75\\,\\text{V}$.",

    "Dynamic resistance $r_d = dV/dI = nkT/qI$ decreases as current increases. " +
      "At room temperature $kT/q \\approx 26\\,\\text{mV}$, so at $I = 1\\,\\text{mA}$, $r_d \\approx 26\\,\\Omega$.",
  ],
};
