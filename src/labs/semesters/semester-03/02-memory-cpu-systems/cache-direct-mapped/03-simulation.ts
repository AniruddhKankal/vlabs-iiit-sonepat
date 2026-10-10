import { type SimulationSection } from "@/labs/lab-content.types";

export const simulation: SimulationSection = {
  id: "simulation",
  type: "simulation",
  title: "Simulation",
  simType: "cache-direct",
  description:
    "Enter a 9-bit hex address (000–1FF) and click ACCESS to simulate a cache lookup. Watch for HIT (green) or MISS (red) responses.",
};
