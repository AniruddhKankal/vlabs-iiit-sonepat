import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Verify data retention",
  body: "After storing a value, change D while no rising clock edge occurs. Confirm that Q retains its previous value until the next rising edge.",
  show: [],
};
