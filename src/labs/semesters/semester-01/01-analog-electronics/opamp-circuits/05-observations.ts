import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Op-amp: LM741. $V_{CC} = \\pm 12\\,\\text{V}$. $R_{in} = 10\\,\\text{k}\\Omega$, $R_{f1} = 100\\,\\text{k}\\Omega$ (theoretical $A_v = -10$). $R_{1,ni} = 10\\,\\text{k}\\Omega$, $R_{f2} = 100\\,\\text{k}\\Omega$ (theoretical $A_v = +11$).",
    "Both op-amps powered from ±12 V. Output measured with DMM. Signal: DC.",
  ],
  table: {
    headers: [
      "$V_{in}$ (V)",
      "$V_{out}$ Inv (V)",
      "$A_v$ Inv",
      "$V_{out}$ NI (V)",
      "$A_v$ NI",
    ],
    rows: [
      ["-1.0", "+9.97", "-9.97", "-11.0", "(clipped)"],
      ["-0.5", "+4.98", "-9.96", "-5.48", "-10.96"],
      ["-0.2", "+1.99", "-9.95", "-2.19", "-10.95"],
      ["0.0", "0.00", "—", "0.00", "—"],
      ["0.2", "-1.99", "-9.95", "2.19", "+10.95"],
      ["0.5", "-4.98", "-9.96", "5.48", "+10.96"],
      ["1.0", "-9.97", "-9.97", "10.90", "+10.90"],
    ],
  },
};
