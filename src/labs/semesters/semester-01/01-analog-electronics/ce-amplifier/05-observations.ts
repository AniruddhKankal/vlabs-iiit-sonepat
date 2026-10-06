import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Transistor BC547, β ≈ 220. V_CC = 12 V. R1=100kΩ, R2=10kΩ, R_C=4.7kΩ, R_E=1kΩ.",
    "Theoretical Q-point: V_B≈1.09 V, V_E≈0.39 V, I_C≈0.39 mA, V_CE≈9.8 V.",
    "Theoretical mid-band gain: A_v = −g_m × (R_C || R_L) = −(0.39/26) × (4700 || 10000) ≈ −44 (≈ 33 dB).",
  ],
  table: {
    headers: [
      "Frequency (Hz)",
      "V_in (mV pp)",
      "V_out (mV pp)",
      "Gain A_v",
      "Gain (dB)",
    ],
    rows: [
      [100, 10, "—", "—", "—"],
      [1000, 10, "—", "—", "—"],
      [10000, 10, "—", "—", "—"],
      [100000, 10, "—", "—", "—"],
    ],
  },
};
