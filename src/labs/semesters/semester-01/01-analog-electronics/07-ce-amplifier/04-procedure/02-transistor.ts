import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Mount the BC547 transistor",
  body: "Insert the BC547 (NPN) into the breadboard so that its **Base**, **Collector** and **Emitter** pins go into columns 12, 13 and 14 respectively. Check the pin-out from the flat face of the TO-92 package before inserting.",
  show: ["bb", "q1"],
  highlight: "q1",
};
