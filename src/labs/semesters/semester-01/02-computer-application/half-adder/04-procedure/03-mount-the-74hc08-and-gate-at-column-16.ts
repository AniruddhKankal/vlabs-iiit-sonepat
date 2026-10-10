import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Mount the 74HC08 AND gate at column 16.",
  body: "Place the 74HC08 DIP-14 IC in the same orientation, straddling the centre gap at column 16. Pins 1–7 land in rows e (columns 16–22) and pins 8–14 land in rows f (columns 22–16). This IC provides the AND function for the Carry output. Leave at least one column gap between the two ICs to avoid accidental bridging.",
  show: ["bb", "xor1", "and1"],
  highlight: "and1",
};
