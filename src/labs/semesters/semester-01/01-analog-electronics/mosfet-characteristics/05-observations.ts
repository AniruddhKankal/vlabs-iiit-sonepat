import { type LabSection } from "@/labs/lab-content.types";

export const observationOutput: LabSection = {
  id: "observations-output",
  type: "observation",
  title: "Observation Table 1: Drain characteristics",
  paragraphs: [
    "Drain resistor RD = 100 Ω. ID (mA) = VRD (V) / 0.1 kΩ = 10 × VRD (V). Fill ID for each VGS.",
  ],
  table: {
    headers: [
      "VDS (V)",
      "ID (mA) at VGS = 3 V",
      "ID (mA) at VGS = 4 V",
      "ID (mA) at VGS = 5 V",
    ],
    rows: [
      ["0", "", "", ""],
      ["0.25", "", "", ""],
      ["0.5", "", "", ""],
      ["1", "", "", ""],
      ["2", "", "", ""],
      ["3", "", "", ""],
      ["4", "", "", ""],
      ["6", "", "", ""],
      ["8", "", "", ""],
      ["10", "", "", ""],
    ],
  },
};

export const observationTransfer: LabSection = {
  id: "observations-transfer",
  type: "observation",
  title: "Observation Table 2: Transfer characteristics",
  paragraphs: [
    "VDS held constant at 5 V. ID (mA) = 10 × VRD (V). Compute sqrt(ID) for the threshold-voltage plot.",
  ],
  table: {
    headers: ["VGS (V)", "VRD (V)", "ID (mA)", "sqrt(ID) (mA^0.5)"],
    rows: [
      ["0.0", "", "", ""],
      ["0.5", "", "", ""],
      ["1.0", "", "", ""],
      ["1.5", "", "", ""],
      ["2.0", "", "", ""],
      ["2.5", "", "", ""],
      ["3.0", "", "", ""],
      ["3.5", "", "", ""],
      ["4.0", "", "", ""],
      ["4.5", "", "", ""],
      ["5.0", "", "", ""],
      ["5.5", "", "", ""],
      ["6.0", "", "", ""],
    ],
  },
};
