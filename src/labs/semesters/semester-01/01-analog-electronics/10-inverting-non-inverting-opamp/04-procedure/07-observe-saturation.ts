import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Observe output saturation.",
  body: "With Rf = 100 kΩ still fitted, slowly increase the amplitude of the input from 1 V towards 3 V peak-to-peak while watching CH2. When the amplified peaks would exceed the output swing of the LM741, the output peaks flatten (clip) a volt or two below the supply voltages. Reduce the input amplitude to zero before the next step.",
  show: [],
};
