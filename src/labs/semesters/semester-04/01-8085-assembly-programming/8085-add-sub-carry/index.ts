import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { codeLab } from "./03-code-lab";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { procedureSteps } from "./04-procedure";

export const exp8085AddSubCarryExperiment: ExperimentDefinition = {
  id: "8085-add-sub-carry",
  title: "Addition & Subtraction with Carry (16-bit Result)",
  description:
    "When two 8-bit numbers are added, the result can exceed 8 bits (exceed 255). In such cases the Carry flag (CY) is set and the 9th bit is lost unless we explicitly handle it. The 8085 provides ADC (Add",
  labType: "code",
  components: [],
  sections: [aim, theory, codeLab, observations, conclusion],
  procedureSteps,
};

export const Exp8085AddSubCarryCircuit = buildCircuit(
  exp8085AddSubCarryExperiment,
);
export const Exp8085AddSubCarryContent = buildLabContent(
  exp8085AddSubCarryExperiment,
);
