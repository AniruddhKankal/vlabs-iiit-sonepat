import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "GPIO voltage and current measurements for output (LED) and input (switch) configurations.",
  ],
  table: {
    headers: [
      "Measurement",
      "Condition",
      "Measured Value",
      "Expected Value",
      "Within Spec?",
    ],
    rows: [
      [
        "GPIO output voltage (HIGH)",
        "LED driven, 9 mA load",
        "4.82 V",
        "≥ 4.5 V",
        "Yes",
      ],
      [
        "GPIO output voltage (LOW)",
        "LED off, 0 mA",
        "0.04 V",
        "≤ 0.1 V",
        "Yes",
      ],
      ["LED current", "330Ω, Vcc=5V, V_f=2V", "9.1 mA", "9.1 mA", "Yes"],
      [
        "Input voltage (switch pressed)",
        "Switch to Vcc, 10kΩ pull-down",
        "4.99 V",
        "≈5 V",
        "Yes",
      ],
      [
        "Input voltage (switch open)",
        "Pull-down only",
        "0.02 V",
        "≈0 V",
        "Yes",
      ],
      [
        "LED current (without resistor)",
        "DANGER test — measure first",
        ">100 mA",
        "—",
        "NO — do not do",
      ],
    ],
  },
};
