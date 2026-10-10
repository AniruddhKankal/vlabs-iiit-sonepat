import {
  type LabContent,
  type LabSection,
  type ProcedureStep,
} from "@/labs/lab-content.types";
import { type ComponentInstance, type TruthTable } from "@/labs/types";

/** Procedure step that owns both instructional copy and 3D scene state. */
export type SceneProcedureStep = ProcedureStep & { show: string[] };

export type ExperimentDefinition = {
  id: string;
  title: string;
  description: string;
  components: ComponentInstance[];
  /** Theory, apparatus, observations, conclusion — everything except procedure. */
  sections: LabSection[];
  procedureSteps: SceneProcedureStep[];
  truthTable?: TruthTable;
  labType?: LabContent["labType"];
};
