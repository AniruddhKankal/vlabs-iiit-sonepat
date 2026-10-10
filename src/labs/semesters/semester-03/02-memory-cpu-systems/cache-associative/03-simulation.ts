import { type SimulationSection } from "@/labs/lab-content.types";

export const simulation: SimulationSection = {
  id: "simulation",
  type: "simulation",
  title: "Simulation",
  simType: "cache-assoc",
  description:
    "Enter an 8-bit hex address (00–FF) and click ACCESS. Watch LRU orders update on every access. Evicted lines are highlighted in yellow.",
};
