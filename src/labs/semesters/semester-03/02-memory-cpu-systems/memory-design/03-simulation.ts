import { type SimulationSection } from "@/labs/lab-content.types";

export const simulation: SimulationSection = {
  id: "simulation",
  type: "simulation",
  title: "Simulation",
  simType: "memory",
  description:
    "Click any cell in the memory grid to select its address. Use READ and WRITE buttons to access memory. ROM cells (grey/purple) are read-only.",
};
