import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { codeLab } from "./03-code-lab";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { procedureSteps } from "./04-procedure";

export const exp8085BcdAdditionExperiment: ExperimentDefinition = {
  id: "8085-bcd-addition",
  title: "BCD Addition using DAA Instruction",
  description:
    "Binary Coded Decimal (BCD) is a encoding where each decimal digit is represented by 4 binary bits. For example, decimal 25 is stored as 0010 0101B in packed BCD, not as 00011001B (binary 25). Packed B",
  labType: "code",
  components: [],
  sections: [aim, theory, codeLab, observations, conclusion],
  procedureSteps,
};

export const Exp8085BcdAdditionCircuit = buildCircuit(
  exp8085BcdAdditionExperiment,
);
export const Exp8085BcdAdditionContent = buildLabContent(
  exp8085BcdAdditionExperiment,
);
