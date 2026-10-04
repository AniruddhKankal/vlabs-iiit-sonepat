import { type ObservationSection } from "@/labs/lab-content.types";

export const observationsInput: ObservationSection = {
  id: "observations-input",
  type: "observation",
  title: "Observations: input characteristics",
  audioPath:
    "/semesters/semester-01/01-analog-electronics-advanced/cb-transistor-characteristics/05-observation.mp3",
  paragraphs: [
    "RE = 1 kΩ. Keep VCB constant (re-trim VCC after every change of VEE). Compute IE = (VEE − VEB) / RE. Plot IE (y-axis) against VEB (x-axis) for each VCB.",
  ],
  table: {
    headers: [
      "VEE (V)",
      "VCB = 0 V: VEB (V)",
      "VCB = 0 V: IE (mA)",
      "VCB = 4 V: VEB (V)",
      "VCB = 4 V: IE (mA)",
    ],
    rows: [
      ["0.5", "", "", "", ""],
      ["1.0", "", "", "", ""],
      ["1.5", "", "", "", ""],
      ["2.0", "", "", "", ""],
      ["3.0", "", "", "", ""],
      ["5.0", "", "", "", ""],
      ["8.0", "", "", "", ""],
    ],
  },
};

export const observationsOutput: ObservationSection = {
  id: "observations-output",
  type: "observation",
  title: "Observations: output characteristics",
  audioPath:
    "/semesters/semester-01/01-analog-electronics-advanced/cb-transistor-characteristics/06-observation.mp3",
  paragraphs: [
    "RC = 100 Ω. Hold IE constant (re-trim VEE as needed). Compute IC = VRC / RC. Plot IC (y-axis) against VCB (x-axis) for each IE.",
    "Calculate ri = ΔVEB / ΔIE (VCB constant), ro = ΔVCB / ΔIC (IE constant) and α = ΔIC / ΔIE (VCB constant) from the linear portions of your graphs.",
  ],
  table: {
    headers: [
      "VCB (V)",
      "IE = 2 mA: VRC (mV)",
      "IE = 2 mA: IC (mA)",
      "IE = 4 mA: VRC (mV)",
      "IE = 4 mA: IC (mA)",
      "IE = 6 mA: VRC (mV)",
      "IE = 6 mA: IC (mA)",
    ],
    rows: [
      ["0", "", "", "", "", "", ""],
      ["0.5", "", "", "", "", "", ""],
      ["1", "", "", "", "", "", ""],
      ["2", "", "", "", "", "", ""],
      ["4", "", "", "", "", "", ""],
      ["6", "", "", "", "", "", ""],
      ["8", "", "", "", "", "", ""],
      ["10", "", "", "", "", "", ""],
    ],
  },
};
